const puppeteer = require('puppeteer-core');
const browserWSEndpoint = require('./chrome_ws_endpoint');

(async() => {
    const browser = await puppeteer.connect({ browserWSEndpoint });
    console.log(await browser.version());
    process.exit();
})();
