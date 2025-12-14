import { BrowserContext, expect, Locator, Page } from "@playwright/test";
import commonReusables from "../utils/commonReusables";
import path from 'path';


class QAPlayGroundAppPage {
    private readonly selectImageFileButton_LOC: Locator;
    private readonly openNewTabLink_LOC: Locator;
    private readonly welcomeText_LOC: Locator;
    private readonly openPopUpLink_LOC: Locator
    private readonly fileInput_LOC: Locator;
    private readonly greenButton_LOC: Locator;
    private readonly UploadedImage_LOC: Locator;

    constructor(private page: Page) {
        this.selectImageFileButton_LOC = page.locator("//label[@for='file-input']");
        this.openNewTabLink_LOC = page.getByRole('link', { name: 'Open New Tab' });
        this.welcomeText_LOC = page.getByRole('heading', { name: 'Welcome to the new page!' });
        this.openPopUpLink_LOC = page.getByRole('link', { name: 'Open' });
        this.fileInput_LOC = page.locator('#file-input');
        this.UploadedImage_LOC = page.locator('figcaption', {
            hasText: 'UploadFileInAutomation.jpg'
        });
        this.greenButton_LOC = page.getByRole('button', { name: 'Boost 🚀' });
    }

    async uploadImageFile() {
        const filePath = path.join(
            process.cwd(),
            'src',
            'data',
            'UploadFileInAutomation.jpg'
        );
        await this.fileInput_LOC.setInputFiles(filePath);

        /*  await expect.soft(
              this.UploadedImage_LOC
          ).toBeVisible(); */
    }

    async clickOnOpenNewTabLink(context: BrowserContext) {
        return await commonReusables.switchToNewTab(context, async () => {
            await this.openNewTabLink_LOC.click();
        });
    }

    async verifyWelcomeMessage() {
        await expect.soft(
            this.welcomeText_LOC
        ).toBeVisible();
    }

    async clickOnPopUpLink() {
        await this.page.waitForLoadState('networkidle');
        await this.openPopUpLink_LOC.waitFor({ state: 'visible' });
        await this.openPopUpLink_LOC.click()
    }

    async verifyChangeableIframe() {
        await this.page.waitForFunction(() => {
            return Array.from(document.querySelectorAll('iframe'))
                .some(iframe => {
                    try {
                        return iframe.contentDocument?.querySelector('#msg');
                    } catch {
                        return false;
                    }
                });
        });

        for (const frame of this.page.frames()) {
            const msg = frame.locator('#msg');
            if (await msg.count() > 0) {
                await expect(msg).toHaveText('This is the end of the journey');
                return;
            }
        }
        throw new Error('Message not found in any iframe');
    }

    async clickOnGreenButton() {
        await this.page.waitForLoadState('networkidle');
        await this.greenButton_LOC.waitFor({ state: 'visible' });
        await this.greenButton_LOC.click();
    }

    async VerifyProgressBar() {
        await expect.soft(
            this.page.locator('.container .fill')
        ).toHaveAttribute('style', /width:\s*95%/);
    }

}

export default QAPlayGroundAppPage;
