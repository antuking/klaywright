import { Locator, Page } from "@playwright/test";
import { BaseScenario } from "./base.scenario";
import { expect } from '../fixtures/base.test';
import { testData } from "../utils/test.data";

export class BasePage {
    private dataMap = new Map();
    readonly lblPageHeader: Locator;
    readonly lblFormHeader: Locator;

    constructor(public page: Page, readonly scenario: BaseScenario) {
        this.lblPageHeader = page.locator('header.oxd-topbar h6');
        this.lblFormHeader = page.locator('.oxd-layout-context h6');
    }

    async goTo() {
        await this.page.goto(testData.baseUrl);
        await this.waitForPageIsReady();
        console.log(await this.page.title());
    }

    async verifyPageHeaderTitle(title: string): Promise<void> {
        await this.waitForPageIsReady();
        await expect(this.lblPageHeader).toHaveText(title);
    }
    
    async verifyFormHeaderTitle(title: string): Promise<void> {
        await this.waitForPageIsReady();
        await expect(this.lblFormHeader).toHaveText(title);
    }

    async waitForPageIsReady(): Promise<void> {
        await this.page.waitForLoadState('load');
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForLoadState('networkidle');
    }

    public getValue(key: string) {
        const value = this.scenario.getValue(key);
        return value;
    }

    public setValue(key: string, value: string) {
        this.scenario.setValue(key, value);
    }

    async takeScreenshot(name: string) {
        await this.scenario.takeScreenshot(name);
    }
}