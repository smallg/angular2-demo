import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonTitleComponent } from './common-title/common-title.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CommonTitleComponent
  ],
  exports: [
    CommonTitleComponent
  ]
})
export class ShareModules { }
