const { realpath } = require("fs");
const { removeAllListeners } = require("process");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

