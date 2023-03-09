// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  auth: {
    changePasswordUrl: 'http://localhost:3100/api/auth/change-password',
    editProfileUrl: 'http://localhost:3100/api/auth/edit-profile',
    loginUrl: 'http://localhost:3100/api/auth/login',
    signupUrl: 'http://localhost:3100/api/auth/signup',
    currentUserUrl: 'http://localhost:3100/api/customers/current-user',
  },
  customerUrl: 'http://localhost:3100/api/customers',
  genreUrl: 'http://localhost:3100/api/genres',
  movieUrl: 'http://localhost:3100/api/movies',
  rentalUrl: 'http://localhost:3100/api/rentals',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
