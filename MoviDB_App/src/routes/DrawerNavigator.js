import React,{useState} from 'react';
import { Alert, Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {GuestStack,MainStack,UserStack} from '../routes/StackNavigator';
import Logout from '../screens/LogoutScreen';
import SignIn from '../screens/SignInScreen';
import SignUp from '../screens/SignUpScreen';
import firebase from '../../FirebaseConnection';
import UserScreen from '../screens/UserScreen';
import Asyncstorage from '@react-native-community/async-storage';
import { useEffect } from 'react';

const Drawer=createDrawerNavigator();


export default function DrawerNavigator({loggedIn})
{
    const load=async()=>{
        try{
            let name=await Asyncstorage.getItem("Username");
            if(name!==null){
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
    if(name!=undefined)
    {
        loggedIn=true;
    }
    if(loggedIn==undefined)
    {
        loggedIn=false;
    }
    return(
        <Drawer.Navigator name="DrawerNavigator">
            {loggedIn==false ? (
                <>
                    <Drawer.Screen name="Home" component={GuestStack}/>
                    <Drawer.Screen name="Sign In" component={SignIn}/>
                    <Drawer.Screen name="Sign Up" component={SignUp}/>
                    <Drawer.Screen name="Search Movie" component={UserScreen}/>
                </>
                    ):(
                    <>
                    <Drawer.Screen name="Home" component={UserStack}/>
                    <Drawer.Screen name="Logout" component={Logout}/>
                    </>
            )}
        </Drawer.Navigator>
        );
}
