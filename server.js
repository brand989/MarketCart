// подключаем библиотеку для работы с http
// const http = require('http')
// const fs = require('fs')
// const server = http.createServer((req, res) => {

//   console.log(req.url)

//   let body
  
//   try {
//     body = fs.readFileSync(`./public${req.url}`)
//   } catch (err) {
//     body = fs.readFileSync('./public/index.html')
//   }

  
//   res.send(body)

// })

// server.listen(process.env.PORT || 8080)
// // Выводим в консоль, что сервер стартовал
// console.log('Server started')


const express = require('express')
const fs = require('fs') 
const app = express()
const bodyParser = require('body-parser')
let port = process.env.PORT || 2000

app.use(express.static('./public'))
app.use(bodyParser.json())

app.listen(port , () => {
  console.log("Server started")
})



app.get('/itemslist/:page', (req, res) => {
  const number = req.params.page
  fs.readFile(`./public/database/database${number}.json`, 'utf8', (err, data) => {
    console.log(err)
    res.send(data)
  })
})

app.post('/itemslist', ( req, res) => {
  // 1) Прочитать существующий файл page3.json
  // 2) Узнать, какой ID был последним
  // 3) Создать объект с новым ID и с данными, пришедшими от клиента
  // 4) Записать обновленный JSON в файл
  // 5) Отдать результат обратно клиенту
  const filePath = './public/database/database3.json'

  fs.readFile(filePath, 'utf8', (err, data) => {
    const offset = 10
    const list = JSON.parse(data || "{}")
    const amountOfData = Object.keys(list).length
    const newID = offset + amountOfData + 1
    const newItem = req.body
    console.log(newItem)
    newItem.id = newID
    list[newItem.id] = newItem

    fs.writeFile(filePath, JSON.stringify(list), (err) => {
      if(err) {
        console.log(err)
      }
      res.send(list)
    } )
  })
})

app.post('/cartlist', ( req, res) => {

  const filePath = './public/database/datacart.json'

  fs.readFile(filePath, 'utf8', (err, data) => {
   
    const list = JSON.parse(data || "{}")
    const newItem = req.body
    console.log(newItem)
    const amountOfData = Object.keys(list).length
    const newID = amountOfData + 1
    list[newID] = newItem
    

    fs.writeFile(filePath, JSON.stringify(list), (err) => {
      if(err) {
        console.log(err)
      }
      res.send(list)
    } )
  })

})

app.get('/cartlist', (req, res) => {
  
  fs.readFile(`./public/database/datacart.json`, 'utf8', (err, data) => {
    console.log(err)
    res.send(data)
  })
})