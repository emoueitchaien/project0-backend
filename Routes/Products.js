const express = require("express");
router = express.Router();
//Importing Schema
const Products = require("../Models/Product.model");

router.route("/").get((req, res) => {
  Products.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
  const ProductName = req.body.ProductName;
  const PricePerKg = Number(req.body.PricePerKg);
  const PricePer25Bag = Number(req.body.PricePer25Bag);
  const PricePer30Bag = Number(req.body.PricePer30Bag);
  const PricePer50Bag = Number(req.body.PricePer50Bag);
  const Available = Number(req.body.Available);

  const newProduct = new Products({
    ProductName,
    PricePerKg,
    PricePer25Bag,
    PricePer30Bag,
    PricePer50Bag,
    Available
  });

  newProduct
    .save()
    .then(() => res.json("Products Added"))
    .catch(err => res.status(400).json("Error:" + err));
});

router.route("/:id").get((req, res) => {
  Products.findById(req.params.id)
    .then(products => res.json(products))
    .catch(err => res.status(400).json("Error:" + err));
});

router.route("/update/:id").put((req, res) => {
  Products.findById(req.params.id)
    .then(product => {
      product.ProductName = req.body.ProductName;
      product.PicePerKg = Number(req.body.PicePerKg);
      product.PricePer25Bag = Number(req.body.PricePer25Bag);
      product.PricePer30Bag = Number(req.body.PricePer30Bag);
      product.PricePer50Bag = Number(req.body.PricePer50Bag);
      product.Available = Number(req.body.Available);
      product
        .save()
        .then(() => res.json("Products Updated"))
        .catch(err => res.status(400).json("Error:" + err));
    })
    .catch(err => res.status(400).json("Error:" + err));
});

router.route("/delete/:id").delete((req, res) => {
  Products.findByIdAndDelete(req.params.id)
    .then(product => res.json(product))
    .catch(err => res.status(400).json("Error:" + err));
});

module.exports = router;