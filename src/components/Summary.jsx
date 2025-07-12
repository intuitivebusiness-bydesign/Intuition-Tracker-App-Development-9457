import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import EmailCapture from './EmailCapture';
import IBBDLogo from './IBBDLogo';
import IBBDButterfly from './IBBDButterfly';

const { FiTrendingUp, FiHeart, FiStar, FiUsers, FiCheckCircle } = FiIcons;

const Summary = ({ journalData }) => {
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  
  const completedDays = Object.keys(journalData).length;
  
  // Analyze following intuition
  const followedCount = Object.values(journalData).filter(day => {
    const text = day.followed?.toLowerCase() || '';
    return text.includes('yes') || text.includes('followed') || text.includes('listened');
  }).length;

  if (showEmailCapture) {
    return <EmailCapture onBack={() => setShowEmailCapture(false)} journalData={journalData} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl"
    >
      <div className="flex flex-col items-center mb-8">
        <IBBDLogo className="w-auto h-16 mb-2" />
      </div>

      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-purple to-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
          <SafeIcon icon={FiCheckCircle} className="text-white text-3xl" />
        </div>
        
        <h2 className="font-serif text-3xl md:text-4xl text-brand-plum mb-4">
          Your Journey Insights
        </h2>
        
        <p className="text-brand-slate text-lg">
          Beautiful work deepening your connection with your intuition
        </p>
      </div>

      <div className="space-y-6 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-brand-purple/10 to-brand-gold/10 rounded-2xl p-6"
        >
          <div className="flex items-center mb-3">
            <SafeIcon icon={FiTrendingUp} className="text-brand-purple text-xl mr-3" />
            <h3 className="font-medium text-brand-plum">Your Practice</h3>
          </div>
          <p className="text-brand-slate">
            You completed <span className="font-semibold text-brand-plum">{completedDays} reflection{completedDays !== 1 ? 's' : ''}</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-brand-gold/10 to-brand-slate/10 rounded-2xl p-6"
        >
          <div className="flex items-center mb-3">
            <SafeIcon icon={FiHeart} className="text-brand-gold text-xl mr-3" />
            <h3 className="font-medium text-brand-plum">Intuitive Following</h3>
          </div>
          <p className="text-brand-slate">
            You followed your intuition on <span className="font-semibold text-brand-plum">{followedCount} occasions</span>
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-br from-brand-purple/10 to-brand-gold/10 rounded-2xl p-6 mb-8"
      >
        <div className="flex justify-center mb-4">
          <SafeIcon icon={FiUsers} className="text-brand-gold text-3xl" />
        </div>
        
        <h3 className="font-serif text-2xl text-brand-plum text-center mb-4">
          Continue Your Journey in Community
        </h3>
        
        <p className="text-brand-slate leading-relaxed mb-6 text-center">
          You've begun awakening to your intuitive wisdom. Now, imagine deepening this connection 
          alongside other sensitive entrepreneurs who understand your journey. Join us in Rooted, 
          where we're creating soul-aligned businesses together.
        </p>
        
        <div className="text-center">
          <a
            href="https://www.intuitivebusinessbydesign.com/rooted-community"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-gold text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Join the Rooted Community
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
        className="text-center"
      >
        <button
          onClick={() => setShowEmailCapture(true)}
          className="bg-brand-gold text-white px-8 py-3 rounded-full font-medium hover:bg-brand-gold/90 transition-colors duration-300"
        >
          Get Your Personalized Follow-up
        </button>
      </motion.div>
      
      <div className="flex justify-center mt-8">
        <IBBDButterfly className="w-auto h-20" />
      </div>
    </motion.div>
  );
};

export default Summary;