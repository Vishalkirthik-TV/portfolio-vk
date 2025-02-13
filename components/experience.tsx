import Image from "next/image";

const competitions = [
  { title: "Sellathon Competition - 2nd Place", description: "Secured 2nd position at IIIT Nagpur's Sellathon Competition, 2024.", year: "2024", image: "/sellathon.png" },
  { title: "Telegram Mini App Hackathon - Finalist", description: "Finalist at the Telegram Mini App Hackathon by Luma Labs and IIM Nagpur.", year: "2024", image: "/telegram-hackathon.png" },
  { title: "E-Summit Pitchers 4.0 - 3rd Place", description: "Achieved 3rd position at IIIT Nagpur’s Entrepreneurship competition.", year: "2024", image: "/esummit.png" },
  { title: "Smart India Hackathon - Regional Qualifier", description: "Qualified for the regional rounds among 100k+ participants.", year: "2023", image: "/sih.png" },
  { title: "Indore Hackathon - Finalist", description: "Finalist in the Indore Hackathon conducted by Indore Municipal Corporation.", year: "2024", image: "/indore-hackathon.png" }
];

export const Experience = () => {
  return (
    <section id="competitions" className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <h1 className="text-4xl font-extrabold text-center mb-10">
        My <span className="text-purple-400">Competition Journey</span>
      </h1>
      
      <div className="relative space-y-12 before:absolute before:inset-0 before:left-1/2 before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-purple-500 before:to-transparent">
        {competitions.map((competition, idx) => (
          <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            
            {/* Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-500 text-white shadow-lg transform transition-all group-hover:scale-110">
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="14">
                <path fillRule="nonzero" d="M14 1.5L6 10l-4-4M0 7.5l6 6 10-10" stroke="white" strokeWidth="2" fill="none" />
              </svg>
            </div>

            {/* Card */}
            <div className="relative w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-800 p-5 rounded-xl shadow-lg border border-gray-700 transition-all transform group-hover:scale-105">
              <div className="flex items-center space-x-4">
                <Image src={competition.image} width={50} height={50} alt={competition.title} className="rounded-lg shadow-md" />
                <div>
                  <h2 className="text-xl font-bold text-white">{competition.title}</h2>
                  <p className="mt-2 text-gray-300">{competition.description}</p>
                  <span className="text-sm text-purple-400">{competition.year}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
