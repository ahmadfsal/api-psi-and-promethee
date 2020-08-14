module.exports = (app) => {
    const preferensi = require('../controllers/preferensi')

    let router = require('express').Router()

    router.post('/', preferensi.create)
    router.get('/', preferensi.findAll)
    router.get('/:id', preferensi.findOne)
    router.put('/:id', preferensi.update)
    router.delete('/:id', preferensi.delete)
    router.delete('/', preferensi.deleteAll)

    app.use('/preferensi', router)
}
