import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Home from '../screens/HomeScreen';
import LogOut from '../screens/Logout';
import UserScreen from '../screens/UserScreen';
import TabNavigation from "./TabNavigation";
import {UserDrawerNavigator,GuestDrawerNavigator} from '../routes/DrawerNavigation';

const myStack= createStackNavigator();


const AuthStateNavigator = () => {
  return (
    <myStack.Navigator name='AuthStackNavigator'screenOptions={{headerShown:false}}>
      <myStack.Screen name ='Home'  component={Home}/>
      <myStack.Screen name="Sign In" component={SignIn} />
      <myStack.Screen name="Sign Up" component={SignUp} />
      <myStack.Screen name='User Screen' component={TabNavigation}/>
      <myStack.Screen name='DrawerNavigator' component={UserDrawerNavigator}/>
      </myStack.Navigator>
  );
};
const AppStackNavigator = () => {
  return (
    <myStack.Navigator initialRouteName="AppStackNavigator" screenOptions={{headerShown:false}}>
      <myStack.Screen name="Login" component={Login} />
      <myStack.Screen name="Register" component={Register} />
      <myStack.Screen name="HOME" component={Home} />
    </myStack.Navigator>
  );
};

  const ProfileStackNavigator = () => {
    return (
      <myStack.Navigator options={{swipeEnabled:true}}initialRouteName="ProfileStackNavigator" screenOptions={{headerShown:false}}>
        <myStack.Screen name="Search Movies" component={UserScreen} />
        <myStack.Screen name="Home" component={Home}/>
      </myStack.Navigator>
    );
  };
  
  const LogoutStackNavigator = () => {
    return (
      <myStack.Navigator screenOptions={{headerShown:false}}>
        <myStack.Screen name="Log Out" component={LogOut} />
        <myStack.Screen name="Home" component={Home} />
      </myStack.Navigator>
    );
  };


  export { AuthStateNavigator, LogoutStackNavigator, AppStackNavigator,ProfileStackNavigator };

