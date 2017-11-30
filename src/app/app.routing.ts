
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ModuleWithProviders} from '@angular/core';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { WebsiteListComponent } from './components/website/website-list/website-list.component';
import { WebsiteNewComponent } from './components/website/website-new/website-new.component';
import { WebsiteEditComponent } from './components/website/website-edit/website-edit.component';
import { PageListComponent } from './components/page/page-list/page-list.component';
import { PageNewComponent } from './components/page/page-new/page-new.component';
import { PageEditComponent } from './components/page/page-edit/page-edit.component';
import { WidgetListComponent } from './components/widget/widget-list/widget-list.component';
import { WidgetChooserComponent } from './components/widget/widget-chooser/widget-chooser.component';
import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';
import { ImgSearchFlickrComponent } from './components/widget/widget-edit/widget-image/img-search-flickr/img-search-flickr.component';
import { AuthenticationService } from './services/authentication-service.service.client';

const APP_ROUTES: Routes = [
  {path: '', component : LoginComponent},
  {path: 'login', component : LoginComponent},
  {path: 'logout', component : LoginComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'profile', component : ProfileComponent, canActivate: [AuthenticationService]},
  {path: 'user/:uid', component : ProfileComponent},
  {path: 'user/:uid/website', component : WebsiteListComponent},
  {path: 'user/:uid/website/new', component : WebsiteNewComponent},
  {path: 'user/:uid/website/:wid', component : WebsiteEditComponent},
  {path: 'user/:uid/website/:wid/page', component : PageListComponent},
  {path: 'user/:uid/website/:wid/page/new', component : PageNewComponent},
  {path: 'user/:uid/website/:wid/page/:pid', component : PageEditComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget', component : WidgetListComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget/new', component : WidgetChooserComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget/:wtype', component : WidgetEditComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget/:wtype/:wgid', component : WidgetEditComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget/:wtype/:wgid/flickr', component : ImgSearchFlickrComponent}
  ];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
