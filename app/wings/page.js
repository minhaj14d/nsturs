import WingList from '@/components/wings/WingList';
import { wings } from '@/data/wings';

const WingsPage = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Our Specialized Wings
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Dedicated teams focusing on specific areas to maximize our impact and support for students.
          </p>
        </div>
        <div className="mt-16">
          <WingList wings={wings} />
        </div>
      </div>
    </div>
  );
};

export default WingsPage; 