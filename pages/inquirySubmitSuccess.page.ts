import { ElementHandle, Locator, Page, expect } from "@playwright/test";

export class InquirySubmitSuccess {
    readonly page: Page;
    readonly successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.successMessage = page.locator('//div[@class="ant-alert-message" and text()="Your inquiry has been submitted successfully!"]');
    }

    async verifySubmitInquirySuccess() :Promise<InquirySubmitSuccess> {
        await expect(this.successMessage).toBeVisible()
        return this;
    }
}