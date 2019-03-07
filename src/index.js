import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.scss';

import { FirebaseAppProvider } from '@use-firebase/app';
import { FirebaseAuthProvider } from '@use-firebase/auth';

import config from './data/firebaseConfig';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <FirebaseAppProvider config={config}>
    <FirebaseAuthProvider>
      <App />
    </FirebaseAuthProvider>
  </FirebaseAppProvider>,
  rootElement
);
