import test from "../fixtures/base.test";
import { testData } from "../utils/test.data";
import { Labels } from '../types/ohrm.types';
import { addDays, format } from 'date-fns';
 
test.describe('@feature-orangehrmlive', () => {
    test('user can submit a leave', async ({ page, loginPage, dashboardPage, leavePage, leaveForm }) => {
        await loginPage.goTo();
        await loginPage.submitLoginForm(testData.username, testData.password);
        await dashboardPage.verifyDashboardHeader();
        await dashboardPage.selectMenu(Labels.LEAVE);
        await leavePage.verifyLeaveHeader();
        await leavePage.clickOnApplyTab();
        await leaveForm.verifyApplyLeaveFormHeader();

        let fromDate = new Date(Date.now());
        let toDate = addDays(new Date(), 1);
        await leaveForm.selectLeaveTypeByIndex(1);
        await leaveForm.enterFromDate(format(fromDate, 'yyyy-dd-mm'));
        await leaveForm.enterToDate(format(toDate, 'yyyy-dd-mm'));
        await leaveForm.enterToComment('abcd');
        await leaveForm.clickOnApplyButton();
    });
});