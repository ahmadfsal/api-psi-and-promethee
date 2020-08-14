module.exports = (app) => {
    const pengajuan = require('../controllers/pengajuan')

    let router = require('express').Router()

    router.post('/', pengajuan.create)
    router.get('/', pengajuan.findAll)
    router.get('/:id', pengajuan.findOne)
    router.put('/:id', pengajuan.update)
    router.delete('/:id', pengajuan.delete)
    router.delete('/', pengajuan.deleteAll)

    app.use('/pengajuan', router)
}
