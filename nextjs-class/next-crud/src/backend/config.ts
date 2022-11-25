import firebase from 'firebase/compat/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDoman: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;