const express = require("express");
const passport = require("passport");
const bcrypt = require("bcrypt");

const userModel = require("../models/userSchema.js");

const router = express.Router();

router.get("/check", (req, res) => {
  return res.send(req.isAuthenticated());
});

// authetication of login request from user
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login?error=true",
  })
);

// logging user out
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

router.post("/register", (req, res) => {
  const { username, password } = req.body;

  userModel
    .findOne({ username })
    .then((user) => {
      if (user) return res.redirect("/register?error=true");

      let newUser = new userModel({
        username,
        password,
      });

      // Create salt & hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save().then((user) => {
            res.redirect("/login");
          });
        });
      });
    })
    .catch((err) => {
      throw err;
    });
});

module.exports = {
  router,
};
