import { Locator, Page } from "@playwright/test";
import { BaseScenario } from "./base.scenario";
import { LeavePage } from "./leave.page";

export class LeaveForm extends LeavePage {
    readonly btnApply: Locator;
    readonly ddbLeaveType: Locator;
    readonly lbxLeaveType: Locator;
    readonly txtFromDate: Locator;
    readonly txtToDate: Locator;
    readonly txaComment: Locator;

    constructor(public page: Page, readonly scenario: BaseScenario) {
        super(page, scenario);
        this.btnApply = this.page.getByRole('button', { name: /.*apply.*/i });
        this.ddbLeaveType = this.page.locator('.oxd-select-text--active .oxd-select-text-input');
        this.lbxLeaveType = this.page.locator('[role="listbox"]');
        this.txtFromDate = this.page.locator('.oxd-form-row .oxd-input-group', { hasText: 'From Date' }).locator('.oxd-date-input input');
        this.txtToDate = this.page.locator('.oxd-form-row .oxd-input-group', { hasText: 'To Date' }).locator('.oxd-date-input input');
        this.txaComment = this.page.locator('textarea');
    }

    async verifyApplyLeaveFormHeader(): Promise<void> {
        await this.verifyFormHeaderTitle('Apply Leave');
    }

    async clickOnApplyButton(): Promise<void> {
        await this.btnApply.click();
    }
    
    async selectLeaveTypeByIndex(idx: number): Promise<void> {
        await this.ddbLeaveType.click();
        await this.lbxLeaveType.waitFor({state: 'visible'});
        await this.lbxLeaveType.getByRole('option', { exact: true}).nth(idx).click();
    }

    async enterFromDate(date: string): Promise<void> {
        await this.txtFromDate.fill(date);
    }
    
    async enterToDate(date: string): Promise<void> {
        await this.txtToDate.fill(date);
    }
    
    async enterToComment(text: string): Promise<void> {
        await this.txaComment.fill(text);
    }
}