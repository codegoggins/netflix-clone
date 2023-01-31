import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import {auth} from './firebase'

const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
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
    <AuthContext.Provider value={{signup,signin,signout}}>
        {children}
    </AuthContext.Provider>
  )
};

export const UserAuth = () => {
    return useContext(AuthContext);
}