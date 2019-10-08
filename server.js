const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;
const key = "AIzaSyADwTqNxumDRoOlDZHrpZJoXOvL_iVIufY";
const axios = require("axios").default;
const mongoose = require("mongoose");
const db = require("./models");

mongoose.connect("mongodb://localhost:27017/googlebooks", { useNewUrlParser: true });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/api/test", (req, res) => {
  axios.get();
  res.send({ test: true });
});

app.post("/books", async (req, res) => {
  const book = {
    title: req.body.title,
    authors: req.body.authors,
    description: req.body.description,
    link: req.body.link,
    image: req.body.image
  };
  const data = await db.Book.create(book);
  res.json(data);
});

app.delete("/books/:id", async (req, res) => {
  const response = await db.Book.deleteOne({ _id: req.params.id });
  res.json(response);
});

app.get("/books", async (req, res) => {
  const response = await db.Book.find({});
  res.json(response);
});

app.post("/search", async (req, res) => {
  let q = req.body.book;
  q = encodeURIComponent(q);
  const axiosResponse = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${q}&key=${key}`
  );
  const data = axiosResponse.data;
  res.send(data);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log("app listening on port ", PORT);
});
