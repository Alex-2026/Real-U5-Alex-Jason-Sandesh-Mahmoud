function HealthStat({ number, label, description }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-200">
      <div className="text-4xl font-black text-blue-600">{number}</div>
      <div className="text-lg font-semibold text-gray-700 mt-2">{label}</div>
      <p className="text-gray-500 mt-2">{description}</p>
    </div>
  );
}

export default HealthStat;
