import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './BudgetAllocation-card.component.html',
  styleUrls: ['./BudgetAllocation-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.BudgetAllocation-card]': 'true'
  }
})

export class BudgetAllocationCardComponent {


}