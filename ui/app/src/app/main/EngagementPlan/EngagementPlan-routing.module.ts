import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EngagementPlanHomeComponent } from './home/EngagementPlan-home.component';
import { EngagementPlanNewComponent } from './new/EngagementPlan-new.component';
import { EngagementPlanDetailComponent } from './detail/EngagementPlan-detail.component';

const routes: Routes = [
  {path: '', component: EngagementPlanHomeComponent},
  { path: 'new', component: EngagementPlanNewComponent },
  { path: ':id', component: EngagementPlanDetailComponent,
    data: {
      oPermission: {
        permissionId: 'EngagementPlan-detail-permissions'
      }
    }
  }
];

export const ENGAGEMENTPLAN_MODULE_DECLARATIONS = [
    EngagementPlanHomeComponent,
    EngagementPlanNewComponent,
    EngagementPlanDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EngagementPlanRoutingModule { }