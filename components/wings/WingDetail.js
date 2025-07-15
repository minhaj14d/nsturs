export default function WingDetail({ wing }) {
  if (!wing) return <div className="text-center text-gray-500">Wing not found.</div>;
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-brand-primary mb-4">{wing.name}</h1>
      <div className="text-lg text-gray-700 mb-2">
        <p><span className="font-semibold">Coordinator:</span> {wing.coordinator}</p>
        <p><span className="font-semibold">Assistant Coordinator:</span> {wing.coCoordinator}</p>
      </div>
      {/* TODO: Add more details or description if available */}
    </div>
  );
} 