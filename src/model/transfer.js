module.exports = {
  getTransferData: (db, callback) => {
    db.query(`SELECT * FROM vtransfer`, callback);
  },

  // getTransferLike: (db, key, callback) => {
  //   db.query(`SELECT * FROM vtransfer WHERE name LIKE '%${key}%'`, callback);
  // },

  getTransferWhere: (db, id, callback) => {
    db.query(`SELECT * FROM vtransfer WHERE id=${id}`, callback);
  },

  addTransferData: (db, data, callback)=>{
    db.query(
      `INSERT INTO transfer( idSender, idReceiver, amount, date, notes) VALUES ('${data.idSender}', '${data.idReceiver}', '${data.amount}', current_timestamp() , '${data.notes}')`, callback)
  },
  
  updateTransfer: (db, data, id, callback)=>{
    db.query(`UPDATE transfer SET ${data} WHERE id=${id} `, callback)
  },
  
  deleteTransferData: (db, id, callback)=>{
    db.query(`DELETE FROM transfer WHERE id=${id}`, callback)
  },
};
