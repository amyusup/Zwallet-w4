const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// var cors = require('cors')
const db = require("./src/helper/db");
const rIndex = require('./src/routes/index')
const rTopup = require('./src/routes/topup')
const rUsers = require('./src/routes/users')
const rTransfer = require('./src/routes/transfer')
//const c_topup = require("./src/controller/topup");
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
  bodyParser.json(),
  
);

// app.use(function(req,res,next){
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
//   res.header("Access-Control-Allow-Headers", "Accept, Content-Type, Authorization, X-Requested-With");

 
// });


app.use('/', rIndex)
app.use('/topup', rTopup)
app.use('/users', rUsers)
app.use('/transfer', rTransfer)


// var routes = require("./src/helper/routes");
// routes(app);

app.listen(process.env.PORT || 8000,() =>{
    console.log('Sever running on port 8000')
});


// DB_HOST=db4free.net
// DB_USER=amyusup26
// DB_PASS=12345678
// DB_NAME=zwallet_amy
