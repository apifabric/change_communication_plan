import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {STAFFSKILL_MODULE_DECLARATIONS, StaffSkillRoutingModule} from  './StaffSkill-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    StaffSkillRoutingModule
  ],
  declarations: STAFFSKILL_MODULE_DECLARATIONS,
  exports: STAFFSKILL_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StaffSkillModule { }