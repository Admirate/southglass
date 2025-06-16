import React from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string | React.ReactNode;
  className?: string;
  backgroundImage?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, className, backgroundImage }) => {
  return (
    <div className="flex group pl-8 py-8 md:py-10 relative">
      {/* Timeline dot with animation */}
      <div className="absolute left-0 w-8 flex items-center justify-center">
        <div className="w-3 h-3 bg-blue-500 rounded-full z-10 transition-all duration-300 group-hover:scale-125 group-hover:bg-yellow-400"></div>
      </div>
      
      {/* Background Image - Only for specific timeline items */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 left-8 bg-cover bg-center bg-no-repeat opacity-65 group-hover:opacity-85 transition-all duration-300 rounded-lg -z-20 brightness-150 contrast-125"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      {/* Content */}
      <div className="flex-1 ml-2">
        <div className="flex flex-col md:flex-row md:items-center mb-2 md:mb-4">
          {/* Year */}
          <div className="text-2xl md:text-3xl font-bold text-blue-400 mr-2 md:mr-6 transition-colors duration-300 group-hover:text-yellow-400">
            {year}
          </div>
          
          {/* Title */}
          <h3 className="text-xl md:text-2xl font-semibold text-white">
            {title}
          </h3>
        </div>
        
        {/* Description */}
        <div className={`text-gray-300 leading-relaxed max-w-3xl ${className || ''}`}>
          {description}
        </div>
        
        {/* Hover animation for the entire item */}
        <div className="absolute inset-0 left-8 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -z-10"></div>
      </div>
    </div>
  );
};

export default TimelineItem; 