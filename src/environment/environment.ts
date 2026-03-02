declare const NG_APP_PRODUCTION: boolean;
declare const NG_APP_FIREBASE_API_KEY: string;
declare const NG_APP_FIREBASE_AUTH_DOMAIN: string;
declare const NG_APP_FIREBASE_PROJECT_ID: string;
declare const NG_APP_FIREBASE_STORAGE_BUCKET: string;
declare const NG_APP_FIREBASE_MESSAGING_SENDER_ID: string;
declare const NG_APP_FIREBASE_APP_ID: string;

export const environment = {
  production: NG_APP_PRODUCTION,
  firebase: {
    apiKey: NG_APP_FIREBASE_API_KEY,
    authDomain: NG_APP_FIREBASE_AUTH_DOMAIN,
    projectId: NG_APP_FIREBASE_PROJECT_ID,
    storageBucket: NG_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: NG_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: NG_APP_FIREBASE_APP_ID,
  },
};
