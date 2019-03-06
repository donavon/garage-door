import React from 'react';

// import { useFirebase } from '@use-firebase/app';
// import { useAuth } from '@use-firebase/auth';

import { useFirebaseAuth } from '@use-firebase/auth';

import SplashScreen from './SplashScreen';
import MenuAppBar from './MenuAppBar';
import AuthenticatedApp from './AuthenticatedApp';
import NonAuthenticatedApp from './NonAuthenticatedApp';

const App = () => {
  const { loading, isSignedIn } = useFirebaseAuth();

  return (
    <div className="App">
      <SplashScreen loading={loading} minDelay={0}>
        <MenuAppBar />
        <main>
          {isSignedIn ? (
            <>
              <AuthenticatedApp />
            </>
          ) : (
            <NonAuthenticatedApp />
          )}
        </main>
      </SplashScreen>
    </div>
  );
};

export default App;
