import { test, expect } from '@playwright/test'

const selector = {
    firstName: '#firstName',
    age: '#age',
    student: '#isStudent'
}

test.describe('Variable Declarations and Types', () => {
    let firstName: string = 'John';
    let age: number = 30;
    let isStudent: boolean = false;

    test.only('Declaration and Types', async ({ page }) => {
        await page.goto('file:///C:/Learning/Type%20Script/Playwright%20Shpak/tests/workshop_7/index.html');
        await page.fill(selector.firstName, firstName);
        await page.fill(selector.age, age.toString());
        await page.check(selector.student);
        await page.click('#applyData');

        expect(await page.textContent('#displayFirstName')).toBe(firstName);
        expect(await page.textContent('#displayAge')).toBe(age.toString());
        expect(await page.isChecked('#isStudent')).toBeTruthy();
    })
});

test.describe('Type Definitions and Interfeces', () => {
    type User = {
        firstName: string,
        age: number,
        isStudent: boolean
    }
    let user: User = {
        firstName: 'Jane',
        age: 25,
        isStudent: true
    }
    test.only('Type Def and Inrefaces', async ({ page }) => {
        await page.goto('file:///C:/Learning/Type%20Script/Playwright%20Shpak/tests/workshop_7/index.html');
        await page.fill(selector.firstName, user.firstName);
        await page.fill(selector.age, user.age.toString());
        await page.check(selector.student);
        await page.click('#applyData');

        expect(await page.textContent('#displayFirstName')).toBe(user.firstName);
        expect(await page.textContent('#displayAge')).toBe(user.age.toString());
        expect(await page.isChecked('#isStudent')).toBeTruthy();


    });
})