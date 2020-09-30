const express = require('express')
let router = express.Router()
var cTransfer = require("../controller/transfer");
router
    .route("/")
    .get(cTransfer.getTransferData)
    .post(cTransfer.addTransferData);

router
    .route("/update")
    .patch(cTransfer.updateTransfer)

router
    .route("/delete")
    .delete(cTransfer.deleteTransferData);

module.exports = router;