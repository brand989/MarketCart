export default class List {

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
