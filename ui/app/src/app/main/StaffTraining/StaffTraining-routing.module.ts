import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffTrainingHomeComponent } from './home/StaffTraining-home.component';
import { StaffTrainingNewComponent } from './new/StaffTraining-new.component';
import { StaffTrainingDetailComponent } from './detail/StaffTraining-detail.component';

const routes: Routes = [
  {path: '', component: StaffTrainingHomeComponent},
  { path: 'new', component: StaffTrainingNewComponent },
  { path: ':id', component: StaffTrainingDetailComponent,
    data: {
      oPermission: {
        permissionId: 'StaffTraining-detail-permissions'
      }
    }
  }
];

export const STAFFTRAINING_MODULE_DECLARATIONS = [
    StaffTrainingHomeComponent,
    StaffTrainingNewComponent,
    StaffTrainingDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffTrainingRoutingModule { }