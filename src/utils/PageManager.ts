
import { Page } from '@playwright/test';
import logger from '../utils/loggerUtil';
import commonReusables from '../utils/commonReusables';
import dataConfig from '../config/dataConfig';
import QAPlayGroundPage from '../pages/QAPlayGroundPage';
import QAPlayGroundAppsPage from '../pages/QAPlayGroundAppsPage';

type PageConstructor<T> = new (page: Page) => T;

export class PageManager {
  private _pages = new Map<string, unknown>();

  public logger = logger;
  public commonReusables = commonReusables;
  public dataConfig = dataConfig;

  constructor(private page: Page) {
  }

  private createPage<T>(key: string, PageClass: PageConstructor<T>): T {
    if (!this._pages.has(key)) {
      console.log(`Creating ${PageClass.name}...`);
      const pageInstance = new PageClass(this.page);
      this._pages.set(key, pageInstance);
      return pageInstance;
    }
    return this._pages.get(key) as T;
  }

  get QAPlayGroundPage(): QAPlayGroundPage {
    return this.createPage('QAPlayGroundPage', QAPlayGroundPage);
  }

  get QAPlayGroundAppsPage(): QAPlayGroundAppsPage {
    return this.createPage('QAPlayGroundAppsPage', QAPlayGroundAppsPage);
  }
}