import TeamMemberCard from "@/components/team/TeamMemberCard";

const TeamPage = () => {
  const executiveCommittee = [
    // Top Positions
    { id: 1, name: 'Minhajul Abedin', role: 'President', session: '2023-24' },
    { id: 2, name: 'Mohsena Momtaj', role: 'Vice President (Admin)', session: '2023-24' },
    { id: 3, name: 'Najmun Nahar Lima', role: 'Vice President (Research)', session: '2023-24' },
    { id: 4, name: 'Abdullah Al Mamun', role: 'General Secretary', session: '2023-24' },
    { id: 5, name: 'Md. Ariful Islam Arafat Bhuiyan', role: 'Joint General Secretary (Admin)', session: '2023-24' },
    { id: 6, name: 'Tanha Jannat Ikra', role: 'Joint General Secretary (Research)', session: '2023-24' },
  
    // Secretarial Positions
    { id: 7, name: 'Abdullah Al Towhid', role: 'Organizing Secretary', session: '2023-24' },
    { id: 8, name: 'Sanjida Akter', role: 'Office and Documentation Secretary', session: '2023-24' },
    { id: 9, name: 'Saiful Islam', role: 'Public Relations Secretary', session: '2023-24' },
    { id: 10, name: 'Nahid Hossain Nobin', role: 'Research Affairs Secretary', session: '2023-24' },
    { id: 11, name: 'Faieka Fatin', role: 'Treasurer', session: '2023-24' },
    { id: 12, name: 'Nabila Sultana', role: 'International Affairs Secretary', session: '2023-24' },
    { id: 13, name: 'Sanjida Akter Ikra', role: 'Publicity and Publication Secretary', session: '2023-24' },
    { id: 14, name: 'Afia Abida Asha', role: 'Technology and Communication Secretary', session: '2023-24' },
  
    // Executive Members
    { id: 15, name: 'Pushpita Barua', role: 'Executive Member', session: '2023-24' },
    { id: 16, name: 'Shamsul Alom Rohan', role: 'Executive Member', session: '2023-24' },
    { id: 17, name: 'Abdus Samad', role: 'Executive Member', session: '2023-24' },
    { id: 18, name: 'Mohammad Mehedi Hasan', role: 'Executive Member', session: '2023-24' },
    { id: 19, name: 'Arnab Das', role: 'Executive Member', session: '2023-24' },
    { id: 20, name: 'Anik Das', role: 'Executive Member', session: '2023-24' },
    { id: 21, name: 'Tajbeul Hasan', role: 'Executive Member', session: '2023-24' }
  ];
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
                <div className="text-center">
                    <p className="text-4xl font-bold text-brand-primary">300+</p>
                    <p className="text-lg text-gray-600">General Members</p>
                </div>
                <div className="text-center">
                    <p className="text-4xl font-bold text-brand-primary">33</p>
                    <p className="text-lg text-gray-600">Departments</p>
                </div>
                <div className="text-center">
                    <p className="text-4xl font-bold text-brand-primary">4</p>
                    <p className="text-lg text-gray-600">Faculties</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage; 