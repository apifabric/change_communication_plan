import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './StaffSkill-card.component.html',
  styleUrls: ['./StaffSkill-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.StaffSkill-card]': 'true'
  }
})

export class StaffSkillCardComponent {


}