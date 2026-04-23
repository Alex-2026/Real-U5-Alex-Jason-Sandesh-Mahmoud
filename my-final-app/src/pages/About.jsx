import ProfileCard from "../components/ProfileCard";

export default function About() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Development Team</h1>
      
      {/* Grid layout: 1 column on mobile, 2 columns on tablet/desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProfileCard 
          name="Sandesh" 
          role="Frontend Developer" 
          bio="Specializing in UI components and user profile logic."
          image="https://via.placeholder.com/150" 
        />
        <ProfileCard 
          name="Alex" 
          role="Team Lead" 
          bio="Overseeing project architecture and repository management."
          image="https://via.placeholder.com/150" 
        />
        <ProfileCard 
          name="Jason" 
          role="Full Stack Developer" 
          bio="Working on data integration and core app features."
          image="https://via.placeholder.com/150" 
        />
        <ProfileCard 
          name="Mahmoud" 
          role="UI/UX Developer" 
          bio="Ensuring a smooth user experience and styling consistency."
          image="https://via.placeholder.com/150" 
        />
      </div>
    </div>
  );
}