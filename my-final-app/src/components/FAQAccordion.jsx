import { useState } from 'react';

export default function FAQAccordion({ question, answer }) {
  // This state tracks if the answer is visible or hidden
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-lg m-2 bg-white overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full p-4 text-left font-bold flex justify-between bg-gray-50"
      >
        {question}
        <span>{isOpen ? '−' : '+'}</span>
      </button>
      
      {isOpen && (
        <div className="p-4 border-t border-gray-200 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
}