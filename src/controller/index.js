const response = require("../helper/res");
const db = require("../helper/db");
const mUsers = require("../model/users");

module.exports ={

    getUsersWhere: (req, res) => {
        const {id} = req.params
        mUsers.getUsersWhere(db, id, (err, result, fields) => {
          if (err) {
            // console.log(err.message);
            response.server("Internal server error. Try again.", res)
          } else {
            response.ok(result, res);
          }
        });
      },
}