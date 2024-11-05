import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './CollaborationEffort-card.component.html',
  styleUrls: ['./CollaborationEffort-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.CollaborationEffort-card]': 'true'
  }
})

export class CollaborationEffortCardComponent {


}