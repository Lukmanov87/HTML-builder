const { createReadStream } = require("fs");
const path = require("path");
const { stdout } = process;

const pathToFile = path.join(__dirname, "text.txt");

const rs = createReadStream(pathToFile);
rs.on("data", (data) => stdout.write(data));
