import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResistanceMitigationHomeComponent } from './home/ResistanceMitigation-home.component';
import { ResistanceMitigationNewComponent } from './new/ResistanceMitigation-new.component';
import { ResistanceMitigationDetailComponent } from './detail/ResistanceMitigation-detail.component';

const routes: Routes = [
  {path: '', component: ResistanceMitigationHomeComponent},
  { path: 'new', component: ResistanceMitigationNewComponent },
  { path: ':id', component: ResistanceMitigationDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ResistanceMitigation-detail-permissions'
      }
    }
  }
];

export const RESISTANCEMITIGATION_MODULE_DECLARATIONS = [
    ResistanceMitigationHomeComponent,
    ResistanceMitigationNewComponent,
    ResistanceMitigationDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResistanceMitigationRoutingModule { }