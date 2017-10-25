import { BrowserModule } from '@angular/platform-browser';
import { Directive, ElementRef, NgModule, Renderer2 } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import {Routing} from './app.routing';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {TestService} from './services/test.service.client';
import { LoginComponent } from './components/user/login/login.component';
import { UserService } from './services/user.service.client';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { WebsiteListComponent } from './components/website/website-list/website-list.component';
import { WebsiteEditComponent } from './components/website/website-edit/website-edit.component';
import { WebsiteNewComponent } from './components/website/website-new/website-new.component';
import { WebsiteService } from './services/website.service.client';
import { PageListComponent } from './components/page/page-list/page-list.component';
import { PageEditComponent } from './components/page/page-edit/page-edit.component';
import { PageNewComponent } from './components/page/page-new/page-new.component';
import { PageService } from './services/page.service.client';
import { WidgetListComponent } from './components/widget/widget-list/widget-list.component';
import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';
import { WidgetService } from './services/widget.service.client';
import { WidgetHeaderComponent } from './components/widget/widget-edit/widget-header/widget-header.component';
import { WidgetImageComponent } from './components/widget/widget-edit/widget-image/widget-image.component';
import { WidgetYoutubeComponent } from './components/widget/widget-edit/widget-youtube/widget-youtube.component';
import { WidgetHtmlComponent } from './components/widget/widget-edit/widget-html/widget-html.component';
import { WidgetChooserComponent } from './components/widget/widget-chooser/widget-chooser.component';
import { SortableDirective } from './directives/sortable.directive';


@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    WebsiteListComponent,
    WebsiteEditComponent,
    WebsiteNewComponent,
    PageListComponent,
    PageEditComponent,
    PageNewComponent,
    WidgetListComponent,
    WidgetEditComponent,
    WidgetHeaderComponent,
    WidgetImageComponent,
    WidgetYoutubeComponent,
    WidgetHtmlComponent,
    WidgetChooserComponent,
    SortableDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing],
  // Client Side services here
  providers: [TestService, UserService, WebsiteService, PageService, WidgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
