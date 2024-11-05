import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ChangeOutcome-card.component.html',
  styleUrls: ['./ChangeOutcome-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ChangeOutcome-card]': 'true'
  }
})

export class ChangeOutcomeCardComponent {


}