const mongoose = require("mongoose");
const booksSchema = mongoose.Schema({
  
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  image:{
    type:String,
    required:true,
  },
  isbn: {
    type: String,
    required: true,
  },
  totalCopies: {
    type: Number,
    required: true,
  },
  availableCopies: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("Books", booksSchema);
