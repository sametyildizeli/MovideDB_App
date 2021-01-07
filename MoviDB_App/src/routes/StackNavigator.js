import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../screens/SignInScreen';
import SignUp from '../screens/SignUpScreen';
import Home from '../screens/HomeScreen';
import LogOut from '../screens/LogoutScreen';
import UserScreen from '../screens/UserScreen';
import DrawerNavigator from '../routes/DrawerNavigator';
import TabNavigator from '../routes/TabNavigator';
const myStack= createStackNavigator();


const MainStack=(loggedIn,Username)=>{

  return(
    <myStack.Navigator name="MainStack" screenOptions={{headerShown:false}}>
       <myStack.Screen name='UserDrawer' 
        children={() => (
          <DrawerNavigator
          loggedIn={loggedIn}
          Username={Username}
          />
      )} />
    </myStack.Navigator> 
  );

}

const GuestStack = () => {
    return (
      <myStack.Navigator name='Guest Stack'screenOptions={{headerShown:false}}>
        <myStack.Screen name ='Home'  component={Home}/>
        <myStack.Screen name="Sign In" component={SignIn} />
        <myStack.Screen name="Sign Up" component={SignUp} />
        <myStack.Screen name="User Screen" component={UserScreen} />
        <myStack.Screen name="MainStack" component={MainStack}/>
        </myStack.Navigator>
    );
  };

  const UserStack = () => {     //
    return (
      <myStack.Navigator name='User Stack'screenOptions={{headerShown:false}}>
        <myStack.Screen name ='Home'  component={TabNavigator}/>
        <myStack.Screen name ='Logout'  component={LogOut}/>
        <myStack.Screen name="MainStack" component={MainStack}/>
        </myStack.Navigator>
    );
  };

  export {GuestStack,UserStack,MainStack}


  