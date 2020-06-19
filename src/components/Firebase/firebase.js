import app from 'firebase/app';
import 'firebase/auth';
import { render } from '@testing-library/react';

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

//init firestore
const db = app.firestore();
db.settings({timestampsInSnapshots:true});

//render user doc
function render(doc){
    let email = doc.data().email;
    let firstName = String(doc.data().firstName).toLowerCase();
    let lastName = String(doc.data().lastName).toLowerCase();
    let id = doc.id;
    console.log("ID: " + id);
    console.log("Name: " + firstName.slice(0,1).toUpperCase() + firstName.substr(1) + " " + lastName.slice(0,1).toUpperCase() + lastName.substr(1));
    console.log("Email: " + email);
    console.log("\n");
}

//get user doc via email
function getDoc(email){
    db.collection("users").where('email', '==', email).get().then((snapshot)=>{
        snapshot.docs.forEach(doc=>{
            render(doc);
        })
    });
}

class Firebase{
    constructor(){
        app.initializeApp(config);
        this.auth = app.auth();
    }

    userSignUp = (email, password)=>{
        //populate db with user info
        db.collection('users').add({
            email: email,
            firstName: '',
            lastName: '',
            password: password
        })
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
