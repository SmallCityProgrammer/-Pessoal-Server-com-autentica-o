const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  quantity:{
    required:true,
    type:Number
  },
  name:{
    required:true,
    type:String
  },
  price:{
    required:true,
    type:Number
  }
})

module.exports = mongoose.model('produto', productSchema);