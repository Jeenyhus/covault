import { useState } from 'react';

export default function EligibilityChecker() {
  const [income, setIncome] = useState('');
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [creditScore, setCreditScore] = useState('');
  const [eligibility, setEligibility] = useState(null);

  const handleEligibilityCheck = async (e) => {
    e.preventDefault();
    // Example API call to check eligibility (replace with real API endpoint)
    const response = await fetch('/api/checkEligibility', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ income, employmentStatus, creditScore }),
    });
    const data = await response.json();
    setEligibility(data.eligible ? "Eligible" : "Not Eligible");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-center mb-4">Check Loan Eligibility</h2>
      <form onSubmit={handleEligibilityCheck} className="space-y-4">
        <input
          type="number"
          placeholder="Income"
          className="w-full p-2 border rounded"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          required
        />
        <select
          className="w-full p-2 border rounded"
          value={employmentStatus}
          onChange={(e) => setEmploymentStatus(e.target.value)}
          required
        >
          <option value="">Employment Status</option>
          <option value="employed">Employed</option>
          <option value="self-employed">Self-employed</option>
          <option value="unemployed">Unemployed</option>
        </select>
        <input
          type="number"
          placeholder="Credit Score"
          className="w-full p-2 border rounded"
          value={creditScore}
          onChange={(e) => setCreditScore(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Check Eligibility
        </button>
      </form>
      {eligibility && (
        <p className="text-center mt-4 font-bold">
          You are {eligibility} for a loan.
        </p>
      )}
    </div>
  );
}
