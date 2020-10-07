module.exports = {
  getTransferData: (db, callback) => {
    db.query(`SELECT * FROM vtransfer`, callback);
  },
  getLimitTransferData: (db,id, limit, callback) => {
    db.query(`SELECT * FROM vtransfer WHERE idSender=${id} LIMIT ${limit}` , callback);
  },

  getTransferOrderDate: (db,id, order, callback) => {
    db.query(`SELECT * FROM vtransfer WHERE idSender=${id} ORDER BY ${order}(date) DESC LIMIT 2 `, callback);
  },

  getTransferWhere: (db, id, callback) => {
    db.query(`SELECT * FROM vtransfer WHERE id=${id}`, callback);
  },

  addTransferData: (db, data, callback)=>{
    db.query(
      `INSERT INTO transfer( idSender, idReceiver, amount, notes) VALUES ('${data.idSender}', '${data.idReceiver}', '${data.amount}' , '${data.notes}')`, callback)
  },
  
  updateTransfer: (db, data, id, callback)=>{
    db.query(`UPDATE transfer SET ${data} WHERE id=${id} `, callback)
  },
  
  deleteTransferData: (db, id, callback)=>{
    db.query(`DELETE FROM transfer WHERE id=${id}`, callback)
  },
};
