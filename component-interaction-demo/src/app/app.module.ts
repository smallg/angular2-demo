import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MyHeroesComponent} from "./my-heroes.component";
import {HeroChildComponent} from "./hero-child.component";
import {NameParentComponent} from "./name-parent.component";
import {NameChildComponent} from "./name-child.component";
import {VersionParentComponent} from "./version-parent.component";
import {VersionChildComponent} from "./version-child.component";
import {EventParentComponent} from "./event-parent.component";
import {EventChildComponent} from "./event-child.component";
import {LocalParentComponent} from "./local-parent.component";
import {LocalChildComponent} from "./local-child.component";
import {ViewParentComponent} from "./view-parent.component";
import {ViewChildComponent} from "./view-child.component";

@NgModule({
  declarations: [
    AppComponent,
    MyHeroesComponent,
    HeroChildComponent,
    NameParentComponent,
    NameChildComponent,
    VersionParentComponent,
    VersionChildComponent,
    EventParentComponent,
    EventChildComponent,
    LocalParentComponent,
    LocalChildComponent,
    ViewParentComponent,
    ViewChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
