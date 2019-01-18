const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const foodSchema=new Schema({
    itemName:{
        type:String,
        required:true
      },
      price:{
        type:Number,
        required:true
      },
      rating:{
          type:String,
          required:true
      }
});

module.exports=mongoose.model('foodItems',foodSchema,'foodItems');