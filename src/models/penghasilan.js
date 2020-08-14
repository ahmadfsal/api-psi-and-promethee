module.exports = (sequelize, Sequelize) => {
    const Penghasilan = sequelize.define('penghasilan', {
        sub_kriteria: {
            type: Sequelize.STRING(45)
        },
        bobot: {
            type: Sequelize.INTEGER
        },
    })

    return Penghasilan
}
