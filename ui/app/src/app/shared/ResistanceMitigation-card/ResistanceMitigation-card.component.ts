import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ResistanceMitigation-card.component.html',
  styleUrls: ['./ResistanceMitigation-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ResistanceMitigation-card]': 'true'
  }
})

export class ResistanceMitigationCardComponent {


}