const fs = require('fs');
const path = require('path');
const { stdout } = process;

const pathToFile = path.join(__dirname, 'text.txt');

const rs = fs.createReadStream(pathToFile);
rs.on('data', data => stdout.write(data));