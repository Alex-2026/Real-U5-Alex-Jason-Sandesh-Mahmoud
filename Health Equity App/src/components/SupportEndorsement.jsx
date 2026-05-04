import React, { useState } from 'react';
import SupportEndorsement from './SupportEndorsement';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-2 border-blue-100 rounded-xl mb-4 bg-white overflow-hidden shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-5 flex justify-between items-center bg-white hover:bg-blue-50 transition-colors"
      >
        <span className="text-xl font-bold text-gray-900">{question}</span>
        <span className="text-2xl font-mono text-blue-600">
          {isOpen ? '−' : '+'}
        </span>
      </button>

      {isOpen && (
        <div className="p-6 bg-blue-50 border-t-2 border-blue-100">
          <p className="text-gray-800 text-lg leading-relaxed mb-6">
            {answer}
          </p>
          <div className="bg-white p-4 rounded-xl shadow-inner border border-blue-200">
            <SupportEndorsement />
          </div>
        </div>
      )}
    </div>
  );
};

export default function FAQAccordion() {
  const healthEquityData = [
    {
      question: "Why is there a 20-year longevity gap?",
      answer: "As noted our research, this gap is a direct result of underfunding that has weakened public health infrastructure. Social Determinants of Health (SDOH) are the primary drivers of these disparities."
    },
    {
      question: "How does political polarization affect healthcare?",
      answer: "Extreme polarization leads to government shutdowns, like the one in October 2025. This prevents key congressional action for Americans who rely on Affordable Care Act health premiums."
    },
    {
      question: "What is the mission of Trust for America’s Health (TFAH)?",
      answer: "TFAH focuses on large-scale health inequalities and funding shortages. Their existence proves that current government policy does not prioritize stable infrastructure or the removal of financial obstacles."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-black text-center text-gray-900 mb-10 underline decoration-blue-500">
        Policy & Research FAQ
      </h1>
      
      <div className="space-y-2">
        {healthEquityData.map((item, index) => (
          <FAQItem 
            key={index} 
            question={item.question} 
            answer={item.answer} 
          />
        ))}
      </div>
    </div>
  );
}