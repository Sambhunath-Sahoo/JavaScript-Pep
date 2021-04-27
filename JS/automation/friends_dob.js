const puppeteer = require("puppeteer");
let cTab;

(async function fn() {
    try {
        let browserOpenPromise = puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ["--start-maximized"]
        });
        let browser = await browserOpenPromise;
        let allTabsArr = await browser.pages();
        cTab = allTabsArr[0];

        await cTab.goto("https://www.facebook.com/");
        await cTab.type("input[type='text']", "9078164602", { delay: 200 });
        await cTab.type("input[type='password']", "7381976641", { delay: 200 });
        await cTab.click("button[value='1']");
        await waitAndClick(".k4urcfbm.g5gj957u.buofh1pr.j83agx80.ll8tlv6m a");




    } catch (err) {
        console.log(err);
    }
})();


async function waitAndClick(selector) {
    try {
        await cTab.waitForSelector(selector, { visible: true });
        await cTab.click(selector);
        console.log("done");
    }
    catch (err) {
        return new Error(err);
    }
}