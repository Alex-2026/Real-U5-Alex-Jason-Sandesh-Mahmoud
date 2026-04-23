export default function Header({ title }) {
  return (
    <div className="p-4 border-b bg-white mb-4">
      <h1 className="text-2xl font-black text-gray-900">{title}</h1>
      <div className="flex gap-4 mt-2">
        <span className="text-blue-600 font-bold border-b-2 border-blue-600 pb-1 text-sm">Private</span>
        <span className="text-gray-400 font-medium text-sm">Business</span>
      </div>
    </div>
  );
}