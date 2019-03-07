import React, { useCallback } from 'react';
import { useValue } from '@use-firebase/database';

const Garage = () => {
  const [isOpen, setOpenState] = useValue('/garage');
  const isPending = isOpen === null;
  const toggle = useCallback(() => setOpenState(current => !current), [
    setOpenState,
  ]);
  const className = `${isPending ? 'pending' : ''} ${isOpen ? 'open' : ''}`;

  return (
    <div className={`garage-container ${className}`}>
      <div>
        <img alt="garage" src="img/garage.png" />
      </div>
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
