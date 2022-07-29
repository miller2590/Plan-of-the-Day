import React, { createContext, useState, useEffect, useContext } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  getAuth,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { app } from "../firebase-config";

const auth = getAuth(app);

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  // Creates new user in auth and new document in users collection
  // where user is current user ID
  async function signUp(email, password) {
    await createUserWithEmailAndPassword(auth, email, password);
    try {
      const usersRef = await addDoc(collection(db, "users"), {
        user: auth.currentUser.uid,
      });
      console.log("Document wirtten with ID: ", usersRef.id);
    } catch (e) {
      console.log(e.message);
    }
  }

  // Login with cloud function checks users in auth only
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // LogOut is pretty easy to understand, I hope
  function logOut() {
    return signOut(auth);
  }

  // This useEffect tracks the current user state accross the entire
  //app with onAuthStateChanged cloud function
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loading,
    signUp,
    login,
    logOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
