import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { WidgetService } from '../../../../services/widget.service.client';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {

  errorMsg: String;
  userId: String;
  websiteId: String;
  widgetId: String;
  pageId: String;
  widgetType: String;
  isNewWidget: boolean;
  editWidget;

  name: String;
  text: String;
  rows: number  ;
  placeholder: String;
  isFormatted: Boolean = false;



  baseUrl = environment.baseUrl;

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
        this.widgetService.findWidgetById(this.widgetId)
          .subscribe((data) => {
            if (data) {
              this.editWidget = data;
              this.isFormatted = this.editWidget.formatted;
              this.rows = this.editWidget.rows;
              this.name = this.editWidget.name;
              this.text = this.editWidget.text;
              this.placeholder = this.editWidget.placeholder;
            }
          });
      } else {
        this.isNewWidget = true;
      }
    });
  }

  updateWidget() {
    if (this.rows === undefined || isNaN(this.rows)) {
      this.errorMsg = 'No of rows should be an integer';
      return;
    }else if (this.name === undefined || this.name === '') {
      this.errorMsg = 'Text cannot be empty';
      return;
    }

    const numRows = Number(this.rows);
    if (this.isNewWidget) {

      const widget =  {'widgetType': 'TEXT', 'pageId': this.pageId,
        'text': this.text, 'placeholder': this.placeholder, 'name' : this.name, 'rows': numRows, 'formatted': this.isFormatted};
      this.widgetService.createWidget(this.pageId, widget)
        .subscribe((data) => {
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        });
    } else {
      const widget =  {'_id': this.widgetId, 'widgetType': 'TEXT', 'pageId': this.pageId,
        'text': this.text, 'placeholder': this.placeholder, 'name' : this.name, 'rows': numRows, 'formatted': this.isFormatted};
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
      this.widgetService.deleteWidget(this.pageId, this.widgetId)
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

  isFormattedClicked() {
    this.isFormatted = !this.isFormatted;
  }

}
