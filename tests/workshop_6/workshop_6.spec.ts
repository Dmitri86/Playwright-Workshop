import { test, expect } from '@playwright/test'
import { error } from 'console';

const testDate = {
    firstName: 'John',
    lastName: 'Doe',
    address: '123 Main St',
    number: '45678997'
}

test.describe('User Registration Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('file://C:/Learning/Type%20Script/Playwright%20Shpak/tests/workshop_6/index.html');
    })
    test.only('Register with valid date', async ({ page }) => {
        await page.fill('#firstName', testDate.firstName);
        await page.fill('#lastName', testDate.lastName);
        await page.fill('#address', testDate.address);
        await page.fill('#number', testDate.number);
        await page.click('#register');

        const firstNameText = await page.locator('#displayFirstName').textContent();
        const lastNameText = await page.locator('#displayLastName').textContent();
        const addresssText = await page.locator('#displayAddress').textContent();
        const numberText = await page.locator('#displayNumber').textContent();

        expect(firstNameText).toEqual(testDate.firstName);
        expect(lastNameText).toEqual(testDate.lastName);
        expect(addresssText).toEqual(testDate.address);
        expect(numberText).toEqual(testDate.number);

        await page.waitForTimeout(3000);
    });

    test.only('Register with empty fields', async ({ page }) => {
        await page.fill('#firstName', testDate.firstName);
        await page.fill('#lastName', testDate.lastName);
        await page.click('#register');
        const error = await page.locator('#error p').textContent();
        await page.waitForTimeout(3000);

        expect(error).toBe('Please fill in all fields.');

        await page.waitForTimeout(3000);
    });

    test.only('Register with all fields empty', async ({ page }) => {
        await page.click('#register');
        const error = await page.locator('#error p').textContent();
        expect(error).toBe('Please fill in all fields.');

        await page.waitForTimeout(3000);
    });
})