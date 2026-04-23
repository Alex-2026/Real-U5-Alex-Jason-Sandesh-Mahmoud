export default function PaymentHistory({ title, details }) {
  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm my-4 mx-4">
      <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
        {title}
      </h2>
      <p className="text-gray-700 mt-2 font-medium">
        {details}
      </p>
      <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between text-xs text-blue-600 font-semibold">
        <span>View Receipt</span>
        <span>April 2026</span>
      </div>
    </div>
  );
}