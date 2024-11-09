"use client";

import { useState } from 'react';

export default function RepaymentCalculator() {
  const [loanAmount, setLoanAmount] = useState('');
  const [term, setTerm] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [monthlyRepayment, setMonthlyRepayment] = useState(null);

  const calculateRepayment = (e) => {
    e.preventDefault();
    const rate = parseFloat(interestRate) / 100 / 12;
    const n = parseInt(term) * 12;
    const repayment = (loanAmount * rate) / (1 - Math.pow(1 + rate, -n));
    setMonthlyRepayment(repayment.toFixed(2));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-center mb-4">Loan Repayment Calculator</h2>
      <form onSubmit={calculateRepayment} className="space-y-4">
        <input
          type="number"
          placeholder="Loan Amount"
          className="w-full p-2 border rounded"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Loan Term (years)"
          className="w-full p-2 border rounded"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Interest Rate (%)"
          className="w-full p-2 border rounded"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Calculate Repayment
        </button>
      </form>
      {monthlyRepayment && (
        <p className="text-center mt-4 font-bold">
          Monthly Repayment: ${monthlyRepayment}
        </p>
      )}
    </div>
  );
}
