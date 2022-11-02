const chalk = require("chalk");
const Coral = chalk.hex("#FF7F50");

module.exports = async function (port) {
  console.log(chalk.yellow("CHECKING PORT..."));
  try {
    let portx = isNaN(port);
    if (portx === false) {
      console.log(Coral("CHECK SUCCESSFULL. PORT IS VALID."));
      return Number(port);
    } else {
      console.log(chalk.red("CHECK SUCCESSFULL. PORT IS INVALID"));
      return Number(port);
    }
  } catch (e) {
    console.log(e);
  }
};
