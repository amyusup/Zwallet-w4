const response = require("../helper/res");
const db = require("../helper/db");
const mTransfer = require("../model/transfer");

module.exports = {
  getTransferData: (req, res) => {
    mTransfer.getTransferData(db, (err, result) => {
      if (err) {
        // console.log(err.message);
        response.server("Internal server error. Try again.", res);
      } else {
        response.ok(result, res);
      }
    });
  },
  getLimitTransferData: async (req, res) => {
    const { id,limit} = req.params
    await mTransfer.getLimitTransferData(db,id, limit, (err, result) => {
      if (err) {
        console.log(err.message);
        // response.server("Internal server error. Try again.", res);
      } else {
        response.ok(result, res);
      }
    });
  },

  getTransferOrderDate: (req, res) => {
    const { id } = req.params;
    const  order  = req.query.order;
    // console.log(order)
    mTransfer.getTransferOrderDate(db, id,order, (err, result) => {
      if (err) {
        console.log(err.message);
        // response.server("Internal server error. Try again.", res);
      } else {
        response.ok(result, res);
      }
    });
  },

  addTransferData: (req, res) => {
    const { idSender, idReceiver, amount, notes } = req.body;
    // console.log(amount)
    if (idSender && idReceiver && amount && notes) {
      mTransfer.addTransferData(db, req.body, (err) => {
        if (err) {
          // console.log(err.message);
          response.server("Internal server error. Try again.", res);
        } else {
          response.createOk("successfully add Transfer Data", res);
        }
      });
    } else {
      response.client("All fields must be filled.", res);
    }
  },

  updateTransfer: (req, res) => {
    const {id}  = req.params;
    const {
      idSender = "",
      idReceiver = "",
      amount = "",
      notes = "",
    } = req.body;

    if (idSender.trim() || idReceiver.trim() || amount.trim() || notes.trim()) {
      mTransfer.getTransferWhere(db, id, (err, result, fields) => {
        if (err) {
          // console.log(err.message);
          response.server("Internal server error. Try again.", res);
        } else {
          if (result.length) {
            const data = Object.entries(req.body).map((item) => {
              return parseInt(item[1]) > 0
                ? `${item[0]}=${item[1]} `
                : `${item[0]}='${item[1]}' `;
            });

            mTransfer.updateTransfer(db, data, id, (err, result, fields) => {
              if (!result.affectedRows) {
                // console.log(err.message);
                response.client("Failed update instructions. Try again.", res);
              } else {
                response.ok("Successfully update Transfer Data", res);
              }
            });
          } else {
            response.client("ID not found. Try again", res);
          }
        }
      })
    }
  },

  deleteTransferData: (req, res) => {
    const {id}  = req.params;
    mTransfer.deleteTransferData(db, id, (err, result, fields) => {
      if (err) {
        // console.log(err.message);
        response.server("Internal server error. Try again.", res);
      } else {
        response.ok("Successfully delete Transfer Data", res);
      }
    });
  },
};
