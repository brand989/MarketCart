import Cart from './cart.js'


export default class Product {

    name = ''
    price = ''
    count = '1'


    constructor(name, price) {
        this.name = name
        this.price = price
    }


    renderMain() {
        const {
            name,
            price
        } = this


        let item = document.createElement('li')
        item.classList.add('product-list-element')
        item.innerHTML = `
        <span>${name} ${price} руб. </span>
    `
        item.appendChild(this.getAddInCartBtn())

        return item

    }


    renderCart() {
        const {
            name,
            price,
            count
        } = this

        let item = document.createElement('div')
        item.classList.add('cart-list')
        item.innerHTML = `
        <span>${name} ${price} руб.${count}шт. </span>
        `
        item.appendChild(this.getMinusCartBtn())
        item.appendChild(this.getAddInCartBtn())
        item.appendChild(this.getDeleteCartBtn())


        return item

    }


    getAddInCartBtn() {
        const btn = document.createElement('button')
        btn.classList.add('btn')

        btn.innerHTML = '+'

        btn.addEventListener('click', () => {
            const userCart = new Cart()
            userCart.add(this)
        })

        return btn
    }

    inc() {
        this.count++
    }

    dec() {
        this.count--
    }

    getMinusCartBtn() {
        const btn = document.createElement('button')
        btn.classList.add('btn')
        btn.innerHTML = '-'


        btn.addEventListener('click', () => {
            const userCart = new Cart()
            userCart.remove(this)
        })

        return btn

    }

    getDeleteCartBtn() {
        const btn = document.createElement('button')
        btn.classList.add('btn')
        btn.innerHTML = 'Удалить из корзины'

        btn.addEventListener('click', () => {
            const userCart = new Cart()
            userCart.delete(this)
        })

        return btn
    }
}