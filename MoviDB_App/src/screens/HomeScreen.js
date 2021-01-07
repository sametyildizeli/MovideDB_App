import React from 'react'
import {StyleSheet,Text,View,TouchableOpacity} from 'react-native';

export default function HomeScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>MovieDB App</Text>
            <TouchableOpacity style={styles.buttons} onPress={()=>navigation.navigate('Sign In')}>
                <Text style={styles.textStyle}>Login</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={()=>navigation.navigate('Sign Up')}>
                <Text style={styles.textStyle} >Sign Up</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={()=>navigation.navigate('User Screen')}>
                <Text style={styles.textStyle} >Continue As A Guest</Text> 
            </TouchableOpacity>
        </View>
    );
}



const styles =StyleSheet.create(
{
    container:{
        flex:1,
        backgroundColor:'#223343',
    },
    title:
    {
        color:'#fff',
        fontSize:32,
        fontWeight:'700',
        textAlign:'center',
        marginBottom:'30%',
        paddingTop:100,
        paddingHorizontal:70,
    },
    buttons:{
        width:'70%',
        alignSelf:'center',
        alignItems:'center',
        marginBottom:30,
        backgroundColor:"#FFFF",
        borderRadius:5,
        height:50,
        justifyContent:'center',
        backgroundColor:'#708090' //'#708090',  //C0C0C0

    },
    textStyle:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'600',
        color:'#fff',
    }
});