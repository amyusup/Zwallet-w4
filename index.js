const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./src/helper/db");
//const c_topup = require("./src/controller/topup");
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

var routes = require("./src/helper/routes");
routes(app);

app.listen(8000,() =>{
    console.log('Sever running on port 8000')
});


