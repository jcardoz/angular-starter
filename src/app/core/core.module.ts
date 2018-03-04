import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

// Add the services that are going to be common throughout the application
// Response handler
import { ResponseHandler } from './services/response-handler.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class CoreModule {
  // Prevent the CoreModule from being imported again in any other module
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        ResponseHandler
      ]
    };
  }
}
