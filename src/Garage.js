import React from 'react';

// import { useFirebaseSession } from '@use-firebase/auth';
import { useValue } from '@use-firebase/database';

const Garage = () => {
  const [isOpen, setState] = useValue('/garage');

  const isPending = isOpen === null;
  const toggle = () => setState(!isOpen);

  const className = `garage-container ${isPending ? 'pending' : ''} ${
    isOpen ? 'open' : ''
  }`;

  return (
    <div className={className}>
      <img
        alt="garage"
        src="https://uploads.codesandbox.io/uploads/user/dadc333f-4fd2-4f2d-9ce8-1d7a80efd28a/KkKR-garage.png"
      />
      <div className="garage-door-container">
        <div className="garage-door" />
      </div>

      <button
        className="garage-door-button"
        onClick={toggle}
        disabled={isPending}
      />

      <div className="garage-text-area">
        <div>The Garage Door is</div>
        <div className="text">
          {isPending ? '∙ ∙ ∙' : isOpen ? 'Open' : 'Closed'}
        </div>
      </div>
    </div>
  );
};

export default Garage;
