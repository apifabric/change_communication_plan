import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {STAFFTRAINING_MODULE_DECLARATIONS, StaffTrainingRoutingModule} from  './StaffTraining-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    StaffTrainingRoutingModule
  ],
  declarations: STAFFTRAINING_MODULE_DECLARATIONS,
  exports: STAFFTRAINING_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StaffTrainingModule { }