import { FaTrophy, FaTelegram, FaLightbulb, FaCode, FaLaptopCode } from "react-icons/fa";

const competitions = [
  { title: "Sellathon Competition - 2nd Place", description: "Secured 2nd position at IIIT Nagpur's Sellathon Competition, 2024.", year: "2024", icon: FaTrophy, color: "text-yellow-400" },
  { title: "Telegram Mini App Hackathon - Finalist", description: "Finalist at the Telegram Mini App Hackathon by Luma Labs and IIM Nagpur.", year: "2024", icon: FaTelegram, color: "text-blue-400" },
  { title: "E-Summit Pitchers 4.0 - 3rd Place", description: "Achieved 3rd position at IIIT Nagpur's Entrepreneurship competition.", year: "2024", icon: FaLightbulb, color: "text-yellow-300" },
  { title: "Smart India Hackathon - Regional Qualifier", description: "Qualified for the regional rounds among 100k+ participants.", year: "2023", icon: FaCode, color: "text-green-400" },
  { title: "Indore Hackathon - Finalist", description: "Finalist in the Indore Hackathon conducted by Indore Municipal Corporation.", year: "2024", icon: FaLaptopCode, color: "text-purple-400" }
];

export const Experience = () => {
  return (
    <section id="competitions" className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <h1 className="text-4xl font-extrabold text-center mb-10">
        My <span className="text-purple-400">Competition Journey</span>
      </h1>
      
             <div className="relative space-y-12">
         {/* Timeline Spine */}
         <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-white transform -translate-x-1/2 z-0 shadow-lg"></div>
         {competitions.map((competition, idx) => (
           <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
             
             {/* Timeline Dot */}
             <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 border-4 border-white shadow-lg z-10">
             </div>

                         {/* Card */}
             <div className="relative w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-800 p-5 rounded-xl shadow-lg border border-gray-700 transition-all transform group-hover:scale-105">
               <div className="flex items-center space-x-4">
                 <div className={`text-3xl ${competition.color}`}>
                   <competition.icon />
                 </div>
                 <div>
                   <h2 className="text-xl font-bold text-white mb-2">{competition.title}</h2>
                   <p className="text-gray-300 mb-2">{competition.description}</p>
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
