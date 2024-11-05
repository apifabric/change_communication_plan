# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  November 05, 2024 16:42:52
# Database: sqlite:////tmp/tmp.3ohUDkx4nn/change_communication_plan/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class ChangeInitiative(SAFRSBaseX, Base):
    """
    description: Represents a change initiative within the bank, capturing overarching goals and objectives.
    """
    __tablename__ = 'change_initiatives'
    _s_collection_name = 'ChangeInitiative'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    BudgetAllocationList : Mapped[List["BudgetAllocation"]] = relationship(back_populates="initiative")
    ChangeOutcomeList : Mapped[List["ChangeOutcome"]] = relationship(back_populates="initiative")
    CollaborationEffortList : Mapped[List["CollaborationEffort"]] = relationship(back_populates="initiative")
    EngagementPlanList : Mapped[List["EngagementPlan"]] = relationship(back_populates="initiative")
    FeedbackList : Mapped[List["Feedback"]] = relationship(back_populates="initiative")
    ResistanceMitigationList : Mapped[List["ResistanceMitigation"]] = relationship(back_populates="initiative")



class Skill(SAFRSBaseX, Base):
    """
    description: Catalogs individual skills required for effective change management.
    """
    __tablename__ = 'skills'
    _s_collection_name = 'Skill'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    StaffSkillList : Mapped[List["StaffSkill"]] = relationship(back_populates="skill")



class StaffMember(SAFRSBaseX, Base):
    """
    description: Contains information about staff members, including their roles and skills within the bank.
    """
    __tablename__ = 'staff_members'
    _s_collection_name = 'StaffMember'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    role = Column(String)
    skills_summary = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    StaffSkillList : Mapped[List["StaffSkill"]] = relationship(back_populates="staff")
    StaffTrainingList : Mapped[List["StaffTraining"]] = relationship(back_populates="staff")



class TrainingSession(SAFRSBaseX, Base):
    """
    description: Captures data about training sessions organized to support the change initiative.
    """
    __tablename__ = 'training_sessions'
    _s_collection_name = 'TrainingSession'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    topic = Column(String, nullable=False)
    date = Column(DateTime, nullable=False)
    duration_hours = Column(Float)

    # parent relationships (access parent)

    # child relationships (access children)
    StaffTrainingList : Mapped[List["StaffTraining"]] = relationship(back_populates="training")



class BudgetAllocation(SAFRSBaseX, Base):
    """
    description: Details the budget allocation for change initiatives.
    """
    __tablename__ = 'budget_allocations'
    _s_collection_name = 'BudgetAllocation'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    initiative_id = Column(ForeignKey('change_initiatives.id'), nullable=False)
    amount = Column(Float, nullable=False)

    # parent relationships (access parent)
    initiative : Mapped["ChangeInitiative"] = relationship(back_populates=("BudgetAllocationList"))

    # child relationships (access children)



class ChangeOutcome(SAFRSBaseX, Base):
    """
    description: Records the outcomes of change initiatives, including success metrics.”
    """
    __tablename__ = 'change_outcomes'
    _s_collection_name = 'ChangeOutcome'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    initiative_id = Column(ForeignKey('change_initiatives.id'), nullable=False)
    outcome_description = Column(String)
    success_metric = Column(Float)

    # parent relationships (access parent)
    initiative : Mapped["ChangeInitiative"] = relationship(back_populates=("ChangeOutcomeList"))

    # child relationships (access children)



class CollaborationEffort(SAFRSBaseX, Base):
    """
    description: Represents efforts for cross-functional collaboration essential for change implementation.
    """
    __tablename__ = 'collaboration_efforts'
    _s_collection_name = 'CollaborationEffort'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    initiative_id = Column(ForeignKey('change_initiatives.id'), nullable=False)
    department = Column(String, nullable=False)
    goal = Column(String)

    # parent relationships (access parent)
    initiative : Mapped["ChangeInitiative"] = relationship(back_populates=("CollaborationEffortList"))

    # child relationships (access children)



class EngagementPlan(SAFRSBaseX, Base):
    """
    description: Outlines the approaches and actions to engage stakeholders during change management.
    """
    __tablename__ = 'engagement_plans'
    _s_collection_name = 'EngagementPlan'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    initiative_id = Column(ForeignKey('change_initiatives.id'), nullable=False)
    strategy = Column(String, nullable=False)

    # parent relationships (access parent)
    initiative : Mapped["ChangeInitiative"] = relationship(back_populates=("EngagementPlanList"))

    # child relationships (access children)



class Feedback(SAFRSBaseX, Base):
    """
    description: Collects feedback from staff and stakeholders about the change process.
    """
    __tablename__ = 'feedback'
    _s_collection_name = 'Feedback'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    initiative_id = Column(ForeignKey('change_initiatives.id'), nullable=False)
    feedback_text = Column(String)

    # parent relationships (access parent)
    initiative : Mapped["ChangeInitiative"] = relationship(back_populates=("FeedbackList"))

    # child relationships (access children)



class ResistanceMitigation(SAFRSBaseX, Base):
    """
    description: Details strategies to mitigate resistance to change within the bank.
    """
    __tablename__ = 'resistance_mitigation'
    _s_collection_name = 'ResistanceMitigation'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    initiative_id = Column(ForeignKey('change_initiatives.id'), nullable=False)
    tactic = Column(String, nullable=False)

    # parent relationships (access parent)
    initiative : Mapped["ChangeInitiative"] = relationship(back_populates=("ResistanceMitigationList"))

    # child relationships (access children)



class StaffSkill(SAFRSBaseX, Base):
    """
    description: Junction table associating staff members with their respective skills.
    """
    __tablename__ = 'staff_skills'
    _s_collection_name = 'StaffSkill'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    staff_id = Column(ForeignKey('staff_members.id'), nullable=False)
    skill_id = Column(ForeignKey('skills.id'), nullable=False)

    # parent relationships (access parent)
    skill : Mapped["Skill"] = relationship(back_populates=("StaffSkillList"))
    staff : Mapped["StaffMember"] = relationship(back_populates=("StaffSkillList"))

    # child relationships (access children)



class StaffTraining(SAFRSBaseX, Base):
    """
    description: Maps staff to the training sessions they have attended.
    """
    __tablename__ = 'staff_trainings'
    _s_collection_name = 'StaffTraining'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    staff_id = Column(ForeignKey('staff_members.id'), nullable=False)
    training_id = Column(ForeignKey('training_sessions.id'), nullable=False)

    # parent relationships (access parent)
    staff : Mapped["StaffMember"] = relationship(back_populates=("StaffTrainingList"))
    training : Mapped["TrainingSession"] = relationship(back_populates=("StaffTrainingList"))

    # child relationships (access children)
