webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__directives_sortable_directive__ = __webpack_require__("../../../../../src/app/directives/sortable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_widget_widget_edit_widget_image_img_search_flickr_img_search_flickr_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/img-search-flickr/img-search-flickr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_shared_service_service_client__ = __webpack_require__("../../../../../src/app/services/shared-service.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_authentication_service_service_client__ = __webpack_require__("../../../../../src/app/services/authentication-service.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
            __WEBPACK_IMPORTED_MODULE_28__directives_sortable_directive__["a" /* SortableDirective */],
            __WEBPACK_IMPORTED_MODULE_30__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_widget_widget_edit_widget_image_img_search_flickr_img_search_flickr_component__["a" /* ImgSearchFlickrComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* Routing */],
            __WEBPACK_IMPORTED_MODULE_29_ngx_quill_editor__["a" /* QuillEditorModule */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_15__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_19__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_22__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_7__services_flickr_service_client__["a" /* FlickrService */], __WEBPACK_IMPORTED_MODULE_32__services_shared_service_service_client__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_33__services_authentication_service_service_client__["a" /* AuthenticationService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_image_img_search_flickr_img_search_flickr_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/img-search-flickr/img-search-flickr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_authentication_service_service_client__ = __webpack_require__("../../../../../src/app/services/authentication-service.service.client.ts");
/**
 * Created by sesha on 7/26/17.
 */















var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_2__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__services_authentication_service_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/:uid', component: __WEBPACK_IMPORTED_MODULE_2__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:uid/website', component: __WEBPACK_IMPORTED_MODULE_4__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:uid/website/new', component: __WEBPACK_IMPORTED_MODULE_5__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:uid/website/:wid', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:uid/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_7__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:uid/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_8__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_9__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wtype', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wtype/:wgid', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wtype/:wgid/flickr', component: __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_image_img_search_flickr_img_search_flickr_component__["a" /* ImgSearchFlickrComponent */] }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//
// user/:uid/website/new						WebsiteNewComponent
// user/:uid/website/:wid						WebsiteEditComponent
// user/:uid/website/:wid/page					PageListComponent
// user/:uid/website/:wid/page/new				PageNewComponent
// user/:uid/website/:wid/page/:pid				PageEditComponent
// user/:uid/website/:wid/page/:pid/widget			WidgetListComponent
// user/:uid/website/:wid/page/:pid/widget/new		WidgetChooserComponent
// user/:uid/website/:wid/page/:pid/widget/:wgid		WidgetEditComponent
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>\n    Angular 4 MEAN stack app\n  </h1>\n\n\n  <h3>\n    App works\n  </h3>\n\n\n  <h4>\n    <a href=\"test\">Test MongoDB</a>\n  </h4>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top page-navbar-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-4 col-md-4 col-lg-4 hidden-xs\">\n        <p class=\"navbar-text pull-left\">\n          <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\" class=\"glyphicon glyphicon-chevron-left\"></a>\n        </p>\n\n        <a class=\"navbar-brand\"><b>Pages</b></a>\n\n        <p class=\"navbar-text pull-right\">\n          <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/new\" class=\"glyphicon glyphicon-plus\"></a>\n        </p>\n      </div>\n      <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n        <p class=\"navbar-text pull-left hidden-sm hidden-md hidden-lg\">\n          <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\"class=\"glyphicon glyphicon-chevron-left\"></a>\n        </p>\n\n        <a class=\"navbar-brand\" href=\"#\"><b>Edit Page</b></a>\n\n        <p class=\"navbar-text pull-right\">\n          <a (click)=\"updatePage()\" class=\"glyphicon glyphicon-ok\"></a>\n        </p>\n      </div>\n    </div>\n  </div>\n</nav>\n<!--Header end-->\n\n<div class=\"row\">\n  <div class=\"container-fluid\">\n\n    <div class=\"hidden-xs col-sm-4 col-md-4 col-lg-4 pull-left\">\n      <ul class=\"list-group\">\n        <div *ngFor=\"let page of pageList\">\n          <li class=\"list-group-item page-list\">\n            <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}/widget\">{{page.name}}</a>\n            <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}\" class=\"glyphicon glyphicon-cog pull-right\"></a>\n          </li>\n        </div>\n      </ul>\n    </div>\n\n    <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8 pull-right\">\n      <div *ngIf=\"errorMsg\" class=\"alert alert-danger\" role=\"alert\">{{errorMsg}}</div>\n      <form>\n        <div class=\"form-group\">\n          <label for=\"pageName\">Name</label>\n          <input type=\"text\"\n                 class=\"form-control\"\n                 id=\"pageName\"\n                 name=\"pageName\"\n                 placeholder=\"Page Name\"\n                 [(ngModel)]=\"editPageName\"\n          >\n        </div>\n      </form>\n      <form>\n        <div class=\"form-group\">\n          <label for=\"pageTitle\">Title</label>\n          <input type=\"text\"\n                 class=\"form-control\"\n                 id=\"pageTitle\"\n                 name=\"pageTitle\"\n                 placeholder=\"Page Name\"\n                 [(ngModel)]=\"editPageTitle\"\n          >\n        </div>\n      </form>\n      <form>\n        <div class=\"form-group\">\n          <button class=\"btn btn-block btn-danger\" (click)=\"deletePage()\">Delete</button>\n        </div>\n      </form>\n    </div>\n  </div>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom page-navbar-footer\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n<!--footer end-->\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageEditComponent = (function () {
    function PageEditComponent(pageService, router, activatedRoute) {
        this.pageService = pageService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.pageService.findPageByWebsiteId(_this.websiteId)
                .subscribe(function (data) {
                if (data) {
                    _this.pageList = data;
                }
            });
            _this.pageService.findPageById(_this.pageId)
                .subscribe(function (data) {
                if (data) {
                    _this.page = data;
                    _this.editPageName = _this.page.name;
                    _this.editPageTitle = _this.page.description;
                }
            });
        });
    };
    PageEditComponent.prototype.deletePage = function () {
        var _this = this;
        this.pageService.deletePage(this.pageId)
            .subscribe(function (data) {
            if (data) {
                _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page']);
            }
        });
    };
    PageEditComponent.prototype.updatePage = function () {
        var _this = this;
        if (this.editPageName === '' && this.editPageTitle === '' || this.editPageName === '') {
            this.errorMsg = 'Page name cannot be empty';
            return;
        }
        this.page.name = this.editPageName;
        this.page.description = this.editPageTitle;
        this.pageService.updatePage(this.pageId, this.page)
            .subscribe(function (data) {
            if (data) {
                _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page']);
            }
        });
    };
    return PageEditComponent;
}());
PageEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], PageEditComponent);

var _a, _b, _c;
//# sourceMappingURL=page-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!--header-->\n<nav class=\"navbar navbar-default navbar-fixed-top page-navbar-header\">\n\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/{{userId}}/website\" class=\"glyphicon glyphicon-chevron-left\"></a>\n    </p>\n\n    <a class=\"navbar-brand\"><b>Pages</b></a>\n\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/new\" class=\"glyphicon glyphicon-plus\"></a>\n    </p>\n  </div>\n</nav>\n<!--Header end-->\n\n<div class=\"container-fluid\">\n  <ul class=\"list-group\">\n    <div *ngFor=\"let page of pageList\">\n      <li class=\"list-group-item page-list\">\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}/widget\">{{page.name}}</a>\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}\" class=\"glyphicon glyphicon-cog pull-right\"></a>\n      </li>\n    </div>\n  </ul>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom page-navbar-footer\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n<!--footer end-->\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageListComponent = (function () {
    function PageListComponent(pageService, router, activatedRoute) {
        this.pageService = pageService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageService.findPageByWebsiteId(_this.websiteId)
                .subscribe(function (data) {
                if (data) {
                    _this.pageList = data;
                }
            });
        });
    };
    return PageListComponent;
}());
PageListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], PageListComponent);

