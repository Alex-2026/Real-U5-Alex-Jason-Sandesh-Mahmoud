import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Help from "./pages/Help";
import CommunityHealthNeeds from "./pages/CommunityHealthNeeds"; 
import Action from "./pages/Action"; 
import Future from "./pages/Future";
import FAQAccordion from "./pages/FAQAccordion";
import Methodology from "./pages/Methodology"; 
function App() {
  return (
    <BrowserRouter>

      <div className="min-h-screen bg-gray-50 flex flex-col">
        
      
        <Header />

      
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
            <Route path="/Methodology" element={<Methodology />} />
          </Routes>
        </main>

        <footer className="p-6 text-center text-gray-400 text-xs border-t bg-white">
          &copy; 2026 Health-Equity Capstone Project
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;