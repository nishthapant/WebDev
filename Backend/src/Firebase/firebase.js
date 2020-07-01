import app from 'firebase/app';
import 'firebase/auth';
import { render } from '@testing-library/react';

const firebaseConfig = {
  apiKey: "AIzaSyAFbN0nM2GRdbjROok9It4vL2hyLh4d0HM",
  authDomain: "webdev2020-80832.firebaseapp.com",
  databaseURL: "https://webdev2020-80832.firebaseio.com",
  projectId: "webdev2020-80832",
  storageBucket: "webdev2020-80832.appspot.com",
  messagingSenderId: "593316536658",
  appId: "1:593316536658:web:954811cbc5206e08789a8b",
  measurementId: "G-PB23PH6R6B"
};

class Firebase{
    constructor(){
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.state = {
          user: null
        }
    }

    // authStateChanged = ()=>{
    //   let authState = this;
    //   this.auth.onAuthStateChanged(function(client) {
    //     if (client) {
    //       // User is signed in.
    //       // console.log(client);
    //       authState.setState({
    //         user: client
    //       })
    //     } else {
    //       alert("Not signed in!");
    //       // return null;
    //       // No user is signed in.
    //     }
    //   });
    // }

    getCurrentUser = ()=>{
      return this.auth.currentUser;
    }

    userSignUp = (email, password)=>{
        //populate db with user info
        // db.collection('users').add({
        //     email: email,
        //     firstName: '',
        //     lastName: '',
        //     password: password
        // })
        console.log(email);
        return this.auth.createUserWithEmailAndPassword(email,password);
    }

    userLogin = (email, password)=>{
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    userLogout = ()=>{
      alert("signing you out, " + this.auth.firebase.email);
      return this.auth.signOut();
    }

    userPasswordReset = (email)=>{
        return this.auth.sendPasswordResetEmail(email);
    }

    userPasswordUpdate = (password)=>{
        return this.auth.currentUser.updatePassword(password);
    }

}

export default Firebase;
