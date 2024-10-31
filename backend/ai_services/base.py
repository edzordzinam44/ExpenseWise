from abc import ABC, abstractmethod

class AIProvider(ABC):
    @abstractmethod
    def analyze_expense(self, description: str, amount: float) -> dict:
        pass
    
    @abstractmethod
    def predict_budget_exceed(self, user_expenses: list, budget: float) -> dict:
        pass
    
    @abstractmethod
    def generate_recommendations(self, spending_history: list) -> list:
        pass
