import AxeBuilder from "@axe-core/playwright";
import { Page, TestInfo } from "@playwright/test";

export class BaseScenario {
    private myMap = new Map<string, string>();
    constructor(public page: Page, public testInfo: TestInfo) {}

    async takeScreenshot(name: string) {
        this.testInfo.attach(`${this.testInfo.title}_${name} `, {
            contentType: "image/png",
            body: await this.page.screenshot({
                fullPage: true
            })
        });
    }


    async hooks() {
        console.log("hook from the scenario page");
    }


    setValue(key: string, value: string) {
        this.myMap.set(key, value);
    }

    getValue(key: string) {
        return this.myMap.get(key);
    }

    async a11yAnalysis() {
        const accessibilityScanResults = await new AxeBuilder({ page: this.page }).analyze(); // 4
        const issues = accessibilityScanResults.violations.length;
        console.log("a11y issues found: " + issues);
        await this.testInfo.attach('accessibility-scan-results', {
            body: JSON.stringify(accessibilityScanResults, null, 2),
            contentType: 'application/json'
        });
    }
}