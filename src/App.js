import React, { useState, useEffect } from 'react';
import firebase from './services/firebase';
import { Route } from 'react-router-dom';
import { Chat, Login, Message } from './components';
import { Provider, Consumer } from './contexts/AuthContext';

function App() {
  const [username, setUsername] = useState(null);
  const [authStatus, setAuthStatus] = useState(null);
  const [chat, setChat] = useState([]);
  const checkChat = ((chat)? chat.length:null);


  useEffect(() => {
    // when page loads get the firebase chat data and set the chat hook
    setTimeout(() => {
      const firebaseRef = firebase.database().ref('/chat/main');
      firebaseRef.once('value')
        .then(snapshot => {
          return snapshot.val();
        })
        .then(data => {
          if (!data) {
            setChat([])
            return;
          } else {
            setChat(data.chat);
          }
        })
      // This is the listener
      // it will update the local chat when firebase receives an updates
      const firebaseListener = firebase.database().ref('/chat/main/chat');
      firebaseListener.on('value', (snapshot) => {
        setChat(snapshot.val());
      })
    }, 1000);
  }, [])

  useEffect(() => {
    // Scrolls to the bottom of the chat window
    // Runs only when the chat array grows or when the user first enters their username
    const objDiv = document.getElementById("chat_window");
    if (!objDiv) return;
    objDiv.scrollTop = objDiv.scrollHeight;
  }, [checkChat, username])

  const updateChat = (message) => {
    // this should work fine, but problems may occur once many messages are sent
    if (chat) {
      chat.push(
        {
          username,
          message: message.trim(),
        }
      );
      firebase.database().ref('/chat').child('main').set({ chat });
    } else {
      const temp = [{ username, message: message.trim() }];
      firebase.database().ref('/chat').child('main').set({ chat: temp });
    }
  }

  const login = (username) => {
    setUsername(username)
    setAuthStatus(true);
  };

  return (
    <>
      <Provider value={{ status: authStatus, login: login, send: updateChat }}>
        <Consumer>
          {
            ({ status }) => {
              return (!status) ?
                (
                  <Login />
                )
                :
                (
                  <>
                    <div className='container mt-5'>
                      <h3 className='text-center'>Your Username: {username}</h3>
                      <Route path='/' exact render={() => <Chat chat={chat} />} />
                      <Route path='/' exact component={Message} />
                    </div>
                  </>
                )
            }
          }
        </Consumer>
      </Provider>
    </>
  );
}

export default App;
