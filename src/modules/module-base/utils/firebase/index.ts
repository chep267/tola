import { firebaseConfig } from './FirebaseConfig';
import { getApps, initializeApp } from 'firebase/app';

if (!getApps().length) initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
