import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../../../services/website.service.client';
import { ActivatedRoute, Router } from '@angular/router';
import { Website } from '../../../model/website.model.client';
import { PageService } from '../../../services/page.service.client';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {
  userId: String;
  websiteList: Website[];
  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private pageService: PageService) { }

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

}
