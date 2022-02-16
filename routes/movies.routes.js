
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movie.model");


router.route("/create")
  .get((req, res) =>{
      Celebrity.find()
      .then((celebrities)=>{
          res.render("movies/new-movie", {celebrities})})
      })
 
  .post((req, res)=>{
    const {title, genre, plot, cast} = req.body

    Movie.create({title, genre, plot, cast})
    .then(()=>{ 
        res.redirect("/movies");
    })
    .catch(error=>{res.render("movies/new-movie")})
    })


router.get("/", (req, res) => {
    Movie.find()
        .then((movies)=>{
            res.render("movies/movies", {movies} )
        })
    })

    
router.get("/movies/:id", (req, res)=>{
        Movie.findById(req.params.id)
        .populate("cast")
        .then((movie)=>{res.render("movies/movie-details", movie)})
        .catch((err)=>{console.log(err)})
    })

module.exports = router;