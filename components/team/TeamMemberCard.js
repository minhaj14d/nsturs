import Image from 'next/image';

const TeamMemberCard = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
      <div className="w-32 h-32 rounded-full mx-auto mb-4 relative overflow-hidden">
        <Image
          src={member.imageUrl}
          alt={`Photo of ${member.name}`}
          layout="fill"
          objectFit="cover"
          className="bg-gray-200"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
      <p className="text-blue-800 font-semibold">{member.role}</p>
      <p className="text-gray-600 text-sm">Session: {member.session}</p>
    </div>
  );
};

export default TeamMemberCard; 