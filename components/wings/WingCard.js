const WingCard = ({ wing }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
      <h3 className="text-2xl font-bold text-brand-primary mb-3">{wing.name}</h3>
      <div className="space-y-3 text-gray-700">
        <div>
          <p className="font-semibold">Coordinator:</p>
          <p>{wing.coordinator}</p>
        </div>
        <div>
          <p className="font-semibold">Co-Coordinator:</p>
          <p>{wing.coCoordinator}</p>
        </div>
      </div>
    </div>
  );
};

export default WingCard; 