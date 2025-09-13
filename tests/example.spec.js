const { test, expect } = require('@playwright/test');

test('CNN Español homepage has title', async ({ page }) => {
  await page.goto('https://cnnespanol.cnn.com/');
  await expect(page).toHaveTitle(/CNN en Español/i);
});
