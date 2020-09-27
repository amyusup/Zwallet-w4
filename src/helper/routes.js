module.exports = (app) => {
    var c_wellcome = require('../controller/index')
    var c_topup = require('../controller/topup')
    var c_users = require('../controller/users')
    var c_transfer = require('../controller/transfer')

    // WELLCOME PAGE
    app.route('/')
    .get(c_wellcome.index)

    // TOP UP
    app.route('/topup')
    .get(c_topup.getInstructions)

    app.route('/topup')
    .post(c_topup.addInstructions)

    app.route('/topup')
    .put(c_topup.updateIntructions)
    
    app.route('/topup')
    .delete(c_topup.deleteIntructions)

    // USERS
    app.route('/users')
    .get(c_users.getUsers)

    app.route('/users')
    .post(c_users.addUsers)

    app.route('/u   sers')
    .put(c_users.updatUsers)

    app.route('/users')
    .delete(c_users.deleteUsers)

    // TRANSFER
    app.route('/transfer')
    .get(c_transfer.getTransferData)

    app.route('/transfer/:id')
    .get(c_transfer.getTransferBy)

    app.route('/transfer')
    .post(c_transfer.addTransferData)

    app.route('/transfer')
    .put(c_transfer.updateTransferUpdate)

    app.route('/transfer')
    .delete(c_transfer.deleteTransferData)
}