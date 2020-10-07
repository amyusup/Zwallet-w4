const express = require('express')
let router = express.Router()
var cUsers = require("../controller/users");
router
    .route("/")
    .get(cUsers.getUsers)
    .post(cUsers.addUsers);
    
    router
        .route("/search")
        .get(cUsers.getUsersLike)

router    
    .route("/:id")
    .get(cUsers.getUsersWhere)
    .patch(cUsers.updateUsers)
    .delete(cUsers.deleteUsers);
    


module.exports = router;