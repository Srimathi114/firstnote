const { test, expect} = require('@playwright/test') ;

test('login page', async ({page})  =>{
await page.goto('https://www.facebook.com/')
})