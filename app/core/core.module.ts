import {
  ModuleWithProviders, NgModule,
  Optional, SkipSelf }       from '@angular/core';
import { CommonModule }      from '@angular/common';
import { TitleComponent }    from './title.component';
import {CallbackPipe}        from './callback.pipe';
import { UserService }       from './user.service';
import { UserServiceConfig } from './user.service';
@NgModule({
  imports:      [ CommonModule ],
  declarations: [ TitleComponent, CallbackPipe ],
  exports:      [ TitleComponent, CallbackPipe ],
  providers:    [ UserService ]
})
export class CoreModule {
static forRoot(config: UserServiceConfig): ModuleWithProviders {
  return {
    ngModule: CoreModule,
    providers: [
      {provide: UserServiceConfig, useValue: config }
    ]
  };
}

}
