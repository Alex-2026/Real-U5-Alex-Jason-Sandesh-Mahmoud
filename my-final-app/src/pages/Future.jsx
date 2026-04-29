import { useState } from "react";
import { Link } from "react-router-dom";

export default function Future() {
  const [activeTab, setActiveTab] = useState(1);

  const policies = [
    {
      id: 1,
      title: "Funding Models",
      content: "By 2030, our goal is to see 15% of the $3.8T national spend redirected toward community-based prevention and nonpartisan funding for local clinics.",
      icon: "💰"
    },
    {
      id: 2,
      title: "Digital Literacy",
      content: "Eliminating the 'Telehealth Divide' within 10 years by providing universal broadband and digital health training in historically redlined areas.",
      icon: "💻"
    },
    {
      id: 3,
      title: "Housing & Air",
      content: "Implementing AI-driven air quality monitoring and strict housing safety enforcement to close the 20-year longevity gap in urban centers.",
      icon: "🏠"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 space-y-12">
      {/* Vision Header */}
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-black text-gray-900">
          The <span className="text-purple-600">10-Year</span> Outlook
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Our vision for 2036 involves moving from a "Sick-Care" system to a "Health-Equity" system where your Zip Code no longer determines your lifespan.
        </p>
      </header>

      {/* Interactive Policy Selector */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Policy Transformation Roadmap</h2>
        <div className="bg-white border-2 border-gray-100 rounded-3xl overflow-hidden shadow-lg">
          {/* Tab Navigation */}
          <div className="flex bg-gray-50 border-b border-gray-100">
            {policies.map((policy) => (
              <button
                key={policy.id}
                onClick={() => setActiveTab(policy.id)}
                className={`flex-1 p-4 text-sm font-bold transition-all ${
                  activeTab === policy.id 
                  ? "bg-white text-purple-600 border-b-2 border-purple-600" 
                  : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {policy.title}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="p-8 min-h-[180px] flex flex-col justify-center animate-fadeIn">
            <div className="text-4xl mb-4">{policies.find(p => p.id === activeTab).icon}</div>
            <p className="text-gray-700 leading-relaxed font-medium text-lg">
              {policies.find(p => p.id === activeTab).content}
            </p>
          </div>
          
          <div className="px-8 pb-6 text-right">
            <button className="text-xs font-black uppercase tracking-widest text-purple-500 hover:text-purple-700 transition-colors">
              View 2036 Projections →
            </button>
          </div>
        </div>
      </section>

      {/* Future Milestones */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100">
          <h3 className="font-bold text-purple-900 mb-2">Target: Longevity Equality</h3>
          <p className="text-sm text-purple-800">Reduction of the 20-year neighborhood life expectancy gap by 50% through targeted social determinant investments.</p>
        </div>
        <div className="p-6 bg-gray-900 rounded-2xl border border-gray-800">
          <h3 className="font-bold text-white mb-2">Target: Economic Efficiency</h3>
          <p className="text-sm text-gray-400">Lowering the national GDP healthcare burden from 18% to 14% by eliminating avoidable chronic disease costs.</p>
        </div>
      </div>
    </div>
  );
}