var _a, _b, _c;
//# sourceMappingURL=page-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top page-navbar-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-4 col-md-4 col-lg-4 hidden-xs\">\n        <p class=\"navbar-text pull-left\">\n          <a href=\"/user/{{userId}}/website/{{websiteId}}/page\" class=\"glyphicon glyphicon-chevron-left\"></a>\n        </p>\n\n        <a class=\"navbar-brand\"><b>Pages</b></a>\n\n        <p class=\"navbar-text pull-right\">\n          <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/new\" class=\"glyphicon glyphicon-plus\"></a>\n        </p>\n      </div>\n      <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n        <p class=\"navbar-text pull-left hidden-sm hidden-md hidden-lg\">\n          <a href=\"page-list.html\" class=\"glyphicon glyphicon-chevron-left\"></a>\n        </p>\n\n        <a class=\"navbar-brand\" href=\"#\"><b>New Page</b></a>\n\n        <p class=\"navbar-text pull-right\">\n          <a (click)=\"addPage()\" class=\"glyphicon glyphicon-ok\"></a>\n        </p>\n      </div>\n    </div>\n  </div>\n</nav>\n<!--Header end-->\n\n<div class=\"row\">\n  <div class=\"container-fluid\">\n\n    <div class=\"hidden-xs col-sm-4 col-md-4 col-lg-4 pull-left\">\n      <ul class=\"list-group\">\n        <div *ngFor=\"let page of pageList\">\n          <li class=\"list-group-item page-list\">\n            <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}/widget\">{{page.name}}</a>\n            <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}\" class=\"glyphicon glyphicon-cog pull-right\"></a>\n          </li>\n        </div>\n      </ul>\n    </div>\n\n    <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8 pull-right\">\n      <div *ngIf=\"errorMsg\" class=\"alert alert-danger\" role=\"alert\">{{errorMsg}}</div>\n      <form>\n        <div class=\"form-group\">\n          <label for=\"pageName\">Name</label>\n          <input type=\"text\" class=\"form-control\" name=\"pageName\" id=\"pageName\" placeholder=\"Page Name\" [(ngModel)]=\"pageName\">\n        </div>\n      </form>\n      <form>\n        <div class=\"form-group\">\n          <label for=\"pageTitle\">Title</label>\n          <input type=\"text\" class=\"form-control\" name=\"pageTitle\" id=\"pageTitle\" placeholder=\"Page Title\" [(ngModel)]=\"pageTitle\">\n        </div>\n      </form>\n    </div>\n  </div>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom page-navbar-footer\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a href=\"../user/profile.html\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n<!--footer end-->\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_page_model_client__ = __webpack_require__("../../../../../src/app/model/page.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageNewComponent = (function () {
    function PageNewComponent(pageService, router, activatedRoute) {
        this.pageService = pageService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
        });
        this.pageService.findPageByWebsiteId(this.websiteId)
            .subscribe(function (data) {
            if (data) {
                _this.pageList = data;
            }
        });
    };
    PageNewComponent.prototype.addPage = function () {
        var _this = this;
        if (this.pageName === undefined && this.pageTitle === undefined || this.pageName === undefined) {
            this.errorMsg = 'Page Name is mandatory';
            return;
        }
        this.page = new __WEBPACK_IMPORTED_MODULE_2__model_page_model_client__["a" /* Page */](null, this.pageName, this.websiteId, this.pageTitle);
        this.pageService.createPage(this.websiteId, this.page)
            .subscribe(function (data) {
            if (data) {
                _this.pageList.push(data);
                _this.pageName = null;
                _this.pageTitle = null;
                _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page']);
            }
        });
    };
    return PageNewComponent;
}());
PageNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], PageNewComponent);

