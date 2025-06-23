import {test, expect} from '@playwright/test'

test.only('Automation Form Submission @githubAction', async({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc/');

    const newToDo = await page.getByPlaceholder('What needs to be done?');
    await newToDo.fill('John Doe');
    await newToDo.press('Enter');

    await newToDo.fill('JJ Doe');
    await newToDo.press('Enter');

    const firstTodo =  page.getByTestId('todo-item').nth(0);
    await firstTodo.getByRole('checkbox').check();

    const secondTodo =  page.getByTestId('todo-item').nth(1);
    await expect(firstTodo).toHaveClass('completed');
    await expect(secondTodo).not.toHaveClass('completed');
});

test.only('Handling Form @githubAction', async({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc/');
    await page.fill('[placeholder="What needs to be done?"]', 'John Doe');
    await page.locator('[placeholder="What needs to be done?"]').press('Enter');

    const checkbox =  page.locator('.toggle');
    await checkbox.check();
})