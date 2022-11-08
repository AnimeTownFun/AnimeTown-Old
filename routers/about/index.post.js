const ex = require("express");
const app = ex.Router();
const chalk = require("chalk");
app.post("/", async (req, res) => {
  try {
    return res.render("about-us.ejs");
  } catch (e) {
    console.log(chalk.red(e));
    return res.send("<h1> 404 </h1>");
  }
});

module.exports = app;
