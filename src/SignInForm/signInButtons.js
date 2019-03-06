import { AuthProvider } from '@use-firebase/auth';

const signInButtons = [
  {
    name: 'Google',
    authProvider: AuthProvider.GOOGLE,
    icon:
      '//www.gstatic.com/mobilesdk/160512_mobilesdk/auth_service_google.svg',
  },
  {
    name: 'GitHub',
    authProvider: AuthProvider.GITHUB,
    icon:
      '//www.gstatic.com/mobilesdk/160409_mobilesdk/images/auth_service_github.svg',
  },
  {
    name: 'Twitter',
    authProvider: AuthProvider.TWITTER,
    icon:
      '//www.gstatic.com/mobilesdk/160409_mobilesdk/images/auth_service_twitter.svg',
  },
  {
    name: 'Facebook',
    authProvider: AuthProvider.FACEBOOK,
    icon:
      '//www.gstatic.com/mobilesdk/160409_mobilesdk/images/auth_service_facebook.svg',
  },
  // {
  //   name: 'Anonymous',
  //   authProvider: AuthProvider.ANONYMOUS,
  //   icon:
  //     '//www.gstatic.com/mobilesdk/160409_mobilesdk/images/auth_service_anonymous.svg',
  // },
];

export default signInButtons;
