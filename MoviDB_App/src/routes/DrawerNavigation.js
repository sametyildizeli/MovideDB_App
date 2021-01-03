import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import LogOut from '../screens/Logout';

import {AuthStateNavigator,ProfileStackNavigator} from '../routes/StackNavigation';
const drawer = createDrawerNavigator();
const GuestDrawerNavigator = () => {
    return (
        <drawer.Navigator initialRouteName="Home">
            <drawer.Screen options={{swipeEnabled:false}}name='MainMenu' component={AuthStateNavigator}/>
        </drawer.Navigator>
    );
  };
  const UserDrawerNavigator = () => {
    return (
        <drawer.Navigator initialRouteName="User Screen">
            <drawer.Screen name='User Screen' component={ProfileStackNavigator}/>
            <drawer.Screen name="Log out." component={LogOut} />
        </drawer.Navigator>
    );
  };

  export {UserDrawerNavigator,GuestDrawerNavigator}