from ai_service import ExpenseAI

def test_ai_service():
    # Sample test data
    test_expenses = [
        {"amount": 50.00, "description": "Grocery shopping at Walmart", "date": "2024-02-01"},
        {"amount": 30.00, "description": "Netflix subscription", "date": "2024-02-02"},
        {"amount": 25.00, "description": "Gas station fill-up", "date": "2024-02-03"},
        {"amount": 60.00, "description": "Restaurant dinner", "date": "2024-02-04"},
        {"amount": 15.00, "description": "Coffee shop", "date": "2024-02-05"}
    ]
    
    monthly_budget = 500.00

  

    # Test Gemini
    print("\nTesting Gemini Analysis:")
    print("------------------------")
    ai_service_gemini = ExpenseAI(ai_provider="gemini")
    result_gemini = ai_service_gemini.analyze_expenses(test_expenses, monthly_budget)
    print(result_gemini)

if __name__ == "__main__":
    test_ai_service()