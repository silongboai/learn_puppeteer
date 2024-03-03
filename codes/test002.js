const puppeteer = require('puppeteer-core');
const browserWSEndpoint = require('./chrome_ws_endpoint');

(async() => {
    const browser = await puppeteer.connect({ browserWSEndpoint });
    const page = await browser.newPage();
    await page.goto('https://www.chromestatus.com', {waitUntil: 'networkidle2'});
    await page.pdf({path: 'tmp/page.pdf', format: 'a4'});

    await page.close();
    process.exit();
})();
