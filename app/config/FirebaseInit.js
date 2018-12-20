import firebase from "react-native-firebase";
import {Platform} from "react-native";

const iosConfig = {
    clientId: '279405196550-1nip7vf73cli3msk6lf7tjlv8oin4met.apps.googleusercontent.com',
    appId: '1:279405196550:ios:86d2222ad14e0a27',
    apiKey: 'AIzaSyBdR8Jzj6l2_OVWLHlEf6tqcBV0vi9HGts',
    databaseURL: 'https://reactnativeappexample.firebaseio.com',
    storageBucket: 'reactnativeappexample.appspot.com',
    messagingSenderId: '279405196550',
    projectId: 'reactnativeappexample',

    // enable persistence by adding the below flag
    persistence: true,
};

const androidConfig = {
    clientId: '279405196550-o2drk2a5gsiu6f5v44hfigqatg7nubci.apps.googleusercontent.com',
    appId: '1:279405196550:android:bdda3018bb58ca0a',
    apiKey: 'AIzaSyC9Kayt4j9dluajQ0LBl2Ped2qInvofneg',
    databaseURL: 'https://reactnativeappexample.firebaseio.com',
    storageBucket: 'reactnativeappexample.appspot.com',
    messagingSenderId: '279405196550',
    projectId: 'reactnativeappexample',

    // enable persistence by adding the below flag
    persistence: true,
};

const reactNativeAppExample = firebase.initializeApp(
    // use platform specific firebase config
    Platform.OS === 'ios' ? iosConfig : androidConfig,
    // name of this app
    'AwesomeProject',
);


export const initializeFirebase = () => {
    reactNativeAppExample.onReady().then((app)=>{
        firebase.app('AwesomeProject').auth().signInAnonymously().then((user)=>{
            //console.log("AwesomeProjectApp user ->", user);
        })
    });
};