import { Component, OnInit } from '@angular/core';
import { Widget } from '../../../model/widget.model.client';
import { ActivatedRoute, Router } from '@angular/router';
import { WidgetService } from '../../../services/widget.service.client';
import { WidgetType } from '../../../model/widgettype.model.client';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  userId: String;
  websiteId: String;
  pageId: String;
  widgetList;
  widgetType: WidgetType;
  constructor(private widgetService: WidgetService, private router: Router, private activatedRoute: ActivatedRoute,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
    });

    this.widgetList = this.widgetService.findWidgetsByPageId(this.pageId);
  }

  getSanitizedURL(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
