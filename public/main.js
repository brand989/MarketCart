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


                const addedPromise = new Promise(resolve => {
                     if (this.findProduct(item)) {
                        item.inc()
                    } else {
                        this.items.push(item)
                    }
                    resolve()
                    })

                addedPromise.then(this.render.bind(this))
                
           }


           findProduct(product) {
               return this.items.filter(item => item.name === product.name)[0]
           }


           remove(item) {

               if (!this.findProduct(item)) {
                   return
               }


                const addedPromise = new Promise(resolve => {
                     if (item.count > 1) {
                        item.dec()
                    } else {
                        this.items = this.items.filter(good => item.name !== good.name)
                    }

                    resolve()
                    })

                addedPromise.then(this.render.bind(this))


           }

           delete(item) {

               if (!this.findProduct(item)) {
                   return
               }

                const addedPromise = new Promise(resolve => {
                    this.items = this.items.filter(good => item.name !== good.name)
                    resolve()
                    })

                addedPromise.then(this.render.bind(this))

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
               this.init()
           }



           render() {
               const placeToRender = document.querySelector('.cart-list')
               placeToRender.innerHTML =  this.calcSumCart()
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


       class ProductList extends List {
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
                       this.hideShowMoreBtn ()
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

            hideShowMoreBtn () {
                const placeToRender = document.querySelector('.showmore')
                placeToRender.remove()
            }

         }


    const NewPproductList = new ProductList()
    const userCart = new Cart()



    class Field {

        id = ''
        type = ''
        name  = ''

        constructor(type, name, id){
            this.type = type
            this.name = name
            this.id = id
            this.render()
            
        }

        render(){
            const input = document.createElement('input')
            input.type = this.type
            input.id = this.id

            return input
        }

        renderName(){
            const name = document.createElement('p')
            name.innerHTML = this.name

            return name
        }

    }

    const name = new Field('text', 'Имя', 1)
    const nomber = new Field('text', 'Телефон', 2)
    const email = new Field('text', 'Email', 3)

    const fieldsFeedbackForm = [name, nomber, email]


class Form {

    fields = []

    constructor(fields) {
        this.fields = fields
        this.render()
    }

    render() {
        const placeToRender = document.querySelector('.feedback')

        const form = document.createElement('form')

        this.fields.forEach(field => {
            form.appendChild(field.renderName())
            form.appendChild(field.render())
            })

        const btn = document.createElement('input')
        btn.type = 'submit'
        form.appendChild(btn)

        placeToRender.appendChild(form)

        btn.addEventListener('click', () => {
                        event.preventDefault()
                        this.getData()          
                })
  
    }



    getData(){
        this.fields.forEach(field => {
        let value = document.getElementById(`${field.id}`).value

        switch (field.name) {
        case 'Имя':
            if ( /[а-яё]+|[a-z]+/.test(value)) {
                console.log(document.getElementById(`${field.id}`).value)
            } else {
                console.log(`Ошибка в ${field.name}`)
            }
            break;
        case 'Телефон':
            if ( /\+7\(\d{3}\)\d{3}-\d{3}/.test(value)) {
                console.log(document.getElementById(`${field.id}`).value)
            } else {
                console.log(`Ошибка в ${field.name}`)
            }
            break;
        case 'Email':
            if ( /\w+(\.|\-|\w)\w*@\w+\.ru/.test(value)) {
                console.log(document.getElementById(`${field.id}`).value)
            } else {
                console.log(`Ошибка в ${field.name}`)
            }
            break;
        default:
            console.log( "Нет таких значений" );
        }
   
        })
    }

}

const FeedbackForm = new Form(fieldsFeedbackForm)

