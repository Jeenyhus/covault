import { useState } from 'react';

export default function LoanStatus() {
  const [applicationId, setApplicationId] = useState('');
  const [status, setStatus] = useState(null);

  const checkStatus = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/checkStatus?id=${applicationId}`);
    const data = await response.json();
    setStatus(data.status || "Status not found");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-center mb-4">Check Application Status</h2>
      <form onSubmit={checkStatus} className="space-y-4">
        <input
          type="text"
          placeholder="Application ID"
          className="w-full p-2 border rounded"
          value={applicationId}
          onChange={(e) => setApplicationId(e.target.value)}
          required
        />
        <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Check Status
        </button>
      </form>
      {status && (
        <p className="text-center mt-4 font-bold">
          Application Status: {status}
        </p>
      )}
    </div>
  );
}
