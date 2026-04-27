import { useState } from "react";

export default function Card({ name, title, description, github, skills }) {
  // STEP 1: Initialize State
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-blue-600 text-sm font-semibold">{title}</p>
      <p className="text-gray-500 mt-2 text-sm">{description}</p>

      {/* STEP 2: Toggle Button */}
      <button 
        onClick={() => setShowDetails(!showDetails)}
        className="mt-4 text-xs font-bold text-blue-500 hover:underline"
      >
        {showDetails ? "SHOW LESS" : "SHOW MORE"}
      </button>

      {/* STEP 3: Content that appears/disappears */}
      {showDetails && (
        <div className="mt-4 p-4 bg-gray-50 rounded-xl text-left">
          <p className="text-xs"><strong>Skills:</strong> {skills}</p>
          <a href={github} className="text-xs text-blue-400 block mt-2">View GitHub →</a>
        </div>
      )}
    </div>
  );
}