const express = require("express");
let router = express.Router();
var cTransfer = require("../controller/transfer");
router
  .route("/")
  .get(cTransfer.getTransferData)
  .post(cTransfer.addTransferData);

router
  .route("/:id")
  .get(cTransfer.getTransferOrderDate)
  .patch(cTransfer.updateTransfer)
  .delete(cTransfer.deleteTransferData);

  router
  .route("/:id/:limit")
  .get(cTransfer.getLimitTransferData)

module.exports = router;
