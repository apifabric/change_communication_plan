import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'BudgetAllocation', loadChildren: () => import('./BudgetAllocation/BudgetAllocation.module').then(m => m.BudgetAllocationModule) },
    
        { path: 'ChangeInitiative', loadChildren: () => import('./ChangeInitiative/ChangeInitiative.module').then(m => m.ChangeInitiativeModule) },
    
        { path: 'ChangeOutcome', loadChildren: () => import('./ChangeOutcome/ChangeOutcome.module').then(m => m.ChangeOutcomeModule) },
    
        { path: 'CollaborationEffort', loadChildren: () => import('./CollaborationEffort/CollaborationEffort.module').then(m => m.CollaborationEffortModule) },
    
        { path: 'EngagementPlan', loadChildren: () => import('./EngagementPlan/EngagementPlan.module').then(m => m.EngagementPlanModule) },
    
        { path: 'Feedback', loadChildren: () => import('./Feedback/Feedback.module').then(m => m.FeedbackModule) },
    
        { path: 'ResistanceMitigation', loadChildren: () => import('./ResistanceMitigation/ResistanceMitigation.module').then(m => m.ResistanceMitigationModule) },
    
        { path: 'Skill', loadChildren: () => import('./Skill/Skill.module').then(m => m.SkillModule) },
    
        { path: 'StaffMember', loadChildren: () => import('./StaffMember/StaffMember.module').then(m => m.StaffMemberModule) },
    
        { path: 'StaffSkill', loadChildren: () => import('./StaffSkill/StaffSkill.module').then(m => m.StaffSkillModule) },
    
        { path: 'StaffTraining', loadChildren: () => import('./StaffTraining/StaffTraining.module').then(m => m.StaffTrainingModule) },
    
        { path: 'TrainingSession', loadChildren: () => import('./TrainingSession/TrainingSession.module').then(m => m.TrainingSessionModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }