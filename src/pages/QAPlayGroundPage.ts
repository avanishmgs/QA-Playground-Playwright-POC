import { Locator, Page } from "@playwright/test";


class QAPlayGroundPage {
    private readonly uploadFileLink_LOC: Locator;
    private readonly changeableIframeLink_LOC: Locator;
    private readonly popUpLink_LOC: Locator;
    private readonly newTabLink_LOC: Locator;
    private readonly shadowDomLink_LOC: Locator;
    private readonly verifyAccountLink_LOC: Locator;

    constructor(private page: Page) {
        this.popUpLink_LOC = page.getByRole('heading', { name: 'Pop-Up Window' });
        this.uploadFileLink_LOC = page.getByRole('heading', { name: 'Upload File' });
        this.newTabLink_LOC = page.getByRole('heading', { name: 'New Tab' });
        this.changeableIframeLink_LOC = page.getByRole('heading', { name: 'Changeable Iframe' });
        this.shadowDomLink_LOC = page.getByRole('heading', { name: 'Shadow DOM' });
        this.verifyAccountLink_LOC = page.locator("//h3[normalize-space()='Verify Your Account']");
    }

    async clickOnNewTab() {
        await this.page.waitForLoadState('networkidle');
        await this.newTabLink_LOC.waitFor({ state: 'visible' });
        await this.newTabLink_LOC.scrollIntoViewIfNeeded();
        await this.newTabLink_LOC.click();
    }

    async clickOnPopWindow() {
        await this.page.waitForLoadState('networkidle');
        await this.popUpLink_LOC.waitFor({ state: 'visible' });
        await this.popUpLink_LOC.scrollIntoViewIfNeeded();
        await this.popUpLink_LOC.click();
    }

    async clickOnFileUploadLink() {
        await this.page.waitForLoadState('networkidle');
        await this.uploadFileLink_LOC.waitFor({ state: 'visible' });
        await this.uploadFileLink_LOC.scrollIntoViewIfNeeded();
        await this.uploadFileLink_LOC.click();
    }

    async clickOnChangeableIFrameLink() {
        await this.page.waitForLoadState('networkidle');
        await this.changeableIframeLink_LOC.waitFor({ state: 'visible' });
        await this.changeableIframeLink_LOC.scrollIntoViewIfNeeded();
        await this.changeableIframeLink_LOC.click();
    }

    async clickOnShadowDomLink() {
        await this.page.waitForLoadState('networkidle');
        await this.shadowDomLink_LOC.waitFor({ state: 'visible' });
        await this.shadowDomLink_LOC.scrollIntoViewIfNeeded();
        await this.shadowDomLink_LOC.click();
    }

}

export default QAPlayGroundPage;
