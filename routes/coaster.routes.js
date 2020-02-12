const express = require('express')
const router = express.Router()
const Coaster = require('../models/coaster.model')
const Park = require('../models/park.model')

router.get("/new", (req, res)=>{
  res.render("coasters/new-coaster");
});


router.get("/", (req, res)=>{
  Coaster.find()
  .populate("park")
    .then((allCoaster)=>{
      res.render("coasters/coasters-index.hbs", {allCoaster});

    })
  });


  router.get("/new", (req, res)=>{
    Park.find()
      .then((allPark)=>{
        res.render("coasters/new-coaster", {allPark});
  
      })
    });


  router.post("/new",(req, res, next)=> {
    Coaster.create(req.body)
    .populate("park")
    .then(()=> {
      res.redirect("/")
    })
  })



module.exports = router