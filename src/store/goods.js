const state = {
    data: {},
    itemsOnPage: [],
    itemsInCart: [],
}
  
const getters = {
    getData: state => state.data,
    getItemsOnPage: state =>state.itemsOnPage,
    getItemsInCart: state =>state.itemsInCart,
}
  
const actions = {
    requestData({ commit },page) {
        if(!page){
            return
        }

        fetch(`/database/database${page}.json`) 
        .then(res => {
            console.log(res)
            return res.json()
        })
        .then(data => {
            console.log(data)
            commit('setData', data)
        })
    },
    addInCart( {state, commit}, id ){
        commit('addInCart', id)
        
    }, 
    deleteInCart({state, commit}, id) {
        commit('deleteInCart', id)
    }

}
  
const mutations = {
    setData( state, newData) {
        for(let i in newData){
            state.data[i] = newData[i]
        }
        state.itemsOnPage.push(...Object.keys(newData).slice(0,2))
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