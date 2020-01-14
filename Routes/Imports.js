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
   const Quantity=Number(req.body.Quantity);
   const Rate=Number(req.body.Rate);
   const mode=Number(req.body.mode);
   const Total=Number(req.body.Total);
   const Merchant=req.body.Merchant;
   const Merchant_Phone_No=Number(req.body.Merchant_Phone_No);

    const newImport= new Import({
       ProductName,
       Quantity,
       Rate,
       mode,
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
        Import.Quantity=Number(req.body.Quantity);
        Import.Rate=Number(req.body.Rate);
        Import.mode=Boolean(req.body.mode);
        Import.Total=Number(req.body.Total);
        Import.Merchant=req.body.Merchant;
        Import.Merchant_Phone_No=Number(req.body.Merchant_Phone_No);

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