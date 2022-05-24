const { createWriteStream } = require("fs");
const { join } = require("path");
const { stdout, stdin } = process;

const output = createWriteStream(join(__dirname, "text.txt"));

stdout.write("Enter the text:\n");

stdin.on("data", (data) => {
  //  Принудительное завершение при вводе ключевого слова **exit**
  if (data.toString().trim() === "exit") {
    process.exit();
  }

  output.write(data);
});

//  Принудительное завершение при нажатии `ctrl + c`
process.on("SIGINT", () => {
  process.exit();
});

process.on("exit", () => console.log("Goodbye!"));
