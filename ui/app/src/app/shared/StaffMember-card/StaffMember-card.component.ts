import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './StaffMember-card.component.html',
  styleUrls: ['./StaffMember-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.StaffMember-card]': 'true'
  }
})

export class StaffMemberCardComponent {


}