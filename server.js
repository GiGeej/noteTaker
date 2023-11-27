const express = require("express");
const path = require("path");
const dbData = require("./db/db.json");

const PORT = 3001;

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

// app.get("/api/notes", (req, res) => {
//   res.json(dbData);
// });

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
