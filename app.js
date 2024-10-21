import express from "express";
const app = express();

app.get("/home", (req, res) => {
  res.send("hello world");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
