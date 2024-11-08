# Covault Loan Application Website

Covault is a user-friendly loan application platform designed to streamline the loan process for both customers and the lending team. With Covault, users can quickly check their loan eligibility, calculate repayment plans, apply for loans, and monitor the status of their applications in real-time. This helps reduce the workload for the team while enhancing the client experience.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [API Endpoints](#api-endpoints)
- [Future Improvements](#future-improvements)

## Features

1. **Eligibility Checker**: Allows customers to determine their loan eligibility based on their financial data.
2. **Loan Repayment Calculator**: A tool for calculating monthly repayment amounts based on loan amount, interest rate, and term.
3. **Instant Loan Application**: Customers can apply for loans by filling out a detailed form with options to upload documents.
4. **Application Status Tracking**: Real-time updates on loan application status, so customers stay informed throughout the process.

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [React](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Backend/API**: [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
- **Utilities**: [Axios](https://axios-http.com/) for API requests
- **Data**: TBD, can be connected to a database or other backend services

## Project Structure

```
.
├── app
│   ├── eligibility
│   │   └── page.js               # Eligibility Checker Page
│   ├── calculator
│   │   └── page.js               # Loan Repayment Calculator Page
│   ├── apply
│   │   └── page.js               # Loan Application Form Page
│   ├── status
│   │   └── page.js               # Application Status Tracker Page
│   ├── components
│   │   ├── EligibilityChecker.js # Eligibility Checker Component
│   │   ├── RepaymentCalculator.js# Repayment Calculator Component
│   │   ├── LoanApplicationForm.js# Loan Application Form Component
│   │   ├── LoanStatus.js         # Loan Status Tracker Component
│   │   ├── Header.js             # Header Component
│   │   └── Footer.js             # Footer Component
├── utils
│   ├── eligibility.js            # Eligibility Calculation Logic
│   └── calculateRepayment.js     # Repayment Calculation Logic
└── pages
    ├── api
    │   ├── checkEligibility.js   # API Route for Checking Eligibility
    │   ├── calculateRepayment.js # API Route for Loan Repayment Calculation
    │   ├── submitApplication.js  # API Route for Loan Application Submission
    │   └── checkStatus.js        # API Route for Checking Application Status
```

## Getting Started

### Prerequisites

- **Node.js** and **npm**: Make sure you have Node.js installed. [Download it here](https://nodejs.org/).
- **Tailwind CSS**: The project uses Tailwind CSS, which is preconfigured in `tailwind.config.js`.

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Jeenyhus/covault.git
   cd covault
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   This starts a local development server at `http://localhost:3000`.

### Configuration

Any necessary environment variables or configurations can be added to `.env.local`. This might include API keys, backend URLs, or other environment-specific settings.

## Scripts

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the project for production.
- **`npm start`**: Runs the project in production mode after building.

## API Endpoints

- **`/api/checkEligibility`**: Checks user eligibility based on income and credit score.
- **`/api/calculateRepayment`**: Calculates loan repayment amount.
- **`/api/submitApplication`**: Submits the loan application form data.
- **`/api/checkStatus`**: Checks the status of a loan application.

## Future Improvements

- **Database Integration**: Connect to a database to store application data and statuses.
- **Authentication**: Add user authentication to enhance security and personalized experience.
- **Email Notifications**: Notify customers via email about application updates.
- **Improved UI/UX**: Further refine the design for better user experience.
  
---
