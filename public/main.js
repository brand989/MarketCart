var abc = "abcdefghijklmnopqrstuvwxyz";
       
class Product {

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




class List {

    items = []

  


    add(item) {

        if (this.findProduct(item)) {
            item.inc()
        } else {
            this.items.push(item)
        }


        this.render()
    }


    findProduct(product) {
        return this.items.filter(item => item.name === product.name)[0]
    }


    remove(item) {

        if (!this.findProduct(item)) {
            return
        }


        if (item.count > 1) {
            item.dec()
        } else {
            this.items = this.items.filter(good => item.name !== good.name)
        }

        this.render()

    }

    delete(item) {

        if (!this.findProduct(item)) {
            return
        }


        this.items = this.items.filter(good => item.name !== good.name)
        this.render()
    }

    render() {

    }

}


class Cart extends List {

    constructor(items) {
        if (Cart._instance) {
            return Cart._instance
        }
        super(items)
        Cart._instance = this
    }



    render() {
        const placeToRender = document.querySelector('.cart')
        placeToRender.innerHTML = '<h1>Коризина</h1>' + this.calcSumCart()
        this.items.forEach(item => placeToRender.appendChild(item.renderCart()));

    }


    calcSumCart() {
        let sum = this.items.reduce((sum, cur) => sum + cur.price * cur.count, 0);
        const placeToRender = document.querySelector('.cart')

        return `<p>Товаров на сумму ${sum}<p>`



    }

}


class ProductList extends List {


    constructor (items) {
        super(items)
        this.addGoodsList(10)
      }


    addGoodsList(countProduct){
       
        let goods = this.fetchGoods(countProduct)
        goods = goods.map(cur => {
          return new Product(cur.name, cur.price, 1)
        })
        this.items.push(...goods)
        this.render()
    }


    fetchGoods (count) {
       
        let arr = []
        for(let i = 0; i < count; i++) {
        let nameItem = "";
        while (nameItem.length < Math.floor(Math.random()*(6-3)+3)) {
            nameItem += abc[Math.floor(Math.random() * abc.length)];
        } 
        let priceItem = Math.floor(Math.random()*(100 - 1) + 1)
        
        arr.push({name:nameItem, price:priceItem})
        }


        
        return arr

    }



    render() {
        const placeToRender = document.querySelector('.product-list')
        placeToRender.innerHTML = ''
        this.items.forEach(item => placeToRender.appendChild(item.renderMain()));
        placeToRender.appendChild(this.getAddProduct());

    }

    getAddProduct() {
        const btn = document.createElement('button')
        btn.classList.add('btn')
        btn.innerHTML = 'Еще товары'

        btn.addEventListener('click', () => {
            this.addGoodsList(2)
        })


        return btn

    }



}


const NewPproductList = new ProductList();
