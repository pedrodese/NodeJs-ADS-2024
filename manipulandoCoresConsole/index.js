var clc = require("cli-color");
var error = clc.red.bold;
var warn = clc.yellow;
var notice = clc.blue;
var clc = require("cli-color");

var msg = clc.xterm(202).bgXterm(236);

console.log(msg("Orange text on dark gray background"));

console.log(clc.green("mensagem verde"));
console.log(clc.red("mensagem vermelha"));
console.log(clc.blue("mensagem blue"));
console.log(clc.yellow("mensagem yellow"));
console.log(clc.red("red " +  clc.blue("blue") +" red " ));
console.log(clc.red("red") + " plain " + clc.blue("blue"));
console.log(clc.red.bgWhite.underline("Underlined red text on white background."));
console.log(clc.red("text in red"));

console.log(error("Error"));
console.log(warn("Warning"));
console.log(notice("Notice"));
