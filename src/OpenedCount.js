import React from 'react';
import { useValue } from '@use-firebase/database';

const OpenedCount = () => {
  const [openedCount] = useValue('/count');

  return (
    <div className="opened-count">
      The Garage Door has been opened{' '}
      <span className="count">{openedCount} times</span> by various people on
      the interwebs.
    </div>
  );
};

export default OpenedCount;
