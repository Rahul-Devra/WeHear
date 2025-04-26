import React from "react";
import { ExternalLink } from "lucide-react";

const FounderProfile = ({ founder }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300">
      <div className="md:flex h-full">
        <div className="md:w-2/5">
          <div className="h-80 relative overflow-hidden">
            <img
              src={founder.image}
              alt={founder.name}
              className="absolute inset-0 w-full h-full object-cover object-center mt-5 md:mt-0"
            />
          </div>
        </div>
        <div className="p-6 md:p-8 md:w-3/5">
          <div className="flex items-center mb-2">
            <h3 className="text-2xl font-bold text-gray-900">{founder.name}</h3>
            
          </div>
          <p className="text-blue-600 font-medium mb-4">{founder.title}</p>
          <p className="text-gray-700 mb-6">{founder.fullBio}</p>

          {founder.socialLinks && (
            <div className="mt-4 flex space-x-4">
              {Object.entries(founder.socialLinks).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white p-2 rounded-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="text-blue-700"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 
    .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 
    14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 
    0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 
    0-1.359.54-1.359 1.248 0 .694.521 1.248 
    1.327 1.248h.016zm4.908 
    8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 
    1.232-.878.869 0 1.216.662 
    1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 
    0-1.845.7-2.165 1.193v.025h-.016a5.54 
    5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                        />
                      </svg>
                      
                    </a>
                    {platform} <ExternalLink size={14} className="ml-1" />
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FounderProfile;
