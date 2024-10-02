import { test as baseTest, TestInfo } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { LoginPage } from "../pages/login.page";
import { BasePage } from '../pages/base.page';
import { BaseScenario } from '../pages/base.scenario';

type Pages = {
    basePage: BasePage;
    baseScenario: BaseScenario;
    loginPage: LoginPage;
    homePage: HomePage;
};
  
const test = baseTest.extend<Pages>({
    // Initialize the page objects
    baseScenario: async ({ page }, use, testInfo) => {
        await use(new BaseScenario(page, testInfo));
    },
    loginPage: async ({ page, baseScenario }, use) => {
        await use(new LoginPage(page, baseScenario));
    },
    homePage: async ({ page, baseScenario }, use) => {
        await use(new HomePage(page, baseScenario));
    },
});
  
test.beforeEach(async ({ browser }) => {
    // console.log('beforeEach tests');
});
 
test.afterEach(async ({ }) => {
    // console.log('afterEach tests');
});
 
// export default and name export so spec files can use it 
export default test;
export const expect = test.expect;