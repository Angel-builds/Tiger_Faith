import Navbar from "@/components/nav/NavBar";
import Footer from "@/components/sections/Footer";
import LeadershipCard from "@/components/ui/LeadershipCard";
import { leadershipTeam } from "@/lib/data/leadership";

export default function LeadershipPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen py-16 px-6 md:px-8 bg-gradient-to-b from-white to-amber-50/30">
        <div className="mx-auto max-w-7xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-amber-500 font-bold text-sm uppercase tracking-wider border-2 border-amber-500 px-4 py-2 rounded-full">
                Our Team
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-black">
              Meet Our Leadership
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Dedicated leaders committed to empowering the next generation through faith, 
              community, and purpose-driven growth on campus.
            </p>
          </div>

          {/* Leadership Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((member) => (
              <LeadershipCard
                key={member.name}
                name={member.name}
                position={member.position}
                image={member.image}
                bio={member.bio}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}