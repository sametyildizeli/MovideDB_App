import react from 'react';
import { createContext } from 'react';
import firebase from './FireStore';


export const authContext =createContext();

export const AuthProvider = ({children}) =>{
    const [user,setUser]=useState(null);
    return(
        <authContext.Provider value={{
            user,
            setUser,
            login:async(email,password)=>{
                try{
                await firebase.auth().signInWithEmailAndPassword(email,password)
                }catch(e){
                    console.log(e);
                }
            },
            register:async(email,password)=>{
                try{
                await firebase.auth().createUserWithEmailAndPassword(email,password)
                }catch(e){
                    console.log(e);
                }
            },
            logOut:async()=>{
                try{
                await firebase.auth().signOut();
                }catch(e){
                    console.log(e);
                }
            }

        }}
        >
        {children}
        </authContext.Provider>

    );
}
