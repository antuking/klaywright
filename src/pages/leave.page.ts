import { Locator, Page } from "@playwright/test";
import { BaseScenario } from "./base.scenario";
import { Labels, menus } from "../types/ohrm.types";
import { HrmMenu } from "./hrm.menu";

export class LeavePage extends HrmMenu {
    readonly tabApply: Locator;

    constructor(public page: Page, readonly scenario: BaseScenario) {
        super(page, scenario);
        this.tabApply = this.page.locator('li').filter({ hasText: 'Apply' });
    }

    async verifyLeaveHeader(): Promise<void> {
        await this.verifyPageHeaderTitle(menus[Labels.LEAVE].label);
    }

    async clickOnApplyTab(): Promise<void> {
        await this.tabApply.click();
    }
}