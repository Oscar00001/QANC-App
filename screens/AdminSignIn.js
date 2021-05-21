import * as React from 'react';
import { useState,useEffect } from 'react';
import {View, StyleSheet, Text, Button, TextInput, Dimensions} from 'react-native';

import BottomBar from '../components/BottomBar';
import TopBar from '../components/TopBar';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';

/*Bryan Doucette & Oscar Dias :)
Sign in page for lambda
*/
const screenWidth = Dimensions.get('window').width;

function AdminScreen(props) {
    const [password, setPassword] = useState('default')
    const navigation = useNavigation();
    const buttonHandeler = () => {

        try {
                fetch('https://eo9260z47k.execute-api.us-east-2.amazonaws.com/default/adminTrigger', {
                method: 'POST',
                headers: {
                    // Accept: 'application/json',
                    'x-api-key': 'Ihw1k1jwsv19i9LgRDpKF2lqBeHijkJZ1f6peUMF',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "keyword": password,
                })
            })
            .then((response) => response.json())
            //If response is in json then in success
            .then((responseJson) => {
                //Success
                if (responseJson == "Correct Password!"){
                    navigation.navigate('Admin Page'); // code we need 
                }
                alert(JSON.stringify(responseJson));
            })
        } catch (e) {
            alert(JSON.stringify(error));
        }
    }
    return (
        <View style={styles.background}>
        <TopBar navigation={props.navigation}/>
        <View style={styles.mainContent}>

            {/* This is where all of our content will go!*/}


       
        {/* <Text style = {styles.textStyle}>My title is {title}</Text> */}
        

        <Text style = {styles.textStyle}>Please Enter Password to sign-in</Text>
        <TextInput 
            style={styles.textInput}
            placeholder={'Password1234'}
            onChangeText={(val)=>setPassword(val)}
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