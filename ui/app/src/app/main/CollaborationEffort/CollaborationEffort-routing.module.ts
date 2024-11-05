import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollaborationEffortHomeComponent } from './home/CollaborationEffort-home.component';
import { CollaborationEffortNewComponent } from './new/CollaborationEffort-new.component';
import { CollaborationEffortDetailComponent } from './detail/CollaborationEffort-detail.component';

const routes: Routes = [
  {path: '', component: CollaborationEffortHomeComponent},
  { path: 'new', component: CollaborationEffortNewComponent },
  { path: ':id', component: CollaborationEffortDetailComponent,
    data: {
      oPermission: {
        permissionId: 'CollaborationEffort-detail-permissions'
      }
    }
  }
];

export const COLLABORATIONEFFORT_MODULE_DECLARATIONS = [
    CollaborationEffortHomeComponent,
    CollaborationEffortNewComponent,
    CollaborationEffortDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollaborationEffortRoutingModule { }