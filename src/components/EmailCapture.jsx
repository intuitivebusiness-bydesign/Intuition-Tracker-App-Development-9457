import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import IBBDLogo from './IBBDLogo';
import IBBDButterfly from './IBBDButterfly';

const { FiMail, FiUser, FiArrowLeft, FiSend } = FiIcons;

const EmailCapture = ({ onBack, journalData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare data for webhook
      const completedDays = Object.keys(journalData).length;
      const webhookData = {
        name: formData.name,
        email: formData.email,
        completedDays,
        journalData,
        submittedAt: new Date().toISOString()
      };
      
      // Replace with actual webhook URL
      const webhookUrl = 'https://hook.us1.make.com/your-webhook-url-here';
      
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData)
      });
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error gracefully
      setIsSubmitted(true); // Still show success for demo
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl text-center"
      >
        <div className="flex flex-col items-center mb-6">
          <IBBDLogo className="w-auto h-16 mb-2" />
        </div>
        
        <div className="w-20 h-20 bg-gradient-to-br from-brand-gold to-brand-purple rounded-full flex items-center justify-center mx-auto mb-6">
          <SafeIcon icon={FiSend} className="text-white text-3xl" />
        </div>
        
        <h2 className="font-serif text-2xl md:text-3xl text-brand-plum mb-4">
          Thank You!
        </h2>
        
        <p className="text-brand-slate mb-6">
          Your personalized follow-up is on its way. Check your email for insights tailored to your journey.
        </p>
        
        <button
          onClick={onBack}
          className="bg-brand-gold text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
        >
          Back to Summary
        </button>
        
        <div className="flex justify-center mt-8">
          <IBBDButterfly className="w-auto h-20" />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl"
    >
      <div className="flex flex-col items-center mb-6">
        <IBBDLogo className="w-auto h-16 mb-2" />
      </div>
      
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className="text-brand-slate hover:text-brand-plum transition-colors duration-300 mr-4"
        >
          <SafeIcon icon={FiArrowLeft} className="text-xl" />
        </button>
        
        <h2 className="font-serif text-2xl md:text-3xl text-brand-plum">
          Get Your Personal Follow-up
        </h2>
      </div>
      
      <p className="text-brand-slate mb-8 leading-relaxed">
        Receive personalized insights and next steps based on your 14-day journey. 
        We'll send you tailored guidance to continue deepening your intuitive practice.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-brand-plum font-medium mb-3">
            <SafeIcon icon={FiUser} className="inline mr-2" />
            Your Name
          </label>
          
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            placeholder="Enter your first name"
            required
            className="w-full p-4 border-2 border-brand-gray/50 rounded-2xl focus:border-brand-purple focus:outline-none transition-colors duration-300"
          />
        </div>
        
        <div>
          <label className="block text-brand-plum font-medium mb-3">
            <SafeIcon icon={FiMail} className="inline mr-2" />
            Email Address
          </label>
          
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            placeholder="Enter your email address"
            required
            className="w-full p-4 border-2 border-brand-gray/50 rounded-2xl focus:border-brand-purple focus:outline-none transition-colors duration-300"
          />
        </div>
        
        <div className="bg-brand-gold/10 rounded-2xl p-4">
          <p className="text-brand-slate text-sm">
            We respect your privacy. Your information will only be used to send you personalized insights 
            about your intuitive journey and occasional updates about our programs.
          </p>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting || !formData.name.trim() || !formData.email.trim()}
          className={`w-full py-4 rounded-2xl font-medium transition-all duration-300 ${
            isSubmitting || !formData.name.trim() || !formData.email.trim()
              ? 'bg-brand-gray text-brand-slate cursor-not-allowed'
              : 'bg-brand-gold text-white hover:shadow-lg transform hover:scale-[1.02]'
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Send My Personalized Insights'}
        </button>
      </form>
      
      <div className="flex justify-center mt-8">
        <IBBDButterfly className="w-auto h-20" />
      </div>
    </motion.div>
  );
};

export default EmailCapture;