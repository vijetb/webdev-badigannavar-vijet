import { Component, OnInit } from '@angular/core';
import { Page } from '../../../model/page.model.client';
import { PageService } from '../../../services/page.service.client';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  userId: String;
  websiteId: String;
  pageId: String;
  pageList: Page[];
  page: Page;
  editPageName: String;
  editPageTitle: String;
  errorMsg: String;
  constructor(private pageService: PageService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];

      this.pageService.findPageByWebsiteId(this.websiteId)
        .subscribe((data) => {
          if (data) {
            this.pageList = data;
          }
        });

      this.pageService.findPageById(this.pageId)
        .subscribe((data) => {
          if (data) {
            this.page = data;
            this.editPageName = this.page.name;
            this.editPageTitle = this.page.description;
          }
        });
    });
  }

  deletePage() {
    this.pageService.deletePage(this.pageId)
      .subscribe((data) => {
        if (data) {
          this.router.navigate(['/user', this.userId , 'website', this.websiteId, 'page']);
        }
      });

  }

  updatePage() {
    if (this.editPageName === '' && this.editPageTitle === '' || this.editPageName === '') {
      this.errorMsg = 'Page name cannot be empty';
      return;
    }
    this.page.name = this.editPageName;
    this.page.description = this.editPageTitle;
    this.pageService.updatePage(this.pageId,  this.page)
      .subscribe((data) => {
        if (data) {
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
        }
      });
  }
}
