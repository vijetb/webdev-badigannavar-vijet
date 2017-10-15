import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WidgetService } from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {
  errorMsg: String;
  userId: String;
  websiteId: String;
  widgetId: String;
  pageId: String;
  widgetType: String;
  isNewWidget: boolean;
  editWidget;

  size: Number;
  text: String;
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
        this.text = this.editWidget.text;
        this.size = this.editWidget.size;
      } else {
        this.isNewWidget = true;
      }

    });
  }

  updateWidget() {
    if (this.text === undefined || this.text === '') {
      this.errorMsg = 'Text cannot be empty';
      return;
    }else if (this.size === undefined || typeof (this.size) !== 'number' || (this.size < 1 || this.size > 6)) {
      this.errorMsg = 'Size cannot be empty and it should be 1-6';
      return;
    }

    if (this.isNewWidget) {
      const widget =  {'_id': null, 'widgetType': 'HEADING', 'pageId': this.pageId, 'size': this.size, 'text': this.text};
      this.widgetService.createWidget(this.pageId, widget);
      this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    } else {
      const widget =  {'_id': this.widgetId, 'widgetType': 'HEADING', 'pageId': this.pageId, 'size': this.size, 'text': this.text};
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
