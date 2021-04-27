let request = require("request");
let cheerio = require("cheerio");
let path = require("path");

let url = "https://leetcode.com/";
request(url, function cb(err, res, html) {
    if (err) {
        console.log(err);
    } else {
        goinside(html);
    }
});


function goinside(html) {
    let selTool = cheerio.load(html);
    let explorepage = selTool(".content > a");
    console.log(explorepage.length)
}