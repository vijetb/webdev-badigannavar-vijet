import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../../../../services/widget.service.client';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {

  errorMsg: String;
  userId: String;
  websiteId: String;
  widgetId: String;
  pageId: String;
  widgetType: String;
  isNewWidget: boolean;
  editWidget;

  url: String;
  width: number;
  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.widgetType = params['wtype'];
      this.widgetId = params['wgid'];
      if (this.widgetId) {
        this.isNewWidget = false;
        this.editWidget = this.widgetService.findWidgetById(this.widgetId);
        this.url = this.editWidget.url;
        this.width = this.editWidget.width;
      } else {
        this.isNewWidget = true;
      }

    });
  }

  updateWidget() {
    console.log(this.width);
    if (this.url === undefined || this.url === '') {
      this.errorMsg = 'Url cannot be empty';
      return;
    }else if (this.width === undefined || isNaN(this.width)) {
      this.errorMsg = 'width cannot be empty or it should be a number without (%)';
      return;
    }

    if (this.isNewWidget) {
      const widget =  {'_id': null, 'widgetType': 'YOUTUBE', 'pageId': this.pageId, 'url': this.url, 'width': this.width};
      this.widgetService.createWidget(this.pageId, widget);
      this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    } else {
      const widget =  {'_id': this.widgetId, 'widgetType': 'YOUTUBE', 'pageId': this.pageId, 'url': this.url, 'width': this.width};
      this.widgetService.updateWidget(this.widgetId, widget);
      this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    }

  }

  deleteWidget() {
    if (this.isNewWidget) {
      this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', 'new']);
    } else {
      this.widgetService.deleteWidget(this.widgetId);
      this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    }
  }

  goBack() {
    if (this.isNewWidget) {
      this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', 'new']);
    } else {
      this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    }
  }

}
