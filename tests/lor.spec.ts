//import { random } from 'lodash';

import { test } from '@playwright/test';

test.beforeEach('Enter password to enable checkout function', async ({page}) => {
  await page.goto('https://shop.dev.lornajane.com.au/password');

  await page.locator('.password-link').click();
  await page.locator('input#Password').fill('miewhi');
  await page.locator('form button.password-button[name="commit"]').click();
});
/*
test('Make random purchase', async ({ page }) => {
  await page.goto('https://current.200f94554bcd.host.shipcode.io/');
  await page.locator('dialog').locator('[src="https://assets.shipcode.com/17c5ccde-0de4-4e25-a741-4a5353bcccfa.svg"]').click();

  //var clothing = page.getByRole('link', { name: 'clothing' });
  var clothing = page.getByRole('link', { name: 'collections' });
  clothing.hover();
  var categoryDialog = page.locator('dialog');

  var cats = categoryDialog.locator('[href*="/product-index/"]');
  
  var cat = cats.nth(0);
  await cat.click();

  let box = await categoryDialog.boundingBox();
  await page.mouse.move(box?.width || 0 + 10, box?.height || 0 + 10);

  var pdpPages = page.locator('[href*="/product-details/"]');

  var pdp = pdpPages.nth(1);
  await pdp.click();

  await page.locator('main.app-content').getByText('add to bag').click();
  await page.waitForResponse(/graphql/i);
  await page.locator('[src="https://assets.shipcode.com/17c5ccde-0de4-4e25-a741-4a5353bcccfa.svg"]').click();
  await page.locator('[href*="/bag"]:visible').click();
  
  await page.waitForResponse(/graphql/i);

  await page.getByRole('button', {name : 'proceed to checkout'}).click();
  await page.locator('input#email').fill('dat.phung@amblique.com');
  await page.locator('input[name="address"]').fill('16 Wynyard Street');
  await page.locator('div#viewResults').getByRole('button').nth(0).click();
  await page.getByPlaceholder('First name').fill('Dat');
  await page.getByPlaceholder('Last name').fill('Phung');
  await page.getByPlaceholder('Phone').fill('(03) 7010 5678');
  
  await page.frameLocator('.card-fields-iframe[name*="card-fields-number"]').locator('input#number').fill('4111111111111111');
  await page.frameLocator('.card-fields-iframe[name*="card-fields-expiry"]').locator('input#expiry').fill('0330');
  await page.frameLocator('.card-fields-iframe[name*="card-fields-verification_value"]').locator('input#verification_value').fill('737');
  await page.frameLocator('.card-fields-iframe[name*="card-fields-name"]').locator('input#name').fill('Dat Phung');

  await page.locator('input#RememberMe-RememberMeCheckbox').uncheck();

  await page.waitForResponse(/graphql/i);
  await page.getByRole('button', {name: 'pay now'}).click();


  //--------------------------------------------
  await page.waitForURL(/thank-you/i);

  await expect(page).toHaveTitle(/thank you for your purchase/i);
  
});
*/


test('Select random purchasable product', async ({page}) => {
  await page.goto('https://current.200f94554bcd.host.shipcode.io/product-details/supreme-comfort-no-chafe-aloe-pocket-full-length-leggings/49485568049462');
  //await page.goto('https://current.200f94554bcd.host.shipcode.io/product-details/supreme-comfort-no-chafe-aloe-pocket-full-length-leggings/49485567951158');
  //await page.goto('https://current.200f94554bcd.host.shipcode.io/product-details/supreme-comfort-no-chafe-aloe-pocket-full-length-leggings/49485567983926');
  
  await page.waitForLoadState('domcontentloaded');
  var addButton =  page.locator('main.app-content').getByText('add to bag');

  try {
    await addButton.waitFor({timeout: 500})
  } catch(exp) {};

  let isVisible = await addButton.isVisible();
  var variants = page.locator('div:visible').and(page.getByText(/^XXS$|^XS$|^S$|^M$|^L$|^XL$|^XXL$/));
  await variants.locator('../../..').waitFor();
  let noOfVariants = await variants.count(), index = 0;

  console.log({noOfVariants})
  while(!isVisible && index < noOfVariants) {
    let oldUrl = page.url();

    await page.locator('div:visible').and(page.getByText(/^XXS$|^XS$|^S$|^M$|^L$|^XL$|^XXL$/)).nth(index).click()

    try {
      await page.waitForURL((newUrl) => newUrl.toString() == oldUrl, {timeout: 500});
      await page.waitForResponse(/graphql/i, {timeout: 1500});
    } catch(exp) {}
    
    let addButton = page.locator('main.app-content').getByText('add to bag');
    try {
      await addButton.waitFor({timeout: 5000})
    } catch(exp) {};
    isVisible = await addButton.isVisible();
    console.log({isVisible})
    index++;
  }

  await page.waitForTimeout(30000)
});

