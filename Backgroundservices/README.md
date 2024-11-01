# EXPENSEWISE BACKEND

This backend application provides the essential services for an Expense Tracker app, including user authentication, a backend database for storing user expenses, and a background service that sends email notifications when expenses exceed the user’s budget.


## Table of Contents

### Features
- User Authentication: Secure endpoints for user sign-up, login, forgot password, and logout.
- Database: MongoDB is used to store user data, expenses, and budget information.
- Background Services: Automatic email notifications are sent when a user's expenses exceed their defined budget.

### Technologies Used
- Node.js & Express: Web server and routing framework.
- MongoDB: Database for storing user and expense data.
- Redis: Used to manage token blacklisting for logout.
- JWT (JSON Web Tokens): For secure user authentication.
- Nodemailer: For sending email notifications when expenses exceed the budget.

### Installation
- Prerequisites
- Node.js & npm
- MongoDB (local or cloud-based, e.g., MongoDB Atlas)
- Redis: An SMTP email service (e.g., Gmail, SendGrid) for sending notifications

#### Steps
   - Clone this repository:
    1. git clone https://github.com/edzordzinam44/Expensewise.git
    2. cd Expensewise
    3. Install dependencies:
    * npm install
    * Set up your environment variables by creating a .env file in the root directory:

#### MONGODB_URI=your_mongodb_connection_string
   - JWT_SECRET=your_jwt_secret
   - REDIS_URL=your_redis_url
   - EMAIL_SERVICE=your_email_service (e.g., Gmail)
   - EMAIL_USER=your_email_address
   - EMAIL_PASS=your_email_password

#### Start the server:
   - npm start


### Endpoints

####Authentication
- Sign-up - POST /signup
 * Description: Creates a new user with a username and password.
 * Request Body:

{
  "username": "user123",
  "password": "password"
}

- Login - POST /login
 * Description: Authenticates a user and returns a JWT token.
 * Request Body:

{
  "username": "user123",
  "password": "password"
}

 * Response:

{
  "token": "your_jwt_token"
}

- Forgot Password - POST /forgot-password
 * Description: Sends a password reset link to the user’s email.
 * Request Body:

{
  "email": "user@example.com"
}

- Logout - POST /logout
 * Description: Blacklists the user’s token, effectively logging them out.
 * Headers: Authorization: Bearer your_jwt_token

- Expenses
- Add Expense - POST /expenses
 * Description: Adds a new expense for the user.
 * Auth: Requires JWT in Authorization header.
 * Request Body:

{
  "value": 50,
  "label": "Dinner",
  "date": "31/10/24"
}

- Get Expenses - GET /expenses
 * Description: Retrieves all expenses for the authenticated user.
 * Auth: Requires JWT in Authorization header.

- Set Budget - POST /set-budget
 * Description: Sets a monthly budget limit for the user.
 * Auth: Requires JWT in Authorization header.
 * Request Body:

{
  "monthlyBudget": 500
}


#### Background Services: Expense Over-Budget Notification
A background job runs daily to check each user’s total expenses. If expenses exceed the set monthly budget, an email notification is sent using Nodemailer.

- File Structure:
The background job logic is located in /helpers/sendMail.js.

- Example of Email Notification
If a user exceeds their budget, they’ll receive an email like this:

Subject: "Warning"
Body: "Your total expenses is ${totalExpense}. Kindly review your expenses"

- Code Structure

├── controllers
│   ├── authController.js     # Handles sign-up, login, forgot-password, and logout logic
├── middleware
│   └── authMiddleware.js     # JWT authentication and token blacklisting
├── models
│   ├── UserModel.js          # User schema (includes username, hashed password)
│   └── Expense.js            # Expense schema (includes value, label, date ref)
├── helpers
│   └── sendMail.js           # Background service for sending budget exceedance emails
├── .env                      # Environment variables (MongoDB, Redis, email credentials)
└── server.js                    # Entry point (routes and middleware setup)

- Usage
To test the functionality, you can use tools like Postman to send HTTP requests to the backend.

 * Sign Up: Create a user account.
 * Login: Retrieve a JWT token and use it for accessing protected routes.
 * Add Expenses: Use the /expenses endpoint to add expenses.
 * Set a Budget: Define a budget for the month.
 * Email Notifications: When expenses exceed the budget, you should receive an email.

- License
This project is open-source and available under the MIT License.

