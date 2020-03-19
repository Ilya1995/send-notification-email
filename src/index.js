import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { NotificationContainer } from 'react-notifications';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import './index.css';
import 'react-notifications/lib/notifications.css';
import { fbConfig } from './config';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { createStore } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
};
firebase.initializeApp(fbConfig);

const store = createStore(firebaseReducer);
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
      <NotificationContainer />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);
