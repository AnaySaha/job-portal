import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../../firebase/firebaseinit';
import axios from 'axios';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect ( () =>{
     const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('state captured', currentUser?.email);
            if (currentUser?.email) {
                const user = { email: currentUser.email };
                axios.post('https://job-portal-server-iota-peach.vercel.app/jwt', user, {
                    withCredentials: true })
                    .then( res => {
                        console.log('login token', res.data);
                        setLoading(false);
                    })

            }

            else {
                axios.post('https://job-portal-server-iota-peach.vercel.app/logout', {}, {
                    withCredentials: true })

                    .then( res => {
                        console.log('logout', res.data);
                        setLoading(false);
                    })

            }
       
           
        })
        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser
    }

  
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;