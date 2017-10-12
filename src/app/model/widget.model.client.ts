import { WidgetType } from './widgettype.model.client';

export class Widget {
  _id: String;
  widgetType: String;
  pageId: String;

  constructor(id: String, widgetType: String, pageId: String) {
    this._id = id;
    this.widgetType = widgetType;
    this.pageId = pageId;
  }
}
