let request = require("request");
let cheerio = require("cheerio");

let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results";
request(url, cb)

function cb(err, response, html) {
    let chSelector = cheerio.load(html);
    let element = chSelector("a[data-hover='Scorecard']");
    for(let i = 0; i < element.length; i++) {
        let link = chSelector(element[i]).attr("href");
        let fulllink = "https://www.espncricinfo.com" + link;
        console.log(fulllink);
    }

}