const ex = require("express");
const axios = require("axios");
const app = ex.Router();
let api_url = global.api_url;
const chalk = require("chalk");
app.post("/", async (req, res) => {
  try {
    let resx = await axios.get(api_url + "api/tv-shows");
    let dat = resx.data.results;

    return res.render("tvshows.ejs", { popular: dat });
  } catch (e) {
    console.log(chalk.red(e));
    return res.send("<h1> 404 </h1>");
  }
});

module.exports = app;
