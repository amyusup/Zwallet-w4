const response = require("../helper/res");
const db = require("../helper/db");
const mTopup = require("../model/topup");

module.exports = {
  getInstructions: (req, res) => {
    // db.query(`SELECT * FROM topup`, (err, result, fields) => {
    //   if (err) {
    //     console.log(err.message);
    //   } else {
    //     response.ok(result, res);
    //   }
    // });
    mTopup.getInstructions(db, (err, result, fields) => {
      if (err) {
        console.log(err.message);
      } else {
        response.ok(result, res);
      }
    });
  },

  addInstructions: (req, res) => {
    const {
      step,
      instructions
    } = req.body;
    if (step && instructions) {
      mTopup.addInstructions(db, req.body, (err, result, fields) => {
        if (err) {
          console.log(err.message);
        } else {
          response.ok("successfully add instruction", res);
        }
      });
    } else {
      response.validate("All fields must be filled.", res);
    }
  },

  updateIntructions: (req, res) => {
    const {
      step="",
      instructions=""
    } = req.body;
    const {
      id
    } = req.params

    if (id.trim() || step.trim() || instructions.trim()) {
      mTopup.getInstructionsWhere(db, id, (err, result, fields) => {
        if (err) {
          console.log(err.message)
        } else {
          if (result.length) {
            const data = Object.entries(req.body).map((item) => {
              return parseInt(item[1]) > 0 ?
                `${item[0]}=${item[1]} ` :
                `${item[0]}='${item[1]}' `;
            });

            mTopup.updateIntructions(db, data, id, (err, result, fields) => {
              if (!result.affectedRows) {
                console.log(err.message)
              } else {
                response.ok("Successfully update instructions", res)
              }
            })
          }
        }
      })
    }
  },

  deleteIntructions: (req, res) => {
    const {
      id
    } = req.params;
    mTopup.deleteIntructions(db,id, (err, result, fields) => {
      if (err) {
        console.log(err.message);
      } else {
        response.ok("Successfully delete instructions", res);
      }
    });
  },
}