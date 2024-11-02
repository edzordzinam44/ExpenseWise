import os
from dotenv import load_dotenv
from openai import OpenAI
import google.generativeai as genai
from typing import Dict, List, Optional

load_dotenv()

class ExpenseAI:
    def __init__(self, ai_provider: str = "openai"):
        """Initialize AI service with chosen provider."""
        self.ai_provider = ai_provider.lower()
        if self.ai_provider == "openai":
            self.client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
        else:
            genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
            self.gemini_model = genai.GenerativeModel('gemini-pro')

    def analyze_expenses(self, expenses: List[Dict], budget: float) -> Dict:
        """
        Analyze expenses and provide insights.
        
        expenses: List of dictionaries with format:
        [
            {
                "amount": float,
                "description": str,
                "date": str,
                "category": str (optional)
            }
        ]
        budget: Monthly budget amount
        """
        # Calculate total spending
        total_spent = sum(expense["amount"] for expense in expenses)
        
        # Create prompt
        prompt = self._create_analysis_prompt(expenses, budget, total_spent)
        
        # Get AI response
        if self.ai_provider == "openai":
            response = self._get_openai_response(prompt)
        else:
            response = self._get_gemini_response(prompt)
            
        return {
            "analysis": response,
            "total_spent": total_spent,
            "budget_remaining": budget - total_spent
        }

    def _create_analysis_prompt(self, expenses: List[Dict], budget: float, total_spent: float) -> str:
        expense_text = "\n".join([
            f"- ${expense['amount']}: {expense['description']}" 
            for expense in expenses
        ])
        
        prompt = f"""
        Analyze these expenses (Total: ${total_spent}) against a budget of ${budget}:
        
        {expense_text}
        
        Provide:
        1. Main spending categories and patterns
        2. Budget status and recommendations
        3. Specific saving opportunities
        Keep the analysis concise and actionable.
        """
        return prompt

    def _get_openai_response(self, prompt: str) -> str:
        response = self.client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "user", "content": prompt}
            ],
            temperature=0.7
        )
        return response.choices[0].message.content

    def _get_gemini_response(self, prompt: str) -> str:
        response = self.gemini_model.generate_content(prompt)
        return response.text