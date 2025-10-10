import { firebaseSecret } from '../../../environments/firebase.secret';

export const firebaseConfig = {
  apiKey: firebaseSecret.apiKey,
  authDomain: firebaseSecret.authDomain,
  databaseURL: firebaseSecret.databaseURL,
  projectId: firebaseSecret.projectId,
  storageBucket: firebaseSecret.storageBucket,
  messagingSenderId: firebaseSecret.messagingSenderId,
  appId: firebaseSecret.appId,
};
