import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserScreen from '../screens/UserScreen';
import Settings from '../screens/Settings';
import {StyleSheet} from 'react-native'
const Tab = createBottomTabNavigator();

export default function TabNavigator()
{
    return(
    <Tab.Navigator tabBarOptions={{style:styles.tabStyle,labelStyle:styles.fontStyle,activeTintColor:'#fff',inactiveTintColor:'#000'}}>
        <Tab.Screen name="Home"  component={UserScreen}/>
        <Tab.Screen name="Settings" component={Settings}/>
    </Tab.Navigator>
    );
}

const styles=StyleSheet.create(
{
    tabStyle:{
        backgroundColor:'#C0C0C0',
        textAlign:'center',
    },
    fontStyle:{
        padding:10,
        fontSize:15,
        fontWeight:'600',
        }

}
);
