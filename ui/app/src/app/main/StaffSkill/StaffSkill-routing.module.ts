import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffSkillHomeComponent } from './home/StaffSkill-home.component';
import { StaffSkillNewComponent } from './new/StaffSkill-new.component';
import { StaffSkillDetailComponent } from './detail/StaffSkill-detail.component';

const routes: Routes = [
  {path: '', component: StaffSkillHomeComponent},
  { path: 'new', component: StaffSkillNewComponent },
  { path: ':id', component: StaffSkillDetailComponent,
    data: {
      oPermission: {
        permissionId: 'StaffSkill-detail-permissions'
      }
    }
  }
];

export const STAFFSKILL_MODULE_DECLARATIONS = [
    StaffSkillHomeComponent,
    StaffSkillNewComponent,
    StaffSkillDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffSkillRoutingModule { }