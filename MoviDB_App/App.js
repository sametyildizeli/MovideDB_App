import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator, { UserDrawerNavigatior } from './src/routes/DrawerNavigation';
import UserScreen from './src/screens/UserScreen';
import firebase from './FireStore';
import 'firebase/firebase-auth';
import {GuestDrawerNavigator,UserDrawerNavigator} from './src/routes/DrawerNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App (){
  function loginCheck(){
    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
        return true;
        }
        else{
          return false;
        }
    });
  }

  if(async()=>await loginCheck())
  {
    return(
      <NavigationContainer>
          <UserDrawerNavigator></UserDrawerNavigator>
      </NavigationContainer>
    );
  }
  else
  {
    return(
      <NavigationContainer>
              <GuestDrawerNavigator></GuestDrawerNavigator>
      </NavigationContainer>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
