const ex = require("express");
const axios = require("axios");
let update_list = require("../functions/update_list.js");
const db = require("quick.db");
const app = ex.Router();
let api_url = global.api_url;
let secs = global.secs;
const chalk = require("chalk");
app.get("/", async (req, res) => {
  try {
    if (secs.includes("disable")) {
      let results = await update_list(api_url, "disable");
      if (results.error === "404") {
        return res.send("<h1> Error 404 </h1>");
      }
      let popular = results.popular;
      let recent = results.recent;
      if (popular.results && recent.results) {
        popular = popular.results[0];
        recent = recent.results[0];
        return res.render("index.ejs", { popular: popular, recent: recent });
      }
      return res.render("index.ejs", { popular: popular, recent: recent });
    } else {
      let popular = db.fetch("popular");
      let recent = db.fetch("recentlyadded");
      if (popular.results && recent.results) {
        popular = popular.results[0];
        recent = recent.results[0];
        return res.render("index.ejs", { popular: popular, recent: recent });
      }

      return res.render("index.ejs", { popular: popular, recent: recent });
    }
  } catch (e) {
    console.log(chalk.red(e));
    return res.send("<h1> 404 </h1>");
  }
});

module.exports = app;
