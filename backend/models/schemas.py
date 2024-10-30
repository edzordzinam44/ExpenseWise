from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime

class Expense(BaseModel):
    description: str
    amount: float
    date: datetime
    category: Optional[str] = None
    
class Budget(BaseModel):
    amount: float
    period: str = "monthly"
    categories: Optional[dict] = None

class ExpenseAnalysis(BaseModel):
    category: str
    sub_category: str
    necessity_level: int
    suggestions: List[str]