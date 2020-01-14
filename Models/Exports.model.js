const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExportSchema = new Schema({
    ProductName:{type: String, required:true},
    Quantity:{type:Number,required:true},
    Rate:{type:Number,required:true},
    Total:{type:Number,required:true},
    Customer:{type:String,required:true},
    Customer_Phone_No:{type:String,required:true},
    mode:{type:Number,required:true}
},{
    timestamps:true,
});

const Export = mongoose.model("Export",ExportSchema);

module.exports=Export;