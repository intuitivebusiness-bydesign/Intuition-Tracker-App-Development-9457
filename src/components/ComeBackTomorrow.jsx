import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import IBBDLogo from './IBBDLogo';
import IBBDButterfly from './IBBDButterfly';

const { FiHeart, FiUsers, FiStar } = FiIcons;

const ComeBackTomorrow = ({ completedDays, onViewSummary }) => {
  const showRootedInvite = completedDays === 5 || completedDays === 10;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl text-center"
    >
      <div className="flex flex-col items-center mb-6">
        <IBBDLogo className="w-auto h-16 mb-2" />
      </div>

      <div className="w-20 h-20 bg-gradient-to-br from-brand-purple to-brand-gold rounded-full flex items-center justify-center mx-auto mb-6">
        <SafeIcon icon={FiHeart} className="text-white text-3xl" />
      </div>

      <h2 className="font-serif text-3xl text-brand-plum mb-4">
        Beautiful Work Today!
      </h2>

      <p className="text-brand-slate text-lg mb-6">
        You've completed {completedDays} {completedDays === 1 ? 'day' : 'days'} of your intuitive journey. 
        Take time to rest and integrate today's insights.
      </p>

      {showRootedInvite && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-brand-purple/10 to-brand-gold/10 rounded-2xl p-6 mb-8"
        >
          <div className="flex justify-center mb-4">
            <SafeIcon icon={FiUsers} className="text-brand-gold text-2xl" />
          </div>
          
          <h3 className="text-brand-plum font-serif text-xl mb-3">
            Ready to Deepen Your Practice?
          </h3>
          
          <p className="text-brand-slate mb-4">
            Join our Rooted Community, where sensitive, intuitive entrepreneurs gather to 
            support each other in building soul-aligned businesses.
          </p>
          
          <a
            href="https://www.intuitivebusinessbydesign.com/rooted-community"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-gold text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
          >
            Learn About Rooted
          </a>
        </motion.div>
      )}

      <div className="space-y-4">
        <div className="flex items-center justify-center space-x-2 text-brand-slate">
          <SafeIcon icon={FiStar} className="text-brand-gold" />
          <span>Come back tomorrow for your next reflection</span>
        </div>
        
        <button
          onClick={onViewSummary}
          className="text-brand-gold hover:text-brand-purple transition-colors duration-300 underline"
        >
          View Progress Summary
        </button>
      </div>
      
      <div className="flex justify-center mt-8">
        <IBBDButterfly className="w-auto h-20" />
      </div>
    </motion.div>
  );
};

export default ComeBackTomorrow;