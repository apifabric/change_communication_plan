import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeInitiativeHomeComponent } from './home/ChangeInitiative-home.component';
import { ChangeInitiativeNewComponent } from './new/ChangeInitiative-new.component';
import { ChangeInitiativeDetailComponent } from './detail/ChangeInitiative-detail.component';

const routes: Routes = [
  {path: '', component: ChangeInitiativeHomeComponent},
  { path: 'new', component: ChangeInitiativeNewComponent },
  { path: ':id', component: ChangeInitiativeDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ChangeInitiative-detail-permissions'
      }
    }
  },{
    path: ':initiative_id/BudgetAllocation', loadChildren: () => import('../BudgetAllocation/BudgetAllocation.module').then(m => m.BudgetAllocationModule),
    data: {
        oPermission: {
            permissionId: 'BudgetAllocation-detail-permissions'
        }
    }
},{
    path: ':initiative_id/ChangeOutcome', loadChildren: () => import('../ChangeOutcome/ChangeOutcome.module').then(m => m.ChangeOutcomeModule),
    data: {
        oPermission: {
            permissionId: 'ChangeOutcome-detail-permissions'
        }
    }
},{
    path: ':initiative_id/CollaborationEffort', loadChildren: () => import('../CollaborationEffort/CollaborationEffort.module').then(m => m.CollaborationEffortModule),
    data: {
        oPermission: {
            permissionId: 'CollaborationEffort-detail-permissions'
        }
    }
},{
    path: ':initiative_id/EngagementPlan', loadChildren: () => import('../EngagementPlan/EngagementPlan.module').then(m => m.EngagementPlanModule),
    data: {
        oPermission: {
            permissionId: 'EngagementPlan-detail-permissions'
        }
    }
},{
    path: ':initiative_id/Feedback', loadChildren: () => import('../Feedback/Feedback.module').then(m => m.FeedbackModule),
    data: {
        oPermission: {
            permissionId: 'Feedback-detail-permissions'
        }
    }
},{
    path: ':initiative_id/ResistanceMitigation', loadChildren: () => import('../ResistanceMitigation/ResistanceMitigation.module').then(m => m.ResistanceMitigationModule),
    data: {
        oPermission: {
            permissionId: 'ResistanceMitigation-detail-permissions'
        }
    }
}
];

export const CHANGEINITIATIVE_MODULE_DECLARATIONS = [
    ChangeInitiativeHomeComponent,
    ChangeInitiativeNewComponent,
    ChangeInitiativeDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeInitiativeRoutingModule { }