import {Component} from '@angular/core';

@Component({
  selector: 'event-parent',
  templateUrl: './event-parent.component.html',
})
export class EventParentComponent {
  agreed: number = 0;
  disagreed: number = 0;
  voters: string[] = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }
}
