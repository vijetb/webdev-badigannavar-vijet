import { Injectable } from '@angular/core';
import { Website } from '../model/website.model.client';

@Injectable()
export class WebsiteService {
  websites: Website[] = [
    new Website('123', 'Facebook', '456', 'Lorem'),
    new Website('234', 'Twitter', '456', 'Lorem'),
    new Website('456', 'Gizmodo', '456', 'Lorem'),
    new Website('890', 'Go', '123', 'Lorem'),
    new Website('567', 'Tic Tac Toe', '123', 'Lorem'),
    new Website('678', 'Checkers', '123', 'Lorem'),
    new Website('789', 'Chess', '234', 'Lorem')
  ];

  createWebsite(userId: String , website: Website) {
    const newUserId = ((+this.websites[this.websites.length - 1]._id) + 100).toLocaleString();
    website._id = newUserId;
    this.websites.push(website);
    return website;
  }

  findWebsitesByUser(userId: String) {
    const tempWebsites: Website[] = [];
    let i = 0;
    for (i ; i < this.websites.length ; ++i ) {
      if (this.websites[i].developerId === userId) {
        tempWebsites.push(this.websites[i]);
      }
    }
    return tempWebsites;
  }

  findWebsiteById(websiteId: String) {
    return this.websites.find(function (website) {
      return website._id === websiteId;
    });
  }

  updateWebsite(websiteId: String, website: Website) {
    let i = 0;
    for (i ; i < this.websites.length ; ++i ) {
      if (this.websites[i]._id === websiteId) {
        this.websites[i] = website;
        return true;
      }
    }
    return false;
  }

  deleteWebsite(websiteId: String) {
    let i = 0;
    for (i ; i < this.websites.length ; ++i ) {
      if (this.websites[i]._id === websiteId) {
        this.websites.splice(i, 1);
      }
    }
  }
}
