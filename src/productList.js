import List from './list.js'
import Product from './product.js'



export default class ProductList extends List {
    _pageCounter = 1

    constructor(items) {
        super(items)
        let goodsPromise = this.fetchGoods()
        goodsPromise.then(() => {
            this.render()
        })
        this.initShowMoreBtn()

    }



    fetchGoods() {

        const result = fetch(`/database${this._pageCounter}.json`)
        this._pageCounter++
        return result

            .then(result => {
                return result.json()
            })


            .then(data => {

                let goods = data.data.map(cur => {
                    return new Product(cur.name, cur.price, 1)
                })
                this.items.push(...goods)
            })

            .catch(e => {
                this.hideShowMoreBtn()
                console.log(e)

            })

    }



    render() {
        const placeToRender = document.querySelector('.product-list')
        placeToRender.innerHTML = ''
        this.items.forEach(item => placeToRender.appendChild(item.renderMain()));

    }



    initShowMoreBtn() {
        const placeToRender = document.querySelector('.showmore')
        const btn = document.createElement('button')
        btn.classList.add('btn')
        btn.innerHTML = 'Еще товары'


        btn.addEventListener('click', () => {
            let goodsPromise = this.fetchGoods()
            goodsPromise.then(() => {
                this.render()
            })

        },
            error => {
                alert("упс" + error);
            })

        placeToRender.appendChild(btn)
    }

    hideShowMoreBtn() {
        const placeToRender = document.querySelector('.showmore')
        placeToRender.remove()
    }

}