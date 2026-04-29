import React, { useState } from 'react';
import SupportEndorsement from '../components/SupportEndorsement';


const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-6 px-4 flex justify-between items-center hover:bg-blue-50 transition-all group"
      >
        <span className={`text-xl font-bold transition-colors ${isOpen ? 'text-blue-600' : 'text-gray-900'}`}>
          {question}
        </span>
        <span className={`text-3xl font-light transition-transform duration-300 ${isOpen ? 'rotate-45 text-red-500' : 'text-blue-500'}`}>
          {isOpen ? '×' : '+'}
        </span>
      </button>

      {isOpen && (
        <div className="p-6 bg-gray-50 rounded-xl mb-4 mx-4 space-y-4 animate-in fade-in slide-in-from-top-2">
          <p className="text-gray-700 text-lg leading-relaxed italic">
            "{answer}"
          </p>
          <div className="pt-4 border-t border-gray-200">
            <SupportEndorsement />
          </div>
        </div>
      )}
    </div>
  );
};

// Questions part... expand if needed
export default function FAQAccordion() {
  const healthData = [
    {
      question: "The $3.8 Trillion Question",
      answer: "While the U.S. spends $3.8 trillion annually, it consistently ranks last among high-income countries in health equity due to extreme polarization and poor uniformity in financing."
    },
    {
      question: "The 20-Year Longevity Gap",
      answer: "Research shows that the life expectancy gap between the rich and poor can be as much as 20 years. This is a direct result of underfunding that has weakened public health infrastructure."
    },
    {
      question: "Zip Code vs. Genetic Code",
      answer: "Social Determinants of Health (SDOH)—the conditions where people live, work, and learn—are mostly responsible for health inequities, rather than individual choices."
    },
    {
      question: "Why the Nonpartisan Model?",
      answer: "A nonpartisan model prevents reliance on government funding, making health projects resilient against political polarization and government shutdowns like the one in 2025."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-black text-gray-900 mb-4 tracking-tighter">
          Policy & <span className="text-blue-600">Equity</span> FAQ
        </h1>
        <p className="text-gray-500 text-lg">
          Insights derived from the Health-Equity Research Paper.
        </p>
      </header>

      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        {healthData.map((item, index) => (
          <AccordionItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>

      <footer className="mt-12 text-center text-sm text-gray-400">
        Data verified via Trust for America’s Health (TFAH) standards.
      </footer>
    </div>
  );
}