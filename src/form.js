import Button from './button.js'


export default class Form {

    fields = []

    constructor(fields) {
        this.fields = fields
        this.render()
        this.visible()
    }

    visible() {

        const form = document.querySelector('.feedback')
        const body = document.querySelector('body')

        const fn = () => {
            form.classList.toggle('shown')
            body.classList.toggle('back-for-form')
        }

        const button = new Button ('Перезвоните мне',fn)
        const placeToRender = document.querySelector('.header-buttons-block')
        placeToRender.appendChild(button.render())

        const buttonClose = new Button ('X',fn, 'button-close-form')
        form.appendChild(buttonClose.render())

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
        btn.classList.add('button')
        form.appendChild(btn)

        placeToRender.appendChild(form)

        btn.addEventListener('click', () => {
                event.preventDefault()
                this.getData()          
            })
       
    }



    getData(){

        const countField = this.fields.length
        let correctlyField = 0

        this.fields.forEach(field => {
        let value = document.getElementById(`${field.id}`).value


        switch (field.name) {
            case 'Имя':
                if ( /[а-яё]+|[a-z]+/.test(value)) {
                    console.log(document.getElementById(`${field.id}`).value)
                    field.noErorr()
                    correctlyField++
                } else {
                    field.erorr()
                    console.log(`Ошибка в ${field.name}`)
                }
                break;
            case 'Телефон':
                if ( /\+7\(\d{3}\)\d{7}/.test(value)) {
                    console.log(document.getElementById(`${field.id}`).value)
                    field.noErorr()
                    correctlyField++
                } else {
                    field.erorr()
                    console.log(`Ошибка в ${field.name}`)
                }
                break;
            case 'Email':
                if ( /\w+(\.|\-|\w)\w*@\w+\.ru/.test(value)) {
                    console.log(document.getElementById(`${field.id}`).value)
                    field.noErorr()
                    correctlyField++
                } else {
                    field.erorr()
                    console.log(`Ошибка в ${field.name}`)
                }
                break;
            
            default:
                console.log( "Нет таких значений" );
            }
   
        })

        if (correctlyField === countField) {
            const feedback = document.querySelector('form')
            feedback.innerHTML = 'Ваша заявка отправлена'
        }
        
    }

}