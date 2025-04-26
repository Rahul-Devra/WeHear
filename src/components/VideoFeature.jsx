import { useState } from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const VideoFeature = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const playVideo = () => {
    setIsPlaying(true);
  };
  
  return (
    <div className=" relative aspect-video rounded-xl overflow-hidden shadow-lg">
      {!isPlaying ? (
        <>
          <img 
            src="/thumbnail.webp"
            alt="Shark Tank Episode Thumbnail" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <motion.button
              onClick={playVideo}
              className="bg-white bg-opacity-90 rounded-full p-4 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="h-12 w-12 text-blue-600" />
            </motion.button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
            <h3 className="text-white text-xl font-bold">Shark Tank Season 12, Episode 15</h3>
            <p className="text-gray-200">The pitch that changed everything</p>
          </div>
        </>
      ) : (
        <iframe 
          src="https://www.youtube.com/embed/l5M6NMpJGQY?autoplay=1"
          title="Shark Tank Appearance"
          className="absolute top-0 left-0 w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoFeature;