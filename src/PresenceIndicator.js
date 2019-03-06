import React from 'react';
import { useConnected } from '@use-firebase/database';

const PresenceIndicator = ({ className }) => {
  const connected = useConnected();
  // const connected = true;
  return (
    <div
      className={className}
      style={{
        width: 10,
        height: 10,
        borderRadius: '50%',
        backgroundColor: connected ? '#0c0' : '#f00',
      }}
    />
  );
};

export default PresenceIndicator;
