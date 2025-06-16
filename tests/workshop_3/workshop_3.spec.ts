import { test, expect } from "@playwright/test"

test.skip('Advanced Interaction', async ({ page }) => {
    await page.goto('file://C:/Learning/Type%20Script/Typescript%20for%20Test%20Automation%20course/tests/workshop_3/index.html');
    await page.hover('#hover-me');
    expect(await page.textContent('#hover-me')).toContain('Text Changed!');

    await page.click('#context-menu', { button: 'right' });
    expect(await page.getByText('Context Menu Appears!').textContent()).toContain('Context Menu Appears!');

    await page.dblclick('#double-click');
    expect(await page.locator('img').count()).toBe(1);

    await page.waitForTimeout(3000);
});

test.skip('Drag and Drop', async ({ page }) => {
    await page.goto('file://C:/Learning/Type%20Script/Typescript%20for%20Test%20Automation%20course/tests/workshop_3/index.html');
    // await page.dragAndDrop('.drag-source', '.drop-target');
    // expect(await page.textContent('.drop-target')).toContain('Success');
    await page.locator('.drag-source').hover();
    await page.mouse.down();
    await page.locator('.drop-target').hover();
    await page.mouse.up();
    expect(await page.textContent('.drop-target')).toContain('Success');
    await page.waitForTimeout(3000);
});

test.only('Handling iframe', async ({ page }) => {
    await page.goto('file://C:/Learning/Type%20Script/Typescript%20for%20Test%20Automation%20course/tests/workshop_3/index.html');
    const iframe = page.frame({ name: 'iframeName' });
    const inputSelector = '#iframe-input';
    if (iframe) {
        await iframe?.type(inputSelector, 'Hello Playwright');
        expect(await iframe?.locator(inputSelector).inputValue()).toContain('Hello Playwright');
    }
    else {
        console.error('iframe is not available');
    }

    await page.waitForTimeout(3000);
});

