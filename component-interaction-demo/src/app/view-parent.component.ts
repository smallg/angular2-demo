import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {ViewChildComponent} from "./view-child.component";

@Component({
  selector: 'view-parent',
  templateUrl: './view-parent.component.html',
})
export class ViewParentComponent implements AfterViewInit {
  @ViewChild(ViewChildComponent)
  private viewChildComponent: ViewChildComponent;

  seconds() {
    return 0;
  }

  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => this.seconds = () => this.viewChildComponent.seconds, 0);
  }

  start() {
    this.viewChildComponent.start();
  }

  stop() {
    this.viewChildComponent.stop();
  }
}
