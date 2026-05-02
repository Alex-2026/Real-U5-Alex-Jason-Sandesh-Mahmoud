import ProfileCard from "../components/ProfileCard";
import ActionButton from "../components/ActionButton";

export default function Profile() {
  return (
    <div className="bg-gray-50 min-h-screen pb-10">
     
      <div className="p-6 text-center">
        <h1 className="text-3xl font-black text-blue-600 uppercase tracking-tighter">
          User Dashboard
        </h1>
      </div>

      <div className="max-w-md mx-auto space-y-6">
      
        <ProfileCard 
          name="USERNAME" 
          role="Socially Conscious individual" 
          bio="Put in Username and other info"
          image="annony img.jpeg" //replace with photos soon gang
        />


        <div className="p-4 border rounded-lg mx-4 bg-white shadow-sm">
          <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Contact Info</p>
          <p className="text-gray-800 font-medium">annonymouspeoples@gmail.com</p>
        </div>

      
        <div className="px-4 space-y-2">
          <ActionButton label="Edit Profile" />
          <ActionButton label="Log out" variant="danger" />
        </div>
      </div>
    </div>
  );
}