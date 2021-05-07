import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState,useEffect, useContext} from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Announcement from '../components/Announcement';
import BottomBar from '../components/BottomBar';
import TopBar from '../components/TopBar';
import { UserContext } from '../context/UserContext';


function AnnouncementsScreen(props) {

    const [data, setData] = useState();
    const [count, setCount] = useState(0);
    //console.log("state: " + state.data[0].title)
    const [contextRoles,setContextRoles] = useContext(UserContext);//context is global
    const valueContext = JSON.stringify(contextRoles)
    //console.log('====================================');
    //console.log(valueContext);
    //console.log('====================================');
    // Also can save this just using {valueContext}
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
          //console.log(responseJson)
          setData(responseJson)
          let size = Object.keys(responseJson).length
          let temp = []
          for(let i=size-1; i>=0; i--){
              //console.log("adding: " + responseJson[i][3])
              //console.log(size)
            temp[size-i-1] = {title: "("+responseJson[i][1]+") "+responseJson[i][2], text: responseJson[i][3]}
          }
          //console.log("temp = " + temp[3].title)
          setData(temp)
          
        
          
      })
      .catch((error) => {
          console.error(error);
      });
      },[]);
    if(data){
        //console.log("data = " + data[0].title)
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
                            renderItem={({item}) => <Announcement  title = {item.title} text = {item.text}/>}
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