const express = require("express");
router=express.Router();
//Importing Schema
const Products = require("../Models/product.model");

router.route("/").get((req,res)=>{
    Products.find()
      .then(products=>res.json(products))
      .catch(err=>res.status(400).json("Error:"+err))
});

router.route("/add").post((req,res)=>{

   const ProductName=req.body.ProductName;
   const PicePerKg=req.body.PicePerKg;
   const PricePerBag=req.body.PricePerBag;

    const newProduct= new Products({
        ProductName,
        PicePerKg,
        PricePerBag
    });

    newProduct.save()
    .then(()=>res.json("Products Added"))
    .catch(err=>res.status(400).json("Error:"+err));
});

router.route("/:id").get((req,res)=>{
    Products.findById(req.params.id)
    .then(products=>res.json(products))
    .catch(err=>res.status(400).json("Error:"+err));
});

router.route("/update/:id").put((req,res)=>{
    Products.findById(req.params.id)
    .then(product=>{
        product.ProductName=req.body.ProductName;
        product.PicePerKg=req.body.PicePerKg;
        product.PricePerBag=req.body.PricePerBag;

        product.save()
        .then(()=>res.json("Products Updated"))
        .catch(err=>res.status(400).json("Error:"+err));
    })
    .catch(err=>res.status(400).json("Error:"+err));
})

router.route("/delete/:id").delete((req,res)=>{
    Products.findByIdAndDelete(req.params.id)
    .then(product=>res.json(product))
    .catch(err=>res.status(400).json("Error:"+err));
})
