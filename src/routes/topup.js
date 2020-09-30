const express = require('express')
let router = express.Router()
var cTopup = require("../controller/topup");
router
    .route("/")
    .get(cTopup.getInstructions)
    .post(cTopup.addInstructions);

router
    .route("/update")
    .patch(cTopup.updateIntructions)

router
    .route("/delete")
    .delete(cTopup.deleteIntructions);

module.exports = router;