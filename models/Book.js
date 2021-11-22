const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
    },
    author: {
      type: String,
      required: true,
    },
    categories: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    publishedDate: {
      type: String,
      default: '',
    },
    pageCount: {
      type: Number,
    },
    gBooksId: {
      type: String,
      required: true,
    },
    gBooksImageUrl: {
      type: String,
      default: '',
    },
    gBooksPreviewUrl: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

const Book = mongoose.model('Book', BookSchema);
module.exports = User;
