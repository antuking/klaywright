/*
import {
  Page,
  test,
} from '@playwright/test';

test.describe('Select a random product from a ramdom category then, making a purchase with it', async () => {
    let page: Page;

    test.beforeAll(async ({browser}) => {
        page = await browser.newPage();

        await page.goto('https://shop.dev.lornajane.com.au/password');

        await page.locator('.password-link').click();
        await page.locator('input#Password').fill('miewhi');
        await page.locator('form button.password-button[name="commit"]').click();
    })

    test('Select a radom category', async () => {
        await page.goto('https://current.200f94554bcd.host.shipcode.io/');
        await page.locator('dialog').locator('[src="https://assets.shipcode.com/17c5ccde-0de4-4e25-a741-4a5353bcccfa.svg"]').click();

        var clothing = page.getByRole('link', { name: 'clothing' });
        clothing.hover();
        var categoryDialog = page.locator('dialog');

        var cats = categoryDialog.locator('[href*="/product-index/"]');
        
        var cat = cats.nth(0);
        await cat.click();

        let box = await categoryDialog.boundingBox();
        await page.mouse.move(box?.width || 0 + 10, box?.height || 0 + 10);
    })
})
    */
