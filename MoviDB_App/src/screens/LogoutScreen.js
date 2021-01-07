import React,{useState} from 'react';
import firebase from '../../FirebaseConnection';
import DrawerNavigator from '../routes/DrawerNavigator';
import { Alert } from 'react-native';
import Asyncstorage from '@react-native-community/async-storage';

function loginCheck(check){
    firebase.auth().signOut().then(function() {   }, function(error) {   console.error('Sign Out Error', error); });
    firebase.auth().onAuthStateChanged(function(user){
       if(user==true){
         firebase.auth().signOut();
       }
       else
       {
         //console.log("User not signed in");
       }
    });
    return true;
}
     const remove=async(name)=>{
      try{
          await Asyncstorage.removeItem("Username");
      }
      catch(error){
          alert(error);
      }
  } 
export default function LogOut()
{ 
  const load=async()=>{
    try{
        let name=await Asyncstorage.getItem("Username");
        if(name!==null){
            console.log(name);
            setName(name);
        }
    }
    catch(error)
    {
        Alert.alert(error);
    }
}
const [name,setName]=useState();
load();
    let check=false;
    const user=loginCheck(check);
    if(user){
        remove(name);
        return(
            <DrawerNavigator></DrawerNavigator>
        );
    }
    else{
      Alert.alert("Cikis yapilamadi.");
      return(
      <DrawerNavigator></DrawerNavigator>
      );
    }
}