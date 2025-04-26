import React from 'react';
import { ExternalLink } from 'lucide-react';

const FounderProfile = ({ founder }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 mt-5 lg:mt-0">
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
            {founder.verified && (
              <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Verified
              </span>
            )}
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