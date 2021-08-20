"use strict";
require("dotenv").config();
const userModel = require("./users");
const { Sequelize, DataTypes } = require("sequelize");
const foodModel = require("./food/food.model");
const clothesModel = require("./clothes/clothes.model");
const dataCollection = require("./collection");

let sequelizeOptions={
  dialectOptions:{
    ssl:{
      require:true,
      rejectUnauthorized:false
    }
  }
};


const DATABASE_URL = process.env.DATABASE_URL||'postgres://localhost:5432/user'
  // process.env.NODE_ENV == "test"
  //   ? "sqlite:memory"
  //   : process.env.DATABASE_URL;

const sequelize = new Sequelize(DATABASE_URL,sequelizeOptions);
const Food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  users: userModel(sequelize, DataTypes),
  food: new dataCollection(Food),
  clothes: new dataCollection(clothes),
};
