require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const key = process.env.API_KEY;
const axios = require("axios").default;
const mongoose = require("mongoose");
const db = require("./models");

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes
app.get("/api/books", async (req, res) => {
  const response = await db.Book.find({});
  console.log(response);
  res.json(response);
});

app.post("/api/books", async (req, res) => {
  const { title, authors, description, link, image } = req.body;
  const book = {
    title,
    authors,
    description,
    link,
    image
  };

  const response = await db.Book.findOne({ link: link });
  if (response) {
    res.status(301).send();
    return;
  }
  const data = await db.Book.create(book);
  res.json(data);
});

app.delete("/api/books/:id", async (req, res) => {
  const response = await db.Book.deleteOne({ _id: req.params.id });
  res.json(response);
});

app.get("/search", async (req, res) => {
  const q = encodeURIComponent(req.query.q);
  const axiosResponse = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${q}&key=${key}`
  );
  res.send(axiosResponse.data);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log("app listening on port", PORT);
});
