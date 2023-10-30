let users = [
    { id: 1, nama: "Aditya", email: "aditya@gmail.com" },
    { id: 2, nama: "Eka", email: "eka@gmail.com" }
];

module.exports = {
    index: (req, res) => {
        if (users.length > 0) {
            res.json({
                status: true,
                data: users,
                method: req.method,
                url: req.url
            });
        } else {
            res.json({
                status: false,
                message: "Data masih kosong"
            });
        }
    },
    store: (req, res) => {
        users.push(req.body);
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message: "Data berhasil ditambahkan"
        });
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
