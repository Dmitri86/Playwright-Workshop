import {Page} from '@playwright/test'

export class Button{
    private page: Page;

    constructor(page: Page){
        this.page = page;   
    }

    async click(selector: string) : Promise<void>{
        await this.page.click(selector);
    }
}