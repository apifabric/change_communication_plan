import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'StaffSkill-new',
  templateUrl: './StaffSkill-new.component.html',
  styleUrls: ['./StaffSkill-new.component.scss']
})
export class StaffSkillNewComponent {
  @ViewChild("StaffSkillForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}