import {Component, Input} from '@angular/core';

import {AdComponent} from './ad.component';

@Component({
  templateUrl: './hero-job-ad.component.html'
})
export class HeroJobAdComponent implements AdComponent {
  @Input() data: any;

}
