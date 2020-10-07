module.exports = {
  getInstructions: (db, callback) => {
    db.query(`SELECT * FROM topup ORDER BY step ASC`, callback);
  },

  getInstructionsWhere: (db, id, callback) => {
    db.query(`SELECT * FROM topup WHERE id=${id}`, callback);
  },

  addInstructions: (db, data, callback)=>{
    db.query(`INSERT INTO topup(step,instructions) values ('${data.step}','${data.instructions}')`, callback)
  },
  
  updateIntructions: (db, data, id, callback)=>{
    db.query(`UPDATE topup SET ${data} WHERE id=${id} `, callback)
  },
  
  deleteIntructions: (db, id, callback)=>{
    db.query(`DELETE FROM topup WHERE id=${id}`, callback)
  },
};
