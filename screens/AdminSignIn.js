import * as React from 'react';
import { useState,useEffect } from 'react';
import {View, StyleSheet, Text, Button, TextInput, KeyboardAvoidingView,TouchableOpacity,Dimensions} from 'react-native';

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
        <KeyboardAvoidingView behavior={'position'}>
        <TextInput 
            style={styles.textInput}
            placeholder={'Password1234 '}
            secureTextEntry={true}
            onChangeText={(val)=>setPassword(val)}
        />
        </KeyboardAvoidingView>


        <View style = {styles.buttonContainer}>
            <TouchableOpacity onPress = {buttonHandeler}>
              <Text style = {styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
{/* <KeyboardAvoidingView style = {styles.buttonContainer}>
<TouchableOpacity onPress = {buttonHandeler}>
              <Text style = {styles.buttonText}>Submit</Text>
            </TouchableOpacity>

</KeyboardAvoidingView> */}





         {/* This is where all of our content will go!*/}
        


        </View>
        <BottomBar navigation={props.navigation}/>
    </View>
    );
}export default AdminScreen;


const styles = StyleSheet.create({
    background:{
        flex: 1,
        // justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#2d0f4c',
    },
    mainContent: {
        flex: 8,
        //  alignItems: 'center',

    },

    textInput: {
        borderRadius:80,
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
        borderRadius:80,
        padding: 12,
        alignSelf: 'center',
        height: 50,   
        backgroundColor: '#f1cf5b',
        justifyContent: 'center',
        flexDirection: 'column',
        bottom:10,
        position: 'absolute',
        width:200,

    },
    buttonText: {
		color: '#aD4042', // CD6012 // 3C1A00
		fontSize: 18,
        padding: 1, // makes it look like a real button
        position: 'relative',
        flexDirection: 'column',
        marginBottom:10,
        justifyContent: "center",
        alignSelf: "center",
        textAlignVertical: "center",

	}, 
})