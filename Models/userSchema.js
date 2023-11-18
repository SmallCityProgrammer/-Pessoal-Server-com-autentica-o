const mongoose = requier("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  username:{
    required:true,
    type:String
  },
  password:{
    required:true,
    type:Number
  }
})

module.exports = mongoose.Model('Usuario', User)