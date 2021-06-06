import './App.css';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import Login from './LoginForm/Login';
import "antd/dist/antd.css";
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from './Redux/action';
import Main from './Dashboard/Main';
import { useEffect } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyD7MX1Ic9T4EJAqBhDcwoNbZl0vQM7UO-g",
  authDomain: "react-test-task-790c6.firebaseapp.com",
  projectId: "react-test-task-790c6",
  storageBucket: "react-test-task-790c6.appspot.com",
  messagingSenderId: "511414006748",
  appId: "1:511414006748:web:16879b5f978f3006561519"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();



function App() {
  const userEmail = useSelector( state => state.authReducer.userEmail );
  const dispatch = useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged((user) => {
      if(user){
         dispatch(signIn(user.email))
      }
      console.log('AAAA')
    })
  },[dispatch])

  return <> { userEmail ? <Main/> : <Login/>}  </> ;
}

export default App;
