const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    ProductName: { type: String, required: true },
    PricePerKg: { type: Number, required: true },
    PricePer25Bag: { type: Number, required: true },
    PricePer30Bag: { type: Number, required: true },
    PricePer50Bag: { type: Number, required: true },
    Available: { type: Number, required: true },
  },
  {
    timestamps: true
  }
);

const Products = mongoose.model("Products", ProductSchema);

module.exports = Products;