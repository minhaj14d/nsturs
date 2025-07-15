import TeamMemberCard from "@/components/team/TeamMemberCard";
import { executiveCommittee, communityStats } from '@/data/team';

const TeamPage = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Meet Our Team
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            The driving force behind our initiatives and research culture.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Executive Committee (2023-24)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {executiveCommittee.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Community</h2>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
                {communityStats.map((stat, i) => (
                  <div className="text-center" key={i}>
                    <p className="text-4xl font-bold text-brand-primary">{stat.value}</p>
                    <p className="text-lg text-gray-600">{stat.label}</p>
                  </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage; 