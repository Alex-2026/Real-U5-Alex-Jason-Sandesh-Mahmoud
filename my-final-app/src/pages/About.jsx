import Card from "../components/Card";
import HealthStat from "../components/HealthStat";
import PolicyFAQ from "../components/PolicyFAQ";
import ResearchCard from "../components/ResearchCard";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
          Parking Insights & Solutions
        </h1>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <HealthStat
            number="$1.1B+"
            label="Annual CA Parking Ticket Cost"
            description="Estimated amount Californians spend yearly on parking tickets."
          />
          <HealthStat
            number="12–15 min"
            label="Median Search Time (Oakland/SF)"
            description="Average time people spend finding parking in busy Bay Area corridors."
          />
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Root Causes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ResearchCard
              icon="🚗"
              title="Demand Exceeds Supply"
              description="Cities struggle to allocate curb space effectively in high-traffic districts."
            />
            <ResearchCard
              icon="💸"
              title="Costly Citation Model"
              description="Heavy fines are a major burden for drivers and can disproportionately impact lower-income residents."
            />
            <ResearchCard
              icon="📡"
              title="Data Visibility Gap"
              description="Lack of real-time parking occupancy updates leads to unnecessary search driving."
            />
            <ResearchCard
              icon="✋"
              title="Outdated Policy"
              description="Regulations and enforcement mechanisms often fail to reflect modern mobility patterns."
            />
          </div>
        </div>

     
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Proposed Solutions</h2>
          <PolicyFAQ
            question="How can parking be made fairer and more efficient?"
            answer="Adaptive pricing, smart occupancy sensing, and more permit flexibility can cut search time and revenue losses."
          />
        </div>

        
        <div className="border-t pt-12 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card name="Mahmoud Ismael" title="Co-Creator" description="A 18 year old yemeni male who has a hateful passion for tickets due to the abundance in experience in parking struggles" />
            <Card name="Sandesh Aryal" title="Co-Creator" description="[placeholder]" />
            <Card name="Alexandro Calmo Pablo" title="Co-Creator" description="[placeholder]" />
            <Card name="Jason Bakhtu" title="Co-Creator" description="[placeholder]" />
          </div>
        </div>
      </div>
    </div>
  );
}
