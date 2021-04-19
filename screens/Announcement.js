import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, View, StyleSheet,TouchableOpacity,Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import {Text} from "react-native";
import Announcement from '../components/Announcement';

function Announcements(props) {
    return (
        <View style={styles.background}>
            <TouchableOpacity  onPress={props.navigation.openDrawer} style={styles.topBar} activeOpacity={0.5}>
                    <Image
                    source={require('../assets/favicon.png')}
                    style={null}
                    />
                </TouchableOpacity>
        {/* Today's Ann*/}
            <View style = {styles.taskWrapper}>
                <Text style = {styles.sectionTitle}>Announcement</Text> 
                <View style = {styles.Notitems}>
                    {/* This is where all of our annoucements go!*/}
                    <Announcement text = {'Accouncment 1'}/>
                    <Announcement text = {'Accouncment 2'}/>
                </View>
            </View>
            <Button onPress={() => props.navigation.navigate('Calendar')} title="Go to Calendar" />
        </View>
        

    );
}

export default Announcements;


const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
    background:{
        flex: 1,
        //9370DB , 2d0f4c
        backgroundColor: '#2d0f4c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        color: '#f1cf5b',
        fontSize:5,
        textAlign: 'center',
    },
    taskWrapper : {
        paddingTop: 80,
        paddingHorizontal:20,
    },
    sectionTitle:{
        color: '#f1cf5b',
        fontSize:50,
        fontWeight: 'bold',
    },
    Notitems:{
        color: '#f1cf5b',
        fontSize: 24,
    },
    
});