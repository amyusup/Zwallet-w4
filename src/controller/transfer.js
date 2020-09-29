const response = require("../helper/res");
const db = require("../helper/db");
const mTransfer = require("../model/transfer");

module.exports = {
  getTransferData: (req, res) => {
    mTransfer.getTransferData(db, (err, result) => {
      if (err) {
        console.log(err.message);
      } else {
        response.ok(result, res);
      }
    });
  },

  getTransferLike: (req, res) => {
    const {
      key
    } = req.params;
    mTransfer.getTransferLike(db, key, (err, result) => {
      if (err) {
        console.log(err.message);
      } else {
        response.ok(result, res);
      }
    });
  },

  addTransferData: (req, res) => {
    const {
      idSender,
      idReceiver,
      amount,
      notes
    } = req.body;

    if (idSender && idReceiver && amount && notes) {
      mTransfer.addTransferData(db, req.body, (err) => {
        if (err) {
          console.log(err.message);
        } else {
          response.ok("successfully add Transfer Data", res);
        }
      });
    } else {
      response.validate("All fields must be filled.", res);
    }
  },

  updateTransfer: (req, res) => {
    const {
      id
    } = req.params;
    const {
      idSender = "",
        idReceiver = "",
        amount = "",
        notes = "",
    } = req.body;

    if (idSender.trim() || idReceiver.trim() || amount.trim() || notes.trim()) {
      mTransfer.getTransferWhere(db, id, (err, result, fields) => {

        if (err) {
          console.log(err.message);
        } else {
          if (result.length) {
            const data = Object.entries(req.body).map((item) => {
              return parseInt(item[1]) > 0 ?
                `${item[0]}=${item[1]} ` :
                `${item[0]}='${item[1]}' `;
            });

            mTransfer.updateTransfer(db, data, id, (err, result, fields) => {
              if (!result.affectedRows) {
                console.log(err.message);
              } else {
                response.ok("Successfully update Transfer Data", res);
              }
            });
          }
        }
      });
    } else {
      response.validate("All fields must be filled.", res);
    }
  },

  deleteTransferData: (req, res) => {
    const {
      id
    } = req.params;
    mTransfer.deleteTransferData(db,id, (err, result, fields) => {
      if (err) {
        console.log(err.message);
      } else {
        response.ok("Successfully delete Transfer Data", res);
      }
    });
  },
}