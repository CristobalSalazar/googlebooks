const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String
  },
  authors: [
    {
      type: String
    }
  ],
  description: { type: String },
  image: { type: String },
  link: { type: String }
});
const Book = mongoose.model("Book", BookSchema);
module.exports = Book;
