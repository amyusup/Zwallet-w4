var response = require("../helper/res");
var db = require("../helper/db");

exports.getTransferData = (req, res) => {
  db.query(`SELECT * FROM vtransfer`, (err, result, fields) => {
    if (err) {
      console.log(err.message);
    } else {
      response.ok(result, res);
    }
  });
};

exports.getTransferBy = (req, res) => {
  const { id } = req.params;
  db.query(
    `SELECT * FROM vtransfer WHERE name LIKE '%${id}%'`,
    (err, result, fields) => {
      if (err) {
        console.log(err.message);
      } else {
        response.ok(result, res);
      }
    }
  );
};

exports.addTransferData = (req, res) => {
  const { idSender, idReceiver, amount, notes } = req.body;

  if (idSender && idReceiver && amount && notes) {
    db.query(
      `INSERT INTO transfer( idSender, idReceiver, amount, date, notes) VALUES ('${idSender}', '${idReceiver}', '${amount}', current_timestamp() , '${notes}')`,
      (err) => {
        if (err) {
          console.log(err.message);
        } else {
          response.ok("successfully add Transfer Data", res);
        }
      }
    );
  } else {
    response.validate("All fields must be filled.", res);
  }
};

exports.updateTransferUpdate = (req, res) => {
  const { id, idSender, idReceiver, amount, notes } = req.body;

  if (id && idSender && idReceiver && amount && notes) {
    db.query(
      `UPDATE transfer SET idSender = '${idSender}', idReceiver = '${idReceiver}', amount = '${amount}', date=current_timestamp(), notes='${notes}' WHERE id = ${id}`,
      (err, result, fields) => {
        if (err) {
          console.log(err.message);
        } else {
          response.ok("Successfully changed Transfer Data", res);
        }
      }
    );
  } else {
    response.validate("All fields must be filled.", res);
  }
};

exports.deleteTransferData = (req, res) => {
  const { id } = req.body;
  db.query(`DELETE FROM transfer WHERE id=${id}`, (err, result, fields) => {
    if (err) {
      console.log(err.message);
    } else {
      response.ok("Successfully delete Transfer Data", res);
    }
  });
};
