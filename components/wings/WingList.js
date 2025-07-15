import WingCard from './WingCard';

export default function WingList({ wings }) {
  if (!wings || wings.length === 0) {
    return <div className="text-center text-gray-500">No wings found.</div>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {wings.map((wing) => (
        <WingCard key={wing.id} wing={wing} />
      ))}
    </div>
  );
} 