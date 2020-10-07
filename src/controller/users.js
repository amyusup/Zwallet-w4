const response = require("../helper/res");
const db = require("../helper/db");
const mUsers = require("../model/users");

module.exports = {
  getUsers: (req, res) => {
    mUsers.getUsers(db, (err, result, fields) => {
      if (err) {
        // console.log(err.message);
        response.server("Internal server error. Try again.", res)
      } else {
        response.ok(result, res);
      }
    });
  },

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

  getUsersLike: (req, res) => {
    const key = req.query.name;
    mUsers.getUsersLike(db, key, (err, result) => {
      if (err) {
        // console.log(err.message);
        response.server("Internal server error. Try again.", res);
      } else {
        response.ok(result, res);
      }
    });
  },

  addUsers: (req, res) => {
    const {
      firstName,
      lastName,
      phone,
      email,
      password,
      balance,
      verified,
      photo,
      pin,
    } = req.body;

    if (
      firstName &&
      lastName &&
      phone &&
      email &&
      password &&
      balance &&
      verified &&
      photo &&
      pin
    ) {
      mUsers.addUsers(db, req.body, (err) => {
        if (err) {
          // console.log(err.message);
          response.server("Internal server error. Try again.", res)
        } else {
          response.createOk("successfully add Users Data", res);
        }
      });
    } else {
      response.server("All fields must be filled.", res);
    }
  },

  updateUsers: (req, res) => {
    const {id}  = req.params;
    console.log(id)
    const {
      firstName="",
      lastName="",
      phone="",
      email="",
      password="",
      balance="",
      verified="",
      photo="",
      pin="",
      // updateAt
    } = req.body;

    if (
      firstName.trim() ||
      lastName.trim() ||
      phone.trim() ||
      email.trim() ||
      password.trim() ||
      balance.trim() ||
      verified.trim() ||
      photo.trim() ||
      pin
    ) {
      mUsers.getUsersWhere(db, id, (err, result, fields) => {
       
        if (err) {
          // console.log(err.message);
          response.server("Internal server error. Try again.", res)
        } else {
          if (result.length) {
            const data = Object.entries(req.body).map((item) => {
              return parseInt(item[1]) > 0
                ? `${item[0]}=${item[1]} `
                : `${item[0]}='${item[1]}' `;
            });

            mUsers.updateUsers(db, data, id, (err, result, fields) => {
              if (!result.affectedRows) {
                // console.log(err.message);
                response.client("Failed update instructions. Try again.",res);
              } else {
                response.ok("Successfully update users", res);
              }
            });
          }else{
            response.client("ID not found. Try again",res)
          }
        }
      })
    }
  },

  deleteUsers: (req, res) => {
    const  {id}  = req.params;
   mUsers.deleteUsers(db,id, (err) => {
      if (err) {
        // console.log(err.message);
        response.server("Internal server error. Try again.", res)
      } else {
        response.ok("Successfully delete Users", res);
      }
    })
  }
}
