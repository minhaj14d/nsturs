const AboutPage = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            About NSTU Research Society
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Fostering a culture of research, innovation, and academic excellence among students.
          </p>
        </div>

        <div className="mt-20">
          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-x-8">
            <div className="prose lg:prose-xl mx-auto text-gray-600">
              <p>
                NSTURS is a dynamic, student-led research organization at Noakhali Science and Technology University (NSTU), aiming to foster a culture of research, innovation, and academic excellence among students across all faculties.
              </p>
              <p>
                With support from faculty advisors and experienced alumni, NSTURS provides students with exposure to research methodology, higher studies guidance, publication support, and interdisciplinary collaboration opportunities.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Our Vision</h2>
              <p className="text-lg text-gray-700">
                To create a research-driven student ecosystem that supports innovation, critical inquiry, and academic excellence at NSTU and beyond.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-secondary mb-4">Our Mission</h2>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                <li>Promote student research activities across faculties.</li>
                <li>Facilitate workshops, seminars, and publication support.</li>
                <li>Connect students with research mentors and global opportunities.</li>
                <li>Build collaborations among students, faculty, and external institutions.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 