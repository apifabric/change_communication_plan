import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ResistanceMitigation-new',
  templateUrl: './ResistanceMitigation-new.component.html',
  styleUrls: ['./ResistanceMitigation-new.component.scss']
})
export class ResistanceMitigationNewComponent {
  @ViewChild("ResistanceMitigationForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}