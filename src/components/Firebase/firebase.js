import app from 'firebase/app';
import 'firebase/auth';

const config = {
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
          app.initializeApp(config);
          this.auth = app.auth();
      }

      userSignUp = (email, password)=>{
          return this.auth.createUserWithEmailAndPassword(email,password);
      }

      userSignIn = (email, password)=>{
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    userSignOut = ()=>{
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
