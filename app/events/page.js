const EventsPage = () => {
  const activities = [
    "Research methodology workshops",
    "Poster presentations and seminars",
    "Departmental and interdepartmental research meetups",
    "National and international research competitions",
    "Higher studies application guidance",
    "Collaborative publications and journals (planned)",
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Events & Activities
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Engaging our community through a variety of research-focused events.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md p-6">
                <h3 className="font-bold text-xl text-brand-secondary mb-2">{activity}</h3>
              </div>
            ))}
          </div>
        </div>
         <div className="text-center mt-16">
            <p className="text-lg text-gray-600">
                This page will list both upcoming and past events. Each event will have a dedicated page with more details, including a poster, description, and registration link if applicable.
            </p>
        </div>
      </div>
    </div>
  );
};

export default EventsPage; 