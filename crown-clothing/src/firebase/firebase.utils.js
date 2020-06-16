import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyC5kRweclNXkoepv9MZ4TxNd2gSIf50EtE",
    authDomain: "crown-bd.firebaseapp.com",
    databaseURL: "https://crown-bd.firebaseio.com",
    projectId: "crown-bd",
    storageBucket: "crown-bd.appspot.com",
    messagingSenderId: "220885080750",
    appId: "1:220885080750:web:06406117682a34504beb3f",
    measurementId: "G-GW5E1W9VQR"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    console.log(snapShot)

    if(!snapShot.exists){
      const { displayName, email} = userAuth;
      const createdAt = new Date();
      // console.log(displayName,email)


      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })

      }catch(error){
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  }


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;