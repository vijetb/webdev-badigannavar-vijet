"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var environment_1 = require("../../../../../environments/environment");
var WidgetTextComponent = (function () {
    function WidgetTextComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.baseUrl = environment_1.environment.baseUrl;
    }
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetType = params['wtype'];
            _this.widgetId = params['wgid'];
            if (_this.widgetId) {
                _this.isNewWidget = false;
                _this.widgetService.findWidgetById(_this.widgetId)
                    .subscribe(function (data) {
                    if (data) {
                        _this.editWidget = data;
                        _this.url = _this.editWidget.url;
                        _this.width = _this.editWidget.width;
                        _this.name = _this.editWidget.name;
                        _this.text = _this.editWidget.text;
                    }
                });
                // this.editWidget = this.widgetService.findWidgetById(this.widgetId);
                // this.url = this.editWidget.url;
                // this.width = this.editWidget.width;
                // this.name = this.editWidget.name;
                // this.text = this.editWidget.text;
            }
            else {
                _this.isNewWidget = true;
            }
        });
    };
    WidgetTextComponent.prototype.updateWidget = function () {
        var _this = this;
        if (this.url === undefined || this.url === '') {
            this.errorMsg = 'Url cannot be empty';
            return;
        }
        else if (this.width === undefined || isNaN(this.width)) {
            this.errorMsg = 'width cannot be empty or it should be a number without (%)';
            return;
        }
        if (this.isNewWidget) {
            var widget = { '_id': null, 'widgetType': 'IMAGE', 'pageId': this.pageId,
                'url': this.url, 'width': this.width, 'name': this.name, 'text': this.text };
            this.widgetService.createWidget(this.pageId, widget)
                .subscribe(function (data) {
                _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
            });
        }
        else {
            var widget = { '_id': this.widgetId, 'widgetType': 'IMAGE', 'pageId': this.pageId,
                'url': this.url, 'width': this.width, 'name': this.name, 'text': this.text };
            this.widgetService.updateWidget(this.widgetId, widget)
                .subscribe(function (data) {
                _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
            });
        }
    };
    WidgetTextComponent.prototype.deleteWidget = function () {
        var _this = this;
        if (this.isNewWidget) {
            this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', 'new']);
        }
        else {
            this.widgetService.deleteWidget(this.widgetId)
                .subscribe(function (data) {
                if (data) {
                    _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
                }
            });
        }
    };
    WidgetTextComponent.prototype.goBack = function () {
        if (this.isNewWidget) {
            this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', 'new']);
        }
        else {
            this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        }
    };
    return WidgetTextComponent;
}());
WidgetTextComponent = __decorate([
    core_1.Component({
        selector: 'app-widget-text',
        templateUrl: './widget-text.component.html',
        styleUrls: ['./widget-text.component.css']
    })
], WidgetTextComponent);
exports.WidgetTextComponent = WidgetTextComponent;
