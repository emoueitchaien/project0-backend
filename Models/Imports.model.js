const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImportSchema = new Schema({
    ProductName:{type: String, required:true},
    Quantity:{type:Number,required:true},
    Rate:{type:Number,required:true},
    mode:{type:Number,required:true},
    Total:{type:Number,required:true},
    Merchant:{type:String,required:true},
    Merchant_Phone_No:{type:String,required:true},
},{
    timestamps:true,
});

const Import = mongoose.model("Import",ImportSchema);

module.exports=Import;