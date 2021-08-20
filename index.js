"use strict";

require("dotenv").config();
const app = require("./auth-api/server");
const { db } = require("./auth-api/models/index");
app.get('/',(req,res)=>{
  res.json('Is connected ')
})
db.sync().then(() => {
  app.start(process.env.PORT || 3002);
});
