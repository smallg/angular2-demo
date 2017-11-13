import {Component, ViewChild} from '@angular/core';
import {LocalChildComponent} from "./local-child.component";

@Component({
  selector: 'local-parent',
  templateUrl: './local-parent.component.html',
})
export class LocalParentComponent {
  @ViewChild(LocalChildComponent)
  private localChildComponent: LocalChildComponent;

  start() {
    this.localChildComponent.start();
  }

  stop() {
    this.localChildComponent.stop();
  }

}
