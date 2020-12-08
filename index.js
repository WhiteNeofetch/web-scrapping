const puppeteer = require("puppeteer")

const browser = await puppeteer.launch({headless:false});

const page = await browser.newPage();
await page.goto('https://works.itdevv.com/test.html');

await page.evaluate(() => {
   console.log(document.querySelector('.username').nextSibling.textContent);
});

console.log(textEl);
// await page.screenshot({path: 'screenshot.png'});

await browser.close();

const browser = await puppeteer.launch({headless:false});
const page = await browser.newPage();
await page.goto(
    "https://chaturbate.com/"
);

await page.evaluate(() => {
    document.querySelector('#close_entrance_terms').click();
  });

const html = await page.content();

const $ = cheerio.load(html);

$(".result-title").each((index,element) => console.log($(element).text()));
