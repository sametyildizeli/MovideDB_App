import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Home from '../screens/HomeScreen';
import LogOut from '../screens/Logout';
import UserScreen from '../screens/UserScreen';
const myStack= createStackNavigator();

const AuthStateNavigator = () => {
    return (
      <myStack.Navigator screenOptions={{headerShown:false}}>
        <myStack.Screen name ='Home'  component={Home}/>
        <myStack.Screen name="Sign In" component={SignIn} />
        <myStack.Screen name="Sign Up" component={SignUp} />
        <myStack.Screen name="User Screen" component={UserScreen} />
        <myStack.Screen name="Log Out" component={LogOut} />
      </myStack.Navigator>
    );
  };
const AppStackNavigator = () => {
    return (
      <myStack.Navigator screenOptions={{headerShown:false}}>
        <myStack.Screen name="Login" component={Login} />
        <myStack.Screen name="Register" component={Register} />
        <myStack.Screen name="HOME" component={Home} />
      </myStack.Navigator>
    );
  };
  const ProfileStackNavigator = () => {
    return (
      <myStack.Navigator screenOptions={{headerShown:false}}>
        <myStack.Screen name="Search Movies" component={UserScreen} />

      </myStack.Navigator>
    );
  };
  const LogoutStackNavigator = () => {
    return (
      <myStack.Navigator screenOptions={{headerShown:false}}>
        <myStack.Screen name="Login" component={Login} />
        <myStack.Screen name="Register" component={Register} />
        <myStack.Screen name="HOME" component={Home} />
      </myStack.Navigator>
    );
  };

  export { AuthStateNavigator, LogoutStackNavigator, AppStackNavigator,ProfileStackNavigator };

