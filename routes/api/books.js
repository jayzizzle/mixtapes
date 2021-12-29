const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const keys = require('../../config/keys');
const User = require('../../models/User');

router.patch(
  '/user/:username/addbook/:gBookId',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    User.findOneAndUpdate(
      { username: req.params.username },
      { $push: { books: req.body } }
    );
  }
);

module.exports = router;
