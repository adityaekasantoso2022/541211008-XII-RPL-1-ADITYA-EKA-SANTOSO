const express = require('express');
const router = express.Router();
const userController = require('../controllers/user'); // Pastikan nama file dan path-nya sesuai

router.get('/users', userController.index);

router.post('/user', userController.store);

router.put('/user/:id',userController.update );

router.delete('/user/:id',userController.delate );

module.exports = router;
