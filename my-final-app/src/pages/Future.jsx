import React from 'react';

export default function Future() {
  return (
    <div className="max-w-4xl mx-auto py-10 space-y-16">

      <section className="text-center">
        <h1 className="text-4xl font-black text-gray-900 mb-4 italic">
          2036: The Road to Equity
        </h1>
        <div className="h-1 w-24 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 leading-relaxed">
          The next decade of public health depends on shifting the U.S. from the 
          "last of high-income countries" to a leader in avoidable health disparities.
        </p>
      </section>

 
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Ending the "Symptom" Cycle</h3>
          <p className="text-gray-600 text-sm">
            By 2030, our goal is for public health organizations to move beyond managing 
            outbreaks like COVID-19 toward <b>structural interventions</b>. This means 
            reversing the life expectancy gap that currently sits at a 20-year disparity.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Independent Resilience</h3>
          <p className="text-gray-600 text-sm">
            The future of health cannot be vulnerable to "extreme political polarization." 
            We project a rise in <b>nonpartisan funding models</b> that uphold project 
            integrity regardless of the political climate.
          </p>
        </div>
      </div>

      <section className="bg-gray-50 p-10 rounded-3xl border border-gray-200">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold italic">Future Policy Frameworks</h2>
          <p className="text-gray-500 text-sm">Select a focus area to see the 10-year strategy.</p>
        </div>
      
        <div className="text-center text-red-400 italic">
          (PolicySelector interactive coming soon!)
        </div>
      </section>

     
      <div className="bg-blue-600 rounded-2xl p-8 text-center text-white shadow-xl">
        <h3 className="text-2xl font-bold mb-2 text-white">The 2036 Roadmap</h3>
        <p className="mb-6 opacity-90 text-sm">Our project prioritizes lasting changes to how healthcare access is sustained.</p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition">
          Join the Movement
        </button>
      </div>
    </div>
  );
}s