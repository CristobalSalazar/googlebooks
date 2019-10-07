const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;
const key = "AIzaSyADwTqNxumDRoOlDZHrpZJoXOvL_iVIufY";
const axios = require("axios").default;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/api/test", (req, res) => {
  axios.get();
  res.send({ test: true });
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
