from flask import Blueprint, request, jsonify
from ai_services.expense_analyzer import ExpenseAnalyzer
from models.schemas import Expense, Budget
from utils.helpers import ExpenseAnalytics
from .validators import validate_request

ai_routes = Blueprint('ai', __name__)
analyzer = ExpenseAnalyzer()
analytics = ExpenseAnalytics()

@ai_routes.route('/analyze-expense', methods=['POST'])
@validate_request(Expense)
def analyze_expense(validated_data):
    analysis = analyzer.analyze_expense(
        validated_data.description,
        validated_data.amount
    )
    return jsonify(analysis)

@ai_routes.route('/predict-budget', methods=['POST'])
def predict_budget():
    data = request.get_json()
    expenses = [Expense(**exp) for exp in data.get('expenses', [])]
    budget = Budget(**data.get('budget'))
    
    # Get spending trends
    trends = analytics.calculate_spending_trend(expenses)
    
    # Get AI prediction
    prediction = analyzer.get_budget_prediction(expenses, budget.amount)
    
    return jsonify({
        "prediction": prediction,
        "trends": trends
    })

@ai_routes.route('/recommendations', methods=['POST'])
def get_recommendations():
    data = request.get_json()
    expenses = [Expense(**exp) for exp in data.get('expenses', [])]
    
    # Get spending analysis
    trends = analytics.calculate_spending_trend(expenses)
    
    # Get AI recommendations
    recommendations = analyzer.get_recommendations(expenses)
    
    return jsonify({
        "recommendations": recommendations,
        "spending_analysis": trends
    })
