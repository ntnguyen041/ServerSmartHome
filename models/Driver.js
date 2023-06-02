const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const driverSchema = new Schema({
    name:String,
    status:Number,
    value:Number
      //the rest of profile fields
},{timestamps:true});

const Driver = mongoose.model('Driver', driverSchema);
module.exports =Driver;