import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './EngagementPlan-card.component.html',
  styleUrls: ['./EngagementPlan-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.EngagementPlan-card]': 'true'
  }
})

export class EngagementPlanCardComponent {


}