import { NgModule } from '@angular/core';
// Router import
import { Routes } from '@angular/router';

// Components
import { RegisterComponent } from './register/register.component';

// Routes
export const registerRoutes: Routes = [
  {
    path: '',
    component: RegisterComponent, // Default Route in the Register Module
  }
];
// End Routes

// Export the components to prevent multiple component imports in the register module
export const registerRoutedComponents = [
    RegisterComponent
];
