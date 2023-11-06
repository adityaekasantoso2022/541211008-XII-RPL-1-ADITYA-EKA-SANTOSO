const User = require('../models/User')

module.exports = {
    index: async (req, res) => {
        try {
            const users = await User.find()
            if (users.length > 0) {
                res.status(200).json({
                    status: true,
                    data: users,
                    method: req.method,
                    url: req.url
                })
            } else {
                res.json({
                    status: false,
                    message: "Data masih kosong"
                })
            }
            
        } catch (error) {
            res.status(400).json({sucess:false})
        }

    },
    store: async (req, res) => {
        try {
            const user = await User.create(req.body)
            res.status(200).json({
                status: true,
                data: user,
                method: req.method,
                url: req.url,
                message: "Data berhasil ditambahkan"
            })
    
        } catch (error) {
            res.status(400).json({sucess:false})
            
        }
    },
    update: (req, res) => {
        const id = req.params.id;
        users.forEach(user => {
            if (user.id == id) {
                user.nama = req.body.nama;
                user.email = req.body.email;
            }
        });
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message: "Data berhasil diubah"
        });
    },
    delate: (req, res) => {
        const id = req.params.id;
        users = users.filter(user => user.id != id);
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message: "Data berhasil dihapus"
        });
    }
};
