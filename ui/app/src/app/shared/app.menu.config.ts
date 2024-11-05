import { MenuRootItem } from 'ontimize-web-ngx';

import { BudgetAllocationCardComponent } from './BudgetAllocation-card/BudgetAllocation-card.component';

import { ChangeInitiativeCardComponent } from './ChangeInitiative-card/ChangeInitiative-card.component';

import { ChangeOutcomeCardComponent } from './ChangeOutcome-card/ChangeOutcome-card.component';

import { CollaborationEffortCardComponent } from './CollaborationEffort-card/CollaborationEffort-card.component';

import { EngagementPlanCardComponent } from './EngagementPlan-card/EngagementPlan-card.component';

import { FeedbackCardComponent } from './Feedback-card/Feedback-card.component';

import { ResistanceMitigationCardComponent } from './ResistanceMitigation-card/ResistanceMitigation-card.component';

import { SkillCardComponent } from './Skill-card/Skill-card.component';

import { StaffMemberCardComponent } from './StaffMember-card/StaffMember-card.component';

import { StaffSkillCardComponent } from './StaffSkill-card/StaffSkill-card.component';

import { StaffTrainingCardComponent } from './StaffTraining-card/StaffTraining-card.component';

import { TrainingSessionCardComponent } from './TrainingSession-card/TrainingSession-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'BudgetAllocation', name: 'BUDGETALLOCATION', icon: 'view_list', route: '/main/BudgetAllocation' }
    
        ,{ id: 'ChangeInitiative', name: 'CHANGEINITIATIVE', icon: 'view_list', route: '/main/ChangeInitiative' }
    
        ,{ id: 'ChangeOutcome', name: 'CHANGEOUTCOME', icon: 'view_list', route: '/main/ChangeOutcome' }
    
        ,{ id: 'CollaborationEffort', name: 'COLLABORATIONEFFORT', icon: 'view_list', route: '/main/CollaborationEffort' }
    
        ,{ id: 'EngagementPlan', name: 'ENGAGEMENTPLAN', icon: 'view_list', route: '/main/EngagementPlan' }
    
        ,{ id: 'Feedback', name: 'FEEDBACK', icon: 'view_list', route: '/main/Feedback' }
    
        ,{ id: 'ResistanceMitigation', name: 'RESISTANCEMITIGATION', icon: 'view_list', route: '/main/ResistanceMitigation' }
    
        ,{ id: 'Skill', name: 'SKILL', icon: 'view_list', route: '/main/Skill' }
    
        ,{ id: 'StaffMember', name: 'STAFFMEMBER', icon: 'view_list', route: '/main/StaffMember' }
    
        ,{ id: 'StaffSkill', name: 'STAFFSKILL', icon: 'view_list', route: '/main/StaffSkill' }
    
        ,{ id: 'StaffTraining', name: 'STAFFTRAINING', icon: 'view_list', route: '/main/StaffTraining' }
    
        ,{ id: 'TrainingSession', name: 'TRAININGSESSION', icon: 'view_list', route: '/main/TrainingSession' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    BudgetAllocationCardComponent

    ,ChangeInitiativeCardComponent

    ,ChangeOutcomeCardComponent

    ,CollaborationEffortCardComponent

    ,EngagementPlanCardComponent

    ,FeedbackCardComponent

    ,ResistanceMitigationCardComponent

    ,SkillCardComponent

    ,StaffMemberCardComponent

    ,StaffSkillCardComponent

    ,StaffTrainingCardComponent

    ,TrainingSessionCardComponent

];