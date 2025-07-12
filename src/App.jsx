import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import WelcomeScreen from './components/WelcomeScreen';
import DailyJournal from './components/DailyJournal';
import ComeBackTomorrow from './components/ComeBackTomorrow';
import Summary from './components/Summary';
import ProgressBar from './components/ProgressBar';
import Header from './components/Header';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [journalData, setJournalData] = useLocalStorage('intuition-tracker', {});
  const [currentDay, setCurrentDay] = useState(1);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showComeBack, setShowComeBack] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    const hasStarted = localStorage.getItem('intuition-tracker-started');
    if (hasStarted) {
      setShowWelcome(false);
      const completedDays = Object.keys(journalData).length;
      
      // If user has completed entries, show appropriate screen
      if (completedDays > 0) {
        const lastEntryDate = getLastEntryDate();
        const isToday = isSameDay(new Date(lastEntryDate), new Date());
        
        if (isToday) {
          setShowComeBack(true);
        } else {
          setCurrentDay(completedDays + 1);
          setShowComeBack(false);
        }
      }
    }
  }, [journalData]);

  const getLastEntryDate = () => {
    const dates = Object.values(journalData)
      .map(entry => entry.completedAt)
      .sort((a, b) => new Date(b) - new Date(a));
    return dates[0];
  };

  const isSameDay = (date1, date2) => {
    return date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate();
  };

  const startJourney = () => {
    localStorage.setItem('intuition-tracker-started', 'true');
    setShowWelcome(false);
  };

  const saveDay = (dayNumber, data) => {
    setJournalData(prev => ({
      ...prev,
      [dayNumber]: { ...data, completedAt: new Date().toISOString() }
    }));
    setShowComeBack(true);
  };

  const viewSummary = () => {
    setShowSummary(true);
    setShowComeBack(false);
  };

  const completedDays = Object.keys(journalData).length;

  if (showWelcome) {
    return <WelcomeScreen onStart={startJourney} />;
  }

  if (showComeBack) {
    return <ComeBackTomorrow completedDays={completedDays} onViewSummary={viewSummary} />;
  }

  if (showSummary || completedDays >= 15) {
    return <Summary journalData={journalData} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-brand-gray/20 to-brand-slate/20">
        <div className="container mx-auto px-4 py-6 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Header />
            
            <ProgressBar
              currentDay={currentDay}
              completedDays={completedDays}
              totalDays={14}
            />
            
            <DailyJournal
              day={currentDay}
              savedData={journalData[currentDay]}
              onSave={(data) => saveDay(currentDay, data)}
              onNext={() => setCurrentDay(currentDay + 1)}
              onPrevious={() => setCurrentDay(currentDay - 1)}
              canGoNext={currentDay < 15}
              canGoPrevious={currentDay > 1}
            />
          </motion.div>
        </div>
      </div>
    </Router>
  );
}

export default App;