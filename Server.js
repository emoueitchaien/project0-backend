const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
//importing routes
const Productsrouter = require("./Routes/Products");
const Importsrouter = require("./Routes/Imports");
const Exportsrouter =require("./Routes/Exports");

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
app.use("/imports",Importsrouter);
app.use("/exports",Exportsrouter);

Port = process.env.PORT || 5000;

app.listen(Port,()=>console.log(`Server Has Started at ${Port}`));