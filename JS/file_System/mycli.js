

let filehelper = require("./commands/help.js");
let input = process.argv.slice(2);

let command = input[0];

switch(command){
    case "view":

        break;
    case "organize":

        break;
    case "help":
        filehelper.fn();
        break;

    default:
        console.log("wrong input");
        break;
}