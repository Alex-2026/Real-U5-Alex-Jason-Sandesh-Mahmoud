import ProfileCard from "../components/ProfileCard";
import PaymentHistory from "../components/PaymentHistory";
import ActionButton from "../components/ActionButton";

export default function Profile() {
  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      {/* 1. Header (Make sure this matches your Parking App theme) */}
      <div className="p-6 text-center">
        <h1 className="text-3xl font-black text-blue-600 uppercase tracking-tighter">
          User Dashboard
        </h1>
      </div>

      <div className="max-w-md mx-auto space-y-6">
        {/* 2. Use the ProfileCard from your planner [cite: 13, 17] */}
        <ProfileCard 
          name="Alexandro" 
          role="12th Grade Student" 
          bio="Daily commuter. Priority: Lot A access."
          image="https://via.placeholder.com/150" // Replace with your actual photo
        />

        {/* 3. Static Email Section from your plan  */}
        <div className="p-4 border rounded-lg mx-4 bg-white shadow-sm">
          <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Contact Info</p>
          <p className="text-gray-800 font-medium">calmopabloalex@gmail.com</p>
        </div>

        {/* 4. Parking History (Feature #1 from your planner) [cite: 13] */}
        <PaymentHistory 
          title="Parking History" 
          details="3 active sessions this week in Lot B" 
        />

        {/* 5. Account Actions */}
        <div className="px-4 space-y-2">
          <ActionButton label="Edit Profile" />
          <ActionButton label="Log out" variant="danger" />
        </div>
      </div>
    </div>
  );
}