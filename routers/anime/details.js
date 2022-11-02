
const ex = require('express');
const axios = require("axios");
const app = ex.Router();
let api_url = global.api_url;
app.get("/:id", async(req, res) => {
  try { 
  if(!req.params.id) {
    return res.redirect("/");
  }
  let resx = await axios.get(api_url +"api/details/" + req.params.id);
 
  let info = await resx.data;
  return res.render("movie-details.ejs", {info:info.results[0]});
     } catch(e) {
    console.log(e);
    return res.send("<h1> 404 </h1>")
  }
 })

module.exports = app;