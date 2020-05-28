import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyAUC01RnGK9VihD-sdLNVNLdIIwo67lG1c',
	authDomain: 'chilimeetscode-3414f.firebaseapp.com',
	databaseURL: 'https://chilimeetscode-3414f.firebaseio.com',
	projectId: 'chilimeetscode-3414f',
	storageBucket: 'chilimeetscode-3414f.appspot.com',
	messagingSenderId: '779056476450',
	appId: '1:779056476450:web:8638e6e864571d7f0a757b',
	measurementId: 'G-QQ4BLX5D10'
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
