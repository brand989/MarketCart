const state = {
    data: {},
    itemsOnPage: [],
    itemsInCart: [],
    itemsInCartForServer: [],
}
  
const getters = {
    getData: state => state.data,
    getItemsOnPage: state => state.itemsOnPage,
    getItemsInCart: state => state.itemsInCart,
    getItemsInCartForServer: state => state.itemsInCartForServer,
}
  
const actions = {
    requestData({ commit }, page) {
        if(!page){
            return
        }

        fetch(`/itemslist/${page}`, {
            method: 'GET'
        }) 
        .then(res => {
            return res.json()
        })
        .then(data => {
            commit('setData', data)
        })
    },
    addInCart( {state, commit}, id ){
        commit('addInCart', id)
        
    }, 
    deleteInCart({state, commit}, id) {
        commit('deleteInCart', id)
    }, 
    addItem( { state, commit }, data ) {

        fetch('/itemslist/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then ( res => {
            console.log(res)
        })

    },
    sendCartToServer( { state, commit }, data){
        console.log( data )
        fetch('/cartlist/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then ( res => {
            console.log(res)
        })
    },
    getItemsOutCart({ state, commit }) {
       
        fetch('/cartlist/', {
            method: 'GET'
        }) 
        .then(res => {
            return res.json()
        })
        .then(data => {
            commit('setInCart', data)
            
        })
    }

}
  
const mutations = {
    setData( state, newData) {
        
        state.data = {...state.data, ...newData} 
        state.itemsOnPage.push(...Object.keys(newData))
    },
    setInCart(state, newData){
        state.itemsInCartForServer = newData
    },
    addInCart( state, id ){

        if(state.itemsInCart.find(item => item.id === id)){
            state.itemsInCart.map(item => {
                if (item.id === id){
                    item.count++
                }
            })
        } else {
            state.itemsInCart.push({"id":id,"count":1})
        }

    },
    deleteInCart(state, id ){

        state.itemsInCart.map((item, index) => {
            if (item.id === id){
                if(item.count > 1) {
                    item.count--
                }else{
                    state.itemsInCart.splice(index,1)
                } 
            }
        })

    }
}
  
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,

}