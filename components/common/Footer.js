export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} NSTU Research Society. All Rights Reserved.</p>
          <p className="text-sm text-gray-400 mt-1">
            Developed with ❤️ by the NSTURS Tech Team
          </p>
        </div>
      </div>
    </footer>
  );
} 