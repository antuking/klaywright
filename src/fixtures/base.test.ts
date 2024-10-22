import { test as baseTest, TestInfo } from '@playwright/test';
import { DashboardPage } from '../pages/dashboard.page';
import { BasePage } from '../pages/base.page';
import { BaseScenario } from '../pages/base.scenario';
import { LoginPage } from '../pages/login.page';
import { LeavePage } from '../pages/leave.page';
import { LeaveForm } from '../pages/leave.form';

type Pages = {
    basePage: BasePage;
    baseScenario: BaseScenario;
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    leavePage: LeavePage;
    leaveForm: LeaveForm;
};
  
const test = baseTest.extend<Pages>({
    // Initialize the page objects
    baseScenario: async ({ page }, use, testInfo) => {
        await use(new BaseScenario(page, testInfo));
    },
    loginPage: async ({ page, baseScenario }, use) => {
        await use(new LoginPage(page, baseScenario));
    },
    dashboardPage: async ({ page, baseScenario }, use) => {
        await use(new DashboardPage(page, baseScenario));
    },
    leavePage: async ({ page, baseScenario }, use) => {
        await use(new LeavePage(page, baseScenario));
    },
    leaveForm: async ({ page, baseScenario }, use) => {
        await use(new LeaveForm(page, baseScenario));
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