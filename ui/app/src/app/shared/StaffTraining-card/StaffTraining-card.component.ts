import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './StaffTraining-card.component.html',
  styleUrls: ['./StaffTraining-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.StaffTraining-card]': 'true'
  }
})

export class StaffTrainingCardComponent {


}