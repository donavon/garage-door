import React, { createContext, useContext, useState, useCallback } from 'react';

const ToastContext = createContext();

const signature = Symbol();

const ToastProvider = ({
  toast: Toast = 'div',
  component: Component,
  children = <Component />,
}) => {
  const [message, setMessage] = useState('');

  const value = useCallback(m => setMessage(m), []);

  if (message) {
    console.log(`Toast Message: ${message}`);
  }

  return (
    <ToastContext.Provider value={{ signature, value }}>
      {children}
      <Toast>{message}</Toast>
    </ToastContext.Provider>
  );
};

const useToast = () => {
  const context = useContext(ToastContext);

  if (context && context.signature === signature) {
    return context.value;
  }
  throw new Error('useToast must be a descendant of <ToastProvider/>');
};

export { ToastProvider, useToast };
