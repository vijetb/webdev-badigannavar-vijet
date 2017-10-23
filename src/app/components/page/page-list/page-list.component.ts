import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageService } from '../../../services/page.service.client';
import { Page } from '../../../model/page.model.client';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  userId: String;
  websiteId: String;
  pageList: Page[];
  constructor(private pageService: PageService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];

      this.pageService.findPageByWebsiteId(this.websiteId)
        .subscribe((data) => {
          if (data) {
            console.log(data)
            this.pageList = data;
          }else {
            console.log('false');
          }
        });
    });
  }

}
