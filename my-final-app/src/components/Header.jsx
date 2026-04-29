import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 p-4 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-tighter">HEALTH-EQUITY</h1>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-2xl focus:outline-none"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <nav className="mt-4 flex flex-col gap-4 border-t border-blue-500 pt-4 animate-fadeIn">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-blue-200"> Home </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-blue-200"> Team </Link>
          <Link to="/profile" onClick={() => setIsOpen(false)} className="hover:text-blue-200"> Profile </Link>
          <Link 
            to="/community-health-needs" 
            onClick={() => setIsOpen(false)} 
            className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold text-center hover:bg-blue-100 transition-colors"
          >
            Community Health Needs
          </Link>
          
          {/* Action Steps Button */}
          <div className="my-2 border-t border-blue-200"></div>
          <Link 
            to="/action" 
            onClick={() => setIsOpen(false)} 
            className="bg-white text-green-600 px-4 py-2 rounded-md font-semibold text-center hover:bg-green-100 transition-colors"
          >
            Action Steps
          </Link>

 <div className="my-2 border-t border-blue-200"></div>
          <Link 
            to="/FAQAccordion" 
            onClick={() => setIsOpen(false)} 
            className="bg-white text-red-600 px-4 py-2 rounded-md font-semibold text-center hover:bg-green-100 transition-colors"
          >
           FAQ Accordion
          </Link>

          {/* Future Outlook Button */}
          <div className="my-2 border-t border-blue-200"></div>
          <Link 
            to="/future" 
            onClick={() => setIsOpen(false)}
            className="bg-white text-purple-600 px-4 py-2 rounded-md font-semibold text-center hover:bg-purple-100 transition-colors"
          >
            10-Year Future Outlook
          </Link>
        </nav>
        
      )}
    </header>
  );
}