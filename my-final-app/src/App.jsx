import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// These are simple "Page" components for now
const Home = () => <div className="p-10 text-center"><h2 className="text-3xl font-bold">Welcome to our Group Project! 🏠</h2></div>;
const Team = () => <div className="p-10 text-center"><h2 className="text-3xl font-bold">Meet the Team 👥</h2></div>;

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        
        {/* Requirement: Navbar */}
        <nav className="bg-blue-600 p-4 text-white flex justify-between items-center shadow-md">
          <h1 className="font-bold text-xl">Unit 5.1 App</h1>
          <div className="space-x-6">
            <Link to="/" className="hover:text-blue-200">Home</Link>
            <Link to="/team" className="hover:text-blue-200">Team</Link>
          </div>
        </nav>

        {/* Content Area */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;