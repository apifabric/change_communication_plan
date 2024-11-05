import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {BUDGETALLOCATION_MODULE_DECLARATIONS, BudgetAllocationRoutingModule} from  './BudgetAllocation-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    BudgetAllocationRoutingModule
  ],
  declarations: BUDGETALLOCATION_MODULE_DECLARATIONS,
  exports: BUDGETALLOCATION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BudgetAllocationModule { }