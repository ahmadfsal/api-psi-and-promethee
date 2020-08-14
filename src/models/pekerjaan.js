module.exports = (sequelize, Sequelize) => {
    const Pekerjaan = sequelize.define('pekerjaan', {
        sub_kriteria: {
            type: Sequelize.STRING(45)
        },
        bobot: {
            type: Sequelize.INTEGER
        },
    })

    return Pekerjaan
}
