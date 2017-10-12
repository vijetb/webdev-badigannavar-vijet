import { Injectable } from '@angular/core';
import { Website } from '../model/website.model.client';
import { Page } from '../model/page.model.client';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class PageService {
  pages: Page[] = [
    new Page('321', 'Post 1', '456', 'Lorem'),
    new Page('432', 'Post 2', '456', 'Lorem'),
    new Page('543', 'Post 3', '456', 'Lorem')
  ];

  createPage(websiteId: String, page: Page) {
    const newPageId = ((+this.pages[this.pages.length - 1]._id) + 100).toLocaleString();
    page._id = newPageId;
    page.websiteId = websiteId;
    this.pages.push(page);
    return page;
  }

  findPageByWebsiteId(websiteId) {
    const tempPages: Page[] = [];
    let i = 0;
    for (i; i < this.pages.length; ++i) {
      if (this.pages[i].websiteId === websiteId) {
        tempPages.push(this.pages[i]);
      }
    }
    return tempPages;
  }

  findPageById(pageId) {
    return this.pages.find(function (page) {
      return page._id === pageId;
    });
  }

  updatePage(pageId: String, page: Page) {
    let i = 0;
    for (i; i < this.pages.length; ++i) {
      if (this.pages[i]._id === pageId) {
        this.pages[i] = page;
        return true;
      }
    }
    return false;
  }

  deletePage(pageId: String) {
    let i = 0;
    for (i; i < this.pages.length; ++i) {
      if (this.pages[i]._id === pageId) {
        this.pages.splice(i, 1);
      }
    }
  }

  getPageCount() {
    return this.pages.length;
  }
}
