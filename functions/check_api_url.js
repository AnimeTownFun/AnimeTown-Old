let update_list = require("./update_list.js");
module.exports = async function (api_url, secs) {
  console.log("CHECKING API URL...");
  var cutted;

 
  
    if(api_url.includes("https")) 
  {
 cutted = api_url.replace("https://", "")
    if(cutted.includes("/"))
     {
    console.log("CHECK SUCCESSFULL. API URL IS VALID.");
 update_list(api_url, secs)
    return `${api_url}`;
     }
  } else if(api_url.includes("http")) {
     cutted = api_url.replace("http://", "")
     if(!cutted.includes("/"))
     {
       console.log("CHECK SUCCESSFULL. API URL IS VALID.");
 update_list(api_url + "/", secs)
    return `${api_url}/`;
     }
    
  }
}