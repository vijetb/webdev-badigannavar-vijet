import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../../../services/website.service.client';
import { ActivatedRoute, Router } from '@angular/router';
import { Website } from '../../../model/website.model.client';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  userId: String;
  errorMsg: String;
  websiteList: Website[];
  websiteName: String;
  websiteDesc: String;
  newWebsite: Website;
  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteService.findWebsitesByUser(this.userId)
        .subscribe((data) => {
          if (data) {
            this.websiteList = data;
          }
        });
    });
  }

  addWebsite() {
    if (this.websiteName === undefined && this.websiteDesc === undefined || this.websiteName === undefined) {
      this.errorMsg = 'Website Name is mandatory';
      return;
    }
    this.newWebsite =  new Website(null, this.websiteName, this.userId, this.websiteDesc);
    this.websiteService.createWebsite(this.userId, this.newWebsite)
      .subscribe((data) => {
         if (data) {
            this.websiteList.push(data);
            this.websiteName = null;
            this.websiteDesc = null;
            this.router.navigate(['/user', this.userId, 'website']);
          }
      });
  }
}
