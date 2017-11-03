import {Component, Input} from '@angular/core';

import {AdComponent} from './ad.component';

@Component({
  templateUrl: './hero-profile.component.html'
})
export class HeroProfileComponent implements AdComponent {
  @Input() data: any;
}
