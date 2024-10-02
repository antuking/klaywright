import { Page } from "@playwright/test";
import { BaseScenario } from "./base.scenario";
import { testData } from "../utils/test.data";

export class BasePage {
    private dataMap = new Map();

    constructor(public page: Page, readonly scenario: BaseScenario) {}

    async goTo() {
        await this.page.goto(testData.baseUrl);
        await this.page.waitForLoadState('domcontentloaded');
        await this.scenario.a11yAnalysis();
        console.log(await this.page.title());
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