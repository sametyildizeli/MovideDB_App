import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';


const Spinner = () => {

    return (
        <View style = {styles.spinner}>
            <ActivityIndicator color = "#0000ff"/>
        </View>
        )
}

const styles = StyleSheet.create({
    spinner: {
        marginTop:25,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export {Spinner}