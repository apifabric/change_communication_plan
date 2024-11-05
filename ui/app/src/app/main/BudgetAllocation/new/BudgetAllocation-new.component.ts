import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'BudgetAllocation-new',
  templateUrl: './BudgetAllocation-new.component.html',
  styleUrls: ['./BudgetAllocation-new.component.scss']
})
export class BudgetAllocationNewComponent {
  @ViewChild("BudgetAllocationForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}