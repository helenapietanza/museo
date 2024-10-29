import express from "express";
const app = express();
import expressLayouts from "express-ejs-layouts";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("layout", "layout");
app.use("/frontend", express.static("public"));

app.get("/home", (req, res) => {
  res.render("home");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