var _a, _b, _c;
//# sourceMappingURL=page-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Login</h1>\n  <div *ngIf=\"loginError\" class=\"alert alert-danger\" role=\"alert\">{{loginError}}</div>\n    <form (submit)=\"login()\" #f=\"ngForm\">\n    <input placeholder=\"username\"\n           type=\"text\"\n           class=\"form-control\"\n           name=\"username\"\n           ngModel\n           required\n           #username=\"ngModel\"\n    />\n      <div *ngIf=\"username.invalid && (username.dirty || username.touched)\"\n           class=\"alert alert-danger\">\n            Username is required.\n      </div>\n    <input placeholder=\"password\"\n           type=\"password\"\n           class=\"form-control\"\n           name=\"password\"\n           ngModel\n           required\n           #password=\"ngModel\"/>\n      <div *ngIf=\"password.invalid && (password.dirty || password.touched)\"\n           class=\"alert alert-danger\">\n        Password is required.\n      </div>\n    <button class=\"btn btn-primary btn-block\" type=\"submit\" [disabled]=\"!f.valid\">Login</button>\n    <button class=\"btn btn-success btn-block\" routerLink=\"/register\">Register</button>\n\n      <a  href=\"http://localhost:3100/facebook/login\" class=\"btn btn-primary btn-block\">\n        <span class=\"fa fa-facebook\"></span>\n        Facebook\n      </a>\n\n    </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_service_client__ = __webpack_require__("../../../../../src/app/services/shared-service.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(router, sharedService, userService) {
        this.router = router;
        this.sharedService = sharedService;
        this.userService = userService;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginError = null;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.userService
            .login(this.username, this.password)
            .subscribe(function (user) {
            _this.sharedService.user = user;
            console.log(user);
            _this.router.navigate(['/profile']);
        });
        // this.userService.findUserByCredentials(this.username, this.password)
        //    .subscribe((user) =>  {
        //   console.log(user);
        //      if (user) {
        //        this.router.navigate(['/user', user._id]);
        //      }else {
        //        this.loginError = 'Invalid Username/ Password. Try again...';
        //      }
        // });
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_service_client__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top user-navbar-header\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Profile</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a class=\"navbar-link\" (click)=\"updateUserInfo(user)\">\n        <span class=\"glyphicon glyphicon-ok  color-white\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<div class=\"container\">\n  <div *ngIf=\"updateStatus\" class=\"alert alert-success\" role=\"alert\">Profile Updated successfully.</div>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input\n        type=\"text\"\n\n        class=\"form-control\"\n        id=\"username\"\n        name=\"username\"\n        disabled\n        placeholder=\"Alice\"\n        [(ngModel)] = \"user.username\"\n        value=\"{{user.username}}\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\"  required class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"alice.wonderland@unicorn.com\" [(ngModel)] = \"user.email\" value=\"{{user.email}}\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"first-name\">First Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"first-name\" name=\"first-name\" placeholder=\"Alice\" [(ngModel)] = \"user.firstName\" value=\"{{user.firstName}}\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"last-name\" name=\"last-name\" placeholder=\"Wonderland\" [(ngModel)] = \"user.lastName\" value=\"{{user.lastName}}\">\n    </div>\n\n  <button class=\"btn btn-primary btn-block\"\n     routerLink=\"/user/{{user._id}}/website\">Websites</button>\n  <button class=\"btn btn-danger btn-block \"\n     (click)=\"logout()\">Logout</button>\n  </form>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom user-navbar-footer\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_user_model_client__ = __webpack_require__("../../../../../src/app/model/user.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_service_client__ = __webpack_require__("../../../../../src/app/services/shared-service.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = (function () {
    function ProfileComponent(userService, sharedService, activatedRoute, router) {
        this.userService = userService;
        this.sharedService = sharedService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__model_user_model_client__["a" /* User */]('', '', '', '', '', '');
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            // this.userId = params['uid'];
            // this.userService.findUserById(this.userId)
            //   .subscribe((user) =>  {
            //   if (user) {
            //       this.user = user;
            //     }
            // });
            console.log(_this.sharedService.user);
            _this.user = _this.sharedService.user;
        });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (status) {
            // console.log(status);
            _this.router.navigate(['/login']);
        });
    };
    ProfileComponent.prototype.updateUserInfo = function (user) {
        var _this = this;
        this.userService.updateUser(this.userId, this.user)
            .subscribe(function (data) {
            _this.updateStatus = data.success;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Register</h1>\n  <div [hidden]=\"!registrationError\" class=\"alert alert-danger\" role=\"alert\">{{registrationError}}</div>\n  <form #f=\"ngForm\">\n  <input placeholder=\"username\"\n         type=\"text\"\n         name=\"username\"\n         required\n         #username1=\"ngModel\"\n         class=\"form-control\"\n         [(ngModel)]=\"username\" />\n    <div *ngIf=\"username1.invalid && (username1.dirty || username1.touched)\"\n         class=\"alert alert-danger\">\n          Username cannot be empty\n    </div>\n  <input placeholder=\"password\"\n         type=\"password\"\n         name=\"password\"\n         #password1=\"ngModel\"\n         required\n         class=\"form-control\"\n         [(ngModel)]=\"password\"/>\n    <div *ngIf=\"password1.invalid && (password1.dirty || password1.touched)\"\n         class=\"alert alert-danger\">\n      Password cannot be empty\n    </div>\n  <input placeholder=\"verify password\"\n         type=\"password\"\n         name=\"passwordDuplicated\"\n         #passwordDuplicated1=\"ngModel\"\n         class=\"form-control\"\n         required\n         [(ngModel)]=\"passwordDuplicated\"/>\n    <div *ngIf=\"passwordDuplicated1.invalid && (passwordDuplicated1.dirty || passwordDuplicated1.touched)\"\n         class=\"alert alert-danger\">\n         Password cannot be empty\n    </div>\n  <button class=\"btn btn-primary btn-block\"\n     (click)=\"registerUser(username, password, passwordDuplicated) \" [disabled]=\"!f.valid\">Register</button>\n  <a class=\"btn btn-danger btn-block\"\n     routerLink=\"/login\">Cancel</a>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_service_client__ = __webpack_require__("../../../../../src/app/services/shared-service.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(userService, sharedService, router) {
        this.userService = userService;
        this.sharedService = sharedService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.registerUser = function (username, password, passwordDuplicated) {
        var _this = this;
        this.registrationError = null;
        if (password === passwordDuplicated) {
            this.userService.findUserByUsername(username)
                .subscribe(function (data1) {
                if (data1) {
                    _this.registrationError = 'Username exists';
                }
                else {
                    // let user: User = new User(null, username, password, null, null, null);
                    // this.userService.createUser(user)
                    //   .subscribe((data: any) => {
                    //     user = data;
                    //     console.log(user);
                    //     this.router.navigate(['/user', user._id]);
                    //   });
                    _this.userService.register(username, password)
                        .subscribe(function (data) {
                        _this.sharedService.user = data;
                        console.log(data);
                        console.log('success');
                        _this.router.navigate(['/profile']);
                    });
                }
            });
        }
        else {
            this.registrationError = 'Password mismatch';
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Header-->\n<nav class=\"navbar navbar-default navbar-fixed-top website-navbar-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-4 col-md-4 col-lg-4 hidden-xs\">\n        <p class=\"navbar-text pull-left\">\n          <a href=\"/user/{{userId}}\" class=\"glyphicon glyphicon-chevron-left toolbar-a-gly\"></a>\n        </p>\n\n        <a class=\"navbar-brand\"><b>Websites</b></a>\n\n        <p class=\"navbar-text pull-right\">\n          <a routerLink=\"/user/{{userId}}/website/new\" class=\"glyphicon glyphicon-plus\"></a>\n        </p>\n      </div>\n      <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n        <p class=\"navbar-text pull-left hidden-sm hidden-md hidden-lg\">\n          <a routerLink=\"/user/{{userId}}/website\" class=\"glyphicon glyphicon-chevron-left\"></a>\n        </p>\n\n        <a class=\"navbar-brand\"><b>Edit Website</b></a>\n\n        <p class=\"navbar-text pull-right\">\n          <a class=\"glyphicon glyphicon-ok\" (click)=\"updateWebsite()\"></a>\n        </p>\n      </div>\n    </div>\n  </div>\n</nav>\n<!--Header end-->\n\n<div class=\"row\">\n  <div class=\"container-fluid\">\n\n    <div class=\"hidden-xs col-sm-4 col-md-4 col-lg-4 pull-left\">\n      <ul class=\"list-group\">\n        <div *ngFor=\"let website of websiteList\">\n          <li class=\"list-group-item website-list\">\n            <a routerLink=\"/user/{{userId}}/website/{{website._id}}/page\">{{website.name}}</a>\n            <a routerLink=\"/user/{{userId}}/website/{{website._id}}\" class=\"glyphicon glyphicon-cog pull-right\"></a>\n            <!--<a routerLink=\"/login\" class=\"glyphicon glyphicon-cog pull-right\"></a>-->\n\n          </li>\n        </div>\n      </ul>\n    </div>\n    <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8 pull-right\">\n      <div *ngIf=\"errorMsg\" class=\"alert alert-danger\" role=\"alert\">{{errorMsg}}</div>\n      <form>\n        <div class=\"form-group\">\n          <label for=\"websiteName\">Website Name</label>\n          <input type=\"text\"\n                 class=\"form-control\"\n                 id=\"websiteName\"\n                 name=\"websiteName\"\n                 placeholder=\"Alice\"\n                 value=\"{{updatedName}}\"\n                 [(ngModel)]=\"updatedName\"\n                 >\n        </div>\n      </form>\n      <form>\n        <div class=\"form-group\">\n          <label for=\"websiteDesc\">Website Description</label>\n          <textarea id=\"websiteDesc\"\n                    class=\"form-control\"\n                    name=\"textarea\"\n                    rows=\"5\"\n                    value=\"{{updatedDesc}}\"\n                    [(ngModel)]=\"updatedDesc\"\n                    placeholder=\"Description\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book\n          </textarea>\n        </div>\n      </form>\n      <form>\n        <div class=\"form-group\">\n          <button class=\"btn btn-block btn-danger\" (click)=\"deleteWebsite()\">Delete</button>\n        </div>\n      </form>\n    </div>\n  </div>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom website-navbar-footer\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\" id=\"f\">\n      <a routerLink=\"/user/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n<!--footer end-->\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteEditComponent = (function () {
    function WebsiteEditComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.websiteService.findWebsitesByUser(_this.userId)
                .subscribe(function (data) {
                if (data) {
                    _this.websiteList = data;
                }
            });
            _this.websiteService.findWebsiteById(_this.websiteId)
                .subscribe(function (data) {
                if (data) {
                    _this.updatingWebsite = data;
                    _this.updatedName = _this.updatingWebsite.name;
                    _this.updatedDesc = _this.updatingWebsite.description;
                }
            });
        });
    };
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        var _this = this;
        this.websiteService.deleteWebsite(this.websiteId)
            .subscribe(function (data) {
            if (data) {
                _this.router.navigate(['/user', _this.userId, 'website']);
            }
        });
    };
    WebsiteEditComponent.prototype.updateWebsite = function () {
        var _this = this;
        if (this.updatedName === '' && this.updatedDesc === '' || this.updatedName === '') {
            this.errorMsg = 'Website name cannot be null';
            return;
        }
        this.updatingWebsite.name = this.updatedName;
        this.updatingWebsite.description = this.updatedDesc;
        this.websiteService.updateWebsite(this.websiteId, this.updatingWebsite)
            .subscribe(function (data) {
            if (data.success === true) {
                _this.router.navigate(['/user', _this.userId, 'website']);
            }
        });
    };
    return WebsiteEditComponent;
}());
WebsiteEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WebsiteEditComponent);

var _a, _b, _c;
//# sourceMappingURL=website-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top website-navbar-header\">\n  <div class=\"container-fluid\">\n\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/{{userId}}\" class=\"glyphicon glyphicon-chevron-left\"></a>\n    </p>\n\n    <a class=\"navbar-brand\"><b>Websites</b></a>\n\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}/website/new\" class=\"glyphicon glyphicon-plus\"></a>\n    </p>\n\n  </div>\n</nav>\n<!--Header end-->\n<div class=\"container-fluid\">\n  <ul class=\"list-group\">\n    <div *ngFor=\"let website of websiteList\">\n      <li class=\"list-group-item website-list\">\n        <a routerLink=\"/user/{{userId}}/website/{{website._id}}/page\">{{website.name}}</a>\n        <a routerLink=\"/user/{{userId}}/website/{{website._id}}\" class=\"glyphicon glyphicon-cog pull-right\"></a>\n      </li>\n    </div>\n  </ul>\n</div>\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom website-navbar-footer\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\" id=\"f\">\n      <a routerLink=\"/user/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteListComponent = (function () {
    function WebsiteListComponent(websiteService, activatedRoute, pageService) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.pageService = pageService;
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteService.findWebsitesByUser(_this.userId)
                .subscribe(function (data) {
                if (data) {
                    _this.websiteList = data;
                }
            });
        });
    };
    return WebsiteListComponent;
}());
WebsiteListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */]) === "function" && _c || Object])
], WebsiteListComponent);

