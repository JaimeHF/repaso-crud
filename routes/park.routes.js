const express = require('express')
const router = express.Router()
const Park = require('../models/park.model')


  router.get("/", (req, res)=>{
    Park.find()
      .then((allPark)=>{
        res.render("parks/parks-index.hbs", {allPark});
  
      })
    });

    
    router.get("/new", (req, res)=>{
      res.render("parks/new-park");
    });
    

    router.post("/new",(req, res, next)=> {
      Park.create(req.body)
      .then(()=> {
        res.redirect("/")
      })
    })



module.exports = router