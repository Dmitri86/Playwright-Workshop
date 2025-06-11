import {test} from 'playwright/test'

test('Basic Navigation', async({page}) => {
    await page.goto('https://gitlab.com');
    await page.waitForTimeout(3000);
    await page.reload();
})

test.skip('Interacting with Element on Gitlab', async({page}) => {
    await page.goto('https://gitlab.com');
    await page.locator("//section[not(@class='hero')]//button[text()='Try for free']").click();
    // await page.locator("[data-testId='new-user-first-name-field']").fill("John1");
    // await page.locator("[data-testId='new-user-last-name-field']").fill("Snow1");
    await page.getByTestId('new-user-first-name-field').fill("John1");
    await page.getByTestId('new-user-first-last-field').fill("Snow1");

    await page.waitForTimeout(3000);
})

test.only('Using Various Locator Methods', async ({page}) => {
    await page.goto('https://gitlab.com');
    // await page.getByRole('link', {name: 'Sign In'}).click();
    await page.click(':has-text("Sign in")');

    await page.waitForTimeout(3000);
})