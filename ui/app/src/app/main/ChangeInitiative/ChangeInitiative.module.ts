import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CHANGEINITIATIVE_MODULE_DECLARATIONS, ChangeInitiativeRoutingModule} from  './ChangeInitiative-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ChangeInitiativeRoutingModule
  ],
  declarations: CHANGEINITIATIVE_MODULE_DECLARATIONS,
  exports: CHANGEINITIATIVE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChangeInitiativeModule { }