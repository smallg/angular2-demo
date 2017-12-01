import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddActiveClassDirective } from './add-active-class.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AddActiveClassDirective
  ],
  exports: [
    AddActiveClassDirective
  ]
})
export class ShareDirectivesModule { }
