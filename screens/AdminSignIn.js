import * as React from 'react';
import { useState,useEffect } from 'react';
import {View, StyleSheet, Text, Button, TextInput, Dimensions} from 'react-native';

import BottomBar from '../components/BottomBar';
import TopBar from '../components/TopBar';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Feather';


const screenWidth = Dimensions.get('window').width;

function AdminScreen(props) {


    const buttonHandeler = () => {

        try {
                fetch('https://eo9260z47k.execute-api.us-east-2.amazonaws.com/default/adminTrigger', {
                
                method: 'POST',
                headers: {
                    'x-api-key': 'Ihw1k1jwsv19i9LgRDpKF2lqBeHijkJZ1f6peUMF',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "keyword": "testfromapp1"
                })
            })
        } catch (e) {
            console.log(e)
            throw(e)
        }
        
    }
    return (
        <View style={styles.background}>
        <TopBar navigation={props.navigation}/>
        <View style={styles.mainContent}>


        

        <Text style = {styles.textStyle}>Please Enter Password to sign-in</Text>
        <TextInput 
            style={styles.textInput}
            placeholder={'Password1234'}
            onChangeText={(val)=>setTitle(val)}
        />

        <View style = {styles.buttonContainer}>
            <Button  onPress={buttonHandeler} title='Submit'/>
        </View>
         {/* This is where all of our content will go!*/}
        
        </View>
        <BottomBar navigation={props.navigation}/>
    </View>
    );
}export default AdminScreen;



const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: '#2d0f4c',
    },
    mainContent: {
        flex: 8,
        
    },

    textInput: {
        backgroundColor: '#ffffff',
        borderColor:'#222',
        color: '#000',
        borderWidth:4,
        padding:8,
        margin:10,
        alignItems: 'stretch',
        //width: {screenWidth} ,    
    },

    textStyle:{
        color: '#f1cf5b',
        paddingHorizontal:10,
        paddingTop: 10,
        margin:2,
        fontSize:18,
        textAlign:'center',
      
    },

    buttonContainer:{
        borderRadius:10,
        padding: 20,
        margin: 0,
        // alignSelf: 'flex-end',
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36,

        // backgroundColor:'#1E6738',
        // borderWidth: 5,
        // borderRadius: 15,   

    },
})