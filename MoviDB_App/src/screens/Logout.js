
import {Alert} from 'react-native';
import firebase from '../../FireStore';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';


export default function LogOut({navigation})
{
    function logOut()
    {
        firebase.auth().signOut();
    }
    
    if(async()=>await logOut())
    {
        Alert.alert("Cikis yapildi");
        return(
            null
        );
    }
    else
    {
        Alert.alert("Cikis yapilamadi");
    }
    //navigation.navigate('Home');

}