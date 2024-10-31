import google.generativeai as genai
from config.settings import Config
from .base import AIProvider

class GeminiService(AIProvider):
    def __init__(self):
        genai.configure(api_key=Config.GEMINI_API_KEY)
        self.model = genai.GenerativeModel('gemini-pro')
    
    def analyze_expense(self, description: str, amount: float) -> dict:
        prompt = f"""Analyze this expense:
        Description: {description}
        Amount: ${amount}
        
        Provide a JSON with:
        1. Category
        2. Sub-category
        3. Necessity level (1-5)
        4. Cost-saving suggestions
        """
        
        response = self.model.generate_content(prompt)
        return self._parse_response(response.text)
    
    def predict_budget_exceed(self, user_expenses: list, budget: float) -> dict:
        # Calculate spending patterns and trends
        total_spent = sum(expense.amount for expense in user_expenses)
        daily_average = total_spent / len(user_expenses)
        
        prompt = f"""Given these spending patterns:
        - Daily average spending: ${daily_average}
        - Monthly budget: ${budget}
        - Number of transactions: {len(user_expenses)}
        
        Predict:
        1. Will they exceed their budget?
        2. By how much?
        3. What are the main spending categories contributing to this?
        """
        
        response = self.model.generate_content(prompt)
        return self._parse_response(response.text)
