import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../../../services/website.service.client';
import { ActivatedRoute, Router } from '@angular/router';
import { Website } from '../../../model/website.model.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  userId: String;
  websiteId: String;
  websiteList: Website[];
  updatingWebsite: Website;
  updatedName: String;
  updatedDesc: String;
  errorMsg: String;
  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];

      this.websiteService.findWebsitesByUser(this.userId)
        .subscribe((data) => {
          if (data) {
            this.websiteList = data;
          }
        });
      this.websiteService.findWebsiteById(this.websiteId)
        .subscribe((data) => {
          if (data) {
            this.updatingWebsite = data;
            this.updatedName = this.updatingWebsite.name;
            this.updatedDesc = this.updatingWebsite.description;
          }
        });
    });
  }

  deleteWebsite() {
    this.websiteService.deleteWebsite(this.websiteId)
      .subscribe((data) => {
        if (data) {
          this.router.navigate(['/user', this.userId , 'website']);
        }
      });
  }

  updateWebsite() {
    if (this.updatedName === '' && this.updatedDesc === '' || this.updatedName === '') {
      this.errorMsg = 'Website name cannot be null';
      return;
    }
    this.updatingWebsite.name = this.updatedName;
    this.updatingWebsite.description = this.updatedDesc;

    this.websiteService.updateWebsite(this.websiteId,  this.updatingWebsite)
      .subscribe((data) => {
        if (data.success === true) {
          this.router.navigate(['/user', this.userId, 'website']);
        }
      });
  }

}
