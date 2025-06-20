import { Page } from '@playwright/test';
import { AbstractBasePage } from './AbstractPage';
import { Input } from './Input';
import { Button } from './Button';

export class PageObject extends AbstractBasePage {
    private button: Button;
    private input: Input;
    readonly firstNameInputSelector = '#firstName';
    readonly ageInputSelector = '#age';
    readonly isStudentSelector = '#isStudent';
    readonly applyButtonSelector = '#applyData';


    readonly displayFirstNameSelector = '#displayFirstName';
    readonly displayAgeSelector = '#displayAge';
    readonly displayStudentSelector = '#displayIsStudent';

    constructor(page: Page) {
        super(page);
        this.button = new Button(page);
        this.input = new Input(page);
    }

    async open(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async applyData(): Promise<void> {
        await this.button.click(this.applyButtonSelector);
    }

    async fillFirstName(value: string): Promise<void> {
        await this.input.setInput(this.firstNameInputSelector, value);
    }

    async fillAge(value: string): Promise<void> {
        await this.input.setInput(this.ageInputSelector, value);
    }

    async checkIsStudent(): Promise<void> {
        await this.page.check(this.isStudentSelector);
    }

    async text(selector: string): Promise<string | null> {
        const textContent = await this.page.textContent(selector);
        return textContent;
    }

    async WaitTimeOut(timeout: number) : Promise<void>{
        await this.page.waitForTimeout(timeout);
    }
}