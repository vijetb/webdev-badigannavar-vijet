import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WidgetService } from '../../../services/widget.service.client';
import { DomSanitizer } from '@angular/platform-browser';
import { SortableDirective } from '../../../directives/sortable.directive';

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
  constructor(private widgetService: WidgetService, private router: Router, private activatedRoute: ActivatedRoute,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
    });

     this.widgetService.findWidgetsByPageId(this.pageId)
      .subscribe( (data) => {
          if (data) {
            this.widgetList = data;
          }
      });
  }

  getSanitizedURL(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  myFunc(event: Object) {
    this.widgetService.updateWidgetPosition(this.pageId, event['startIndex'], event['endIndex'])
        .subscribe((data) => {});
  }

}
