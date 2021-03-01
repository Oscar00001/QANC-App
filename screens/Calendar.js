import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


import {Text} from "react-native";


function Calendar(props) {
    return (
        <View style={styles.background}>
            <Text style = {styles.textStyle}>Calendar Test</Text>
            <Button onPress={() => props.navigation.goBack()} title="Go back home" />
        </View>
    );
}

export default Calendar;


const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: '#2d0f4c',
        alignItems: 'center',
        justifyContent: 'center',

    },
    textStyle: {
        color: '#f1cf5b',
        fontSize: 24,
        textAlign: 'center',
    },
})