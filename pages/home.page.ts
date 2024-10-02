import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { BaseScenario } from "./base.scenario";


export class HomePage extends BasePage {
    constructor(public page: Page, readonly scenario: BaseScenario) {
        super(page, scenario);
    }

    // Locator section
    get lblMenuItem(): Locator { return this.page.locator('ul li.oxd-main-menu-item-wrapper'); }
    
}