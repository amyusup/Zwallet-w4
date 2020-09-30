const express = require('express')
let router = express.Router()
var cWellcome = require("../controller/index");
router
    .route("/")
    .get(cWellcome.index)
module.exports = router;