const express = require("express");
router=express.Router();
//Importing Schema
const Import = require("../Models/Imports.model");

router.route("/").get((req,res)=>{
    Import.find()
      .then(Import=>res.json(Import))
      .catch(err=>res.status(400).json("Error:"+err))
});

router.route("/add").post((req,res)=>{

   const ProductName=req.body.ProductName;
   const Total=req.body.Total;
   const Merchant=req.body.Merchant;
   const Merchant_Phone_No=req.body.Merchant_Phone_No;

    const newImport= new Import({
        ProductName,
       Total,
       Merchant,
       Merchant_Phone_No
    });

    newImport.save()
    .then(()=>res.json("Import Added"))
    .catch(err=>res.status(400).json("Error:"+err));
});

router.route("/:id").get((req,res)=>{
    Import.findById(req.params.id)
    .then(Import=>res.json(Import))
    .catch(err=>res.status(400).json("Error:"+err));
});

router.route("/update/:id").put((req,res)=>{
    Import.findById(req.params.id)
    .then(Import=>{
        Import.ProductName=req.body.ProductName;
        Import.Total=req.body.Total;
        Import.Merchant=req.body.Merchant;
        Import.Merchant_Phone_No=req.body.Merchant_Phone_No;

        Import.save()
        .then(()=>res.json("Import Updated"))
        .catch(err=>res.status(400).json("Error:"+err));
    })
    .catch(err=>res.status(400).json("Error:"+err));
})

router.route("/delete/:id").delete((req,res)=>{
    Import.findByIdAndDelete(req.params.id)
    .then(Import=>res.json(Import))
    .catch(err=>res.status(400).json("Error:"+err));
})

module.exports= router;