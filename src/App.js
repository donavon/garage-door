import React from 'react';
import { useFirebaseAuth } from '@use-firebase/auth';
import Splashr from 'splashr';

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
        <Splashr extend={loading} minDelay={0} splash={<SplashScreen />}>
          <MenuAppBar />
          <main>
            {isSignedIn ? <AuthenticatedApp /> : <NonAuthenticatedApp />}
          </main>
        </Splashr>
      </div>
    </ToastProvider>
  );
};

export default App;
