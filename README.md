# Expense Tracker

A responsive expense tracking application built with React for managing income and expenses, viewing financial summaries, filtering transactions, and visualising spending and income data.

This project was built as a practical React project to strengthen my understanding of state management, reusable components, data transformation, filtering, pagination, and working with third-party libraries.

## Features

- Add income and expense transactions
- View current balance, total income, and total expenses
- View monthly financial summaries
- Separate Income and Expenses pages
- View recent and complete transaction history
- Filter transactions by:
  - Type
  - Category
  - Month
- Sort transactions by:
  - Newest
  - Oldest
  - Highest amount
  - Lowest amount
- Paginated transaction lists
- Monthly income vs expenses chart
- Monthly income breakdown by category
- Monthly expense breakdown by category
- Category pie charts with percentage breakdowns
- Responsive layout for desktop and mobile
- Persistent data using localStorage
- Delete transactions
- Customise account name and currency
- Clear stored application data

## Built With

- React
- JavaScript
- CSS
- React Router
- React Context API
- Recharts
- Vite

## Charts

The dashboard includes a yearly overview comparing income and expenses across each month.

The Income and Expenses pages include pie charts showing the percentage breakdown of transactions by category for the current month.

## What I Learned

Building this project gave me practical experience with:

- Managing application state with React Context
- Creating reusable React components
- Building custom hooks
- Filtering and sorting data
- Using `reduce()` to transform and group transaction data
- Working with dates in JavaScript
- Implementing pagination
- Persisting application state with localStorage
- Creating responsive layouts with CSS Grid
- Integrating and configuring a third-party charting library
- Structuring a larger React application across components, hooks, contexts, and utilities

## Getting Started

Clone the repository:

```bash
git clone https://github.com/edwardshanahan97/expense-tracker.git
```

Navigate into the project:

```bash
cd expense-tracker
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Project Status

The Expense Tracker is feature complete.

Core functionality, filtering, pagination, data visualisation, settings, transaction deletion, localStorage persistence, and automated tests are implemented.

Final responsive testing and deployment remain.
