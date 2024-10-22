import { Locator, Page } from "@playwright/test";
import { BaseScenario } from "./base.scenario";
import { expect } from '../fixtures/base.test';
import { Labels, menus } from "../types/ohrm.types";
import { HrmMenu } from "./hrm.menu";

export class DashboardPage extends HrmMenu {

    constructor(public page: Page, readonly scenario: BaseScenario) {
        super(page, scenario);
    }

    async verifyDashboardHeader(): Promise<void> {
        await this.verifyPageHeaderTitle(menus[Labels.DASHBOARD].label);
    }
}