# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, DateTime, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import datetime

# Base class for declarative model
Base = declarative_base()

class ChangeInitiative(Base):
    """description: Represents a change initiative within the bank, capturing overarching goals and objectives."""
    __tablename__ = 'change_initiatives'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(String)

class EngagementPlan(Base):
    """description: Outlines the approaches and actions to engage stakeholders during change management."""
    __tablename__ = 'engagement_plans'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    initiative_id = Column(Integer, ForeignKey('change_initiatives.id'), nullable=False)
    strategy = Column(String, nullable=False)

class StaffMember(Base):
    """description: Contains information about staff members, including their roles and skills within the bank."""
    __tablename__ = 'staff_members'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    role = Column(String)
    skills_summary = Column(String)

class Skill(Base):
    """description: Catalogs individual skills required for effective change management."""
    __tablename__ = 'skills'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)

class StaffSkill(Base):
    """description: Junction table associating staff members with their respective skills."""
    __tablename__ = 'staff_skills'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    staff_id = Column(Integer, ForeignKey('staff_members.id'), nullable=False)
    skill_id = Column(Integer, ForeignKey('skills.id'), nullable=False)

class ResistanceMitigation(Base):
    """description: Details strategies to mitigate resistance to change within the bank."""
    __tablename__ = 'resistance_mitigation'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    initiative_id = Column(Integer, ForeignKey('change_initiatives.id'), nullable=False)
    tactic = Column(String, nullable=False)

class CollaborationEffort(Base):
    """description: Represents efforts for cross-functional collaboration essential for change implementation."""
    __tablename__ = 'collaboration_efforts'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    initiative_id = Column(Integer, ForeignKey('change_initiatives.id'), nullable=False)
    department = Column(String, nullable=False)
    goal = Column(String)

class TrainingSession(Base):
    """description: Captures data about training sessions organized to support the change initiative."""
    __tablename__ = 'training_sessions'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    topic = Column(String, nullable=False)
    date = Column(DateTime, nullable=False, default=datetime.datetime.utcnow)
    duration_hours = Column(Float)

class StaffTraining(Base):
    """description: Maps staff to the training sessions they have attended."""
    __tablename__ = 'staff_trainings'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    staff_id = Column(Integer, ForeignKey('staff_members.id'), nullable=False)
    training_id = Column(Integer, ForeignKey('training_sessions.id'), nullable=False)

class Feedback(Base):
    """description: Collects feedback from staff and stakeholders about the change process."""
    __tablename__ = 'feedback'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    initiative_id = Column(Integer, ForeignKey('change_initiatives.id'), nullable=False)
    feedback_text = Column(String)

class ChangeOutcome(Base):
    """description: Records the outcomes of change initiatives, including success metrics.”"""
    __tablename__ = 'change_outcomes'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    initiative_id = Column(Integer, ForeignKey('change_initiatives.id'), nullable=False)
    outcome_description = Column(String)
    success_metric = Column(Float)

class BudgetAllocation(Base):
    """description: Details the budget allocation for change initiatives."""
    __tablename__ = 'budget_allocations'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    initiative_id = Column(Integer, ForeignKey('change_initiatives.id'), nullable=False)
    amount = Column(Float, nullable=False)

# Configure the database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

# Create a session
Session = sessionmaker(bind=engine)
session = Session()

# Insert sample data
initiative1 = ChangeInitiative(name="Digital Transformation", description="Overhaul of digital banking services.")
initiative2 = ChangeInitiative(name="Process Optimization", description="Streamlining key banking processes.")

engagement1 = EngagementPlan(initiative_id=1, strategy="Frequent townhalls and feedback sessions.")
engagement2 = EngagementPlan(initiative_id=2, strategy="Monthly briefings and workshops.")

staff1 = StaffMember(name="Alice Doe", role="Project Manager", skills_summary="Leadership, Strategic Planning")
staff2 = StaffMember(name="Bob Smith", role="IT Specialist", skills_summary="Network Security, System Integration")

skill1 = Skill(name="Strategic Planning")
skill2 = Skill(name="Network Security")

staff_skill1 = StaffSkill(staff_id=1, skill_id=1)
staff_skill2 = StaffSkill(staff_id=2, skill_id=2)

resistance1 = ResistanceMitigation(initiative_id=1, tactic="Open communication policy.")
resistance2 = ResistanceMitigation(initiative_id=2, tactic="Involvement in decision-making.")

collaboration1 = CollaborationEffort(initiative_id=1, department="IT", goal="Seamless tech integration.")
collaboration2 = CollaborationEffort(initiative_id=2, department="Operations", goal="Efficient process alignment.")

training1 = TrainingSession(topic="New Banking Software", duration_hours=3.5)
training2 = TrainingSession(topic="Process Improvement Strategies", duration_hours=2.0)

staff_training1 = StaffTraining(staff_id=1, training_id=1)
staff_training2 = StaffTraining(staff_id=2, training_id=2)

feedback1 = Feedback(initiative_id=1, feedback_text="Great initiative, needs more testing.")
feedback2 = Feedback(initiative_id=2, feedback_text="Reduces workload.")

outcome1 = ChangeOutcome(initiative_id=1, outcome_description="System upgrade completed", success_metric=4.5)
outcome2 = ChangeOutcome(initiative_id=2, outcome_description="Processes optimized", success_metric=4.7)

budget1 = BudgetAllocation(initiative_id=1, amount=50000)
budget2 = BudgetAllocation(initiative_id=2, amount=75000)

# Add and commit sample data
session.add_all([initiative1, initiative2, engagement1, engagement2, staff1, staff2,
                 skill1, skill2, staff_skill1, staff_skill2, resistance1, resistance2,
                 collaboration1, collaboration2, training1, training2, staff_training1,
                 staff_training2, feedback1, feedback2, outcome1, outcome2, budget1, budget2])

session.commit()
session.close()
