import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillHomeComponent } from './home/Skill-home.component';
import { SkillNewComponent } from './new/Skill-new.component';
import { SkillDetailComponent } from './detail/Skill-detail.component';

const routes: Routes = [
  {path: '', component: SkillHomeComponent},
  { path: 'new', component: SkillNewComponent },
  { path: ':id', component: SkillDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Skill-detail-permissions'
      }
    }
  },{
    path: ':skill_id/StaffSkill', loadChildren: () => import('../StaffSkill/StaffSkill.module').then(m => m.StaffSkillModule),
    data: {
        oPermission: {
            permissionId: 'StaffSkill-detail-permissions'
        }
    }
}
];

export const SKILL_MODULE_DECLARATIONS = [
    SkillHomeComponent,
    SkillNewComponent,
    SkillDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillRoutingModule { }