const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
//importing routes
const Productsrouter = require("./Routes/Products");
const importsrouter = require("./Routes/imports");
const exportsrouter =require("./Routes/exports");

require("dotenv").config();

const app = express();

//Middlewares
app.use(cors());

//Body Parser
app.use(express.json());

//MangoDB connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true});

const connection=mongoose.connection;
connection.once("open",()=>{console.log("MongoDB connection established sucessfully")});

//Router Operations
app.use("/products",Productsrouter);
app.use("/imports",importsrouter);
app.use("/exports",exportsrouter);

Port = process.env.PORT || 5000;

app.listen(Port,()=>console.log(`Server Has Started at ${Port}`));