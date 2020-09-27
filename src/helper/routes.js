module.exports = (app) => {
    var c_wellcome = require('../controller/index')
    var c_topup = require('../controller/topup')
    var c_users = require('../controller/users')

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
}