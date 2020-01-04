const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExportSchema = new Schema({
    ProductName:{type: String, required:true},
    Total:{type:Number,required:true},
    Customer:{type:String,required:true},
    Customer_Phone_No:{type:String,required:true},
},{
    timestamps:true,
});

const Export = mongoose.model("Export",ExportSchema);

module.exports=Export;