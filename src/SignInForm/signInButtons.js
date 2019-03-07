import { AuthProvider } from '@use-firebase/auth';

const signInButtons = [
  {
    name: 'Google',
    authProvider: AuthProvider.GOOGLE,
    icon: 'google.svg',
  },
  {
    name: 'GitHub',
    authProvider: AuthProvider.GITHUB,
    icon: 'github.svg',
  },
  {
    name: 'Twitter',
    authProvider: AuthProvider.TWITTER,
    icon: 'twitter.svg',
  },
  {
    name: 'Facebook',
    authProvider: AuthProvider.FACEBOOK,
    icon: 'facebook.svg',
  },
  {
    name: 'Anonymous',
    authProvider: AuthProvider.ANONYMOUS,
    icon: 'anonymous.svg',
  },
];

export default signInButtons;
