var response = require("../helper/res");
var db = require("../helper/db");

exports.getUsers = (req, res) => {
  db.query(`SELECT * FROM users`, (err, result, fields) => {
    if (err) {
      console.log(err.message);
    } else {
      response.ok(result, res);
    }
  });
};

exports.addUsers = (req, res) => {
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
    db.query(
      `INSERT INTO users( firstName, lastName, phone, email, password, balance, verified, photo, pin) VALUES ('${firstName}', '${lastName}', '${phone}', '${email}', '${password}', '${balance}', ${verified}, '${photo}', '${pin}' )`,
      (err) => {
        if (err) {
          console.log(err.message);
        } else {
          response.ok("successfully add Users Data", res);
        }
      }
    );
  } else {
    response.validate("All fields must be filled.", res);
  }
};

exports.updatUsers = (req, res) => {
  const {
    id,
    firstName,
    lastName,
    phone,
    email,
    password,
    balance,
    verified,
    photo,
    pin,
    // updateAt
  } = req.body;

  

  if (
    id &&
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
    db.query(
      `UPDATE users SET firstName = '${firstName}', lastName = '${lastName}', phone = '${phone}', email='${email}', password='${password}', balance='${balance}', verified='${verified}', photo='${phone}', pin='${pin}', updateAt=current_timestamp() WHERE id = ${id}`,
      (err, result, fields) => {
        if (err) {
          console.log(err.message);
        } else {
          response.ok("Successfully changed Users Data", res);
        }
      }
    );
  } else {
    response.validate("All fields must be filled.", res);
  }
};

exports.deleteUsers = (req, res) => {
  const { id } = req.body;
  db.query(`DELETE FROM users WHERE id=${id}`, (err, result, fields) => {
    if (err) {
      console.log(err.message);
    } else {
      response.ok("Successfully delete instructions", res);
    }
  });
};
