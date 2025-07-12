import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import IBBDLogo from './IBBDLogo';

const { FiHeart, FiCompass, FiStar } = FiIcons;

const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-purple/10 to-brand-plum/10 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full text-center"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex flex-col items-center justify-center mb-6">
              <IBBDLogo className="w-auto h-20 md:h-24 mb-4" />
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl text-brand-plum mb-4">
              Intuition Tracker
            </h1>
            
            <p className="text-brand-slate text-lg md:text-xl mb-8 leading-relaxed">
              A 14-day journey to deepen your connection with intuitive decision-making in business
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="space-y-6 mb-10"
          >
            <div className="flex items-center justify-center space-x-4 text-brand-plum">
              <SafeIcon icon={FiHeart} className="text-brand-gold text-xl flex-shrink-0" />
              <span className="text-sm md:text-base">Daily reflection prompts</span>
            </div>
            
            <div className="flex items-center justify-center space-x-4 text-brand-plum">
              <SafeIcon icon={FiStar} className="text-brand-gold text-xl flex-shrink-0" />
              <span className="text-sm md:text-base">Oracle card insights</span>
            </div>
            
            <div className="flex items-center justify-center space-x-4 text-brand-plum">
              <SafeIcon icon={FiCompass} className="text-brand-gold text-xl flex-shrink-0" />
              <span className="text-sm md:text-base">Personalized guidance</span>
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onStart}
            className="bg-brand-gold text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Begin Your Journey
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default WelcomeScreen;