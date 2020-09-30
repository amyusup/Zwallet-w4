const express = require('express')
let router = express.Router()
var cUsers = require("../controller/users");
router
    .route("/")
    .get(cUsers.getUsers)
    .post(cUsers.addUsers);

router
    .route("/update")
    .patch(cUsers.updateUsers)

router
    .route("/delete")
    .delete(cUsers.deleteUsers)

router
    .route("/search")
    .get(cUsers.getUsersLike)

module.exports = router;