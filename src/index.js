import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.scss';

import { ToastProvider } from './ToastProvider';
import { FirebaseAppProvider } from '@use-firebase/app';
import { FirebaseAuthProvider } from '@use-firebase/auth';

import config from './firebaseConfig';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <ToastProvider>
    <FirebaseAppProvider config={config}>
      <FirebaseAuthProvider>
        <App />
      </FirebaseAuthProvider>
    </FirebaseAppProvider>
  </ToastProvider>,
  rootElement
);