var _a, _b, _c;
//# sourceMappingURL=website-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top website-navbar-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-4 col-md-4 col-lg-4 hidden-xs\">\n        <p class=\"navbar-text pull-left\">\n          <a routerLink=\"/user/{{userId}}\" class=\"glyphicon glyphicon-chevron-left\"></a>\n        </p>\n\n        <a class=\"navbar-brand\"><b>Websites</b></a>\n\n        <p class=\"navbar-text pull-right\">\n          <a routerLink=\"/user/{{userId}}/website/new\" class=\"glyphicon glyphicon-plus\"></a>\n        </p>\n      </div>\n      <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n        <p class=\"navbar-text pull-left hidden-sm hidden-md hidden-lg\">\n          <a href=\"website-list.html\" class=\"glyphicon glyphicon-chevron-left\"></a>\n        </p>\n\n        <a class=\"navbar-brand\"><b>New Website</b></a>\n\n        <p class=\"navbar-text pull-right\">\n          <a class=\"glyphicon glyphicon-ok\" (click)=\"addWebsite()\"></a>\n        </p>\n      </div>\n    </div>\n  </div>\n</nav>\n<!--Header end-->\n\n<div class=\"row\">\n  <div class=\"container-fluid\">\n\n    <div class=\"hidden-xs col-sm-4 col-md-4 col-lg-4 pull-left\">\n      <ul class=\"list-group\">\n        <div *ngFor=\"let website of websiteList\">\n          <li class=\"list-group-item website-list\">\n            <a routerLink=\"/user/{{userId}}/website/{{website._id}}/page\">{{website.name}}</a>\n            <a routerLink=\"/user/{{userId}}/website/{{website._id}}\" class=\"glyphicon glyphicon-cog pull-right\"></a>\n          </li>\n        </div>\n      </ul>\n    </div>\n\n    <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8 pull-right\">\n      <div *ngIf=\"errorMsg\" class=\"alert alert-danger\" role=\"alert\">{{errorMsg}}</div>\n      <form>\n        <div class=\"form-group\">\n          <label for=\"websiteName\">Name</label>\n          <input type=\"text\" class=\"form-control\" name = \"websiteName\" id=\"websiteName\" placeholder=\"Alice\" [(ngModel)]=\"websiteName\">\n        </div>\n      </form>\n      <form>\n        <div class=\"form-group\">\n          <label for=\"websiteDesc\">Description</label>\n          <textarea id=\"websiteDesc\" class=\"form-control\" name = \"websiteDesc\" name=\"textarea\" rows=\"5\" placeholder=\"Description\" [(ngModel)]=\"websiteDesc\"></textarea>\n        </div>\n      </form>\n    </div>\n  </div>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom website-navbar-footer\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\" id=\"f\">\n      <a routerLink=\"/user/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n<!--footer end-->\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_website_model_client__ = __webpack_require__("../../../../../src/app/model/website.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteNewComponent = (function () {
    function WebsiteNewComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteService.findWebsitesByUser(_this.userId)
                .subscribe(function (data) {
                if (data) {
                    _this.websiteList = data;
                }
            });
        });
    };
    WebsiteNewComponent.prototype.addWebsite = function () {
        var _this = this;
        if (this.websiteName === undefined && this.websiteDesc === undefined || this.websiteName === undefined) {
            this.errorMsg = 'Website Name is mandatory';
            return;
        }
        this.newWebsite = new __WEBPACK_IMPORTED_MODULE_3__model_website_model_client__["a" /* Website */](null, this.websiteName, this.userId, this.websiteDesc);
        this.websiteService.createWebsite(this.userId, this.newWebsite)
            .subscribe(function (data) {
            console.log(data);
            if (data) {
                _this.websiteList.push(data);
                _this.websiteName = null;
                _this.websiteDesc = null;
                _this.router.navigate(['/user', _this.userId, 'website']);
            }
        });
    };
    return WebsiteNewComponent;
}());
WebsiteNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WebsiteNewComponent);

var _a, _b, _c;
//# sourceMappingURL=website-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Header-->\n<nav class=\"navbar navbar-default navbar-fixed-top widget-navbar-header\">\n  <div class=\"container-fluid\">\n\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\" class=\"glyphicon glyphicon-chevron-left\"></a>\n    </p>\n\n    <a class=\"navbar-brand\" href=\"#\"><b>Choose Widget</b></a>\n\n  </div>\n</nav>\n<!--Header end-->\n<div class=\"container-fluid\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item widget-list\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/1\">Header</a>\n    </li>\n    <li class=\"list-group-item widget-list\">\n      <a >Label</a>\n    </li>\n    <li class=\"list-group-item widget-list\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/4\">HTML</a>\n    </li>\n    <li class=\"list-group-item widget-list\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/5\">Text Input</a>\n    </li>\n    <li class=\"list-group-item widget-list\">\n      <a>Link</a>\n    </li>\n    <li class=\"list-group-item widget-list\">\n      <a>Button</a>\n    </li>\n    <li class=\"list-group-item widget-list\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/2\">Image</a>\n    </li>\n    <li class=\"list-group-item widget-list\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/3\">YouTube Video</a>\n    </li>\n    <li class=\"list-group-item widget-list\">\n      <a>Data table</a>\n    </li>\n    <li class=\"list-group-item widget-list\">\n      <a href=\"#\">Repeater</a>\n    </li>\n  </ul>\n</div>\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom widget-navbar-footer\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n<!--footer end-->\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetChooserComponent = (function () {
    function WidgetChooserComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
    };
    return WidgetChooserComponent;
}());
WidgetChooserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-chooser',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], WidgetChooserComponent);

var _a;
//# sourceMappingURL=widget-chooser.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"widgetId\">\n\n  <div *ngSwitchCase='1'>\n    <app-widget-header></app-widget-header>\n  </div>\n\n  <div *ngSwitchCase='2'>\n    <app-widget-image></app-widget-image>\n  </div>\n\n  <div *ngSwitchCase='3'>\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n\n  <div *ngSwitchCase='4'>\n    <app-widget-html></app-widget-html>\n  </div>\n\n  <div *ngSwitchCase='5'>\n    <app-widget-text></app-widget-text>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetEditComponent = (function () {
    function WidgetEditComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wtype'];
        });
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], WidgetEditComponent);

