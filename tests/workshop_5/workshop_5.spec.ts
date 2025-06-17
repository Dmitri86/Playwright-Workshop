import { test, expect } from "@playwright/test"

test.skip('Open new window and navigate back', async ({ context, page }) => {
    await page.goto('file://C:/Learning/Type%20Script/Playwright%20Shpak/tests/workshop_5/index.html');
    const pagePromise = context.waitForEvent('page');
    await page.click('#openNewWindow');
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    console.log(await newPage.title());
    await expect(newPage.getByRole('heading', { name: "Welcome to the New Page" })).toBeVisible();

    await newPage.waitForTimeout(3000);
});

test.skip('Add Cookie', async ({ page }) => {
    await page.goto('file://C:/Learning/Type%20Script/Playwright%20Shpak/tests/workshop_5/index.html');
    await page.click('#setCookie');
    const cookies = await page.context().cookies('file://C:/Learning/Type%20Script/Playwright%20Shpak/tests/workshop_5/index.html');
    const sessionCookies = cookies.find(cookies => cookies.name === 'session');
    console.log('Session Cookies:', sessionCookies);
    await expect(sessionCookies).toBeDefined();

    await page.waitForTimeout(3000);
});

test.only('Delete Cookies', async ({ page }) => {
    await page.goto('file://C:/Learning/Type%20Script/Playwright%20Shpak/tests/workshop_5/index.html');
     await page.click('#setCookie');
    const cookies = await page.context().cookies('file://C:/Learning/Type%20Script/Playwright%20Shpak/tests/workshop_5/index.html');
    const sessionCookies = cookies.find(cookies => cookies.name === 'session');
    console.log('Added cookies ', sessionCookies)
    expect(sessionCookies?.value).toBe('12345');
    await page.click('#deleteCookie');

    const deletedCookies = await page.context().cookies('file://C:/Learning/Type%20Script/Playwright%20Shpak/tests/workshop_5/index.html');
    const deletedSessionCookies = deletedCookies.find(cookies => cookies.name === 'session');
    console.log('Deleted cookies ', deletedSessionCookies);
    expect(deletedSessionCookies).toBeUndefined();

    await page.waitForTimeout(3000);
});