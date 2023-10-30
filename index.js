const express = require('express')
const app = express()
const userrouter = require('./router/users')
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(userrouter)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
