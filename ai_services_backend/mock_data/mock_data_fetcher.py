from datetime import datetime, timedelta

class MockData:
    @staticmethod
    def get_mock_expenses():
        return [
            {
                "id": "exp1",
                "description": "Grocery shopping at Walmart",
                "amount": 150.75,
                "date": (datetime.now() - timedelta(days=5)).isoformat(),
                "category": "Groceries"
            },
            {
                "id": "exp2",
                "description": "Netflix subscription",
                "amount": 15.99,
                "date": (datetime.now() - timedelta(days=3)).isoformat(),
                "category": "Entertainment"
            },
            {
                "id": "exp3",
                "description": "Uber ride to work",
                "amount": 25.50,
                "date": (datetime.now() - timedelta(days=1)).isoformat(),
                "category": "Transportation"
            },
            {
                "id": "exp4",
                "description": "Restaurant dinner",
                "amount": 85.20,
                "date": datetime.now().isoformat(),
                "category": "Dining"
            }
        ]

    @staticmethod
    def get_mock_budget():
        return {
            "id": "budget1",
            "amount": 2000.00,
            "period": "monthly",
            "categories": {
                "Groceries": 500.00,
                "Entertainment": 200.00,
                "Transportation": 300.00,
                "Dining": 400.00,
                "Others": 600.00
            }
        }

    @staticmethod
    def get_mock_user():
        return {
            "id": "user1",
            "name": "Test User",
            "email": "test@example.com",
            "preferences": {
                "currency": "USD",
                "notifications": True
            }
        }