import React from 'react';

//  Placeholder since Jason hasn't finished ZipSim.jsx yet
const ZipSimPlaceholder = () => (
  <div className="p-8 bg-gray-100 border-2 border-dashed border-gray-300 rounded-2xl text-center">
    <p className="text-gray-500 font-medium italic">
      [ Interactive Zip Code Analyzer (ZipSim.jsx) - Under Development by Jason ]
    </p>
  </div>
);

export default function Methodology() {
  return (
    <div className="max-w-4xl mx-auto py-12 space-y-12">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-black text-gray-900 tracking-tight">
          Research Methodology
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our analysis combines national spending data with local social determinants 
          to measure the "Health-Equity Gap."
        </p>
      </section>

    
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800">Measuring Disparity</h2>
          <p className="text-gray-700 leading-relaxed">
            We utilize the <b>20-year longevity gap</b> as our primary metric for 
            success. By comparing the $3.8T national spend against the specific 
            outcomes in marginalized zip codes, we can identify exactly where 
            funding fails to address root causes.
          </p>
          <ul className="list-disc ml-5 space-y-2 text-gray-600">
            <li>Cross-referencing CDC life expectancy data.</li>
            <li>Analyzing regional variation in Medicare expenditures ($5.6k vs $14k).</li>
            <li>Mapping the impact of the 2025 government shutdown on local health.</li>
          </ul>
        </div>

    {/* Component area not done yet tho */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 italic">Data Simulation</h2>
          <p className="text-sm text-gray-500 mb-4">
            Use the tool below to see how regional funding disparities affect 
            predicted longevity in real-time.
          </p>
          <ZipSimPlaceholder />
        </div>
      </div>

      {/* The Core Logic Section */}
      <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl">
        <h3 className="text-xl font-bold mb-4">Why Zip Codes?</h3>
        <p className="text-gray-600">
          Our methodology treats <b>Social Determinants of Health (SDOH)</b> as the 
          independent variable. Because government policy often ignores these 
          root causes, our model prioritizes environmental data (housing, education, 
          and pollution) over individual genetic markers to explain the 
          longevity divide.
        </p>
      </section>

      <footer className="text-center text-xs text-gray-400 pt-8">
        Built by the Real-U5 Collaborative Development Team
      </footer>
    </div>
  );
}