const puppeteer = require("puppeteer")
const cheerio = require('cheerio');

const scrappingResilts = [
    {
        title: "123"
    }
]

async function main(){


    function sleep(ms) {
        return new Promise((resolve) => {
        setTimeout(resolve, ms);
        });
    }   

    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto(
        "https://chaturbate.com/auth/login/"
    );


    //await page.click('.login-link');

    await page.$eval('input[name="username"]', el => el.value = 'Magic_hach');
    await sleep(2000);
    await page.$eval('input[name="password"]', el => el.value = 'wwsedrf123');
    await sleep(2000);
    await page.click('input.button');
    await sleep(2000);
    await page.goto(
        "https://chaturbate.com/b/magic_hach/"
    );

    

    await sleep(2000);
    await page.click('#close_broadcast_terms');
    await sleep(2000);
    
    await page.click('#obs_info');
    await sleep(1000);

   
    const html = await page.content();
    const $ = cheerio.load(html);
    $("#obs_token").each((index,element) => console.log($(element).val()))

    await sleep(2000);
    await page.$eval('input#chat_input', el => el.value = 'Рубен нооб gn');
    await page.click('.send_message_button');
    await sleep(2000);
    await page.$eval('input#chat_input', el => el.value = 'VVV fn');
    await page.click('.send_message_button');
    await sleep(1000);
    
    
    $(".text p").each((index,element) => console.log($(element).text()))
    
    
    //$(".purecolor").each((index,element) => console.log($(element).text()))
    
    // await page.evaluate(() => {
    //     document.querySelector('#close_entrance_terms').click();

  
    //   });
    //   await sleep(2000);
    //   await page.evaluate(() => {
    //     document.querySelector('.login-link').click();
    //   });
      
    // const html = await page.content();

    // const $ = cheerio.load(html);

    
    //await page.$eval('input[name=search]', el => el.value = 'Adenosine triphosphate');

    
    //await page.click('input[type="submit"]');

    //$(".purecolor").each((index,element) => console.log($(element).text()))

    //$(".result-title").each((index,element) => console.log($(element).text()));
    //console.log(document.querySelector('.username').nextSibling.textContent);
    //console.log($('div').textContent);
}

main()