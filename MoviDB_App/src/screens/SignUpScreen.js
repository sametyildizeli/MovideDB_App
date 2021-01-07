import React,{useState} from 'react'
import {StyleSheet,Text,View,TextInput,TouchableOpacity, Alert} from 'react-native'
import firebase from '../../FirebaseConnection';


export default function SignUp({navigation})
{
    const save=async(dataName,name)=>{
        try{
            await Asyncstorage.setItem(dataName,name);
        }
        catch(error){
            alert(error);
        }
    } 
    const[firstname,setFirstName]=useState("");
    const[lastname,setLastName]=useState("");
    const[e_mail,setEmail]=useState("");
    const[username,setUserName]=useState("");
    const[password,setPassword]=useState("");
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <TextInput placeholder='First Name'style={styles.inputStyle} onChangeText={(val)=>setFirstName(val)}></TextInput>
            <TextInput placeholder='Last Name'style={styles.inputStyle} onChangeText={(val)=>setLastName(val)}></TextInput>
            <TextInput placeholder='E-mail'style={styles.inputStyle} onChangeText={(val)=>setEmail(val)}></TextInput>
            <TextInput placeholder='Username'style={styles.inputStyle} onChangeText={(val)=>setUserName(val)}></TextInput>
            <TextInput secureTextEntry={true} placeholder='Password'style={styles.inputStyle} onChangeText={(val)=>setPassword(val)}></TextInput>
            <TouchableOpacity style={styles.buttons} onPress={()=>signUp(firstname,lastname,e_mail,username,password,{navigation})}>
                <Text style={styles.textStyle}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}
function signUp(firstname,lastname,e_mail,username,password,{navigation}){
    if(username!="")
    {
        const user = firebase.firestore().collection("Users").doc(username).get().then(function(doc){
            if(!doc.exists){
                firebase.firestore().collection("Users").doc(username).set(
                    {
                        Name : firstname+" "+lastname,
                        E_mail : e_mail,
                        Password:password,
                    }
                );
                firebase.auth().createUserWithEmailAndPassword(e_mail,password);
                Alert.alert("User signed up successfully.");
                save("Username",username);
                navigation.navigate("MainStack",{loggedIn:true,Username:username});
            }
            else
            {
                Alert.alert("This user already exists.");
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
            justifyContent:'center',
        },
        title:
        {
            color:'#fff',
            fontSize:32,
            fontWeight:'700',
            textAlign:'center',
            marginBottom:50,
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