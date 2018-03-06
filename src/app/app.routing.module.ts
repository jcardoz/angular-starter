import { NgModule, ModuleWithProviders } from '@angular/core';

// Router import
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';

// Routes
const appRoutes: Routes = [
  // Empty path routes to homepage.
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  // Login.
  {
    path: 'login',
    component: LoginComponent,
  },
  // Register
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterModule'
  },
];
// End Routes

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
