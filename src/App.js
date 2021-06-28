// App.js
import React from 'react';
import './App.css';

import { signInWithGoogle } from './firebase/firebase.utils';
import { auth } from './firebase/firebase.utils';
import logo from './images/emptypp.png';
import { GoogleLoginButton } from "react-social-login-buttons";
import TextareaAutosize from "react-autosize-textarea"

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
        <div className="main">
          {

            this.state.currentUser ?

                (<div >

                        <img className="profilePicture" src={this.state.currentUser.photoURL} onClick={() => auth.signOut()} />

                      <div className="afterLogin">
                        <h1>My Students</h1>
                        <p>Enter the name of the persons who will answer your questions,separated by comma or new line</p>
                        <TextareaAutosize
                            rows={10}
                            placeholder='eg. David, Kim, Rajesh'
                        />
                        <div className="submitButton">
                          <button>SUBMIT</button>
                        </div>


                      </div>
                      {/*<div>Name: {this.state.currentUser.displayName}</div>*/}
                      {/*<div>Email: {this.state.currentUser.email}</div>*/}

                      {/*<button onClick={() => auth.signOut()}>LOG OUT</button>*/}

                    </div>
                ) :
                (<div className="login">
                  <h1>EveryOne Answers</h1>
                  <h2>Welcome Please sign in</h2>
                  <img src={logo}/>
                  <div>
                    <GoogleLoginButton onClick={signInWithGoogle}  />
                  </div>


                </div>)


          }
        </div >
    );
  }
}


export default App;
