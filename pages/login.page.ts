import { ElementHandle, Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { BaseScenario } from "./base.scenario";

export class LoginPage extends BasePage {
    readonly txtUsername: Locator;
    readonly txtPassword: Locator;
    readonly btnLogin: Promise<ElementHandle | null>;

    constructor(page: Page, readonly scenario: BaseScenario) {
        super(page, scenario);
        this.txtUsername = page.getByPlaceholder('Username');
        this.txtPassword = page.getByRole('textbox', { name: 'password'});
        this.btnLogin = page.$('button.orangehrm-login-button');
    }

    async login(username: string, password: string) :Promise<LoginPage> {
        await this.txtUsername.fill(username);
        await this.txtPassword.fill(password);
        const btnLoginElement = this.btnLogin;
        if (btnLoginElement) {
            (await btnLoginElement).click();
        } else {
            console.log('Login button not found');
        }
        await this.page.waitForLoadState("networkidle");
        return this;
    }
}