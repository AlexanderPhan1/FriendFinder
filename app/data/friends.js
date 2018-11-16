const fs = require("fs");
const path = require("path");
var raw = fs.readFileSync(path.join(__dirname, "package.json"));
var friends = JSON.parse(raw);
module.exports = friends;