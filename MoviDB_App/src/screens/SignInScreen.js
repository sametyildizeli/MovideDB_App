import React,{useState} from 'react'
import {StyleSheet,Text,View,TouchableOpacity,TextInput,Alert} from 'react-native';
import Asyncstorage from '@react-native-community/async-storage';
import firebase from '../../FirebaseConnection';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

const save=async(dataName,name)=>{
    try{
        await Asyncstorage.setItem(dataName,name);
    }
    catch(error){
        alert(error);
    }
} 

export default function SignIn({navigation})
{
    const[username,setUserName]=useState("");
    const[password,setPassword]=useState("");
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            <TextInput placeholder='Username'style={styles.inputStyle} onChangeText={(val)=>setUserName(val)}></TextInput>
            <TextInput secureTextEntry={true} placeholder='Password'style={styles.inputStyle} onChangeText={(val)=>setPassword(val)}></TextInput>
            <TouchableOpacity style={styles.buttons} onPress={()=>LoginControl(username,password,{navigation})}>
                <Text style={styles.textStyle}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}


function LoginControl(username,password,{navigation}){
    if(username!="")
    {
        let passwordCheck=false;
        const user = firebase.firestore().collection("Users").doc(username).get().then(function(doc){
            if(doc.exists){
                if(doc.data().Password==password)
                {
                    Alert.alert("Login successfull.");
                    firebase.auth().signInWithEmailAndPassword(doc.data().E_mail,doc.data().Password);
                    save("Username",username);
                    save("E_mail",doc.data().E_mail);
                    navigation.navigate("MainStack",{loggedIn:true,Username:username});
                    passwordCheck=true;
                }
                else
                {
                    Alert.alert("Wrong password.Try again...");
                }
            }
            else
            {
                Alert.alert("This user does not exits.");
            }
        });
    }
    else
    {
        Alert.alert("Please enter a valid username.");
    }
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
            marginBottom:150,
            paddingTop:100,
            paddingHorizontal:70,
        },
        buttons:{
            width:'50%',
            alignSelf:'center',
            alignItems:'center',
            marginBottom:30,
            backgroundColor:"#FFFF",
            borderRadius:5,
            height:50,
            justifyContent:'center',
            backgroundColor:'#708090',
            color:'#fff',
    
        },
        textStyle:{
            color:'white',
        },
        inputStyle:{
            width:'75%',
            alignSelf:'center',
            flex:0,
            marginBottom:25,
            height:50,
            borderRadius:5,
            backgroundColor:'#708090',
            color:'white',
            textAlign:'center',
            fontSize:20,
        }
    });