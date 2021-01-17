export default class Field {

    id = ''
    type = ''
    name = ''
    class = 'input'

    constructor(type, name, id) {
        this.type = type
        this.name = name
        this.id = id
        this.render()

    }

    render() {
        const input = document.createElement('input')
        input.type = this.type
        input.classList.add(this.class)
        input.id = this.id
        return input
    }

    renderName() {
        const name = document.createElement('p')
        name.innerHTML = this.name
        return name
    }

    noErorr() {
        this.class = 'erorr'
        const input = document.getElementById(this.id)
        input.classList.remove(this.class)
       
    }

    erorr() {
        this.class = 'erorr'
        const input = document.getElementById(this.id)
        input.classList.add(this.class)
       
    }

}