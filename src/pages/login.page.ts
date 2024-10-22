import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { BaseScenario } from "./base.scenario";

export class LoginPage extends BasePage {
    readonly txtUsername: Locator;
    readonly txtPassword: Locator;
    readonly btnLogin: Locator;

    constructor(page: Page, readonly scenario: BaseScenario) {
        super(page, scenario);
        this.txtUsername = page.getByPlaceholder('Username');
        this.txtPassword = page.getByRole('textbox', { name: 'password'});
        this.btnLogin = page.locator('button[type="submit"]');
    }

    async submitLoginForm(username: string, password: string) :Promise<void> {
        await this.txtUsername.fill(username);
        await this.txtPassword.fill(password);
        await this.btnLogin.waitFor({state: 'visible'});
        await this.btnLogin.click();
    }
}