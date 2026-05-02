import React from 'react';
import SpendingToggle from '../components/SpendingToggle';

function Home() {
  return (
    <div className="space-y-8 text-center">
      <header className="py-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to <span className="text-blue-600">Health-Equity</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Exploring the $3.8 trillion gap between U.S. healthcare spending and community health outcomes.
        </p>
      </header>

      {/* This section uses the component Alex assigned to this page */}
      <section className="max-w-md mx-auto">
        <SpendingToggle />
      </section>

      <footer className="pt-10 text-sm text-gray-400">
        &copy; 2026 Health-Equity Research Team
      </footer>
    </div>
  );
}

export default Home;