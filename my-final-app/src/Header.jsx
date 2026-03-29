import { useState } from "react";
import { Link } from "react-router-dom"; 

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>

        
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      
      {isOpen && (
        <nav className="mt-4">
          <ul className="flex flex-col gap-2">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;