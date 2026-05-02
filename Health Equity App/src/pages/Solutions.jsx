import React from 'react';

export default function Solutions() {
  const strategies = [
    {
      title: "Nonpartisan Funding Models",
      description: "Moving away from 'block grants' to dynamic funding based on real-time Zip Code health data.",
      impact: "Directs money to where it is needed most, regardless of political shifts."
    },
    {
      title: "Preventative Infrastructure",
      description: "Investing in community centers, grocery cooperatives, and green spaces.",
      impact: "Reduces chronic disease rates by addressing environmental sectors."
    },
    {
      title: "Telehealth Expansion",
      description: "Subsidizing high-speed internet and hardware for low-income individuals.",
      impact: "Bridges the gap for residents who lack transportation and technology access to major hospitals."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 px-6 space-y-16">
      {/* Header Section */}
      <header className="text-center">
        <h1 className="text-4xl font-black text-gray-900 mb-4">
          Proposed <span className="text-blue-600">Solutions</span>
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          Fixing the $3.8 trillion disparity requires more than just medical spending; it requires a structural shift in how we fund community health.
        </p>
      </header>

      {/* Strategy Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {strategies.map((item, index) => (
          <div key={index} className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">
              0{index + 1}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.description}</p>
            <div className="pt-4 border-t border-gray-50">
              <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">Expected Impact</span>
              <p className="text-sm text-gray-500 mt-1 italic">{item.impact}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Section */}
      <section className="bg-gray-900 text-white rounded-3xl p-10">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">The Trust for America’s Health (TFAH) Model</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Our solutions are modeled after TFAH research, which suggests that for every $1 invested in proven community-based prevention programs, a nation saves nearly $5 in healthcare costs within five years.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-colors">
            Read the Full Proposal
          </button>
        </div>
      </section>

      <footer className="text-center text-gray-400 text-xs">
        &copy; 2026 Health-Equity Research & Policy Team
      </footer>
    </div>
  );
}