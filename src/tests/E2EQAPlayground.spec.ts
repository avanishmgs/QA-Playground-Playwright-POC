import { test } from "@playwright/test";
import { PageManager } from "../utils/PageManager";
import QAPlayGroundAppPage from "../pages/QAPlayGroundAppsPage";
import loginSetup from "../helpers/LoginSetup";


let pages: PageManager;

test.describe.serial('QA Play Ground Validation', () => {

    test.beforeEach(async ({ page }) => {
        pages = new PageManager(page);
        await page.goto(loginSetup.Url);
        pages.logger.info("QAPlayGround Launched Successfully");
    });

    test('TC_01-Verify QAPlayGround for NewTab', async ({ page, context }) => {
        await pages.QAPlayGroundPage.clickOnNewTab();
        pages.logger.info("QAPlayGround Click On New Tab Successfully");
        await test.step("Click to the Open New Tab Link", async () => {
            const newTabOfQAPlayGround = context.waitForEvent('page');
            await pages.QAPlayGroundAppsPage.clickOnOpenNewTabLink(context);
            const newTab = await newTabOfQAPlayGround;
            pages.logger.info("New Tab Clicked Successfully");
            await newTab.waitForLoadState('domcontentloaded');
            const appsPageInNewTab = new QAPlayGroundAppPage(newTab);
            await appsPageInNewTab.verifyWelcomeMessage();
        });
    });

    test('TC_02-Verify QAPlayGround for PopUp', async ({ page }) => {
        await test.step("Click to the PopUp Link", async () => {
            await pages.QAPlayGroundPage.clickOnPopWindow();
            await pages.QAPlayGroundAppsPage.clickOnPopUpLink();
            await pages.commonReusables.dialogHandler(page);
        });
    });

    test('TC_03-Verify QAPlayGround for File Upload', async ({ page }) => {
        await test.step("Click to the File Upload Link", async () => {
            await pages.QAPlayGroundPage.clickOnFileUploadLink();
            await pages.QAPlayGroundAppsPage.uploadImageFile();
            pages.logger.info("QAPlayGround Image Uploaded Successfully");
        });
    });

    test('TC_04-Verify QAPlayGround for Changeable Iframe', async ({ page }) => {
        await test.step("Click to the Iframe Link", async () => {
            await pages.QAPlayGroundPage.clickOnChangeableIFrameLink();
            await pages.QAPlayGroundAppsPage.verifyChangeableIframe();
            pages.logger.info("QAPlayGround Changeable Iframe Validated Successfully..");
        });
    });

        test('TC_05-Verify QAPlayGround for ShadowDom', async ({ page }) => {
        await test.step("Click to the Shadow Dom Link", async () => {
            await pages.QAPlayGroundPage.clickOnShadowDomLink();
            await pages.QAPlayGroundAppsPage.clickOnGreenButton();
            await pages.QAPlayGroundAppsPage.VerifyProgressBar();
        });
    });

});