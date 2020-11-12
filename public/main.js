class Product {

    name = ''
    price = ''
    img = ''
    count = '1'


    constructor(name, price, img) {
        this.name = name
        this.price = price
        this.img = img
    }


    renderMain() {
        const {
            name,
            price,
            img
        } = this

        let item = document.createElement('li')
        item.classList.add('product-list-element')
        item.innerHTML = `
    <img src="${img}">
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

        return item

    }


    getAddInCartBtn() {
        const btn = document.createElement('button')
        btn.classList.add('btn')
        btn.innerHTML = 'Купить'

        btn.addEventListener ('click',() => {
            const userCart = new Cart()
            userCart.add(this)
        })

        return btn
    }

    inc(){
        this.count++
    }

    dec(){
        this.count--
    }

    getMinusCartBtn(){
        const btn = document.createElement('button')
        btn.classList.add('btn')
        btn.innerHTML = '-'

        btn.addEventListener ('click',() => {
            const userCart = new Cart()
            userCart.remove(this)
        })


        return btn

    }




}




class List {

    items = []


    add(item) {

        if (this.findProduct(item)){
            item.inc()
        }else{
            this.items.push(item)
        }

        
        this.render()
    }


    findProduct(product){
        return this.items.filter(item => item.name === product.name)[0]
    }


    remove(item){

        if(!this.findProduct(item)){
            return
        }
        
        
        if(item.count > 1){
            item.dec()
        }
        else{
            this.items = this.items.filter(good => item.name !== good.name)
        }

        this.render()

    }


    render() {

    }

}


class Cart extends List {

    constructor (items) {
        if (Cart._instance) {
          return Cart._instance
        }
        super (items)
        Cart._instance = this
      }



    render() {
        const placeToRender = document.querySelector('.cart')
        placeToRender.innerHTML = '<h1>Коризина</h1>'
        this.items.forEach(item => placeToRender.appendChild(item.renderCart()));
    }



}


class ProductList extends List {

    constructor(items) {
        super(items)
    }


    render() {
        const placeToRender = document.querySelector('.product-list')
        placeToRender.innerHTML = ''
        this.items.forEach(item => placeToRender.appendChild(item.renderMain()));
    }



}


const laptop = new Product('laptop', 5000, 'img/laptop.jpg')
const tablet = new Product('tablet', 4000, 'img/tablet.jpg')

const NewPproductList = new ProductList()

NewPproductList.add(laptop)
NewPproductList.add(tablet)

