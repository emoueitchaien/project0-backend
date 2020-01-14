const express = require("express");
router=express.Router();
//Importing Schema
const Export = require("../Models/Exports.model");

router.route("/").get((req,res)=>{
    Export.find()
      .then(Export=>res.json(Export))
      .catch(err=>res.status(400).json("Error:"+err))
});

router.route("/add").post((req,res)=>{

   const ProductName=req.body.ProductName;
   const Quantity=Number(req.body.Quantity);
   const Rate=Number(req.body.Rate);
   const mode=Number(req.body.mode);
   const Total=Number(req.body.Total);
   const Customer=req.body.Customer;
   const Customer_Phone_No=Number(req.body.Customer_Phone_No);

    const newExport= new Export({
        ProductName,
       Total,
       Quantity,
       Rate,
       mode,
       Customer,
       Customer_Phone_No
    });

    newExport.save()
    .then(()=>res.json("Export Added"))
    .catch(err=>res.status(400).json("Error:"+err));
});

router.route("/:id").get((req,res)=>{
    Export.findById(req.params.id)
    .then(Export=>res.json(Export))
    .catch(err=>res.status(400).json("Error:"+err));
});

router.route("/update/:id").put((req,res)=>{
    Export.findById(req.params.id)
    .then(Export=>{
        Export.ProductName=req.body.ProductName;
        Export.Quantity=Number(req.body.Quantity);
        Export.Rate=Number(req.body.Rate);
        Export.mode=Boolean(req.body.mode);
        Export.Total=Number(req.body.Total);
        Export.Customer=req.body.Customer;
        Export.Customer_Phone_No=Number(req.body.Customer_Phone_No);

        Export.save()
        .then(()=>res.json("Export Updated"))
        .catch(err=>res.status(400).json("Error:"+err));
    })
    .catch(err=>res.status(400).json("Error:"+err));
})

router.route("/delete/:id").delete((req,res)=>{
    Export.findByIdAndDelete(req.params.id)
    .then(Export=>res.json(Export))
    .catch(err=>res.status(400).json("Error:"+err));
})

module.exports= router;