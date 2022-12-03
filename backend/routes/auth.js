const express = require("express");
const router = express.Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// register
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_KEY
    ).toString(),
  });

  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    // show error if there is no user
    !user && res.status(401).json("wrong username or password!");

    // if there is user
    // decrypt the password
    const bytes = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    // if password does not match
    originalPassword !== req.body.password &&
      res.status(401).json("worng username or password!");

    const { password, ...userInfo } = user._doc;

    // generate jwt token
    const accessToken = jwt.sign(
      { id: user.id, isAdmin: user.isAdmin },
      process.env.PASSWORD_KEY,
      { expiresIn: "5d" }
    );

    // if password matches
    res.status(200).json({ ...userInfo, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
