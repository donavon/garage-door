import React from 'react';
import Button from '@material-ui/core/Button';
import { signOut } from '@use-firebase/auth';

const SignOut = ({ app }) => {
  return (
    <p>
      <Button variant="contained" color="primary" onClick={() => signOut(app)}>
        Sign Out
      </Button>
    </p>
  );
};

export default SignOut;
