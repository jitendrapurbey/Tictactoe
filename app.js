const express = require('express')
const bodyParser = require('body-parser')
const check = require('./backend/main');

const app = express()
const port = 3000

app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies


// this serve static files
app.use(express.static('frontend'))

// home page for the game tic tac toe
app.get('/', (req, res) => {
  res.sendFile("frontend/index.html")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// api to check the winner
app.post('/api/check', (req, res) => {
  console.log("hello")
  // var user_id = req.body.id;
  // var token = req.body.token;
  // var geo = req.body.geo;
  var board = req.body.board
  var available = req.body.available
  var result = check.checkwinner(board, available)
  console.log(result)
  // console.log(board)
  // console.log("....................")
  // console.log(available)
  status_code = res.statusCode
  console.log(status_code)
  if (status_code == 200) {
    res.send({
      "status": true,
      "message": result
    })
  } else {
    res.send({
      "status": false,
      "message":"error occurred"
    })
  }  
})


