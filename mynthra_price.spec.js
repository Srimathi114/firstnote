const { test, expect } = require('@playwright/test');

test('mynthra price minimum', async ({ page }) => {
    await page.goto('https://www.myntra.com/?utm_source=dms_google&utm_medium=dms_searchbrand_cpc&utm_campaign=dms_google_searchbrand_cpc_Search_Brand_Myntra_Brand_India_BM_TROAS_SOK_New&gad_source=1&gad_campaignid=20443628324&gbraid=0AAAAADoxBh6yvrPw3u5y84qy6JxH2-JcB&gclid=Cj0KCQjwsdnNBhC4ARIsAA_3hegzb8FMNRQUz4HEENGEqENgq5p1LvJqzBmoyTBhEC7UmfAgMSqzLdIaAmLAEALw_wcB');
    await page.locator('//div[@class="desktop-navLinks"]//div//div//a[text()="Kids"]').hover();
    await page.locator('//li[@class="desktop-oddColumnContent"]//a[@href="/boy-tshirts"]').click();
    await page.waitForTimeout(3000);
    const price = await page.locator('//li[@class="product-base"]//child::span[@class="product-discountedPrice"]');
    const counts = await price.count();

    for (let i = 0; i < counts; i++) {
        console.log('price:', await price.nth(i).textContent())
    }


    //minimum price 
    const prices = await page.$$eval('.product-base .product-discountedPrice', items => {
        const result = [];

        for (let i = 0; i < items.length; i++) {
            const price = parseInt(items[i].innerText.replace(/[^\d]/g, ''));
            result.push(price);
        }

        return result;
    });

    const minPrice = Math.min(...prices);
    console.log("Minimum Price:", minPrice);
});


console.log("gitcheck up")