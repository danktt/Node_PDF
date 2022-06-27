const express = require("express");
const expressLayout = require("express-ejs-layouts");
const path = require("path");

const app = express();

app.use(expressLayout);
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.listen(4000, () => console.log("Server is running on port 4000 "));
