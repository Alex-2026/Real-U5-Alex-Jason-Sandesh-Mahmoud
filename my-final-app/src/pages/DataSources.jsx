import React from 'react';

const SourceCard = ({ title, author, year, description, link }) => (
  <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-bold text-blue-900">{title}</h3>
      <span className="bg-blue-100 text-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase">
        {year}
      </span>
    </div>
    <p className="text-sm font-medium text-gray-500 mb-2">Author(s): {author}</p>
    <p className="text-gray-600 text-sm leading-relaxed mb-4">
      {description}
    </p>
    {link && (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-600 text-sm font-bold hover:underline inline-flex items-center"
      >
        View Full Study →
      </a>
    )}
  </div>
);

export default function DataSources() {
  const sources = [
    {
      title: "Trust for America’s Health (TFAH) Case Studies",
      author: "TFAH Research Team",
      year: "2024",
      description: "This study provided the foundation for our 20-year longevity gap metrics. It highlights how underfunded public health infrastructure leads to avoidable health disparities.",
      link: "https://www.tfah.org"
    },
    {
      title: "Regional Variation in Medicare Expenditures",
      author: "Alan M. Garber & Jonathan Skinner",
      year: "2008",
      description: "Our 'Equity Score' is powered by this research, which identified the $5,600 vs $14,000 regional spending gap (Salem vs. Miami). It proves that spending more doesn't always yield better outcomes.",
      link: "https://www.nber.org/papers/w14203"
    },
    {
      title: "Social Determinants of Health (SDOH) Data",
      author: "Centers for Disease Control (CDC)",
      year: "2023",
      description: "We used CDC metrics to determine which Zip Codes face higher risks due to environmental factors, housing stability, and education access.",
      link: "https://www.cdc.gov/about/sdoh"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-black text-gray-900 mb-4">
          Data & <span className="text-blue-600">Documentation</span>
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Our Zip Code Equity Analyzer and Spending Toggle use a simulation model 
          triangulated from the following peer-reviewed sources and databases.
        </p>
      </header>

      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
        {sources.map((source, index) => (
          <SourceCard key={index} {...source} />
        ))}
      </div>

      {/* Methodology Note */}
      <div className="mt-16 p-8 bg-blue-50 rounded-3xl border-2 border-blue-100">
        <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">How we used this data</h2>
        <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-700 leading-relaxed">
          <p>
            <b>Quantitative Analysis:</b> The $3.8 trillion annual spending figure is 
            referenced as a baseline for all national comparisons. Our software 
            calculates the "Outcome Gap" by dividing this national spend by 
            regional life expectancy averages.
          </p>
          <p>
            <b>Simulation Logic:</b> While our tool simulates data based on the 
            Zip Code you enter, the ranges (65-85 years) are strictly confined to 
            the statistical realities found in the TFAH and CDC reports.
          </p>
        </div>
      </div>

      <footer className="mt-12 text-center text-xs text-gray-400">
        This project is for academic purposes and utilizes public domain research data.
      </footer>
    </div>
  );
}