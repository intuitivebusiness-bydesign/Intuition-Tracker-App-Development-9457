import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ currentDay, completedDays, totalDays }) => {
  const progressPercentage = (completedDays / totalDays) * 100;

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-medium text-brand-plum">
          Day {currentDay} of {totalDays}
        </span>
        <span className="text-sm text-brand-slate">
          {completedDays} completed
        </span>
      </div>
      
      <div className="w-full bg-brand-gray/50 rounded-full h-3 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-brand-purple to-brand-gold rounded-full"
        />
      </div>
      
      <div className="flex justify-between mt-2">
        {Array.from({ length: totalDays }, (_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i < completedDays 
                ? 'bg-brand-gold' 
                : i === currentDay - 1 
                  ? 'bg-brand-purple' 
                  : 'bg-brand-gray'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;