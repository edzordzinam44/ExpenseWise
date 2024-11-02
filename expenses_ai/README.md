# ExpenseWise AI Service

A powerful AI-powered expense analysis service that leverages both OpenAI and Google's Gemini to provide intelligent insights into spending patterns, budget analysis, and financial recommendations.

## Features

- **Dual AI Provider Support**: Switch between OpenAI and Gemini models
- **Expense Analysis**: Get detailed insights about spending patterns
- **Budget Tracking**: Track expenses against set budgets
- **Smart Recommendations**: Receive AI-powered suggestions for saving money
- **Formatted Reports**: Clean, readable analysis output

## Installation

1. Clone the repository:
   ```bash
   git clone [your-repo-url]
   cd expense_ai
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv

   # On Windows:
   venv\Scripts\activate

   # On macOS/Linux:
   source venv/bin/activate
   ```

3. Install required packages:
   ```bash
   pip install -r requirements.txt
   ```

4. Create a .env file in the root directory:
   ```
   OPENAI_API_KEY=your_openai_key_here
   GEMINI_API_KEY=your_gemini_key_here
   ```

## Project Structure

```
expense_ai/
├── __init__.py           # Package initialization
├── ai_service.py         # Main AI service implementation
├── test_ai.py           # Test scripts
├── requirements.txt      # Project dependencies
└── .env                 # Environment variables (not in repo)
```

## Usage

### Basic Usage

```python
from expense_ai import ExpenseAI

# Initialize with preferred AI provider
ai_service = ExpenseAI(ai_provider="openai")  # or "gemini"

# Sample expenses data
expenses = [
    {
        "amount": 50.00,
        "description": "Grocery shopping",
        "date": "2024-02-01"
    },
    {
        "amount": 30.00,
        "description": "Netflix subscription",
        "date": "2024-02-02"
    }
]

# Set monthly budget
monthly_budget = 500.00

# Get analysis
result = ai_service.analyze_expenses(expenses, monthly_budget)
print(result)
```

## Testing

Run the included test script:

```bash
python test_ai.py
```

This will:
1. Test both OpenAI and Gemini providers
2. Display formatted analysis results
3. Generate a sample_response.json file for frontend testing

### Sample Output Format

```json
{
    "analysis": "Detailed AI analysis text...",
    "total_spent": 180.00,
    "budget_remaining": 320.00
}
```

## API Integration

### Request Format

```json
{
    "expenses": [
        {
            "amount": 50.00,
            "description": "Grocery shopping",
            "date": "2024-02-01"
        }
    ],
    "budget": 500.00
}
```

### Response Format

```json
{
    "analysis": "AI-generated analysis including:\n
                 - Spending categories\n
                 - Budget status\n
                 - Recommendations\n
                 - Saving opportunities",
    "total_spent": 50.00,
    "budget_remaining": 450.00
}
```

## Testing Steps

1. Environment Setup Test:
   ```bash
   python -c "from expense_ai import ExpenseAI; print('Setup successful!')"
   ```

2. API Keys Test:
   ```bash
   python test_ai.py
   ```
   Verify that both OpenAI and Gemini analyses are working.

3. Sample Data Test:
   - Check generated sample_response.json
   - Verify format and content

4. Integration Testing:
   ```bash
   # Using curl (replace with your actual endpoint)
   curl -X POST http://localhost:5000/api/analyze-expenses \
     -H "Content-Type: application/json" \
     -d @sample_response.json
   ```

## What It Does

The ExpenseWise AI Service provides:

### 1. Expense Analysis:
- Categorizes spending
- Identifies patterns
- Tracks against budget

### 2. Budget Insights:
- Current spending status
- Budget remaining
- Spending trajectory

### 3. Smart Recommendations:
- Personalized saving tips
- Category-specific advice
- Budget optimization suggestions

## Common Issues and Solutions

### 1. API Key Errors:
- Verify .env file exists
- Check API key format
- Ensure keys have proper permissions

### 2. Module Import Errors:
- Confirm virtual environment is activated
- Verify all dependencies are installed
- Check Python version compatibility

### 3. Analysis Errors:
- Verify expense data format
- Check budget is a positive number
- Ensure dates are properly formatted
