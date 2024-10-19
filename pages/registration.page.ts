import { ElementHandle, Locator, Page } from "@playwright/test";
import { testData } from "../utils/test.data";

export class RegistrationPage {
    readonly page: Page;
    readonly email: Locator;
    readonly lastName: Locator;
    readonly firstName: Locator;
    readonly infoSourceBox: Locator;
    readonly infoSourceSocialMedia: Locator;
    readonly servicesOfInterestPrinting: Locator;
    readonly servicesOfInterestLogistics: Locator;
    readonly servicesOfInterestAdvertisement: Locator;
    readonly typeOfAssociationProspect: Locator;
    readonly explanation: Locator;
    readonly submitBtn: Locator;

    readonly emailEmptyError: Locator;
    readonly lastNameEmptyError: Locator;
    readonly firstNameEmptyError: Locator;
    readonly infoSourceBoxEmptyError: Locator;
    readonly servicesOfInterestEmptyError: Locator;
    readonly typeOfAssociationEmptyError: Locator;
    readonly emailFormatError: Locator;


    constructor(page: Page) {
        this.page = page;

        this.email = this.page.locator('#form_item_email');
        this.lastName = this.page.locator('#form_item_lastName');
        this.firstName = this.page.locator('#form_item_firstName');
        this.infoSourceBox = this.page.locator('#form_item_infoSource');
        this.infoSourceSocialMedia = this.page.locator('//span[@class="ant-select-selection-item" and text()="Social media"]');
        this.servicesOfInterestPrinting = this.page.locator('//span[text()="Printing"]//preceding-sibling::span[input[@type="checkbox"]]');
        this.servicesOfInterestLogistics = this.page.locator('//span[text()="Logistics"]//preceding-sibling::span[input[@type="checkbox"]]');
        this.servicesOfInterestAdvertisement = this.page.locator('//span[text()="Advertisement"]//preceding-sibling::span[input[@type="checkbox"]]');
        this.servicesOfInterestAdvertisement = this.page.locator('//span[text()="Prospect"]//preceding-sibling::span[input[@type="radio"]]');
        this.explanation = this.page.locator('#form_item_explanation');
        this.submitBtn = this.page.locator('//button[@type="submit"]/span[text()="Submit"]');
        
        this.emailEmptyError = this.page.locator("//div[@class='ant-form-item-explain-error' and text()=\"'email' is required\"]");
        this.lastNameEmptyError = this.page.locator("//div[@class='ant-form-item-explain-error' and text()=\"'lastName' is required\"]");
        this.firstNameEmptyError = this.page.locator("//div[@class='ant-form-item-explain-error' and text()=\"'firstName' is required\"]");
        this.lastNameEmptyError = this.page.locator("//div[@class='ant-form-item-explain-error' and text()=\"'infoSource' is required\"]");
        this.infoSourceBoxEmptyError = this.page.locator("//div[@class='ant-form-item-explain-error' and text()=\"'servicesOfInterest' is required\"]");
        this.servicesOfInterestEmptyError = this.page.locator("//div[@class='ant-form-item-explain-error' and text()=\"'typeOfAssociation' is required\"]");
        this.typeOfAssociationEmptyError = this.page.locator("//div[@class='ant-form-item-explain-error' and text()=\"'email' is not a valid email\"]");

    }

    async goTo(): Promise<void> {
        await this.page.goto(testData.baseUrl, { timeout: 5000, waitUntil: 'domcontentloaded'});
    }

    async registerSuccess(_email: string, _lastName: string, _firstName: string, explanation: string): Promise<RegistrationPage> {
        await this.email.fill(_email);
        await this.lastName.fill(_lastName);
        await this.firstName.fill(_firstName);
        await this.page.pause();
        await this.infoSourceBox.click();
        await this.infoSourceSocialMedia.click();
        await this.servicesOfInterestPrinting.click();
        await this.typeOfAssociationProspect.click();
        await this.explanation.fill(explanation);
        await this.page.pause();
        await this.submitBtn.click();

        return this;
    }
}