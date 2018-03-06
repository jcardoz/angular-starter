import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// Login router and components within the feature
import {registerRoutes, registerRoutedComponents } from './register.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild(registerRoutes)
  ],
  exports: [],
  declarations: [registerRoutedComponents],
  providers: [
  ]
})
export class RegisterModule { }
