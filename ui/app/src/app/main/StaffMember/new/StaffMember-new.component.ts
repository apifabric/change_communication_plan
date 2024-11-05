import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'StaffMember-new',
  templateUrl: './StaffMember-new.component.html',
  styleUrls: ['./StaffMember-new.component.scss']
})
export class StaffMemberNewComponent {
  @ViewChild("StaffMemberForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}