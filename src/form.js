export default class Form {

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