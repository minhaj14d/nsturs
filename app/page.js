import Link from 'next/link';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="brand-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            NSTU Research Society
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            A dynamic, student-led organization at Noakhali Science and Technology University, aiming to foster a culture of research, innovation, and academic excellence.
          </p>
          <div className="mt-8">
            <Link href="/join-us">
              <span className="inline-block bg-white text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-transform transform hover:scale-105">
                Become a Member
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2 text-brand-primary">Workshops & Seminars</h3>
              <p>We organize regular workshops on research methodology, academic writing, and poster presentations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2 text-brand-primary">Mentorship</h3>
              <p>Connect with experienced mentors for guidance on research projects and higher studies applications.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2 text-brand-primary">Collaboration</h3>
              <p>A platform for inter-departmental and inter-faculty collaboration on innovative research ideas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto text-center px-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Ready to Start Your Research Journey?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                  Join our vibrant community of researchers, innovators, and future leaders. Attend our events, apply to a wing, or bring your ideas to us for mentorship.
              </p>
              <div className="flex justify-center gap-4">
                  <Link href="/join-us">
                      <span className="inline-block bg-brand-primary text-white font-bold py-3 px-8 rounded-full hover:bg-brand-secondary transition-colors">
                          Join NSTURS
                      </span>
                  </Link>
                   <Link href="/events">
                      <span className="inline-block bg-gray-200 text-gray-800 font-bold py-3 px-8 rounded-full hover:bg-gray-300 transition-colors">
                          View Events
                      </span>
                  </Link>
              </div>
          </div>
      </section>
    </div>
  );
};

export default Home; 