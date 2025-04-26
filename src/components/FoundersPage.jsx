import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Play,
  Award,
  TrendingUp,
  Heart,
  ChevronRight,
} from "lucide-react";
import FounderProfile from "../components/FounderProfile";
import VideoFeature from "../components/VideoFeature";
import ReactPlayer from "react-player";
import {motion} from "framer-motion";
const founderData = [
  {
    id: "founder1",
    name: "Kanishka Patel",
    role: "Co-Founder & CEO",
    image: "/Kanishka-Sir.webp",
    verified: true,
    
    fullBio: [
      "Kanishka Patel is the Founder and CEO of WeHear, a startup pioneering smart audio technologies and hearing solutions based on bone conduction.",
      "An alumnus of L.D. College of Engineering, he began WeHear while working on embedded systems and robotics, with experience in platforms like Arduino, Keil, and ARM.",
      "His company developed 'HearNU', the world's first patented non-surgical bone-conduction hearing aid. HearNU has been appreciated by former President Ramnath Kovind and endorsed by top ENT specialists worldwide.",
     "Apart from HearNU, Kanishka also led the development of WeHear OX – a smart headphone with innovative features like real-time translation, noise reduction, and language learning, enabling users to 'hear without ears' globally and effortlessly."
    ],
   
    socialLinks: {
      LinkedIn: "https://www.linkedin.com/in/kanishkapatel-wehear/",
    },
  },
  {
    id: "founder2",
    name: "Raj Shah",
    role: "Co-Founder",
    image: "/Raj-Sir.webp",
    verified: true,
    
    fullBio: [
      "Raj Shah is the Founder of COSMO Group and Co-Founder of WeHear, blending his passion for social impact and innovation. His ventures focus on solving real-world problems through scalable, tech-driven solutions.",
      "Through COSMO Group, he has championed the use of alternative medicine, particularly leveraging the health benefits of the Prickly Pear cactuss.",
      "At WeHear, Raj focuses on scaling impact-driven technologies. The company offers the world's first non-surgical hearing device for 100% hearing-impaired individuals and works to reduce hearing loss from prolonged earphone use.",
      "He also mentors startups and entrepreneurs as an Expert Faculty at the Centre for Entrepreneurship Development (CED), Govt. of Gujarat, and serves on the Steering Committee for Agriculture at the Gujarat Chamber of Commerce.",
    ],
    
    socialLinks: {
      LinkedIn: "https://www.linkedin.com/in/raj-shah-a1aa9b12",
    },
  },
];

const FoundersPage = () => {
  

  
  return (
    < motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="py-16 bg-gray-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 mb-16 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Meet Our Visionary Founders
        </h1>
        <p className="text-xl bg-gradient-to-r from-orange-500 via-indigo-500 to-green-500 text-transparent bg-clip-text max-w-3xl mx-auto">
          The brilliant minds who turned an innovative idea into a game-changing
          reality, as featured on Shark Tank.
        </p>
      </section>

      {/* Founders Section */}
      <section className="container mx-auto px-4 md:px-6 mb-20">
        <div className="lg:grid grid-cols-1 md:grid-cols-2 gap-10">
          {founderData.map((founder) => (
            <div
              key={founder.id}
              className="relative group cursor-pointer h-full mb-10 md:mb-0"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-white ring-1 ring-gray-900/5 rounded-lg">
                <FounderProfile
                  founder={founder}
                 
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shark Tank Feature */}
      <section className="container mx-auto px-4 md:px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Shark Tank Feature - Left Side */}
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
              <div className="w-4/5 mx-auto">
                <VideoFeature />
              </div>
            </div>
          </div>

          {/* Company Story - Right Side */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative p-[2px] group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 h-full">
              <div className="relative bg-white h-full rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Journey
                </h2>
                <p className="text-lg text-gray-700 mb-8 bg-gradient-to-r from-orange-500 via-indigo-500 to-green-500 text-transparent bg-clip-text">
                  WeHear's Journey: From Curiosity to a Hearing Revolution
                </p>
                <div className="space-y-4 bg-white">
                  <p className="text-gray-700">
                    The journey of WeHear began when Kanishka Patel, during his
                    final year of engineering, discovered the military use of
                    bone conduction technology in US army helmets. Intrigued by
                    its potential, he teamed up with Raj Shah to explore its
                    application in non-surgical hearing solutions. The duo
                    co-founded WeHear in 2021, transforming a garage idea into a
                    patented innovation—<i>HearNU</i>, India's first and only
                    non-surgical bone conduction hearing aid. After multiple
                    prototypes and partnerships with schools for the
                    hearing-impaired, they launched their product, which has
                    since touched over 11,500 lives and generated ₹5.5 crore in
                    revenue. Their pitch on <i>Shark Tank India Season 3</i> led
                    to a ₹2.5 crore deal with Peyush Bansal, valuing their
                    startup at ₹250 crore. With clinical trials, government
                    support, and international patents in hand, WeHear is not
                    only redefining hearing care in India but is also expanding
                    globally, proving that innovation with impact knows no
                    bounds.
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
        </div>
      </section>
    </motion.div>
  );
};

export default FoundersPage;