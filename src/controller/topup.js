var response = require("../helper/res");
var db = require("../helper/db");

exports.getInstructions = (req, res) => {
  db.query(`SELECT * FROM topup`, (err, result, fields) => {
    if (err) {
      console.log(err.message);
    } else {
      response.ok(result, res);
    }
  });
};

exports.addInstructions = (req, res) => {
  const { step, instructions } = req.body;
  if (step && instructions) {
    db.query(
      `INSERT INTO topup(step,instructions) values ('${step}','${instructions}')`,
      (err, result, fields) => {
        if (err) {
          console.log(err.message);
        } else {
          response.ok("successfully add instruction", res);
        }
      }
    );
  } else {
    response.validate("All fields must be filled.", res);
  }
};

exports.updateIntructions = (req, res) => {
  const { id, step, instructions } = req.body;
  if (id && step && instructions) {
    db.query(
      `UPDATE topup SET step = ${step}, instructions = '${instructions}' WHERE id = ${id}`,
      (err, result, fields) => {
        if (err) {
          console.log(err.message);
        } else {
          response.ok("Successfully changed instructions", res);
        }
      }
    );
  } else {
    response.validate("All fields must be filled.", res);
  }
};

exports.deleteIntructions = (req, res) => {
  const { id } = req.body;
  db.query(`DELETE FROM topup WHERE id=${id}`, (err, result, fields) => {
    if (err) {
      console.log(err.message);
    } else {
      response.ok("Successfully delete instructions", res);
    }
  });
};
