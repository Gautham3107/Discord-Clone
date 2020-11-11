import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import ChatBox from './components/chat/ChatBox';
import Login from './login/Login';
import { useDispatch,useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';
import { login,logout } from './features/userSlice';



function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() =>{
    auth.onAuthStateChanged((authUser) =>{
      if (authUser){
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      }
      else{
        //Logged out
        dispatch(logout());
      }
    })
  }, [dispatch]);

  return (
    <div className="app">
      { user ? (
          <>
            <Sidebar />
            <ChatBox />
          </>
        )
        : (
        <Login />
      )}
      
    </div>
  );
}

export default App;
