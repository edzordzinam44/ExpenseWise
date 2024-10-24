from openai import OpenAI
from config.settings import Config
from .base import AIProvider

class OpenAIService(AIProvider):
    def __init__(self):
        self.client = OpenAI(api_key=Config.OPENAI_API_KEY)
    
    def analyze_expense(self, description: str, amount: float) -> dict:
        prompt = f"""Analyze this expense:
        Description: {description}
        Amount: ${amount}
        
        Provide:
        1. Category
        2. Sub-category
        3. Necessity level (1-5)
        """
        
        response = self.client.chat.completions.create(
            model=Config.MODEL_NAME,
            messages=[{"role": "user", "content": prompt}],
            temperature=0.3
        )
        
        return self._parse_expense_response(response.choices[0].message.content)
    
    def predict_budget_exceed(self, user_expenses: list, budget: float) -> dict:
        # Implementation for budget prediction
        pass
    
    def generate_recommendations(self, spending_history: list) -> list:
        # Implementation for spending recommendations
        pass