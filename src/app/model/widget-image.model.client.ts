import { Widget } from './widget.model.client';
import { WidgetType } from './widgettype.model.client';

export class WidgetImage extends Widget {
  width: String;
  url: String;

  constructor (id: String, pageId: String, width: String, url: String) {
    super(id, 'IMAGE', pageId);
    this.width = width;
    this.url = url;
  }
}
