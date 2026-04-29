import React from 'react';


export default function Longevity() {
  const comparisons = [
    { city: "Chicago", high: "90 years", low: "60 years", gap: "30-year gap" },
    { city: "New York", high: "85 years", low: "64 years", gap: "21-year gap" },
    { city: "Richmond", high: "83 years", low: "63 years", gap: "20-year gap" },
  ];

  return (
    <div className="max-w-5xl mx-auto py-10 px-6 space-y-12">
      <header className="text-center">
        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">The Longevity Gap</h2>
        <h1 className="text-4xl font-black text-gray-900 mb-4">Zip Code vs. Genetic Code</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Our research highlights a startling reality: neighborhoods just a few miles apart can have life expectancy differences of over 20 years.
        </p>
      </header>

      {/* Table Section */}
      <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 font-bold text-gray-700 border-b">City</th>
              <th className="p-4 font-bold text-gray-700 border-b text-center">Highest Avg</th>
              <th className="p-4 font-bold text-gray-700 border-b text-center">Lowest Avg</th>
              <th className="p-4 font-bold text-blue-600 border-b text-center">The Disparity</th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map((item, index) => (
              <tr key={index} className="hover:bg-blue-50 transition-colors">
                <td className="p-4 border-b font-medium text-gray-900">{item.city}</td>
                <td className="p-4 border-b text-center text-gray-600">{item.high}</td>
                <td className="p-4 border-b text-center text-gray-600">{item.low}</td>
                <td className="p-4 border-b text-center font-black text-red-500">{item.gap}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}