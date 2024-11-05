import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetAllocationHomeComponent } from './home/BudgetAllocation-home.component';
import { BudgetAllocationNewComponent } from './new/BudgetAllocation-new.component';
import { BudgetAllocationDetailComponent } from './detail/BudgetAllocation-detail.component';

const routes: Routes = [
  {path: '', component: BudgetAllocationHomeComponent},
  { path: 'new', component: BudgetAllocationNewComponent },
  { path: ':id', component: BudgetAllocationDetailComponent,
    data: {
      oPermission: {
        permissionId: 'BudgetAllocation-detail-permissions'
      }
    }
  }
];

export const BUDGETALLOCATION_MODULE_DECLARATIONS = [
    BudgetAllocationHomeComponent,
    BudgetAllocationNewComponent,
    BudgetAllocationDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetAllocationRoutingModule { }