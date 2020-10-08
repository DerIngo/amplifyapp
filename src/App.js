import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          We now have Auth!<br/>And we hopefully really can build. 5rd try.
        </p>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
