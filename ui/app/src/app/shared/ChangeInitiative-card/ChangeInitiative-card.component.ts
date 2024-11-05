import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ChangeInitiative-card.component.html',
  styleUrls: ['./ChangeInitiative-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ChangeInitiative-card]': 'true'
  }
})

export class ChangeInitiativeCardComponent {


}