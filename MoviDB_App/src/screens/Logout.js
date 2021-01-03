import React from 'react'
import {StyleSheet,Text,View,TouchableOpacity} from 'react-native';

import firebase from '../../FireStore';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';


export default function LogOut({navigation})
{
    function logOut()
    {
        firebase.auth.signOut();
    }
    async()=>await logOut();
    
    navigation.navigate('Home');
    return(
        null
    );
}