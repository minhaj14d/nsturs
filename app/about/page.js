import { about } from '@/data/mission';

const AboutPage = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            {about.title}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            {about.subtitle}
          </p>
        </div>

        <div className="mt-20">
          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-x-8">
            <div className="prose lg:prose-xl mx-auto text-gray-600">
              {about.description.map((desc, i) => (
                <p key={i}>{desc}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Our Vision</h2>
              <p className="text-lg text-gray-700">
                {about.vision}
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-secondary mb-4">Our Mission</h2>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                {about.mission.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 