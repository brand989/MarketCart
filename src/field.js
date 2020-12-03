export default class Field {

    id = ''
    type = ''
    name = ''

    constructor(type, name, id) {
        this.type = type
        this.name = name
        this.id = id
        this.render()

    }

    render() {
        const input = document.createElement('input')
        input.type = this.type
        input.id = this.id

        return input
    }

    renderName() {
        const name = document.createElement('p')
        name.innerHTML = this.name

        return name
    }

}