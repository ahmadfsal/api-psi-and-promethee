module.exports = (app) => {
    const penghasilan = require('../controllers/penghasilan')

    let router = require('express').Router()

    router.post('/', penghasilan.create)
    router.get('/', penghasilan.findAll)
    router.get('/:id', penghasilan.findOne)
    router.put('/:id', penghasilan.update)
    router.delete('/:id', penghasilan.delete)
    router.delete('/', penghasilan.deleteAll)

    app.use('/penghasilan', router)
}
