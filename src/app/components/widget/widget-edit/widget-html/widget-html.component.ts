import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../../../../services/widget.service.client';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {

  errorMsg: String;
  userId: String;
  websiteId: String;
  widgetId: String;
  pageId: String;
  widgetType: String;
  isNewWidget: boolean;
  editWidget;

  htmlTag: String;
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
        // this.editWidget = this.widgetService.findWidgetById(this.widgetId);
        this.widgetService.findWidgetById(this.widgetId)
          .subscribe((data) => {
            if (data) {
              this.editWidget = data;
              this.htmlTag = this.editWidget.text;
            }
          });
        // this.htmlTag = this.editWidget.text;
      } else {
        this.isNewWidget = true;
      }

    });
  }

  updateWidget() {
    if (this.htmlTag === undefined || this.htmlTag === '') {
      this.errorMsg = 'Html Tag cannot be empty';
      return;
    }

    if (this.isNewWidget) {
      const widget =  {'widgetType': 'HTML', 'pageId': this.pageId, 'text': this.htmlTag};
      this.widgetService.createWidget(this.pageId, widget)
        .subscribe((data) => {
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        });
    } else {
      const widget =  {'_id': this.widgetId, 'widgetType': 'HTML', 'pageId': this.pageId, 'text': this.htmlTag};
      this.widgetService.updateWidget(this.widgetId, widget)
        .subscribe((data) => {
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        });
    }

  }

  deleteWidget() {
    if (this.isNewWidget) {
      this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', 'new']);
    } else {
      this.widgetService.deleteWidget(this.widgetId)
        .subscribe((data) => {
          if (data) {
            this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
          }
        });
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
