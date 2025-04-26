import React from "react";
import { ChevronRight, Award, } from "lucide-react";
import FounderProfile from "../components/FounderProfile";
import VideoFeature from "../components/VideoFeature";
import { motion } from "framer-motion";

const founderData = [
  {
    id: "founder1",
    name: "Kanishka Patel",
    role: "Co-Founder & CEO",
    image: "/Kanishka-Sir.webp",
   
    fullBio: [
      "Kanishka Patel is the Founder and CEO of WeHear, a startup pioneering smart audio technologies and hearing solutions based on bone conduction.",
      "He is also known for developing 'HearNU', the world's first patented non-surgical bone-conduction hearing aid.",
      "Additionally, he led the development of 'WeHear OX' – a smart headphone with features like real-time translation and noise reduction."
    ],
    socialLinks: {
      LinkedIn: "https://www.linkedin.com/in/kanishkapatel-wehear/"
    }
  },
  {
    id: "founder2",
    name: "Raj Shah",
    role: "Co-Founder",
    image: "/Raj-Sir.webp",
    
    fullBio: [
      "Raj Shah is the Founder of COSMO Group and Co-Founder of WeHear, working on innovative solutions for global problems.",
      "He pioneered alternative medicine applications and focuses on scaling impactful technologies, including WeHear's revolutionary hearing devices.",
      "He also mentors startups and serves as an Expert Faculty at CED, Govt. of Gujarat."
    ],
    socialLinks: {
      LinkedIn: "https://www.linkedin.com/in/raj-shah-a1aa9b12"
    }
  }
];

const FoundersPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="pt-10 bg-gray-50"
    >
      
      <section className="container mx-auto px-4 md:px-6 mb-16 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Meet Our Visionary Founders
        </h1>
        <p className="text-xl bg-gradient-to-r from-orange-500 via-indigo-500 to-green-500 text-transparent bg-clip-text max-w-3xl mx-auto">
          The brilliant minds who turned an innovative idea into a game-changing
          reality, as featured on Shark Tank.
        </p>
      </section>

      
      <section className="container mx-auto px-4 md:px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {founderData.map((founder) => (
            <div
              key={founder.id}
              className="relative group cursor-pointer h-full mb-10 md:mb-0"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-white ring-1 ring-gray-900/5 rounded-lg">
                <FounderProfile founder={founder} />
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <section className="container mx-auto px-4 md:px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="rounded-2xl shadow-xl overflow-hidden relative p-[2px] group mb-8 lg:mb-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 h-full">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="text-blue-600 mr-3" size={32} />
                Our Shark Tank Journey
              </h2>
              <p className="text-lg text-gray-700 mb-8 bg-gradient-to-r from-orange-500 via-indigo-500 to-green-500 text-transparent bg-clip-text">
                Watch the moment our founders pitched their revolutionary idea
                and secured a deal that changed everything.
              </p>
              <div className="w-3/5 mx-auto">
                <VideoFeature />
              </div>
            </div>
          </div>

          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative p-[2px] group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 h-full">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Journey
              </h2>
              <p className="text-lg text-gray-700 mb-8 bg-gradient-to-r from-orange-500 via-indigo-500 to-green-500 text-transparent bg-clip-text">
                WeHear's Journey: From Curiosity to a Hearing Revolution
              </p>
              <div className="space-y-4 bg-white">
                <p className="text-gray-700">
                  WeHear began when Kanishka Patel, during his final year of
                  engineering, discovered the use of bone conduction technology in
                  military helmets. Intrigued, he teamed up with Raj Shah to explore
                  its potential in hearing solutions. The result was <i>HearNU</i>, 
                  India's first non-surgical bone conduction hearing aid.
                  <br />
                </p>
              </div>
              <div className="flex justify-center mt-6">
                <a
                  href="https://community.startupvisors.com/p/from-bone-conduction-to-big-investment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Read Full Story <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default FoundersPage;