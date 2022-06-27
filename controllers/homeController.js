const fs = require("fs");
const pdf = require("pdf-creator-node");

const path = require("path");

const homeview = (req, res, next) => {
  res.render("home");
};
