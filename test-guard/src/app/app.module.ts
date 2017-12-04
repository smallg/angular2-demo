import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DemoImageComponent} from './demo-image/demo-image.component';
import {AppRoutingModule} from "./app-routing.module";
import { DemoGuardComponent } from './demo-guard/demo-guard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DemoImageComponent,
    DemoGuardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
