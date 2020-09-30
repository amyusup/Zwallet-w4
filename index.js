const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./src/helper/db");
const rIndex = require('./src/routes/index')
const rTopup = require('./src/routes/topup')
const rUsers = require('./src/routes/users')
const rTransfer = require('./src/routes/transfer')
//const c_topup = require("./src/controller/topup");
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);



app.use('/', rIndex)
app.use('/topup', rTopup)
app.use('/users', rUsers)
app.use('/transfer', rTransfer)


// var routes = require("./src/helper/routes");
// routes(app);

app.listen(8000,() =>{
    console.log('Sever running on port 8000')
});


