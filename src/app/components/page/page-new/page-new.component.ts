import { Component, OnInit } from '@angular/core';
import { PageService } from '../../../services/page.service.client';
import { Page } from '../../../model/page.model.client';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  userId: String;
  websiteId: String;
  pageList: Page[];
  pageName: String;
  pageTitle: String;
  errorMsg: String;
  page: Page;
  constructor(private pageService: PageService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
    });

    this.pageService.findPageByWebsiteId(this.websiteId)
      .subscribe((data) => {
        if (data) {
          this.pageList = data;
        }
      });
  }


  addPage() {
    if (this.pageName === undefined && this.pageTitle === undefined || this.pageName === undefined) {
      this.errorMsg = 'Page Name is mandatory';
      return;
    }
    this.page =  new Page(null, this.pageName, this.websiteId, this.pageTitle);

    this.pageService.createPage(this.websiteId, this.page)
      .subscribe((data) => {
          if (data) {
            this.pageList.push(data);
            this.pageName = null;
            this.pageTitle = null;
            this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
          }
        });
  }
}
