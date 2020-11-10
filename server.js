// подключаем библиотеку для работы с http
const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {

  console.log(req.url)

  let body
  
  try {
    body = fs.readFileSync(`./public${req.url}`)
  } catch (err) {
    body = fs.readFileSync('./public/index.html')
  }

  
  res.end(body)

})

server.listen(process.env.PORT || 4000)
// Выводим в консоль, что сервер стартовал
console.log('Server started')
