const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Book = require('../../models/User');
const keys = require('../../config/keys');

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const newBook = new Book({
      title: req.body.title,
      subtitle: req.body.subtitle,
      author: req.body.author,
      categories: req.body.categories,
      description: req.body.description,
      publishedDate: req.body.publishedDate,
      pageCount: req.body.pageCount,
      gBooksId: req.body.gBooksId,
      gBooksImageUrl: req.body.gBooksImageUrl,
      gBooksPreviewUrl: req.body.gBooksPreviewUrl,
    });

    newBook.save().then((book) => res.json(book));
  }
);

module.exports = router;
