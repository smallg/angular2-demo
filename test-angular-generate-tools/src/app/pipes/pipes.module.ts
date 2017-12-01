import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SliceStringPipe} from './slice-string.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SliceStringPipe
  ],
  exports: [
    SliceStringPipe
  ]
})
export class PipesModule {
}
