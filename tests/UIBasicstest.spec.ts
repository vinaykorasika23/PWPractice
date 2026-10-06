import { test, expect } from '@playwright/test';


test('first playwright test  @smoke',async({browser})=>{
 const context=await browser.newContext();
 const page=await context.newPage();
 await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
 console.log(await page.title());
 //await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');

 await page.locator('#username').fill('rahulshettyacademy');
 await page.locator('#password').fill('Learning@830$3mK2');
 const label=await page.locator('.span.radiotextsty');
 await page.locator('#signInBtn').click();
 

})


test('Nagative playwright test',async({browser})=>{
   const context=await browser.newContext();

 const page=await context.newPage();
 await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
 console.log(await page.title());
 //await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');

 await page.locator('#username').fill('rahulshettyacademy');
 await page.locator('#password').fill('Learning');
 const label=await page.locator('.span.radiotextsty');
 await page.locator('#signInBtn').click();
 console.log(await page.locator('[style*="block"]').textContent());
 await expect(await page.locator('[style*="block"]')).toContainText('Incorrect');
 

})

test('second playwright test  @smoke',async({browser,page})=>{
 await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

})