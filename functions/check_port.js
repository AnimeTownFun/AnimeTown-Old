module.exports = async function (port){
  console.log("CHECKING PORT...");
  try{
    let portx = isNaN(port);
    if(portx === false)
    {
      console.log("CHECK SUCCESSFULL. PORT IS VALID.")
      return Number(port);
    } else {
      console.log("CHECK SUCCESSFULL. PORT IS INVALID");
      return Number(port);
    }
    
    
  } catch(e) {
    console.log(e)
  }
}