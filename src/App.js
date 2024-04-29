import React from 'react';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
// import { Card } from '@material-ui/core';
Amplify.configure(config);

export function App({ signOut, user }) {
  return (
    <>
      <h1>Hello {user?.username}</h1>
      {/* <Card>
          I'm a card!
      </Card> */}
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);