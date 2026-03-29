import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./Header"; 

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        
        <Header />

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