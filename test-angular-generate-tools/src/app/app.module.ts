import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PipesModule} from "./pipes/pipes.module";
import {ShareModules} from "./share-modules/share-modules.module";
import {ShareDirectivesModule} from "./share-directives/share-directives.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PipesModule,
    ShareModules,
    ShareDirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
