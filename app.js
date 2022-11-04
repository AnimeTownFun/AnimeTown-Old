const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
const db = require("quick.db");
const config = require("./config.js");
let apifunction = require("./functions/check_api_url.js");
let checkport = require("./functions/check_port.js");
module.exports = async function () {
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "ejs");
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  let secs = config.time_update + "000";
  global.secs = secs;
  let port = await checkport(config.port);
  let api_url = await apifunction(config.api_url, secs);
  global.api_url = api_url;
  if (!secs.includes("disable")) {
    setInterval(async () => {
      try {
        let res = await axios.get(api_url + "api/recentlyadded/1");

        db.set(`recentlyadded`, res.data.results);
        let resx = await axios.get(api_url + "api/popular/1");

        db.set(`popular`, resx.data.results);
      } catch (e) {
        let res = await axios.get(api_url + "api/recentlyadded/1");

        db.set(`recentlyadded`, res.data.results);
        let resx = await axios.get(api_url + "api/popular/1");

        db.set(`popular`, resx.data.results);
        return console.log(e);
      }
    }, Number(secs));
  }

  app.use(express.static(path.join(__dirname, "assets")));
  app.listen(port, () => {
    console.log(
      "Website running on " +
        port +
        " port. Go to http://localhost:" +
        port +
        " to vist your website"
    );
  });
  console.log("Connected to " + port + " PORT");

  //1200000
  app.use("/about-us", require("./routers/about/index"));
  app.use("/search", require("./routers/search/index.js"));
  app.use("/movies", require("./routers/movies/index.js"));
  app.use("/tv-shows", require("./routers/tvshows/index.js"));
  app.use("/details", require("./routers/anime/details.js"));
  app.use("/watch", require("./routers/anime/watch.js"));
  app.use("/", require("./routers/index.js"));
};
