import WingCard from "@/components/wings/WingCard";

const WingsPage = () => {
  const wings = [
    {
      id: 1,
      name: "Content & Publication Wing",
      coordinator: "Esha (Information Science & Library Management '17)",
      coCoordinator: "Rabeya (Law '17)",
    },
    {
      id: 2,
      name: "Graphic Design & IT Wing",
      coordinator: "Mahe (Oceanography '17)",
      coCoordinator: "Sayed Nur-E-Abrar (Food Technology and Nutrition Science '17)",
    },
    {
      id: 3,
      name: "Organizing Wing",
      coordinator: "Mehedi (Tourism and Hospitality Management '17)",
      coCoordinator: "Tahmid (Zoology '17)",
    },
    {
      id: 4,
      name: "Engineering Sciences Wing",
      coordinator: "Arnab Barua (Applied Chemistry and Chemical Engineering '17)",
      coCoordinator: "Musfiqa (Applied Chemistry and Chemical Engineering '18)",
    },
    {
      id: 5,
      name: "Pure Sciences Wing",
      coordinator: "Titiksha (Oceanography '17)",
      coCoordinator: "Shadman (Applied Mathematics '18)",
    },
    {
      id: 6,
      name: "Life Sciences Wing",
      coordinator: "Ety (Fisheries and Marine Science '16)",
      coCoordinator: "Pushpita (Biochemistry and Molecular Biology '17)",
    },
    {
      id: 7,
      name: "Social Sciences & Humanities Wing",
      coordinator: "Tabib (Information Science & Library Management '16)",
      coCoordinator: "Tajbeul (Education '18)",
    },
    {
      id: 8,
      name: "Business Administration Wing",
      coordinator: "Ruhan (Business Administration '17)",
      coCoordinator: "Samad (Tourism and Hospitality Management '17)",
    },
  ];

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

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wings.map((wing) => (
            <WingCard key={wing.id} wing={wing} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WingsPage; 