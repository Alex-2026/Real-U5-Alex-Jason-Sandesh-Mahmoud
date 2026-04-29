import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; // Your burger menu component
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Help from "./pages/Help";
import CommunityHealthNeeds from "./pages/CommunityHealthNeeds"; 
import Action from "./pages/Action"; 
import Future from "./pages/Future";
import FAQAccordion from "./pages/FAQAccordion"; // Your FAQ accordion component
function App() {
  return (
    <BrowserRouter>
      {/* The div below ensures the app takes up the full screen height */}
      <div className="min-h-screen bg-gray-50 flex flex-col">
        
        {/* The Header is OUTSIDE the Routes so it stays at the top of every page */}
        <Header />

        {/* This main area holds your page content */}
        <main className="max-w-6xl mx-auto p-8 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/help" element={<Help />} />
            <Route path="/community-health-needs" element={<CommunityHealthNeeds />} />
            <Route path="/action" element={<Action />} />
            <Route path="/future" element={<Future />} />
            <Route path="/FAQAccordion" element={<FAQAccordion />} />
          </Routes>
        </main>

        {/* Optional Footer for extra rubric points */}
        <footer className="p-6 text-center text-gray-400 text-xs border-t bg-white">
          &copy; 2026 Health-Equity Capstone Project
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;