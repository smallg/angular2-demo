import {Component} from '@angular/core';

@Component({
  selector: 'version-parent',
  templateUrl: './version-parent.component.html',
})
export class VersionParentComponent {
  major: number = 1;
  minor: number = 23;

  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }
}
