import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ChangeInitiative-new',
  templateUrl: './ChangeInitiative-new.component.html',
  styleUrls: ['./ChangeInitiative-new.component.scss']
})
export class ChangeInitiativeNewComponent {
  @ViewChild("ChangeInitiativeForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}