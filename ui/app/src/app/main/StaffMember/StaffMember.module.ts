import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {STAFFMEMBER_MODULE_DECLARATIONS, StaffMemberRoutingModule} from  './StaffMember-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    StaffMemberRoutingModule
  ],
  declarations: STAFFMEMBER_MODULE_DECLARATIONS,
  exports: STAFFMEMBER_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StaffMemberModule { }