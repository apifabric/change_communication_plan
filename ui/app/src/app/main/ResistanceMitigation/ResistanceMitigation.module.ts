import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {RESISTANCEMITIGATION_MODULE_DECLARATIONS, ResistanceMitigationRoutingModule} from  './ResistanceMitigation-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ResistanceMitigationRoutingModule
  ],
  declarations: RESISTANCEMITIGATION_MODULE_DECLARATIONS,
  exports: RESISTANCEMITIGATION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ResistanceMitigationModule { }