module.exports = (sequelize, Sequelize) => {
    const Preferensi = sequelize.define('preferensi', {
        kategori: {
            type: Sequelize.STRING(45)
        },
        nilai: {
            type: Sequelize.INTEGER
        },
    })

    return Preferensi
}
