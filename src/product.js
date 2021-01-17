import Cart from './cart.js'
import Button from './button.js'

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
        <span>${name} </span> <br/>
        <span> ${price} руб. </span>
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
        item.classList.add('cart-list-item')
        item.innerHTML = `
        <span>${name} ${price}руб.  ${count}шт. </span>
        `
        item.appendChild(this.getMinusCartBtn())
        item.appendChild(this.getPlusInCartBtn())
        item.appendChild(this.getDeleteCartBtn())


        return item

    }


    getPlusInCartBtn() {

        const  addToCart = () => {
            const userCart = new Cart()
            userCart.add(this)
        }

        const btn = new Button ( '+', addToCart, 'button-cart')

        return btn.render()
    }



    getAddInCartBtn() {

        const  addToCart = () => {
            const userCart = new Cart()
            userCart.add(this)
        }

        const btn = new Button ( 'В корзину', addToCart)

        return btn.render()
    }


    inc() {
        this.count++
    }

    dec() {
        this.count--
    }



    getMinusCartBtn() {

        const  minusToCart = () => {
            const userCart = new Cart()
            userCart.remove(this)
        }

        const btn = new Button ( '-', minusToCart, 'button-cart')

        return btn.render()

    }



    getDeleteCartBtn() {

        const  deleteToCart = () => {
            const userCart = new Cart()
            userCart.delete(this)
        }

        const btn = new Button ( 'Удалить товар', deleteToCart, 'button-cart-delete')

        return btn.render()

    }
}