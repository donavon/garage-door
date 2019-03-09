import React, { useState } from 'react';
import { useFirebaseAuth } from '@use-firebase/auth';
import { useToast } from '../ToastProvider';

import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import signInButtons from './signInButtons';

const useStyles = makeStyles({
  name: {
    width: 120,
    paddingRight: 10,
  },
  avatar: {
    width: 20,
    height: 20,
    paddingLeft: 20,
    paddingRight: 0,
  },
});

// import { FormItem } from './FormHelpers';

// const fields = [
//   { label: 'First Name', name: 'firstName' },
//   { label: 'Last Name', name: 'lastName' },
// ];

// const defaultData = {};

const SignInButton = ({ name, icon, classes, ...otherProps }) => (
  <p>
    <Button variant="contained" className={classes.button} {...otherProps}>
      <img alt="" src={`img/auth-icons/${icon}`} className={classes.avatar} />
      <span className={classes.name}>{name}</span>
    </Button>
  </p>
);

const SignInForm = () => {
  const { signIn, createAuthProvider, signInError } = useFirebaseAuth();
  // const displayToast = useToast();
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  const signInWithPopup = authProvider => {
    setLoading(true);
    const provider = createAuthProvider(authProvider);
    signIn(provider, { method: 'signInWithPopup' }).finally(() => {
      setLoading(false);
    });
  };

  return (
    <div>
      <Card>
        <CardContent>
          <h2>Sign In With</h2>
          {signInButtons.map(({ authProvider, ...props }) => (
            <SignInButton
              key={authProvider}
              onClick={() => signInWithPopup(authProvider)}
              classes={classes}
              disabled={loading}
              {...props}
            />
          ))}
        </CardContent>
        {signInError && (
          <CardContent>
            <h3>{signInError.code}</h3>
            <p>{signInError.message}</p>
          </CardContent>
        )}
      </Card>
    </div>
  );

  // return (
  //   <form className="form" onSubmit={submitForm}>
  //     <h3>Sign In</h3>

  //     {fields.map(({ Component = FormItem, name, ...props }) => (
  //       <Component
  //         key={name}
  //         name={name}
  //         value={formData[name]}
  //         {...props}
  //         onChange={setForm}
  //       />
  //     ))}

  //     <button type="submit">Sign In</button>
  //   </form>
  // );
};

export default SignInForm;
