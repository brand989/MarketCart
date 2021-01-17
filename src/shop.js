import Form from './form.js'
import ProductList from './productList.js'
import Cart from './cart.js'

import Field from './field.js'


import './style.scss'


const NewPproductList = new ProductList()
const UserCart = new Cart()


const name = new Field('text', 'Имя', 1)
const nomber = new Field('text', 'Телефон', 2)
const email = new Field('text', 'Email', 3)

const FeedbackForm = new Form([name, nomber, email])







