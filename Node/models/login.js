const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const loginSchema=new Schema({
    username:String,
    password:String
});

module.exports=mongoose.model('login',loginSchema,'login')