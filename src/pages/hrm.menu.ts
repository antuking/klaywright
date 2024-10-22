import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { BaseScenario } from "./base.scenario";
import { Labels, menus } from "../types/ohrm.types";

export class HrmMenu extends BasePage {
    readonly lblmenu: string;

    constructor(public page: Page, readonly scenario: BaseScenario) {
        super(page, scenario);
        this.lblmenu = 'ul.oxd-main-menu li.oxd-main-menu-item-wrapper a[href*="{{menu_fragment}}"]';
    }

    async selectMenu(menu: Labels): Promise<void> {
        const menuItem = this.lblmenu.replace('{{menu_fragment}}', await this.getMenuSuffixFragment(menu));
        await this.page.locator(menuItem).scrollIntoViewIfNeeded()
        await this.page.locator(menuItem).click();
    }

    async getMenuSuffixFragment(menu: Labels): Promise<string> {
        return await menus[menu].suffix_fragment;
    }
}