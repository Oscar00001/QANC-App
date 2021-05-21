import * as React from 'react';
import { useState } from 'react';
import {View, StyleSheet, Text, Button, TextInput, Dimensions} from 'react-native';

import BottomBar from '../components/BottomBar';
import TopBar from '../components/TopBar';
import moment from 'moment';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import AdminBottomBar from '../components/AdminBottomBar';




const screenWidth = Dimensions.get('window').width;

function AdminScreen(props) {
    // fetch('https://eo9260z47k.execute-api.us-east-2.amazonaws.com/default/addAnnouncement')
    // .then((response) => response.json())
    // .then((responseJson) => {
    //     console.log(responseJson);
    // })


    const [pass, setPass] = useState('default');
    

    
    
    const buttonHandeler = () => {
        try {
            fetch('https://eo9260z47k.execute-api.us-east-2.amazonaws.com/default/adminEdit', {
            
            method: 'POST',
            headers: {
                'x-api-key': 'Ihw1k1jwsv19i9LgRDpKF2lqBeHijkJZ1f6peUMF',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "keyword": pass,
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
        <Text style = {styles.textStyle}>Please Enter New Password</Text>
        <TextInput 
            style={styles.textInput}
            placeholder={'Password1234'}
            onChangeText={(val)=>setPass(val)}
        />
        <View style = {styles.buttonContainer}>
            <Button  onPress={buttonHandeler} title='submit'/>
        </View>        
        </View>
        <AdminBottomBar navigation={props.navigation}/>
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
    },

    textStyle:{
        color: '#f1cf5b',
        paddingHorizontal:10,
        paddingTop: 10,
        margin:2,
        fontSize:14,
      
    },

    buttonContainer:{
        borderRadius:10,
        padding: 20,
        margin: 0,
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36, 

    },
    dropDownStyle:{
        height: 40,
        paddingHorizontal:8,
        margin:10,

    },

})