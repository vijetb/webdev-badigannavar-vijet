import { Injectable } from '@angular/core';
import { Widget } from '../model/widget.model.client';

@Injectable()
export class WidgetService {

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
    const newUserId = ((+this.widgets[this.widgets.length - 1]._id) + 100).toLocaleString();
    widget._id = newUserId;
    this.widgets.push(widget);
    return widget;
  }

  findWidgetsByPageId(pageId: String) {
    const tempWidgets: Widget[] = [];
    let i = 0;
    for (i ; i < this.widgets.length ; ++i ) {
      if (this.widgets[i].pageId === pageId) {
        tempWidgets.push(this.widgets[i]);
      }
    }
    return tempWidgets;
  }

  findWidgetById(widgetId: String) {
    return this.widgets.find(function (widget) {
      return widget._id === widgetId;
    });
  }

  updateWidget(widgetId, widget) {
    let i = 0;
    for (i ; i < this.widgets.length ; ++i ) {
      if (this.widgets[i]._id === widgetId) {
        this.widgets[i] = widget;
        return true;
      }
    }
    return false;
  }

  deleteWidget(widgetId: String) {
    let i = 0;
    for (i ; i < this.widgets.length ; ++i ) {
      if (this.widgets[i]._id === widgetId) {
        this.widgets.splice(i, 1);
      }
    }
  }

  // printData() {
  //   let i = 0;
  //   for (i ; i < this.widgets.length ; ++i ) {
  //     console.log(this.widgets[i]);
  //   }
  // }

}
