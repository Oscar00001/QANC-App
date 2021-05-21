import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState,useEffect, useContext} from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Announcement from '../components/Announcement';
import BottomBar from '../components/BottomBar';
import TopBar from '../components/TopBar';
import { UserContext } from '../context/UserContext';
import { useNavigation } from '@react-navigation/native';


function AnnouncementsScreen(props) {

    const [data, setData] = useState();
    const [count, setCount] = useState(0);
    const [contextRoles,setContextRoles] = useContext(UserContext);//context is global
    const valueContext = JSON.stringify(contextRoles)
    
    useEffect(() => {
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
          setData(responseJson)
          let size = Object.keys(responseJson).length
          let temp = []
          for(let i=size-1; i>=0; i--){

            temp[size-i-1] = {title: "("+responseJson[i][1]+") "+responseJson[i][2], text: responseJson[i][3], groups: responseJson[i][0]}
          }
          setData(temp)
          
        
          
      })
      .catch((error) => {
          console.error(error);
      });
      },[]);
    if(data){
    }
    


    return (
        <View style={styles.background}>
            <TopBar navigation={props.navigation}/>

            <View style={styles.mainContent}>

                <View style = {styles.announcementsWrapper}>
                <Text style = {styles.sectionTitle}>Announcements</Text> 
                    
                    <View style = {styles.announcementList}>
   
                        <FlatList
                            data = {data}
                            keyExtractor={(x, i) => i.toString()}
                            renderItem={({item}) => <Announcement  title = {item.title} text = {item.text} groups= {item.groups}/>}
                        />

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