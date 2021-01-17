import List from './list.js'
import Button from './button.js'
import UserCart from './shop.js'

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
        const body = document.querySelector('body')


        const visibleCart = () => {
            placeToRender.classList.toggle('shown')
            body.classList.toggle('back-for-form')
        }

        const buttonClose = new Button ('X', visibleCart, 'button-close-cart')

        placeToRender.innerHTML = this.calcSumCart()
        this.items.forEach(item => placeToRender.appendChild(item.renderCart()));
        
        placeToRender.insertBefore(buttonClose.render(), placeToRender.firstChild);
       
        if(this.items.length){
            const buttonBuy = new Button ('Заказать', this.buy.bind(this))
            placeToRender.appendChild(buttonBuy.render())
        }
        

    }


    calcSumCart() {
        let sum = this.items.reduce((sum, cur) => sum + cur.price * cur.count, 0);
        const placeToRender = document.querySelector('.cart-list')

        return `<p>Товаров на сумму <b>${sum}</b> руб.<p>`

    }


    init() {
        const block = document.createElement('div')
        block.classList.add('cart')
        const body = document.querySelector('body')

        const visibleCart = () => {
            list.classList.toggle('shown')
            body.classList.toggle('back-for-form')
            
        }

        const btn = new Button ( 'Корзина', visibleCart)
        block.appendChild(btn.render())

        const list = document.createElement('div')
        list.classList.add('cart-list', 'shown')

        block.appendChild(list)


        const placeToRender = document.querySelector('.header-buttons-block')

        if (placeToRender) {
            placeToRender.appendChild(block)
        }
        
        this.render()
    }


    buy(){
        this.items.forEach(item => console.log(item))
        const cart = document.querySelector('.cart-list')
        cart.innerHTML = 'Ваш заказ принят'


        const body = document.querySelector('body')


        const visibleCart = () => {
            cart.classList.toggle('shown')
            body.classList.toggle('back-for-form')
        }

        const buttonClose = new Button ('X', visibleCart, 'button-close-cart')
    
        cart.insertBefore(buttonClose.render(), cart.firstChild);
    }

}
