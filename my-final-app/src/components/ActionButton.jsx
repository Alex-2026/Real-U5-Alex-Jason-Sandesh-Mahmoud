export default function ActionButton({ label, variant }) {
  const style = variant === "danger" 
    ? "text-red-500 border-red-500 bg-red-50 hover:bg-red-100" 
    : "text-gray-700 border-gray-400 bg-white hover:bg-gray-50";
  
  return (
    <button className={`w-full p-3 my-2 border rounded-md font-medium shadow-sm transition-all ${style}`}>
      {label}
    </button>
  );
}