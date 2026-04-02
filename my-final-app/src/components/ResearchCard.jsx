function ResearchCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-200">
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}

export default ResearchCard;
