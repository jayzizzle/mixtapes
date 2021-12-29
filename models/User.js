const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    // books: [Schema.Types.Mixed],
    books: [
      {
        gBookId: { type: String, required: true },
        title: { type: String, required: true },
        authors: { type: String, default: null },
        thumbnail: { type: String, default: null },
        description: { type: String, default: null },
        previewLink: { type: String, default: null },
        categories: [],
        isDone: { type: Boolean, default: false },
        isReading: { type: Boolean, default: false },
        isRecommended: { type: Boolean, default: false },
        review: { type: String, dafault: null },
        rating: { type: Number, default: null },
        notes: { type: String, default: null },
      },
    ],
    wishList: [
      {
        gBookId: { type: String, required: true },
        title: { type: String, required: true },
        authors: { type: String, default: null },
        thumbnail: { type: String, default: null },
        description: { type: String, default: null },
        previewLink: { type: String, default: null },
        categories: [],
        notes: { type: String, default: null },
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model('User', UserSchema);
module.exports = User;
