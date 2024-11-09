"use client";
import { useState } from 'react';

export default function LoanApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    employmentInfo: '',
    loanAmount: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit form data to API
    const response = await fetch('/api/submitApplication', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    alert(result.message || 'Application submitted successfully');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-4">
      <h2 className="text-xl font-bold text-center">Loan Application Form</h2>
      <input
        type="text"
        placeholder="Name"
        className="w-full p-2 border rounded"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Address"
        className="w-full p-2 border rounded"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Employment Information"
        className="w-full p-2 border rounded"
        value={formData.employmentInfo}
        onChange={(e) => setFormData({ ...formData, employmentInfo: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Loan Amount"
        className="w-full p-2 border rounded"
        value={formData.loanAmount}
        onChange={(e) => setFormData({ ...formData, loanAmount: e.target.value })}
        required
      />
      <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        Submit Application
      </button>
    </form>
  );
}
