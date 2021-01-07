import React,{useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Alert} from 'react-native';
import Asyncstorage from '@react-native-community/async-storage';
import firebase from '../../FirebaseConnection';


export default function Settings({navigation,Username})
{
    const load=async()=>{
        try{
            let name=await Asyncstorage.getItem("Username");
            let e_mail=await Asyncstorage.getItem("E_mail");
            if(name!==null){
                setName(name);
                setMail(e_mail);

            }
        }
        catch(error)
        {
            //Alert.alert(error);
        }
    }
    const [name,setName]=useState();
    const [email,setMail]=useState();
    console.log(email);
    load();
    return(
    <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <Text style={styles.info}>  Username:  {name}</Text>
            <Text style={styles.info}>  E-mail: {email}</Text>  
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
        info:{
            fontSize:20,
            marginTop:20,
            marginBottom:10,
            alignSelf:'flex-start',
            textAlign:'center',
            color:'#fff',

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

