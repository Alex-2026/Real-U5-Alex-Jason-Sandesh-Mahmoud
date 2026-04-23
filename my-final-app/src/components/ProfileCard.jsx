export default function ProfileCard({ name, role, bio, image }) {
  return (
    <div className="border-2 border-gray-200 rounded-xl p-4 m-2 shadow-sm bg-white flex flex-col items-center text-center">
      <img src={image} alt={name} className="w-24 h-24 rounded-full border mb-4 object-cover" />
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-blue-600 font-semibold text-sm">{role}</p>
      <p className="text-gray-500 mt-2 text-sm italic">{bio}</p>
    </div>
  );
}