const{test,expect}=require('@playwright/test');


test('has title',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
   console.log(await page.title());
   await expect(page).toHaveTitle(/LoginPage Practise/);

   await page.locator('#username').fill('rahulshettyacademy');
   page.getByLabel('Password:', { exact: true }).fill('Learning@830$3mK');
   await page.getByRole('checkbox', { name: /I Agree to the terms and conditions/ }).check();
   await page.getByRole('button', { name: 'Sign In' }).click();
});