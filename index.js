"use strict";

require("dotenv").config();
const app = require("./auth-api/server");
const { db } = require("./auth-api/models/index");

db.sync().then(() => {
  app.start(process.env.PORT || 3002);
});
