const axios = require("axios");
const db = require("quick.db");
module.exports = async function (api_url, secs) {
  if(!secs.includes("disable")) {
console.log("UPDATING POPULAR AND RECENTLY ADDED DATABASE");
  }
  try { 

     let resx = await axios.get(api_url +"api/recentlyadded/1");

  
  let res = await axios.get(api_url +"api/popular/1");

 
if(!secs.includes("disable")) {
   db.set(`popular`, res.data.results);

   db.set(`recentlyadded`, resx.data.results);
}
      if(!secs.includes("disable")) {
console.log("UPDATED POPULAR AND RECENTLY ADDED DATABASE");
  }
  return {
    popular: res.data.results,
    recent: resx.data.results,
  }
     } catch(e) {
    console.log(e);
    return {
    error: "404",
  }
  }
}
