import { useState } from "react";

export default function SpendingToggle() {
  const [view, setView] = useState("spend");

  return (
    <div className="p-6 bg-blue-50 rounded-2xl border-2 border-blue-200 shadow-sm">
      <h3 className="font-bold text-blue-900 mb-4 text-lg">U.S. Health Comparison</h3>
      
      <div className="flex justify-center gap-3 mb-6">
        <button 
          onClick={() => setView("spend")} 
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            view === 'spend' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          }`}
        >
          The Spending
        </button>
        <button 
          onClick={() => setView("outcome")} 
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            view === 'outcome' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          }`}
        >
          The Outcome
        </button>
      </div>

      <div className="text-center p-4 bg-white rounded-xl min-h-[100px] flex items-center justify-center border border-blue-100">
        {view === "spend" ? (
          <div className="animate-fadeIn">
            <p className="text-3xl font-black text-red-600">$3.8 Trillion</p>
            <p className="text-gray-500 text-sm mt-1 uppercase tracking-wider font-bold">Annual U.S. Spending</p>
          </div>
        ) : (
          <div className="animate-fadeIn">
            <p className="text-xl font-bold text-gray-800">Lower life expectancy than</p>
            <p className="text-2xl font-black text-red-600">30+ peer nations</p>
          </div>
        )}
      </div>
    </div>
  );
}