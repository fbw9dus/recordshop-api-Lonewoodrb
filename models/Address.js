const mongoose = require("mongoose");
const { Schema } = mongoose;

const address = new Schema({
  street:{
    type: String,
    required: true
  },
  city:{
    type: String,
    required: true
  }})


module.exports = address