var _a;
//# sourceMappingURL=widget-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Header-->\n<nav class=\"navbar navbar-default navbar-fixed-top widget-navbar-header\">\n  <div class=\"container-fluid\">\n\n    <p class=\"navbar-text pull-left\">\n      <a (click)=\"goBack()\" class=\"glyphicon glyphicon-chevron-left\"></a>\n    </p>\n\n    <a class=\"navbar-brand\" [hidden]=\"!isNewWidget\"><b>Widget New</b></a>\n    <a class=\"navbar-brand\" [hidden]=\"isNewWidget\"><b>Widget Edit</b></a>\n\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"updateWidget()\" class=\"glyphicon glyphicon-ok\"></a>\n    </p>\n  </div>\n</nav>\n<!--Header end-->\n<div class=\"container-fluid\">\n  <div *ngIf=\"errorMsg\" class=\"alert alert-danger\" role=\"alert\">{{errorMsg}}</div>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"widgetText\">Text</label>\n      <input type=\"text\" class=\"form-control\" id=\"widgetText\"\n             name=\"widgetText\"\n             placeholder=\"Alice\"\n             [(ngModel)]=\"text\"\n             required>\n    </div>\n\n  </form>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"widgetTextSize\">Size</label>\n      <input type=\"text\" class=\"form-control\" id=\"widgetTextSize\"\n             name=\"widgetTextSize\"\n             placeholder=\"1\"\n             required\n             [(ngModel)]=\"size\"\n             #widgetTextSize=\"ngModel\">\n    </div>\n  </form>\n  <form>\n    <div class=\"form-group\">\n      <button (click)=\"deleteWidget()\" class=\"btn btn-block btn-danger\">Delete</button>\n    </div>\n  </form>\n</div>\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom widget-navbar-footer\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n<!--footer end-->\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetHeaderComponent = (function () {
    function WidgetHeaderComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetType = params['wtype'];
            _this.widgetId = params['wgid'];
            if (_this.widgetId) {
                _this.isNewWidget = false;
                // this.editWidget = this.widgetService.findWidgetById(this.widgetId);
                _this.widgetService.findWidgetById(_this.widgetId)
                    .subscribe(function (data) {
                    if (data) {
                        _this.editWidget = data;
                        _this.text = _this.editWidget.text;
                        _this.size = _this.editWidget.size;
                    }
                });
                //        this.text = this.editWidget.text;
                //        this.size = this.editWidget.size;
            }
            else {
                _this.isNewWidget = true;
            }
        });
    };
    WidgetHeaderComponent.prototype.updateWidget = function () {
        var _this = this;
        if (this.text === undefined || this.text === '') {
            this.errorMsg = 'Text cannot be empty';
            return;
        }
        else if (this.size === undefined || isNaN(Number(this.size)) || (Number(this.size) < 1 || Number(this.size) > 6)) {
            this.errorMsg = 'Size should be between 1 - 6';
            return;
        }
        if (this.isNewWidget) {
            var widget = { 'widgetType': 'HEADING', 'pageId': this.pageId, 'size': Number(this.size), 'text': this.text };
            this.widgetService.createWidget(this.pageId, widget)
                .subscribe(function (data) {
                _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
            });
        }
        else {
            var widget = { '_id': this.widgetId, 'widgetType': 'HEADING', 'pageId': this.pageId, 'size': Number(this.size), 'text': this.text };
            this.widgetService.updateWidget(this.widgetId, widget)
                .subscribe(function (data) {
                _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
            });
        }
    };
    WidgetHeaderComponent.prototype.deleteWidget = function () {
        var _this = this;
        if (this.isNewWidget) {
            this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', 'new']);
        }
        else {
            this.widgetService.deleteWidget(this.pageId, this.widgetId)
                .subscribe(function (data) {
                if (data) {
                    _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
                }
            });
        }
    };
    WidgetHeaderComponent.prototype.goBack = function () {
        if (this.isNewWidget) {
            this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', 'new']);
        }
        else {
            this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        }
    };
    return WidgetHeaderComponent;
}());
WidgetHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-header',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetHeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Header-->\n<nav class=\"navbar navbar-default navbar-fixed-top widget-navbar-header\">\n  <div class=\"container-fluid\">\n\n    <p class=\"navbar-text pull-left\">\n      <a (click)=\"goBack()\" class=\"glyphicon glyphicon-chevron-left\"></a>\n    </p>\n\n    <a class=\"navbar-brand\" [hidden]=\"!isNewWidget\"><b>Widget New</b></a>\n    <a class=\"navbar-brand\" [hidden]=\"isNewWidget\"><b>Widget Edit</b></a>\n\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"updateWidget()\" class=\"glyphicon glyphicon-ok\"></a>\n    </p>\n  </div>\n</nav>\n<!--Header end-->\n<div class=\"container-fluid\">\n  <div *ngIf=\"errorMsg\" class=\"alert alert-danger\" role=\"alert\">{{errorMsg}}</div>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"widgetText\">HTML</label>\n      <quill-editor id=\"widgetText\" name=\"text\" [(ngModel)]=\"htmlTag\"></quill-editor>\n    </div>\n  </form>\n  <form>\n    <div class=\"form-group\">\n      <button (click)=\"deleteWidget()\" class=\"btn btn-block btn-danger\">Delete</button>\n    </div>\n  </form>\n</div>\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom widget-navbar-footer\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n<!--footer end-->\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetHtmlComponent = (function () {
    function WidgetHtmlComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetType = params['wtype'];
            _this.widgetId = params['wgid'];
            if (_this.widgetId) {
                _this.isNewWidget = false;
                // this.editWidget = this.widgetService.findWidgetById(this.widgetId);
                _this.widgetService.findWidgetById(_this.widgetId)
                    .subscribe(function (data) {
                    if (data) {
                        _this.editWidget = data;
                        _this.htmlTag = _this.editWidget.text;
                    }
                });
                // this.htmlTag = this.editWidget.text;
            }
            else {
                _this.isNewWidget = true;
            }
        });
    };
    WidgetHtmlComponent.prototype.updateWidget = function () {
        var _this = this;
        if (this.htmlTag === undefined || this.htmlTag === '') {
            this.errorMsg = 'Html Tag cannot be empty';
            return;
        }
        if (this.isNewWidget) {
            var widget = { 'widgetType': 'HTML', 'pageId': this.pageId, 'text': this.htmlTag };
            this.widgetService.createWidget(this.pageId, widget)
                .subscribe(function (data) {
                _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
            });
        }
        else {
            var widget = { '_id': this.widgetId, 'widgetType': 'HTML', 'pageId': this.pageId, 'text': this.htmlTag };
            this.widgetService.updateWidget(this.widgetId, widget)
                .subscribe(function (data) {
                _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
            });
        }
    };
    WidgetHtmlComponent.prototype.deleteWidget = function () {
        var _this = this;
        if (this.isNewWidget) {
            this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', 'new']);
        }
        else {
            this.widgetService.deleteWidget(this.pageId, this.widgetId)
                .subscribe(function (data) {
                if (data) {
                    _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
                }
            });
        }
    };
    WidgetHtmlComponent.prototype.goBack = function () {
        if (this.isNewWidget) {
            this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', 'new']);
        }
        else {
            this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        }
    };
    return WidgetHtmlComponent;
}());
WidgetHtmlComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-html',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetHtmlComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-html.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/img-search-flickr/img-search-flickr.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".small-padding{\n  padding: 4px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/img-search-flickr/img-search-flickr.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Header-->\n<nav class=\"navbar navbar-default navbar-fixed-top widget-navbar-header\">\n  <div class=\"container-fluid\">\n\n    <p class=\"navbar-text pull-left\">\n      <a (click)=\"goBack()\" class=\"glyphicon glyphicon-chevron-left\"></a>\n    </p>\n\n    <a class=\"navbar-brand\"><b>Search Image</b></a>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <div class=\"input-group\">\n    <input ng-model=\"searchText\" [(ngModel)]=\"searchText\" type=\"text\" placeholder=\"Search Images\" class=\"form-control\">\n    <span class=\"input-group-btn\">\n        <a (click)=\"fetchImages()\"  class=\"btn btn-primary form-control\" >\n            <span class=\"glyphicon glyphicon-search\"></span>\n        </a>\n        </span>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2 small-padding\" *ngFor=\"let i of images\">\n        <img (click)=\"captureImage(i)\" src=\"https://farm{{i.farm}}.staticflickr.com/{{i.server}}/{{i.id}}_{{i.secret}}_s.jpg\"/>\n    </div>\n  </div>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom widget-navbar-footer\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n<!--footer end-->\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/img-search-flickr/img-search-flickr.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImgSearchFlickrComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImgSearchFlickrComponent = (function () {
    function ImgSearchFlickrComponent(widgetService, flickrService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.flickrService = flickrService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.images = [];
    }
    ImgSearchFlickrComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            console.log(_this.userId);
            console.log(_this.websiteId);
            console.log(_this.pageId);
            console.log(_this.widgetId);
        });
    };
    ImgSearchFlickrComponent.prototype.goBack = function () {
        if (this.widgetId === 'new') {
            this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', '2']);
        }
        else {
            this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', '2', this.widgetId]);
        }
    };
    ImgSearchFlickrComponent.prototype.fetchImages = function () {
        var _this = this;
        console.log(this.searchText);
        this.flickrService.getImages(this.searchText).subscribe(function (res) {
            var data = res.replace('jsonFlickrApi(', '');
            data = data.substring(0, data.length - 1);
            var tempImages = JSON.parse(data);
            _this.images = tempImages.photos.photo;
        });
    };
    ImgSearchFlickrComponent.prototype.captureImage = function (i) {
        var _this = this;
        if (this.widgetId === 'new') {
            var widget = { 'widgetType': 'IMAGE', 'pageId': this.pageId,
                'url': 'https://farm' + i.farm + '.staticflickr.com/' + i.server + '/' + i.id + '_' + i.secret + '_b.jpg', 'width': 100 };
            console.log(widget.url);
            this.widgetService.createWidget(this.pageId, widget)
                .subscribe(function (data) {
                _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
            });
        }
        else {
            var widget = { '_id': this.widgetId, 'widgetType': 'IMAGE', 'pageId': this.pageId,
                'url': 'https://farm' + i.farm + '.staticflickr.com/' + i.server + '/' + i.id + '_' + i.secret + '_b.jpg', 'width': 100 };
            this.widgetService.updateWidget(this.widgetId, widget)
                .subscribe(function (data) {
                _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
            });
        }
    };
    return ImgSearchFlickrComponent;
}());
ImgSearchFlickrComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-img-search-flickr',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/img-search-flickr/img-search-flickr.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/img-search-flickr/img-search-flickr.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_flickr_service_client__["a" /* FlickrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_flickr_service_client__["a" /* FlickrService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ImgSearchFlickrComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=img-search-flickr.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Header-->\n<nav class=\"navbar navbar-default navbar-fixed-top widget-navbar-header\">\n  <div class=\"container-fluid\">\n\n    <p class=\"navbar-text pull-left\">\n      <a (click)=\"goBack()\" class=\"glyphicon glyphicon-chevron-left\"></a>\n    </p>\n\n    <a class=\"navbar-brand\" [hidden]=\"!isNewWidget\"><b>Widget New</b></a>\n    <a class=\"navbar-brand\" [hidden]=\"isNewWidget\"><b>Widget Edit</b></a>\n\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"updateWidget()\" class=\"glyphicon glyphicon-ok\"></a>\n    </p>\n  </div>\n</nav>\n<!--Header end-->\n<div class=\"container-fluid\">\n  <div *ngIf=\"errorMsg\" class=\"alert alert-danger\" role=\"alert\">{{errorMsg}}</div>\n\n  <form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" placeholder=\"Alice\" [(ngModel)]=\"name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"text\">Text</label>\n      <input type=\"text\" class=\"form-control\" name=\"text\" id=\"text\" placeholder=\"Alice\" [(ngModel)]=\"text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"url\">URL</label>\n      <input type=\"text\" class=\"form-control\" id=\"url\" name=\"url\" placeholder=\"Alice\" [(ngModel)]=\"url\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"width\">Width(%)</label>\n      <input type=\"text\" class=\"form-control\" id=\"width\" name=\"width\" placeholder=\"0-100%\" [(ngModel)]=\"width\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"widgetUpload\">Upload</label>\n      <input name=\"myFile\" type=\"file\" id=\"widgetUpload\">\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">Upload Image</button>\n      <input  name=\"widgetId\" value=\"{{widgetId}}\"   style=\"display: none\"/>\n      <input  name=\"websiteId\" value=\"{{websiteId}}\"   style=\"display: none\"/>\n      <input  name=\"pageId\" value=\"{{pageId}}\"   style=\"display: none\"/>\n      <input  name=\"userId\" value=\"{{userId}}\"   style=\"display: none\"/>\n    </div>\n\n  </form>\n  <div class=\"form-group\">\n    <button *ngIf=\"!isNewWidget\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/2/{{widgetId}}/flickr\" class=\"btn btn-block btn-success\">Search Image</button>\n    <button *ngIf=\"isNewWidget\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/2/new/flickr\" class=\"btn btn-block btn-success\">Search Image</button>\n  </div>\n  <div class=\"form-group\">\n    <button (click)=\"deleteWidget()\" class=\"btn btn-block btn-danger\">Delete</button>\n  </div>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom widget-navbar-footer\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n<!--footer end-->\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetImageComponent = (function () {
    function WidgetImageComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
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
    WidgetImageComponent.prototype.updateWidget = function () {
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
            var widget = { 'widgetType': 'IMAGE', 'pageId': this.pageId,
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
    WidgetImageComponent.prototype.deleteWidget = function () {
        var _this = this;
        if (this.isNewWidget) {
            this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', 'new']);
        }
        else {
            this.widgetService.deleteWidget(this.pageId, this.widgetId)
                .subscribe(function (data) {
                if (data) {
                    _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
                }
            });
        }
    };
    WidgetImageComponent.prototype.goBack = function () {
        if (this.isNewWidget) {
            this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', 'new']);
        }
        else {
            this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        }
    };
    return WidgetImageComponent;
}());
WidgetImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetImageComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Header-->\n<nav class=\"navbar navbar-default navbar-fixed-top widget-navbar-header\">\n  <div class=\"container-fluid\">\n\n    <p class=\"navbar-text pull-left\">\n      <a (click)=\"goBack()\" class=\"glyphicon glyphicon-chevron-left\"></a>\n    </p>\n\n    <a class=\"navbar-brand\" [hidden]=\"!isNewWidget\"><b>Widget New</b></a>\n    <a class=\"navbar-brand\" [hidden]=\"isNewWidget\"><b>Widget Edit</b></a>\n\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"updateWidget()\" class=\"glyphicon glyphicon-ok\"></a>\n    </p>\n  </div>\n</nav>\n<!--Header end-->\n<div class=\"container-fluid\">\n  <div *ngIf=\"errorMsg\" class=\"alert alert-danger\" role=\"alert\">{{errorMsg}}</div>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"widgetName\">Name</label>\n      <input type=\"text\" class=\"form-control\" name=\"widgetName\" id=\"widgetName\" placeholder=\"Alice\" [(ngModel)]=\"name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"widgetText\">Text</label>\n      <input type=\"text\" class=\"form-control\" name=\"widgetText\" id=\"widgetText\" placeholder=\"Alice\" [(ngModel)]=\"text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"widgetUrl\">Rows</label>\n      <input type=\"text\" class=\"form-control\" id=\"widgetUrl\" name=\"widgetUrl\" placeholder=\"Alice\" [(ngModel)]=\"rows\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"widgetWidth\">Placeholder</label>\n      <input type=\"text\" class=\"form-control\" id=\"widgetWidth\" name=\"widgetWidth\" placeholder=\"0-100%\" [(ngModel)]=\"placeholder\">\n    </div>\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\">\n          <input *ngIf=\"isFormatted===false\" (click)=\"isFormattedClicked()\" type=\"checkbox\">\n          <input *ngIf=\"isFormatted===true\" (click)=\"isFormattedClicked()\" type=\"checkbox\" checked>\n        </span>\n        <input id=\"email\" type=\"text\" class=\"form-control\" disabled name=\"email\" placeholder=\"Email\" value=\"Formatted\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <button (click)=\"deleteWidget()\" class=\"btn btn-block btn-danger\">Delete</button>\n    </div>\n  </form>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom widget-navbar-footer\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n<!--footer end-->\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetTextComponent = (function () {
    function WidgetTextComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.isFormatted = false;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].baseUrl;
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
                        console.log(data);
                        _this.editWidget = data;
                        _this.isFormatted = _this.editWidget.formatted;
                        _this.rows = _this.editWidget.rows;
                        _this.name = _this.editWidget.name;
                        _this.text = _this.editWidget.text;
                        _this.placeholder = _this.editWidget.placeholder;
                    }
                });
            }
            else {
                _this.isNewWidget = true;
            }
        });
    };
    WidgetTextComponent.prototype.updateWidget = function () {
        var _this = this;
        if (this.rows === undefined || isNaN(this.rows)) {
            this.errorMsg = 'No of rows should be an integer';
            return;
        }
        console.log('yes' + this.rows);
        var numRows = Number(this.rows);
        if (this.isNewWidget) {
            var widget = { 'widgetType': 'TEXT', 'pageId': this.pageId,
                'text': this.text, 'placeholder': this.placeholder, 'name': this.name, 'rows': numRows, 'formatted': this.isFormatted };
            console.log('new' + this.rows);
            this.widgetService.createWidget(this.pageId, widget)
                .subscribe(function (data) {
                _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
            });
        }
        else {
            var widget = { '_id': this.widgetId, 'widgetType': 'TEXT', 'pageId': this.pageId,
                'text': this.text, 'placeholder': this.placeholder, 'name': this.name, 'rows': numRows, 'formatted': this.isFormatted };
            console.log('editted' + this.rows);
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
            this.widgetService.deleteWidget(this.pageId, this.widgetId)
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
    WidgetTextComponent.prototype.isFormattedClicked = function () {
        this.isFormatted = !this.isFormatted;
    };
    return WidgetTextComponent;
}());
WidgetTextComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-text',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetTextComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-text.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Header-->\n<nav class=\"navbar navbar-default navbar-fixed-top widget-navbar-header\">\n  <div class=\"container-fluid\">\n\n    <p class=\"navbar-text pull-left\">\n      <a (click)=\"goBack()\" class=\"glyphicon glyphicon-chevron-left\"></a>\n    </p>\n\n    <a class=\"navbar-brand\" [hidden]=\"!isNewWidget\"><b>Widget New</b></a>\n    <a class=\"navbar-brand\" [hidden]=\"isNewWidget\"><b>Widget Edit</b></a>\n\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"updateWidget()\" class=\"glyphicon glyphicon-ok\"></a>\n    </p>\n  </div>\n</nav>\n<!--Header end-->\n<div class=\"container-fluid\">\n  <div *ngIf=\"errorMsg\" class=\"alert alert-danger\" role=\"alert\">{{errorMsg}}</div>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"widgetName\">Name</label>\n      <input type=\"text\" class=\"form-control\" name=\"widgetName\" id=\"widgetName\" placeholder=\"Alice\" [(ngModel)]=\"name\">\n    </div>\n  </form>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"widgetText\">Text</label>\n      <input type=\"text\" class=\"form-control\" name=\"widgetText\" id=\"widgetText\" placeholder=\"Alice\" [(ngModel)]=\"text\">\n    </div>\n  </form>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"widgetUrl\">URL</label>\n      <input type=\"text\" class=\"form-control\" id=\"widgetUrl\" name=\"widgetUrl\" placeholder=\"Alice\" [(ngModel)]=\"url\">\n    </div>\n  </form>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"widgetWidth\">Width(%)</label>\n      <input type=\"text\" class=\"form-control\" id=\"widgetWidth\" name=\"widgetWidth\" placeholder=\"Alice\" [(ngModel)]=\"width\">\n    </div>\n  </form>\n  <form>\n    <div class=\"form-group\">\n      <button (click)=\"deleteWidget()\" class=\"btn btn-block btn-danger\">Delete</button>\n    </div>\n  </form>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom widget-navbar-footer\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a href=\"/user/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n<!--footer end-->\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetYoutubeComponent = (function () {
    function WidgetYoutubeComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
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
    WidgetYoutubeComponent.prototype.updateWidget = function () {
        var _this = this;
        console.log(this.width);
        if (this.url === undefined || this.url === '') {
            this.errorMsg = 'Url cannot be empty';
            return;
        }
        else if (this.width === undefined || isNaN(this.width)) {
            this.errorMsg = 'width cannot be empty or it should be a number without (%)';
            return;
        }
        if (this.isNewWidget) {
            var widget = { 'widgetType': 'YOUTUBE', 'pageId': this.pageId,
                'url': this.url, 'width': this.width, 'name': this.name, 'text': this.text };
            this.widgetService.createWidget(this.pageId, widget)
                .subscribe(function (data) {
                _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
            });
        }
        else {
            var widget = { '_id': this.widgetId, 'widgetType': 'YOUTUBE',
                'pageId': this.pageId, 'url': this.url, 'width': this.width, 'name': this.name, 'text': this.text };
            this.widgetService.updateWidget(this.widgetId, widget)
                .subscribe(function (data) {
                _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
            });
        }
    };
    WidgetYoutubeComponent.prototype.deleteWidget = function () {
        var _this = this;
        if (this.isNewWidget) {
            this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', 'new']);
        }
        else {
            this.widgetService.deleteWidget(this.pageId, this.widgetId)
                .subscribe(function (data) {
                if (data) {
                    _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
                }
            });
        }
    };
    WidgetYoutubeComponent.prototype.goBack = function () {
        if (this.isNewWidget) {
            this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', 'new']);
        }
        else {
            this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        }
    };
    return WidgetYoutubeComponent;
}());
WidgetYoutubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetYoutubeComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".youtube-widget {\n  position: relative;\n  padding-bottom: 56.25%; /* 16:9 */\n  height: 0;\n}\n.youtube-widget iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Header-->\n<nav class=\"navbar navbar-default navbar-fixed-top widget-navbar-header\">\n  <div class=\"container-fluid\">\n\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\" class=\"glyphicon glyphicon-chevron-left\"></a>\n    </p>\n\n    <a class=\"navbar-brand\" ><b>Widgets</b></a>\n\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new\" class=\"glyphicon glyphicon-plus\"></a>\n    </p>\n\n  </div>\n</nav>\n<!--Header end-->\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <ul class=\"list-group\" appSortable (newIndexes)=\"myFunc($event)\">\n      <div *ngFor=\"let widget of widgetList\">\n\n        <div [ngSwitch]=\"widget.widgetType\">\n\n            <div *ngSwitchCase=\"'HEADING'\">\n              <li class=\"list-group-item widget-list\">\n                <div class=\"widget-container\">\n                  <div [ngSwitch]=\"widget['size']\">\n                    <div *ngSwitchCase=\"1\">\n                      <h1>{{widget['text']}}</h1>\n                    </div>\n                    <div *ngSwitchCase=\"2\">\n                      <h2>{{widget['text']}}</h2>\n                    </div>\n                    <div *ngSwitchCase=\"3\">\n                      <h3>{{widget['text']}}</h3>\n                    </div>\n                    <div *ngSwitchCase=\"4\">\n                      <h4>{{widget['text']}}</h4>\n                    </div>\n                    <div *ngSwitchCase=\"5\">\n                      <h5>{{widget['text']}}</h5>\n                    </div>\n                    <div *ngSwitchCase=\"6\">\n                      <h6>{{widget['text']}}</h6>\n                    </div>\n                  </div>\n                  <div class=\"widget-options\">\n                    <a class=\"glyphicon glyphicon-align-justify widget-option pull-right color-black\"></a>\n                    <a class=\"glyphicon glyphicon-cog pull-right widget-option color-blue\"\n                       routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/1/{{widget['_id']}}\"></a>\n                  </div>\n                </div>\n              </li>\n            </div>\n\n            <div *ngSwitchCase=\"'IMAGE'\">\n              <li class=\"list-group-item widget-list\">\n              <div class=\"widget-container\">\n                <img class=\"image widget-image\" [src]=\"widget['url']\" [style.width]=\"widget['width'] + '%'\">\n                <div class=\"widget-options\">\n                  <a class=\"glyphicon glyphicon-align-justify widget-option pull-right color-black\"></a>\n                  <a class=\"glyphicon glyphicon-cog pull-right widget-option color-blue\"\n                     routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/2/{{widget['_id']}}\"></a>\n                </div>\n              </div>\n              </li>\n            </div>\n\n            <div *ngSwitchCase=\"'YOUTUBE'\">\n              <li class=\"list-group-item widget-list\">\n                <div class=\"youtube-widget\">\n                  <iframe class=\"video-frame\" [style.width]=\"widget['width'] + '%'\" [src]=\"getSanitizedURL(widget['url'])\" frameborder=\"0\" allowfullscreen></iframe>\n                  <div class=\"widget-options\">\n                    <a class=\"glyphicon glyphicon-align-justify widget-option pull-right color-black\"></a>\n                    <a class=\"glyphicon glyphicon-cog pull-right widget-option color-blue\"\n                       routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/3/{{widget['_id']}}\"></a>\n                  </div>\n                  <!--<iframe class=\"video-frame\" [src]=\"getSanitizedURL(widget['url'])\" frameborder=\"0\" allowfullscreen></iframe>-->\n\n                </div>\n              </li>\n            </div>\n\n            <div *ngSwitchCase=\"'HTML'\">\n              <li class=\"list-group-item widget-list\">\n                <div class=\"widget-container\">\n                  <div class=\"widget-options\">\n                    <a class=\"glyphicon glyphicon-align-justify widget-option pull-right color-black\"></a>\n                    <a class=\"glyphicon glyphicon-cog pull-right widget-option color-blue\"\n                       routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/4/{{widget['_id']}}\"></a>\n                  </div>\n                  <div [innerHtml]=\"widget['text']\"></div>\n                </div>\n              </li>\n            </div>\n\n          <div *ngSwitchCase=\"'TEXT'\">\n            <li class=\"list-group-item widget-list\">\n              <div class=\"widget-container\">\n                <div class=\"widget-options\">\n                  <a class=\"glyphicon glyphicon-align-justify widget-option pull-right color-black\"></a>\n                  <a class=\"glyphicon glyphicon-cog pull-right widget-option color-blue\"\n                     routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/5/{{widget['_id']}}\"></a>\n                </div>\n                <div *ngIf=\"widget.formatted === true\">\n                  <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>\n                </div>\n                <input *ngIf=\"widget.formatted===false && widget.rows===1\" type=\"text\"\n                       placeholder=\"{{widget.placeholder}}\" class=\"form-control\" [value]=\"widget.text\"/>\n                <textarea *ngIf=\"widget.formatted===false && (widget.rows > 1)\"\n                          rows=\"{{widget.rows}}\" placeholder=\"{{widget.placeholder}}\"\n                          class=\"form-control\">{{widget.text}}</textarea>\n              </div>\n            </li>\n          </div>\n        </div>\n\n      </div>\n    </ul>\n  </div>\n</div>\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom widget-navbar-footer\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-left\">\n      <a>\n        <span class=\"glyphicon glyphicon-play gly-black\"></span>\n      </a>\n    </p>\n\n    <p class=\"navbar-text pull-left\">\n      <a>\n        <span class=\"glyphicon glyphicon-eye-open gly-black\"></span>\n      </a>\n    </p>\n\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n<!--footer end-->\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetListComponent = (function () {
    function WidgetListComponent(widgetService, router, activatedRoute, sanitizer) {
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
        this.widgetService.findWidgetsByPageId(this.pageId)
            .subscribe(function (data) {
            if (data) {
                _this.widgetList = data;
                console.log(_this.widgetList);
            }
        });
    };
    WidgetListComponent.prototype.getSanitizedURL = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    WidgetListComponent.prototype.myFunc = function (event) {
        this.widgetService.updateWidgetPosition(this.pageId, event['startIndex'], event['endIndex'])
            .subscribe(function (data) {
            if (data && data.success === true) {
                console.log('success');
            }
            else {
                console.log('error in updating position');
            }
        });
    };
    return WidgetListComponent;
}());
WidgetListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _d || Object])
], WidgetListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/sortable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SortableDirective = (function () {
    function SortableDirective(el) {
        this.el = el;
        this.newIndexes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    SortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable(this);
    };
    SortableDirective.prototype.appSortable = function (refe) {
        var self = this;
        console.log('under sortable');
        jQuery(this.el.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                console.log('Old position: ' + ui.item.index());
                refe.initialIndex = ui.item.index();
            },
            stop: function (event, ui) {
                console.log('New position: ' + ui.item.index());
                refe.newIndexes.emit({
                    startIndex: refe.initialIndex,
                    endIndex: ui.item.index()
                });
            }
        });
    };
    return SortableDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], SortableDirective.prototype, "newIndexes", void 0);
SortableDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appSortable]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], SortableDirective);

var _a;
//# sourceMappingURL=sortable.directive.js.map

/***/ }),

/***/ "../../../../../src/app/model/page.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
var Page = (function () {
    function Page(id, name, websiteId, description) {
        this._id = id;
        this.name = name;
        this.websiteId = websiteId;
        this.description = description;
    }
    return Page;
}());

//# sourceMappingURL=page.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/model/user.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(id, username, password, firstName, lastName, email) {
        this._id = id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    return User;
}());

//# sourceMappingURL=user.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/model/website.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Website; });
var Website = (function () {
    function Website(id, name, developerId, description) {
        if (id !== null) {
            this._id = id;
        }
        this.name = name;
        this.developerId = developerId;
        this.description = description;
    }
    return Website;
}());

//# sourceMappingURL=website.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/authentication-service.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = (function () {
    function AuthenticationService(userService) {
        this.userService = userService;
    }
    AuthenticationService.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service_client__["a" /* UserService */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication-service.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/flickr.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlickrService = (function () {
    function FlickrService(http) {
        this.http = http;
        this.KEY = '3c46a95f7012686cb4c76cb2ffa96f21';
        this.SECRET = 'fcf33394729a197b';
        this.BASE_URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=' + this.KEY + '&text=';
    }
    FlickrService.prototype.getImages = function (searchText) {
        return this.http.get(this.BASE_URL + searchText)
            .map(function (res) {
            return res.text();
        });
    };
    return FlickrService;
}());
FlickrService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], FlickrService);

