module.exports = (app) => {
    const statusRumah = require('../controllers/status-rumah')

    let router = require('express').Router()

    router.post('/', statusRumah.create)
    router.get('/', statusRumah.findAll)
    router.get('/:id', statusRumah.findOne)
    router.put('/:id', statusRumah.update)
    router.delete('/:id', statusRumah.delete)
    router.delete('/', statusRumah.deleteAll)

    app.use('/status-rumah', router)
}
