import React from 'react';
import { useFirebaseAuth } from '@use-firebase/auth';

import { ToastProvider } from './ToastProvider';
import SplashScreen from './SplashScreen';
import MenuAppBar from './MenuAppBar';
import AuthenticatedApp from './AuthenticatedApp';
import NonAuthenticatedApp from './NonAuthenticatedApp';

const App = () => {
  const { loading, isSignedIn } = useFirebaseAuth();

  return (
    <ToastProvider>
      <div className="App">
        <SplashScreen loading={loading} minDelay={0}>
          <MenuAppBar />
          <main>
            {isSignedIn ? <AuthenticatedApp /> : <NonAuthenticatedApp />}
          </main>
        </SplashScreen>
      </div>
    </ToastProvider>
  );
};

export default App;
