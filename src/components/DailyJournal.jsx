import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowLeft, FiArrowRight, FiSave, FiStar } = FiIcons;

const DailyJournal = ({ day, savedData, onSave, onNext, onPrevious, canGoNext, canGoPrevious }) => {
  const [formData, setFormData] = useState({
    decision: '',
    followed: '',
    bodySensations: '',
    oracleCard: ''
  });
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (savedData) {
      setFormData(savedData);
      setIsSaved(true);
    } else {
      setFormData({
        decision: '',
        followed: '',
        bodySensations: '',
        oracleCard: ''
      });
      setIsSaved(false);
    }
  }, [savedData, day]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setIsSaved(false);
  };

  const handleSave = () => {
    onSave(formData);
    setIsSaved(true);
  };

  const handleNext = () => {
    if (!isSaved && (formData.decision || formData.followed || formData.bodySensations)) {
      handleSave();
    }
    onNext();
  };

  const isFormFilled = formData.decision.trim() && formData.followed.trim() && formData.bodySensations.trim();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl"
    >
      <div className="mb-8">
        <h2 className="font-serif text-2xl md:text-3xl text-brand-plum mb-2">
          Day {day}
        </h2>
        <p className="text-brand-slate text-sm md:text-base">
          Take a moment to reflect on today's intuitive experiences
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-brand-plum font-medium mb-3">
            What intuitive decision did you face today?
          </label>
          <textarea
            value={formData.decision}
            onChange={(e) => handleInputChange('decision', e.target.value)}
            placeholder="Describe the decision or choice you encountered..."
            className="w-full p-4 border-2 border-brand-gray/50 rounded-2xl focus:border-brand-purple focus:outline-none transition-colors duration-300 min-h-[100px] resize-none"
          />
        </div>

        <div>
          <label className="block text-brand-plum font-medium mb-3">
            Did you follow it? Why or why not?
          </label>
          <textarea
            value={formData.followed}
            onChange={(e) => handleInputChange('followed', e.target.value)}
            placeholder="Share what happened and your reasoning..."
            className="w-full p-4 border-2 border-brand-gray/50 rounded-2xl focus:border-brand-purple focus:outline-none transition-colors duration-300 min-h-[100px] resize-none"
          />
        </div>

        <div>
          <label className="block text-brand-plum font-medium mb-3">
            What did YES or NO feel like in your body today?
          </label>
          <textarea
            value={formData.bodySensations}
            onChange={(e) => handleInputChange('bodySensations', e.target.value)}
            placeholder="Describe the physical sensations, emotions, or energy you felt..."
            className="w-full p-4 border-2 border-brand-gray/50 rounded-2xl focus:border-brand-purple focus:outline-none transition-colors duration-300 min-h-[100px] resize-none"
          />
        </div>

        <div className="bg-brand-gold/10 rounded-2xl p-6">
          <div className="flex items-center mb-3">
            <SafeIcon icon={FiStar} className="text-brand-gold text-xl mr-2" />
            <label className="text-brand-plum font-medium">
              Oracle Card Log (Optional)
            </label>
          </div>
          
          <textarea
            value={formData.oracleCard}
            onChange={(e) => handleInputChange('oracleCard', e.target.value)}
            placeholder="What card did you pull and what meaning or insight came up?"
            className="w-full p-4 border-2 border-brand-gray/50 rounded-2xl focus:border-brand-purple focus:outline-none transition-colors duration-300 min-h-[80px] resize-none bg-white/50"
          />
        </div>
      </div>

      <div className="flex items-center justify-between mt-8 pt-6 border-t border-brand-gray/30">
        <button
          onClick={onPrevious}
          disabled={!canGoPrevious}
          className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
            canGoPrevious
              ? 'text-brand-slate hover:text-brand-plum hover:bg-brand-gray/20'
              : 'text-brand-gray/50 cursor-not-allowed'
          }`}
        >
          <SafeIcon icon={FiArrowLeft} />
          <span>Previous</span>
        </button>

        <div className="flex items-center space-x-3">
          {!isSaved && (formData.decision || formData.followed || formData.bodySensations) && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={handleSave}
              className="flex items-center space-x-2 px-4 py-2 bg-brand-purple text-white rounded-full hover:bg-brand-plum transition-colors duration-300"
            >
              <SafeIcon icon={FiSave} />
              <span>Save</span>
            </motion.button>
          )}

          {isSaved && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-brand-gold text-sm font-medium"
            >
              ✓ Saved
            </motion.div>
          )}
        </div>

        <button
          onClick={handleNext}
          disabled={!canGoNext}
          className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
            canGoNext
              ? 'bg-brand-gold text-white hover:shadow-lg'
              : 'bg-brand-gray/50 text-brand-gray cursor-not-allowed'
          }`}
        >
          <span>{day === 14 ? 'Complete' : 'Next'}</span>
          <SafeIcon icon={FiArrowRight} />
        </button>
      </div>

      {isFormFilled && !isSaved && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-center text-brand-slate text-sm"
        >
          Don't forget to save your reflection before moving on
        </motion.div>
      )}
    </motion.div>
  );
};

export default DailyJournal;