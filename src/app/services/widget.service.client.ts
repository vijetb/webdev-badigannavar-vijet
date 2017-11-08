import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
@Injectable()
export class WidgetService {
  constructor(private http: Http) {}
  baseUrl = environment.baseUrl;

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

  deleteWidget(pageId: String, widgetId: String) {
    return this.http.delete(this.baseUrl + '/api/' + pageId + '/widget/' + widgetId)
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
