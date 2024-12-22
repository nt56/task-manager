const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// POST /auth/register : Register a new user.
router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, emailId, password } = req.body;
    if (!firstName || !lastName || !emailId || !password) {
      throw new Error("Some feilds are empty...!");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      firstName,
      lastName,
      emailId,
      password: hashedPassword,
    });
    await user.save();
    res.status(200).send("User added Successfully...!");
  } catch (err) {
    res.status(500).send("Error : " + err.message);
  }
});

// POST /auth/login : Log in and return a JWT token.
router.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    if (!emailId || !password) {
      throw new Error("Some feilds are empty...!");
    }

    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      throw new Error("User Not found...!");
    }

    //hashing the password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (isPasswordMatch) {
      //creating the token
      const token = await jwt.sign({ _id: user._id }, JWT_SECRET, {
        expiresIn: "2h",
      });
      res.cookie("token", token);
      res.status(200).send("User Logged in Successfully...!");
    } else {
      throw new Error("Invalid Crediantials...!");
    }
  } catch (err) {
    res.status(500).send("Error : " + err.message);
  }
});

module.exports = router;
