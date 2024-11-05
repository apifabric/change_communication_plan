import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeOutcomeHomeComponent } from './home/ChangeOutcome-home.component';
import { ChangeOutcomeNewComponent } from './new/ChangeOutcome-new.component';
import { ChangeOutcomeDetailComponent } from './detail/ChangeOutcome-detail.component';

const routes: Routes = [
  {path: '', component: ChangeOutcomeHomeComponent},
  { path: 'new', component: ChangeOutcomeNewComponent },
  { path: ':id', component: ChangeOutcomeDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ChangeOutcome-detail-permissions'
      }
    }
  }
];

export const CHANGEOUTCOME_MODULE_DECLARATIONS = [
    ChangeOutcomeHomeComponent,
    ChangeOutcomeNewComponent,
    ChangeOutcomeDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeOutcomeRoutingModule { }