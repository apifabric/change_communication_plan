import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'StaffTraining-new',
  templateUrl: './StaffTraining-new.component.html',
  styleUrls: ['./StaffTraining-new.component.scss']
})
export class StaffTrainingNewComponent {
  @ViewChild("StaffTrainingForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}