function PolicyFAQ({ question, answer }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-200">
      <h3 className="font-bold text-lg text-gray-800">{question}</h3>
      <p className="text-gray-600 mt-3">{answer}</p>
    </div>
  );
}

export default PolicyFAQ;
