module.exports = (app) => {
    const statusSiswa = require('../controllers/status-siswa')

    let router = require('express').Router()

    router.post('/', statusSiswa.create)
    router.get('/', statusSiswa.findAll)
    router.get('/:id', statusSiswa.findOne)
    router.put('/:id', statusSiswa.update)
    router.delete('/:id', statusSiswa.delete)
    router.delete('/', statusSiswa.deleteAll)

    app.use('/status-siswa', router)
}
