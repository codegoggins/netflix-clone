import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext,useEffect, useState } from "react";
import {auth} from './firebase'

const AuthContext = createContext();

export function AuthContextProvider({children}){
  const [user,setUser] = useState({});

  const signup = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password);
  }

  const signout = () => {
    return signOut(auth);
  }

  const signin = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password);
  }

  useEffect(()=>{
    const unsub = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
    })
    return () => {
        unsub();
    }
  })

  return (
    <AuthContext.Provider value={{signup,signin,signout,user}}>
        {children}
    </AuthContext.Provider>
  )
};

export function UserAuth(){
    return useContext(AuthContext);
}