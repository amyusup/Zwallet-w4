const express = require('express')
let router = express.Router()
var cWellcome = require("../controller/index");
router
    .route("/home/:id")
    .get(cWellcome.getUsersWhere)
module.exports = router;