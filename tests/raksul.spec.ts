import test from "../fixtures/base.test";
import { testData } from "../utils/test.data";
 
test.describe('@feature-appointments', () => {
    test('user can submit success', async ({ page, registrationPage , inquirySubmitSuccess}) => {
        await registrationPage.goTo();
        await registrationPage.registerSuccess('email@test.com', 'First Name', 'Last Name', 'Explain');
        await inquirySubmitSuccess.verifySubmitInquirySuccess();
    });
});
