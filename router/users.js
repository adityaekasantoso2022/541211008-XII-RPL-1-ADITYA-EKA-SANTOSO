const express = require('express')
const router = express.Router()

let users = [
    {id: 1, nama: "Aditya", email: "aditya@gmail.com"},
    {id: 2, nama: "Eka", email: "eka@gmail.com"},

]
router.get('/users', (req, res) => {
    res.json(users)
  })
router.post('/user', (req, res) => {
    users.push(req.body)
    res.json(users)
  })

router.put('/user/:id', (req, res) => {
    const id = req.params.id
    users.filter(user => {
        if (user.id == id){
            user.nama = req.body.nama
            user.email = req.body.email
            return user
        }
    })
    res.json(users)
  })
router.delete('/user/:id', (req, res) => {
    const id = req.params.id
    users = users.filter(user => user.id !=id)

    res.json(users)
  })

  module.exports = router