import React, { useState, useEffect } from 'react';

// TODO rename to something generic
const useSplashScreen = (loading, minDelay) => {
  const [isTimerRunning, setTimerRunning] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setTimerRunning(false), minDelay);
    return () => clearTimeout(timer);
  }, []);

  return isTimerRunning || loading;
};

const SplashScreen = ({
  children,
  loading,
  minDelay = 2000,
  message = 'Please wait while we load your app',
}) => {
  const showSplashScreen = useSplashScreen(loading, minDelay);

  return showSplashScreen ? (
    <div className="splash-screen">
      {message}
      <div className="loading-dot">•</div>
    </div>
  ) : (
    children
  );
};

export default SplashScreen;
