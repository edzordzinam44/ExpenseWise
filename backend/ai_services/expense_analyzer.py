from typing import Union
from .openai_service import OpenAIService
from .gemini_service import GeminiService

class ExpenseAnalyzer:
    def __init__(self, provider: str = "openai"):
        self.provider = self._get_provider(provider)
    
    def _get_provider(self, provider: str):
        providers = {
            "openai": OpenAIService(),
            "gemini": GeminiService()
        }
        return providers.get(provider)
    
    def analyze_expense(self, description: str, amount: float) -> dict:
        """Analyze a single expense using the configured AI provider"""
        return self.provider.analyze_expense(description, amount)
    
    def get_budget_prediction(self, expenses: list, budget: float) -> dict:
        """Predict budget exceedance based on spending patterns"""
        return self.provider.predict_budget_exceed(expenses, budget)
    
    def get_recommendations(self, spending_history: list) -> list:
        """Generate personalized financial recommendations"""
        return self.provider.generate_recommendations(spending_history)
