module.exports = (sequelize, Sequelize) => {
    const Pengajuan = sequelize.define('pengajuan', {
        nisn: {
            type: Sequelize.STRING(45)
        },
        kelas: {
            type: Sequelize.STRING(45)
        },
        alternatif: {
            type: Sequelize.STRING(45)
        },
        pekerjaan: {
            type: Sequelize.STRING(45)
        },
        penghasilan: {
            type: Sequelize.STRING(45)
        },
        status_rumah: {
            type: Sequelize.STRING(45)
        },
        status_siswa: {
            type: Sequelize.STRING(45)
        },
    })

    return Pengajuan
}
