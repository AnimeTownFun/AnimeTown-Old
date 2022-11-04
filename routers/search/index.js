const ex = require("express");
const axios = require("axios");
const app = ex.Router();
const chalk = require("chalk");
let api_url = global.api_url;
app.get("/", async (req, res) => {
  try {
    let keyw = req.query.keyword;
    if (!keyw) {
      return res.redirect("/");
    }
    let resx = await axios.get(api_url + "api/search/" + keyw + "/1");

    if (resx.status === "404") {
      return res.redirect("/");
    }
    let dat = resx.data.results;

    return res.render("search.ejs", { popular: dat });
  } catch (e) {
    console.log(chalk.red(e));
    return res.send("<h1> 404 </h1><br><p>Something Went Wrong...</p>");
  }
});

module.exports = app;
