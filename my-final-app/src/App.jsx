import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// These lines tell App.jsx to look in your new folder for the content
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation Bar */}
        <nav className="bg-blue-600 p-4 text-white shadow-md">
          <div className="max-w-6xl mx-auto flex space-x-6">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/profile" className="hover:underline">Profile</Link>
          </div>
        </nav>

        {/* Page Content Area */}
        <main className="max-w-6xl mx-auto p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;