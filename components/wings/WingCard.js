export default function WingCard({ wing }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full">
      <h2 className="text-2xl font-bold text-brand-primary mb-2">{wing.name}</h2>
      <div className="mt-2 text-gray-700 flex-1">
        <p><span className="font-semibold">Coordinator:</span> {wing.coordinator}</p>
        <p><span className="font-semibold">Assistant Coordinator:</span> {wing.coCoordinator}</p>
      </div>
    </div>
  );
} 