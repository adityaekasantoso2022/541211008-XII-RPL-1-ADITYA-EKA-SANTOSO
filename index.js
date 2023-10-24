const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/users', (req, res) => {
    res.send('get all users')
  })
app.post('/user', (req, res) => {
    res.send('Get a POST request')
  })

app.put('/user/:id', (req, res) => {
    res.send('Got a PUT request at /user')
  })
app.delete('/user/:id', (req, res) => {
    res.send('Got a DELETE request at /user')
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
