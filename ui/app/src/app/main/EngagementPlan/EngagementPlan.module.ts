import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ENGAGEMENTPLAN_MODULE_DECLARATIONS, EngagementPlanRoutingModule} from  './EngagementPlan-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    EngagementPlanRoutingModule
  ],
  declarations: ENGAGEMENTPLAN_MODULE_DECLARATIONS,
  exports: ENGAGEMENTPLAN_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EngagementPlanModule { }