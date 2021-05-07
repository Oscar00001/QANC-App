import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Announcement from '../components/Announcement';
import BottomBar from '../components/BottomBar';
import TopBar from '../components/TopBar';

function AnnouncementsScreen(props) {


    fetch('https://eo9260z47k.execute-api.us-east-2.amazonaws.com/default/getAnnouncements', {
        
        method: 'GET',
        headers: {
            // Accept: 'application/json',
            'x-api-key': 'kezCnfAATA2cs6bHh39sg4IEXvPkfnaM220seEk2',
            'Content-Type': 'application/json',
        },       
    })
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson);
    })
    .catch((error) => {
        console.error(error);
    });



    return (
        <View style={styles.background}>
            <TopBar navigation={props.navigation}/>

            <View style={styles.mainContent}>

                <View style = {styles.announcementsWrapper}>
                <Text style = {styles.sectionTitle}>Announcements</Text> 
                    
                    <View style = {styles.announcementList}>

                        <Announcement text = {'Accouncment 1'}/>
                        <Announcement text = {'Accouncment 2'}/>
                        <Announcement text = {'Accouncment 3'}/>
                        <Announcement text = {'Accouncment 4'}/>

                    </View>
                </View>
            </View>

            <BottomBar/>
        </View>
    );
}
export default AnnouncementsScreen;


const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: '#2d0f4c',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    announcementsWrapper : {
        paddingTop: 20,
        paddingHorizontal:20,
    },
    announcementList:{
        color: '#f1cf5b',
        fontSize: 24,
    },
    sectionTitle:{
        color: '#f1cf5b',
        fontSize:45,
        fontWeight: 'bold',
    },
    mainContent: {
        flex: 8,
    },
});