import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// --- COMPONENTS ---

const Home = () => (
  <div className="p-8">
    <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to our Group Project! 🏠</h1>
    <p className="text-lg text-gray-600">
      This is our official landing page for Unit 5.1.
    </p>
  </div>
);

const Team = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-6">Meet the Team </h1>
    <div className="grid gap-4">
      {/* Requirement 2: Each member can edit their own card below */}
      <div className="p-4 border rounded shadow-sm bg-white">
        <h2 className="font-bold text-blue-600">Alex (Manager)</h2>
        <p>Role: Repo Setup & Routing</p>
      </div>
      
      <div className="p-4 border rounded shadow-sm bg-white">
        <h2 className="font-bold text-green-600">Jason</h2>
        <p>Role: [Jason, add your role here]</p>
      </div>

      <div className="p-4 border rounded shadow-sm bg-white">
        <h2 className="font-bold text-purple-600">Sandesh</h2>
        <p>Role: [Sandesh, add your role here]</p>
      </div>

      <div className="p-4 border rounded shadow-sm bg-white">
        <h2 className="font-bold text-orange-600">Mahmoud</h2>
        <p>Role: [Mahmoud, add your role here]</p>
      </div>
    </div>
  </div>
);

// --- MAIN APP ---

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation Bar */}
        <nav className="bg-blue-600 p-4 text-white shadow-md">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Unit 5.1 Project</h1>
            <div className="space-x-4">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/team" className="hover:underline">Team</Link>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className="max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;