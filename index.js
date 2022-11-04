const { exec } = require("child_process");

try {
  require("./app.js")();
} catch (err) {
  console.log(err);
  process.exit &&
    exec("npm start", (error, stderr, stdout) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    });
}
