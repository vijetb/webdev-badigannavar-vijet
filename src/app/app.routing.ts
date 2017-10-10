/**
 * Created by sesha on 7/26/17.
 */

import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ModuleWithProviders} from '@angular/core';
import {TestComponent} from './components/test/test.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';



const APP_ROUTES: Routes = [
  {path: '', component : LoginComponent},
  {path: 'login', component : LoginComponent},
  {path: 'logout', component : LoginComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'user/:uid', component : ProfileComponent},
  {path: 'test', component: TestComponent}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
