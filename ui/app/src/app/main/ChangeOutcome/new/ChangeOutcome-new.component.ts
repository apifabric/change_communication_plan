import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ChangeOutcome-new',
  templateUrl: './ChangeOutcome-new.component.html',
  styleUrls: ['./ChangeOutcome-new.component.scss']
})
export class ChangeOutcomeNewComponent {
  @ViewChild("ChangeOutcomeForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}