const express = require("express");
let router = express.Router();
var cTopup = require("../controller/topup");
router.route("/").get(cTopup.getInstructions).post(cTopup.addInstructions);

router
  .route("/:id")
  .patch(cTopup.updateIntructions)
  .delete(cTopup.deleteIntructions);

module.exports = router;
