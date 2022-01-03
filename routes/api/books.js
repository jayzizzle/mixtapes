const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const keys = require('../../config/keys');
const User = require('../../models/User');

router.patch(
  '/:userId/bookshelf/addbook',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $push: { books: req.body } }
    )
      .then((user) => res.json(user.books))
      .catch((error) => res.json(error));
  }
);

module.exports = router;
