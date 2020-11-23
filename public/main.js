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

               let promise = new Promise((resolve, reject) => {

                   btn.addEventListener('click', () => {
                       const userCart = new Cart()
                       userCart.add(this)
                       resolve("товар добавлен в корзину");
                   })
               });

               promise
                   .then(
                       result => {
                           console.log(result);
                       },
                       error => {
                           alert("упс" + error);
                       }
                   );

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

               let promise = new Promise((resolve, reject) => {

                   btn.addEventListener('click', () => {
                       const userCart = new Cart()
                       userCart.remove(this)
                       resolve(" уменьшили количество товаров в корзине");
                   })
               });

               promise
                   .then(
                       result => {
                           console.log(result);
                       },
                       error => {
                           alert("упс" + error);
                       }
                   );



               return btn

           }

           getDeleteCartBtn() {
               const btn = document.createElement('button')
               btn.classList.add('btn')
               btn.innerHTML = 'Удалить из корзины'

               let promise = new Promise((resolve, reject) => {

                   btn.addEventListener('click', () => {
                       const userCart = new Cart()
                       userCart.delete(this)
                       resolve(" удален товар из корзины");
                   })
               });

               promise
                   .then(
                       result => {
                           console.log(result);
                       },
                       error => {
                           alert("упс" + error);
                       }
                   );

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


           constructor(items) {
               super(items)
               let goodsPromise = this.fetchGoods('http://localhost:4000/database.json')
               goodsPromise.then(() => {
                   this.render()
               })
           }



           fetchGoods(url) {

               const result = fetch(url)
               return result

                   .then(result => {
                       return result.json()
                   })


                   .then(data => {
                       console.log(data)
                       let goods = data.data.map(cur => {
                           return new Product(cur.name, cur.price, 1)
                       })
                       this.items.push(...goods)
                   })

                   .catch(e => {
                       console.log(e)
                   })

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

               var i = 1;

               let promise = new Promise((resolve, reject) => {

                    btn.addEventListener('click', () => {
                        resolve(i++);

                    })
                });

                promise.then(result => {
                            let goodsPromise = this.fetchGoods(`http://localhost:4000/database1.json`)
                            goodsPromise.then(() => {
                                this.render()
                            })
                            console.log(result);
                        },
                        error => {
                            alert("упс" + error);
                        }
                    );



            return btn

           }



       }


       const NewPproductList = new ProductList();