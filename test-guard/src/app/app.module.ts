import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DemoImageComponent} from './demo-image/demo-image.component';
import {AppRoutingModule} from "./app-routing.module";
import {DemoGuardComponent} from './demo-guard/demo-guard.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DemoImageComponent,
    DemoGuardComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
