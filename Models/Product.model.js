const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    ProductName:{type:String,required:true},
    PricePerKg:{type:Number,required:true},
    PricePerBag:{type:Number,required:true},
    Available:{type:Number,required:true},
},
{
    timestamps:true,
}
)

const Products=mongoose.model("Products",ProductSchema);

module.exports=Products;