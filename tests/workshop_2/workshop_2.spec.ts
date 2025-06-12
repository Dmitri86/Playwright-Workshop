import {expect, test} from '@playwright/test'

test.skip('Automation Form Submission', async({page}) => {
    const task : string = "learn playwrigt";

    await page.goto('https://demo.playwright.dev/todomvc');
    /*
    await page.locator('.new-todo').fill(task);
    await expect("[data-testId='todo-title']").toContain(task);
    */

    const newTodo = page.getByPlaceholder('What needs to be done?');
    await newTodo.fill(task);
    await newTodo.press('Enter');
    await newTodo.fill('clean room');
    await newTodo.press('Enter');

    await page.waitForTimeout(3000);

    const firstTodo = page.getByTestId('todo-item').nth(0);
    await firstTodo.getByRole('checkbox').check();
    await expect(firstTodo).toHaveClass('completed');

    await page.waitForTimeout(3000);

    const secondTodo = page.getByTestId('todo-item').nth(1);
    await expect(secondTodo).not.toHaveClass('completed');
});

test.only('Hadling Form', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    const placeholder = '[placeholder="What needs to be done?"]';
    await page.fill(placeholder, 'learn playwright');
    await page.locator(placeholder).press('Enter');

    const checkbox = page.locator('.toggle');
    await checkbox.check();
    await page.waitForTimeout(3000);
})