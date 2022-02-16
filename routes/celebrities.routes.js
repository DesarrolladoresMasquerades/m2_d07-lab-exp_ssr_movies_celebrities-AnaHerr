const Celebrity = require("../models/Celebrity.model");

const router = require("express").Router();

router.route("/create")
  .get((req, res) =>{
    res.render("celebrities/new-celebrity")})
 
  .post((req, res)=>{
    const {name, occupation, catchphrase} = req.body

    Celebrity.create({name, occupation, catchphrase})
    .then(()=>{ 
        res.redirect("/celebrities");
    })
    .catch(error=>{res.render("celebrities/new-celebrity")})
    })


router.get("/", (req, res) => {
    Celebrity.find()
    .then((celebrities)=>{
        res.render("celebrities/celebrities", {celebrities} )
    })
})
 

module.exports = router;