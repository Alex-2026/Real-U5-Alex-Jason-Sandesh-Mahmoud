import Card from "../Card"; 

function About() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">About Page</h1>
      
      {/* Placed Card and passes Props */}
      <Card 
        name="Alex"
        title="Project Lead" 
        description="Apple Music Defender" 
        github="https://github.com/alex-2026"
        skills="React, Tailwind, JavaScript"
      />
    </div>
  );
}

export default About;