let fs = require("fs");
let path = require("path");

function viewhelper(dirname, mode) {
    if (mode == "tree") {
        viewtree(dirname, "");
    } else if (mode == "flat") {
        viewflat(dirname);
    } else {
        console.log("wrong mode type of commands");
    }
}


function viewflat(src) {
    let isfile = fs.lstatSync(src).isFile();
    if (isfile == true) {
        // for file
        console.log(src + "*");
    } else {
        // for folder
        console.log(src);
        let fdirnames = fs.readdirSync(src);
        for (let i = 0; i < fdirnames.length; i++) {
            let child = fdirnames[i];
            child = path.join(src, child);
            viewflat(child);
        }
    }
}


function viewtree(src, indent) {
    let isfile = fs.lstatSync(src).isFile();
    if (isfile == true) {
        // for file
        console.log(indent, path.basename(src), "*");
    } else {
        // for folder
        console.log(indent, path.basename(src));
        let fdirnames = fs.readdirSync(src);
        for (let i = 0; i < fdirnames.length; i++) {
            let child = fdirnames[i];
            child = path.join(src, child);
            viewtree(child, indent + "\t");
        }
    }
}

let input = process.argv.slice(2);
viewhelper(input[0], input[1]);

