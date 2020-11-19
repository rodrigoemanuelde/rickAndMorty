import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

let firebaseConfig = {
  apiKey: 'AIzaSyA0qi8pfzurcODic1y30sZKHJQpaPqgL8I',
  authDomain: 'rickandmorty-925b8.firebaseapp.com',
  databaseURL: 'https://rickandmorty-925b8.firebaseio.com',
  projectId: 'rickandmorty-925b8',
  storageBucket: 'rickandmorty-925b8.appspot.com',
  messagingSenderId: '542800313218',
  appId: '1:542800313218:web:16c2270cfb7fdb30432d9b',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore().collection('favs');

export function getFavs(uid) {
  return db
    .doc(uid)
    .get()
    .then((snap) => {
      return snap.data().array;
    });
}

export function updateDB(array, uid) {
  return db.doc(uid).set({ array });
}

export function signOutGoogle() {
  firebase.auth().signOut();
}

export function loginWithGoogle() {
  let provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((snap) => snap.user);
}
