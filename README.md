# Personal Finance Visualizer

This is a **Personal Finance Visualizer** web application built using Next.js and MongoDB. It helps users track their expenses, categorize spending, and visualize financial data with interactive charts.

## Features

✅ **Add, Edit, and Delete Transactions**  
✅ **Categorize Expenses** (Food, Rent, Entertainment, etc.)  
✅ **Dashboard with Summary Cards**  
✅ **Pie Chart for Spending Breakdown**  
✅ **Responsive UI**  

## Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** MongoDB (Mongoose), Next.js API Routes
- **Charts:** Recharts

## Project Structure

```
personal-finance-visualizer/
│── public/                # Static assets
│── src/
│   ├── components/        # UI components
│   │   ├── TransactionForm.js
│   │   ├── TransactionList.js
│   │   ├── ExpenseChart.js
│   │   ├── DashboardSummary.js
│   ├── pages/
│   │   ├── index.js       # Home page (list transactions)
│   │   ├── add.js         # Add/Edit transaction page
│   ├── models/            # Mongoose models
│   │   ├── Transaction.js
│   ├── services/          # API functions
│   │   ├── transactionService.js
│   ├── utils/             # Helper functions
│   │   ├── dbConnect.js   # MongoDB connection
│   ├── styles/            # Tailwind CSS styles
│── .env.local             # Environment variables
│── package.json           # Project dependencies
│── next.config.js         # Next.js config
│── README.md              # Project documentation
```

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/personal-finance-visualizer.git
cd personal-finance-visualizer
```

### 2. Install Dependencies
```bash
npm install  # or yarn install
```

### 3. Set Up Environment Variables
Create a `.env.local` file and add the following:
```bash
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### 4. Run the Development Server
```bash
npm run dev  # or yarn dev
```
> Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Endpoints

### **Transactions API**

#### 📌 Get All Transactions
```http
GET /api/transactions
```
#### 📌 Add a Transaction
```http
POST /api/transactions
```
**Body:**
```json
{
  "description": "Groceries",
  "amount": 500,
  "category": "Food",
  "date": "2025-02-22"
}
```
#### 📌 Delete a Transaction
```http
DELETE /api/transactions/:id
```

## Deployment
The easiest way to deploy this project is on **Vercel**.

```bash
vercel
```

Check out [Vercel Deployment Docs](https://nextjs.org/docs/deployment) for more details.

## Contributing
Contributions are welcome! Feel free to submit a pull request.
