import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffMemberHomeComponent } from './home/StaffMember-home.component';
import { StaffMemberNewComponent } from './new/StaffMember-new.component';
import { StaffMemberDetailComponent } from './detail/StaffMember-detail.component';

const routes: Routes = [
  {path: '', component: StaffMemberHomeComponent},
  { path: 'new', component: StaffMemberNewComponent },
  { path: ':id', component: StaffMemberDetailComponent,
    data: {
      oPermission: {
        permissionId: 'StaffMember-detail-permissions'
      }
    }
  },{
    path: ':staff_id/StaffSkill', loadChildren: () => import('../StaffSkill/StaffSkill.module').then(m => m.StaffSkillModule),
    data: {
        oPermission: {
            permissionId: 'StaffSkill-detail-permissions'
        }
    }
},{
    path: ':staff_id/StaffTraining', loadChildren: () => import('../StaffTraining/StaffTraining.module').then(m => m.StaffTrainingModule),
    data: {
        oPermission: {
            permissionId: 'StaffTraining-detail-permissions'
        }
    }
}
];

export const STAFFMEMBER_MODULE_DECLARATIONS = [
    StaffMemberHomeComponent,
    StaffMemberNewComponent,
    StaffMemberDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffMemberRoutingModule { }