import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CHANGEOUTCOME_MODULE_DECLARATIONS, ChangeOutcomeRoutingModule} from  './ChangeOutcome-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ChangeOutcomeRoutingModule
  ],
  declarations: CHANGEOUTCOME_MODULE_DECLARATIONS,
  exports: CHANGEOUTCOME_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChangeOutcomeModule { }