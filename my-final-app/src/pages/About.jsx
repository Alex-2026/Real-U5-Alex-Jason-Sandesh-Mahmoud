import ProfileCard from "../components/ProfileCard";
import ResearchCard from "../components/ResearchCard";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-black text-center mb-12 text-gray-900 uppercase">Development Team</h1>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <ProfileCard 
            name="Alex" role="Project Manager" 
            bio="Project management and Github management."
            image="IMG_7664 2.JPEG" 
          />
          <ProfileCard 
            name="Sandesh" role="Code Manager" 
            bio="UI components and Profile logic."
            image="IMG_2221.JPEG" 
          />
          <ProfileCard 
            name="Jason" role="Full Stack" 
            bio="Data integration and research features."
            image="4977C606-F87E-46B7-8BD5-CDAE7603480A.JPG" 
          />
          <ProfileCard 
            name="Mahmoud" role="UI/UX" 
            bio="User experience and styling consistency."
            image="A2EB2408-EECF-409C-AD1A-FA387BFD1F1E.JPG" 
          />
        </div>

        <h2 className="text-2xl font-bold mb-6 border-b-2 border-blue-600 inline-block">Core Research</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ResearchCard 
            title="The 20-Year Gap" icon="⚖️"
            description="Analyzing longevity disparities across income levels."
          />
          <ResearchCard 
            title="$3.8T Spending" icon="💰"
            description="Evaluating the relationship between cost and outcomes."
          />
        </div>
      </div>
    </div>
  );
}