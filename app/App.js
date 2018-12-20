import React from 'react';
import {createRootNavigator} from './router'
import {initializeFirebase} from "./config/FirebaseInit";

initializeFirebase();
export default createRootNavigator();