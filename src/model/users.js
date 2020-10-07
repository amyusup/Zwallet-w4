module.exports = {
  getUsers: (db, callback) => {
    db.query(`SELECT * FROM vUsers`, callback);
  },

  getUsersLike: (db, key, callback) => {
    db.query(`SELECT * FROM vUsers WHERE name LIKE '%${key}%' ORDER BY name ASC`, callback);
  },

  getUsersWhere: (db, id, callback) => {
    db.query(`SELECT * FROM vUsers WHERE id=${id}`, callback);
  },

  addUsers: (db, data, callback)=>{
    db.query(
      `INSERT INTO users( firstName, lastName, phone, email, password, balance, verified, photo, pin) VALUES ('${data.firstName}', '${data.lastName}', '${data.phone}', '${data.email}', '${data.password}', '${data.balance}', ${data.verified}, '${data.photo}', '${data.pin}' )`, callback)
  },
  
  updateUsers: (db, data, id, callback)=>{
    db.query(`UPDATE users SET ${data} WHERE id=${id} `, callback)
  },
  
  deleteUsers: (db, id, callback)=>{
    db.query(`DELETE FROM users WHERE id=${id}`, callback)
  },
};
