const puppeteer = require('puppeteer-core');
const browserWSEndpoint = require('./chrome_ws_endpoint');

(async () => {
    const browser = await puppeteer.connect({ browserWSEndpoint })
    const page = await browser.newPage()
    await page.goto('https://example.com')
    //
    const dimensions = await page.evaluate(() => {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
            deviceScaleFactor: window.devicePixelRatio
        }
    })
    console.log('Dimensions:', dimensions)
    await page.close()
    process.exit()
})()