var _a;
//# sourceMappingURL=flickr.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageService = (function () {
    function PageService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    PageService.prototype.createPage = function (websiteId, page) {
        return this.http.post(this.baseUrl + '/api/website/' + websiteId + '/page', page)
            .map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        return this.http.get(this.baseUrl + '/api/website/' + websiteId + '/page')
            .map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.findPageById = function (pageId) {
        return this.http.get(this.baseUrl + '/api/page/' + pageId)
            .map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.updatePage = function (pageId, page) {
        return this.http.put(this.baseUrl + '/api/page/' + pageId, page)
            .map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.deletePage = function (pageId) {
        return this.http.delete(this.baseUrl + '/api/page/' + pageId)
            .map(function (res) {
            return res.json();
        });
    };
    return PageService;
}());
PageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PageService);

var _a;
//# sourceMappingURL=page.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/shared-service.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedService = (function () {
    function SharedService() {
    }
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], SharedService);

//# sourceMappingURL=shared-service.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_service_client__ = __webpack_require__("../../../../../src/app/services/shared-service.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = (function () {
    function UserService(http, sharedService, router) {
        this.http = http;
        this.sharedService = sharedService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
    }
    UserService.prototype.register = function (username, password) {
        var credentials = {
            username: username,
            password: password
        };
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/register', credentials, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.login = function (username, password) {
        var credentials = {
            username: username,
            password: password
        };
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/login', credentials, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.logout = function () {
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/logout', '', this.options)
            .map(function (status) {
            return status;
        });
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options)
            .map(function (res) {
            // console.log('----');
            // console.log(res);
            var user = res.json();
            console.log(user);
            // console.log('----');
            if (user.u === 0) {
                _this.router.navigate(['/login']);
                return false;
            }
            else {
                _this.sharedService.user = user;
                return true;
            }
        });
    };
    UserService.prototype.createUser = function (user) {
        var u = {
            username: user.username,
            password: user.password
        };
        return this.http.post(this.baseUrl + '/api/user', u)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserById = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        return this.http.get(this.baseUrl + '/api/user?username=' + username)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        return this.http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        return this.http.put(this.baseUrl + '/api/user/' + userId, user)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        return this.http.delete(this.baseUrl + '/api/user/' + userId)
            .map(function (res) {
            return res.json();
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_service_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_service_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteService = (function () {
    function WebsiteService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        return this.http.post(this.baseUrl + '/api/user/' + userId + '/website', website)
            .map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId + '/website')
            .map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        return this.http.get(this.baseUrl + '/api/website/' + websiteId)
            .map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        return this.http.put(this.baseUrl + '/api/website/' + websiteId, website)
            .map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        return this.http.delete(this.baseUrl + '/api/website/' + websiteId)
            .map(function (res) {
            return res.json();
        });
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WebsiteService);

var _a;
//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetService = (function () {
    function WidgetService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        return this.http.post(this.baseUrl + '/api/page/' + pageId + '/widget', widget)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        return this.http.get(this.baseUrl + '/api/page/' + pageId + '/widget')
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        return this.http.get(this.baseUrl + '/api/widget/' + widgetId)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        return this.http.put(this.baseUrl + '/api/widget/' + widgetId, widget)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.deleteWidget = function (pageId, widgetId) {
        return this.http.delete(this.baseUrl + '/api/' + pageId + '/widget/' + widgetId)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.updateWidgetPosition = function (pageId, initialPos, finalPos) {
        return this.http.put(this.baseUrl + '/api/page/' + pageId + '/widget?initial=' + initialPos + '&final=' + finalPos, null)
            .map(function (res) {
            return res.json();
        });
    };
    return WidgetService;
}());
WidgetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WidgetService);

var _a;
//# sourceMappingURL=widget.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map