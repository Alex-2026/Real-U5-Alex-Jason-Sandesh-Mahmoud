import Header from "../components/Header";
import PaymentHistory from "../components/PaymentHistory";
import ActionButton from "../components/ActionButton";

export default function Profile() {
  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      <Header title="Account" />

      {/* Static Email Section */}
      <div className="p-4 border rounded-lg mx-4 bg-white shadow-sm mb-4">
        <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Email</p>
        <p className="text-gray-800 font-medium">sandesh@student.edu</p>
      </div>

      {/* Component using Props */}
      <PaymentHistory 
        title="Payment / Parking history" 
        details="# of parking recently, total cost, areas, etc..." 
      />

      {/* Interactive Buttons using Props */}
      <div className="px-4 mt-8">
        <ActionButton label="Log out" />
        <ActionButton label="Delete acct." variant="danger" />
      </div>
    </div>
  );
}