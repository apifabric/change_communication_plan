import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'EngagementPlan-new',
  templateUrl: './EngagementPlan-new.component.html',
  styleUrls: ['./EngagementPlan-new.component.scss']
})
export class EngagementPlanNewComponent {
  @ViewChild("EngagementPlanForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}