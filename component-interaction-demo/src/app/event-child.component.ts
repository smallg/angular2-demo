import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'event-child',
  templateUrl: './event-child.component.html',
})
export class EventChildComponent {
  @Input() name: string;
  @Output() onVoted = new EventEmitter<boolean>();
  voted = false;

  vote(agreed: boolean) {
    this.onVoted.emit(agreed);
    this.voted = true;
  }
}
