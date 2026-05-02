import React, { useState } from 'react';

export default function ZipSim() {
  const [zip, setZip] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (zip.length !== 5) return;

    setIsAnalyzing(true);
    setResult(null);

    // Simulate a data fetch delay based on my research parameters
    setTimeout(() => {
      setIsAnalyzing(false);
      setResult({
        longevity: Math.floor(Math.random() * (85 - 65 + 1)) + 65,
        equityScore: (Math.random() * 10).toFixed(1),
        status: zip.startsWith('9') ? "High Disparity" : "Moderate Risk"
      });
    }, 1500);
  };

  return (
    <div className="p-8 bg-gray-900 text-white rounded-3xl shadow-2xl border border-gray-700">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold text-blue-400">Zip Code Equity Analyzer</h3>
        <p className="text-gray-400 text-sm italic">Simulating Longevity based on SDOH Data</p>
      </div>

      <form onSubmit={handleAnalyze} className="space-y-4">
        <input
          type="text"
          maxLength="5"
          placeholder="Enter 5-digit Zip Code..."
          className="w-full p-4 bg-gray-800 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          value={zip}
          onChange={(e) => setZip(e.target.value.replace(/\D/g, ""))}
        />
        
        <button
          type="submit"
          disabled={zip.length !== 5 || isAnalyzing}
          className={`w-full p-4 rounded-xl font-bold transition-all ${
            zip.length === 5 && !isAnalyzing 
            ? 'bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-900/40' 
            : 'bg-gray-700 text-gray-500 cursor-not-allowed'
          }`}
        >
          {isAnalyzing ? "Scanning Databases..." : "Analyze Regional Equity"}
        </button>
      </form>

      {/* Analysis Results Display */}
      {isAnalyzing && (
        <div className="mt-8 flex flex-col items-center space-y-3 animate-pulse">
          <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-blue-400 text-sm font-mono tracking-tighter">Cross-referencing CDC & Medicare Data...</p>
        </div>
      )}

      {result && !isAnalyzing && (
        <div className="mt-8 p-6 bg-gray-800 rounded-2xl border border-blue-900/50 animate-in fade-in zoom-in duration-500">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">Avg Longevity</p>
              <p className="text-3xl font-black text-white">{result.longevity} Yrs</p>
            </div>
            <div>
              <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">Equity Score</p>
              <p className="text-3xl font-black text-blue-400">{result.equityScore}/10</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-700 text-center">
            <span className="px-3 py-1 bg-red-900/30 text-red-400 text-[10px] rounded-full font-bold uppercase tracking-tighter">
              {result.status} Detected
            </span>
          </div>
        </div>
      )}
    </div>
  );
}