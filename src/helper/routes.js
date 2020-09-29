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

    app.route('/topup/:id')
    .patch(c_topup.updateIntructions)
    
    app.route('/topup/:id')
    .delete(c_topup.deleteIntructions)

    // USERS
    app.route('/users')
    .get(c_users.getUsers)

    app.route('/users')
    .post(c_users.addUsers)

    app.route('/users/:id')
    .patch(c_users.updateUsers)

    app.route('/users/:id')
    .delete(c_users.deleteUsers)

    // TRANSFER
    app.route('/transfer')
    .get(c_transfer.getTransferData)

    app.route('/transfer/:key')
    .get(c_transfer.getTransferLike)

    app.route('/transfer')
    .post(c_transfer.addTransferData)

    app.route('/transfer/:id')
    .patch(c_transfer.updateTransfer)

    app.route('/transfer/:id')
    .delete(c_transfer.deleteTransferData)
}