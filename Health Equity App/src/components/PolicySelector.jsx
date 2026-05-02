import { useState } from "react";

export default function PolicySelector() {
  const [activeTab, setActiveTab] = useState(1);

  const policies = [
    {
      id: 1,
      title: "Funding Models",
      content: "Redirecting a portion of the $3.8T national spend toward community-based prevention and nonpartisan funding for local clinics.",
      icon: "💰"
    },
    {
      id: 2,
      title: "Digital Literacy",
      content: "Increasing digital health literacy and broadband access in historically redlined areas to bridge the telehealth divide.",
      icon: "💻"
    },
    {
      id: 3,
      title: "Housing & Air",
      content: "Strict enforcement of housing safety codes and air quality monitoring to improve the social determinants of health in low-longevity Zip Codes.",
      icon: "🏠"
    }
  ];

  // Helper to get current active policy data
  const currentPolicy = policies.find((p) => p.id === activeTab);

  return (
    <div className="bg-white border-2 border-gray-100 rounded-3xl overflow-hidden shadow-xl max-w-2xl mx-auto">
      {/* Tab Navigation */}
      <div className="flex bg-gray-50 border-b border-gray-100">
        {policies.map((policy) => (
          <button
            key={policy.id}
            onClick={() => setActiveTab(policy.id)}
            className={`flex-1 p-4 text-xs md:text-sm font-black uppercase tracking-wider transition-all duration-300 ${
              activeTab === policy.id 
              ? "bg-white text-blue-600 border-b-4 border-blue-600" 
              : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"
            }`}
          >
            {policy.title}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="p-10 min-h-[220px] flex flex-col justify-center text-center items-center">
        {/* Animated Icon Container */}
        <div 
          key={currentPolicy.id} 
          className="text-5xl mb-6 transform transition-transform animate-bounce"
        >
          {currentPolicy.icon}
        </div>
        
        <p className="text-gray-700 leading-relaxed font-semibold text-lg max-w-md">
          {currentPolicy.content}
        </p>
      </div>
      
      {/* Footer / CTA */}
      <div className="px-8 pb-8 flex justify-between items-center border-t border-gray-50 pt-6">
        <span className="text-[10px] text-gray-400 font-bold uppercase">Policy Ref: 2026-HE-0{activeTab}</span>
        <button className="text-xs font-black uppercase tracking-widest text-blue-500 hover:text-blue-700 transition-colors flex items-center gap-2">
          View Policy Draft <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  );
}