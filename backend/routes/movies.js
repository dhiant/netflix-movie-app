const router = require("express").Router();
const Movie = require("../models/Movie");
const verifyToken = require("../verifyToken");

// create new movie
router.post("/", verifyToken, async (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = new Movie(req.body);
    try {
      const savedMovie = await newMovie.save();
      req.status(201).json(savedMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

// update movie
router.put("/:id", verifyToken, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updatedMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

// delete movie
router.delete("/:id", verifyToken, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Movie.findByIdAndDelete(req.params.id);
      res.status(200).json("The movie has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

// get single movie
router.get("/find/:id", verifyToken, async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get random movie
router.get("/random", verifyToken, async (req, res) => {
  const movieType = req.query.type;
  let randomMovie;
  try {
    if (movieType === "series") {
      randomMovie = await Movie.aggregate([
        { $match: { isSeries: true } },
        { $sample: { $size: 1 } },
      ]);
    } else {
      randomMovie = await Movie.aggregate([
        { $match: { isSeries: false } },
        { $sample: { $size: 1 } },
      ]);
    }
    res.status(200).json(randomMovie);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all movie
router.get("/", verifyToken, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const allMovies = await Movie.find();
      res.status(200).json(allMovies.reverse());
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

module.exports = router;
