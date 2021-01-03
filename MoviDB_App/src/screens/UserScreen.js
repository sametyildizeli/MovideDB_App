import React,{useState} from 'react';
import {StyleSheet,Text,View,TextInput,ScrollView,Image,TouchableHighlight,Modal} from 'react-native';
import axios from 'axios';



export default function UserScreen({navigation})
{
    const apiUrl= "http://www.omdbapi.com/?&apikey=ecf1f365";
    const [state,setState] = useState({
        s:"Enter a movie...",
        results:[],
        selected:{},
    });
    const search=()=>{
        axios(apiUrl+"&s="+state.s).then(({data})=>{
            let results = data.Search
            setState(prevState=>{
                return {...prevState, results:results}
            })
        })
    }
    const openMovieInfo=id=>{
        axios(apiUrl+"&i="+id).then(({data})=>{
            let result =data;
            setState(prevState=>{
                return{...prevState,selected:result}
            })
        });
    }
    return(
        <View style={styles.container}>     
            <Text style={styles.title}>MOVIES</Text>
            <TextInput style={styles.searchBox} onChangeText={text=>setState(prevState=>{
                return{...prevState,s:text}
            })}
                        onSubmitEditing={search}
            value={state.s}
            ></TextInput>
            <ScrollView style={styles.scrollView}>
                {state.results.map(result=>{
                    return(
                    <TouchableHighlight key={result.imdbID} onPress={()=>openMovieInfo(result.imdbID)}>
                    <View style={styles.result}>
                                <Image
                                source={{uri:result.Poster}}
                                style={{
                                    width:'100%',
                                    height:300,
                                }}
                                resizeMode='contain'
                                />
                                <Text style={styles.heading}>{result.Title}</Text>
                            </View> 
                            </TouchableHighlight>
                            );
                })}
            </ScrollView>
            <Modal
                animationType="fade"
                transparent={false}
                visible={(typeof state.selected.Title!="undefined")}
                >
                <View style={styles.popup}>
                    <Text style={styles.poptitle}>{state.selected.Title}</Text>
                    <Text style={{marginBottom:20}}>Rating:{state.selected.imdbRating}</Text>
                    <Text>{state.selected.Plot}</Text>
                </View>
                <TouchableHighlight
                onPress={()=>setState(prevState=>{
                    return{...prevState,selected:{}}
                })}
                >
                    <Text style={styles.closeBtn}>Close</Text>
                </TouchableHighlight>
            </Modal>
        </View>
    );
}

const styles =StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#223343',
            paddingTop:20,
        },
        searchBox:{
            paddingTop:'5%',
            fontSize:20,
            fontWeight:'300',
            padding:20,
            width:'100%',
            backgroundColor:'#FFF',
            borderRadius:8,
            marginBottom:'5%',
        },
        heading:
        {
            marginTop:20,
            color:'#fff',
            fontSize:20,
            fontWeight:'700',
            padding:20,
            width:'100%',
            alignSelf:'center',
            backgroundColor:'#708090',
            borderRadius:8,
        },
        title:
        {
            paddingTop:'10%',
            color:'#fff',
            fontSize:32,
            fontWeight:'700',
            textAlign:'center',
            marginBottom:20,
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
        scrollView:{
            flex:1,
            backgroundColor: '#223343',
        },
        result:{
            flex:1,
            width:'100%',
            marginBottom:20,
            //backgroundColor:'pink'//'#223343',
        },
        popup:{
            padding:20,
        },
        poptitle:{
            fontSize:20,
            fontWeight:'700',
            marginBottom:5,
        },
        closeBtn:{
            padding:20,
            fontSize:20,
            color:'#FFF',
            fontWeight:'700',
            backgroundColor:'#708090'
        }


    });