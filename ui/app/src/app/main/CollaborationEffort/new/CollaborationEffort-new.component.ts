import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'CollaborationEffort-new',
  templateUrl: './CollaborationEffort-new.component.html',
  styleUrls: ['./CollaborationEffort-new.component.scss']
})
export class CollaborationEffortNewComponent {
  @ViewChild("CollaborationEffortForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}