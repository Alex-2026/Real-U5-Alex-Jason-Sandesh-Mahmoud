
export default function Economics() {
  const stats = [
    { label: "Annual U.S. Spending", value: "$3.8 Trillion", color: "text-red-600" },
    { label: "Spending Per Person", value: "~$12,000", color: "text-blue-600" },
    { label: "GDP Percentage", value: "18%", color: "text-gray-900" },
  ];

  return (
    <div className="max-w-4xl mx-auto py-10 space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-black text-gray-900 mb-4">The Economics of <span className="text-blue-600">Inequality</span></h1>
        <p className="text-gray-600 text-lg">
          The United States spends more on healthcare than any other high-income nation, yet often sees poorer health outcomes.
        </p>
      </header>

      {/* Financial Stats Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="p-6 bg-white border border-gray-200 rounded-2xl text-center shadow-sm">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">{stat.label}</p>
            <p className={`text-3xl font-black ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Main Research Content */}
      <section className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Where does the money go?</h2>
        <div className="space-y-4 text-blue-800 leading-relaxed">
          <p>
            Our research shows that a significant portion of this <b>$3.8 trillion</b> is spent on treating chronic diseases that could have been prevented with earlier intervention and better community health equity.
          </p>
          <p>
            By redirecting even a small percentage of this spending toward social determinants of health—like housing, nutrition, and clean environments—we can close the longevity gap while actually reducing total costs.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center pt-6">
        <div className="inline-block p-4 bg-gray-900 text-white rounded-xl font-medium">
          "Spending more does not always equal living longer."
        </div>
      </div>
    </div>
  );
}