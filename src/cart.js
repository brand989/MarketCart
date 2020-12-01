import List from './list.js'


export default class Cart extends List {

    constructor(items) {
        if (Cart._instance) {
            return Cart._instance
        }
        super(items)
        Cart._instance = this
        this.init()
    }



    render() {
        const placeToRender = document.querySelector('.cart-list')
        placeToRender.innerHTML = this.calcSumCart()
        this.items.forEach(item => placeToRender.appendChild(item.renderCart()));

    }


    calcSumCart() {
        let sum = this.items.reduce((sum, cur) => sum + cur.price * cur.count, 0);
        const placeToRender = document.querySelector('.cart-list')

        return `<p>Товаров на сумму ${sum}<p>`

    }


    init() {
        const block = document.createElement('div')
        block.classList.add('cart')

        const btn = document.createElement('button')
        btn.classList.add('btn')
        btn.innerHTML = 'Корзина'

        btn.addEventListener('click', () => {
            list.classList.toggle('shown')
        })

        block.appendChild(btn)

        const list = document.createElement('div')
        list.classList.add('cart-list', 'shown')
        block.appendChild(list)

        const placeToRender = document.querySelector('header')
        if (placeToRender) {
            placeToRender.appendChild(block)
        }

        this.render()

    }


}
