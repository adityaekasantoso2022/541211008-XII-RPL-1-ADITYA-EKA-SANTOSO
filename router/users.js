const express = require('express')
const router = express.Router()

let users = [
    {id: 1, nama: "Aditya", email: "aditya@gmail.com"},
    {id: 2, nama: "Eka", email: "eka@gmail.com"},

]
router.get('/users', (req, res) => {
    if (users.length > 0){
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url
        })
    }else{
        res.json({
            status: false,
            maessage: "Data masih kosong"
        })
    }
  })
router.post('/user', (req, res) => {
    users.push(req.body)
    res.json({
        status: true,
        data: users,
        method: req.method,
        url: req.url,
        maessage: "Data berhasil ditemukan"
    })
    
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
    res.json({
        status: true,
        data: users,
        method: req.method,
        url: req.url,
        maessage: "Data berhasil diubah"
    })
  })
router.delete('/user/:id', (req, res) => {
    const id = req.params.id
    users = users.filter(user => user.id !=id)

    res.json({
        status: true,
        data: users,
        method: req.method,
        url: req.url,
        maessage: "Data berhasil dihapus"
    })
  })

  module.exports = router