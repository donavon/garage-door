import React from 'react';
import { useValue } from '@use-firebase/database';

const OpenedCount = () => {
  const [openedCount] = useValue('/count');
  const [userCount] = useValue('/userCount');

  return (
    <div className="opened-count">
      My Garage Door has been opened
      <br />
      <strong>{openedCount} times</strong> by{' '}
      <strong>{userCount} different people</strong>
      <br />
      on the interwebs.
    </div>
  );
};

export default OpenedCount;
