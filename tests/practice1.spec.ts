import { test, expect } from '@playwright/test';


test('Login practice',async({browser})=>{
  let username='rahulshettyacademy';
  let password='Learning@830$3mK2';
   const context=await browser.newContext();
  
  const page=await context.newPage();
   await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
   await page.locator('#username').fill(username);
   await page.locator("[type='password'].form-control").fill(password);
   // This targets the checkbox inside the label that contains your text
    await page.locator('label:has-text("I Agree to the") input[type="checkbox"]').click();

   await page.locator('.btn.btn-info.btn-md').click();




})


test('Login practice locators',async({browser})=>{

   const context=await browser.newContext();
   const page=await context.newPage();
   await page.goto('https://sauce-demo.myshopify.com/')

   await page.getByPlaceholder('Search').click();
   await page.getByPlaceholder('Search').fill('Noir jacket');
   await page.getByPlaceholder('Search').press('Enter');
   const searchResult=await page.getByText('Showing results for',{exact:false})
   /*const spanValue=await searchResult.locator('span').textContent();
   await expect(spanValue.trim()).toEqual('Noir jacket');*/
   await expect(searchResult.locator('span')).toHaveText('Noir jacket')


   const searchForm =  page.getByRole('search');

    const searchBox = await searchForm.getByRole('textbox');
   await searchBox.fill('Black heels');
    await page.getByPlaceholder('Search').press('Enter');
     const searchResult1= page.getByText('Showing results for',{exact:false})
  await expect(searchResult1.locator('span')).toHaveText('Black heels')





})


test('test for the add cart and validations',async({browser})=>{

   const context=await browser.newContext();
   const page=await context.newPage();
   await page.goto('https://sauce-demo.myshopify.com/')

   await page.getByPlaceholder('Search').click();
   await page.getByPlaceholder('Search').fill('Striped top');
   await page.getByPlaceholder('Search').press('Enter');
   const searchResult=page.getByText('Showing results for',{exact:false})
   /*const spanValue=await searchResult.locator('span').textContent();
   await expect(spanValue.trim()).toEqual('Noir jacket');*/
   await expect(searchResult.locator('span')).toHaveText('Striped top')
   await expect(page.locator("a[id='product-1'] h4")).toHaveText('£50.00');
   await page.getByRole('img', { name: 'Striped top' }).click();
await page.locator('input.btn.add-to-cart:visible').click();
const checkoutLink = page.getByRole('link', { name: 'Check Out' });
await expect(checkoutLink).toBeVisible();
await expect(checkoutLink).toBeEnabled();

await checkoutLink.click();
const noteBox = page.getByPlaceholder('Add a note to your order...');

await expect(noteBox).toBeVisible();
await noteBox.fill('This is a test order');
await page.locator('#checkout')


   





})

test('self practice test',async({browser})=>{



     const context=await browser.newContext({viewport:{width:800,height:600}});
   const page=await context.newPage();
  

   await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
   await 
   await page.getByPlaceholder('Search').fill('Striped top')
   //await page.getByText('Search').press('Enter')
   await page.getByPlaceholder('Search').press('Enter');
   await expect(page.locator('section.product-grid h3')).toHaveText('Striped top')
   await expect(page.locator('section.product-grid h4')).toHaveText('£50.00')
   await page.getByAltText('Striped top').click()
   await expect(page.locator('[itemprop="name"]')).toHaveText('Striped top')
   await page.locator('.btn.add-to-cart').click();
   const checkoutLink = page.locator('#minicart a.checkout');
await expect(checkoutLink).toBeVisible();
await expect(checkoutLink).toHaveAttribute('href', '/cart');
await Promise.all([
  page.waitForURL('**/cart'),
  checkoutLink.click()
]);

await checkoutLink.scrollIntoViewIfNeeded();

await checkoutLink.click({ force: true });
   await page.locator('[name="updates[]"]').fill('2');
   await page.locator('[name="updates[]"]').press('Tab');
   await expect(page.getByRole('heading', { name: 'Total £100.00' })).toBeVisible();
   await page.getByPlaceholder('Add a note to your order...').fill('This is a test order')
   await page.getByPlaceholder('Add a note to your order...').press('Tab');
   await page.locator('[name="Update"]').click();
   await page.locator('[name="checkout"]').click()


})