import { Injectable } from '@angular/core';
import { Widget } from '../model/widget.model.client';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
@Injectable()
export class WidgetService {
  constructor(private http: Http) {}
  baseUrl = environment.baseUrl;

  widgets = [
    { '_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 5, 'text': 'GIZMODO'},
    { '_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    { '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100', 'url': 'http://lorempixel.com/400/200/'},
    { '_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'},
    { '_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    { '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100', 'url': 'https://www.youtube.com/embed/AM2Ivdi9c4E' },
    { '_id': '789', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'}
  ];

  createWidget(pageId, widget) {
    return this.http.post(this.baseUrl + '/api/page/' + pageId + '/widget', widget)
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  findWidgetsByPageId(pageId: String) {
    return this.http.get(this.baseUrl + '/api/page/' +  pageId + '/widget')
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  findWidgetById(widgetId: String) {
    return this.http.get(this.baseUrl + '/api/widget/' + widgetId)
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  updateWidget(widgetId, widget) {
    return this.http.put(this.baseUrl + '/api/widget/' + widgetId, widget)
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  deleteWidget(widgetId: String) {
    return this.http.delete(this.baseUrl + '/api/widget/' + widgetId)
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  updateWidgetPosition(pageId: String, initialPos: Number, finalPos: Number) {
    return this.http.put(this.baseUrl + '/api/page/' + pageId + '/widget?initial=' + initialPos + '&final=' + finalPos, null)
      .map((res: Response) => {
          return res.json();
        }
      );
  }
}
