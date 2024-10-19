import { test as baseTest, TestInfo } from '@playwright/test';
import { RegistrationPage } from '../pages/registration.page';
import { InquirySubmitSuccess } from '../pages/inquirySubmitSuccess.page';
  
const test = baseTest.extend<{
    registrationPage: RegistrationPage;
    inquirySubmitSuccess: InquirySubmitSuccess;
}>({
    // Initialize the page objects
    registrationPage: async ({ page }, use) => {
        await use(new RegistrationPage(page));
    },
    inquirySubmitSuccess: async ({ page }, use) => {
        await use(new InquirySubmitSuccess(page));
    },
});
 
// export default and name export so spec files can use it 
export default test;
export const expect = test.expect;