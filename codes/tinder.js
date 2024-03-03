const puppeteer = require('puppeteer-core');
const browserWSEndpoint = require('./chrome_ws_endpoint');

(async () => {
    try {
        const browser = await puppeteer.connect({ browserWSEndpoint });
        // 请手动打开网址，并且只有一个tab
        const page = (await browser.pages())[0];
        const title = await page.title();
        console.log(title, page.url());
    } catch (error) {
        console.error(error)
    }

    // const profileCardSelector = '.profileCard__card';
    // const profileCardElement = await page.waitForSelector(profileCardSelector);
    // console.log(2)
 
    // const page = await browser.newPage();
    // await page.goto('');

    // open DevTools ????
    // puppeteer/packages/puppeteer-core/src/common/USKeyboardLayout.ts
    // page.keyboard.down('MetaLeft');
    // page.keyboard.down('ContextMenu');
    // page.keyboard.down('I');
    // page.keyboard.up('I');
    // page.keyboard.up('ContextMenu');
    // page.keyboard.up('MetaLeft');




    // const profileCardHeight = await page.evaluate(() => {
    //     return document.querySelector(profileCardSelector).clientHeight;
    // });
    // console.log(profileCardHeight);

    // await page.close();
    // process.exit();
})()