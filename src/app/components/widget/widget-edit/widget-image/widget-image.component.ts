import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../../../../services/widget.service.client';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {

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
  name: String;
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
        this.url = this.editWidget.url;
        this.width = this.editWidget.width;
        this.name = this.editWidget.name;
        this.text = this.editWidget.text;
      } else {
        this.isNewWidget = true;
      }
    });
  }

  updateWidget() {
    if (this.url === undefined || this.url === '') {
      this.errorMsg = 'Url cannot be empty';
      return;
    }else if (this.width === undefined || isNaN(this.width)) {
      this.errorMsg = 'width cannot be empty or it should be a number without (%)';
      return;
    }

    if (this.isNewWidget) {
      const widget =  {'_id': null, 'widgetType': 'IMAGE', 'pageId': this.pageId,
        'url': this.url, 'width': this.width, 'name' : this.name, 'text': this.text};
      this.widgetService.createWidget(this.pageId, widget);
      this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    } else {
      const widget =  {'_id': this.widgetId, 'widgetType': 'IMAGE', 'pageId': this.pageId,
        'url': this.url, 'width': this.width, 'name' : this.name, 'text': this.text};
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
