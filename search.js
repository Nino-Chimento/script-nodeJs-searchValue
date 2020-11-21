// argoments
const path = process.argv[2];
const column = process.argv[3];
const value = process.argv[4];
// argoments

("use strict");

const fs = require("fs");

fs.readFile(path, "utf8", function (err, data) {
  const dataArray = data.split(/\r?\n/);
  const dataArrayOutput = [];
  for (let index = 0; index < dataArray.length; index++) {
    const rowCell = dataArray[index].split(",");
    if (rowCell[column] === value) {
      dataArrayOutput.push(dataArray[index]);
    }
  }
  console.log(dataArrayOutput);
});
