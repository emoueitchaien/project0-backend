const express = require("express");
const router = express.Router();

const Confidential = require("../Models/Confidential.model");

router.route("/").get((req, res) => {
  Confidential.find()
    .then((pass) => res.json(pass))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/add/:pass").post((req, res) => {

    const password = req.params.pass;

    const newPass = new Confidential({
      password:password
    });

    newPass.save()
    .then(()=> res.json("Password Added"))
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
