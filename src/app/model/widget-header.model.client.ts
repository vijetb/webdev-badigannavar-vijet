import { Widget } from './widget.model.client';
import { WidgetType } from './widgettype.model.client';

export class WidgetHeader extends Widget {
  size: number;
  text: String;

  constructor (id: String, pageId: String, size: number, text: String) {
    super(id, 'HEADING', pageId);
    this.size = size;
    this.text = text;
  }
}
