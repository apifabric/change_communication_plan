import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {COLLABORATIONEFFORT_MODULE_DECLARATIONS, CollaborationEffortRoutingModule} from  './CollaborationEffort-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    CollaborationEffortRoutingModule
  ],
  declarations: COLLABORATIONEFFORT_MODULE_DECLARATIONS,
  exports: COLLABORATIONEFFORT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CollaborationEffortModule { }