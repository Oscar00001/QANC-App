import * as React from 'react';
import { useState, useEffect } from 'react';
import {View, StyleSheet, Text, Button, TextInput,TouchableOpacity, Dimensions} from 'react-native';

import BottomBar from '../components/BottomBar';
import TopBar from '../components/TopBar';
import moment from 'moment';
import DropDownPicker from 'react-native-dropdown-picker';//npm install react-native-dropdown-picker

import Icon from 'react-native-vector-icons/Feather';
import AdminBottomBar from '../components/AdminBottomBar';
import { useNavigation } from '@react-navigation/native';

import vector from 'react-native-vector-icons';


const screenWidth = Dimensions.get('window').width;

function AdminScreen(props) {
    // fetch('https://eo9260z47k.execute-api.us-east-2.amazonaws.com/default/addAnnouncement')
    // .then((response) => response.json())
    // .then((responseJson) => {
    //     console.log(responseJson);
    // })

    const [PhoneIDs, setPhoneIDs] = useState([]);
    const [groups, setGroups] = useState('default')
    const [title, setTitle] = useState('default');
    const [details, setDetails] = useState('default');
    const [dateTimePosted, setDateTimePosted] = useState('default');
    let groupsString = [0,0,0,0,0]
    let groupsBits = [0,0,0,0,0]
    const navigation = useNavigation();


    const printPhoneIDs = () => {
        console.log(PhoneIDs)
    }
    
    
    const buttonHandeler = () => {
        
        let temp = []


        /////////////////////////////
        ///// Get all Phone IDs /////
        /////////////////////////////
        try {
            fetch('https://eo9260z47k.execute-api.us-east-2.amazonaws.com/default/phoneTrigger', {
            method: 'GET',
            headers: {
                // Accept: 'application/json',
                'x-api-key': '5kvvjIHoeq9ZMcMrBtQzFaPcULiq8g9D8Biki7vp',
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((responseJson) => {
            let size = Object.keys(responseJson).length
            for(let i=0; i<size; i++){
                temp[i] = responseJson[i][0]
            }

            //setPhoneIDs(temp)
            console.log('size = ' + size)

            for(let i=0;i<size;i+=100){

                let somePhoneIDs = temp.slice(i,i+99)

                ////////////////////////////////////////////
                ///// POST to push notification server /////
                ////////////////////////////////////////////
                fetch('https://exp.host/--/api/v2/push/send', {
                    method: 'POST',
                    headers: {

                        'host': 'exp.host',
                        'accept': 'application/json',
                        'accept-encoding': 'gzip, deflate',
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        "to": somePhoneIDs, //make this a sub-array of only 100 objects
                        "sound": "default", //IOS only
                        "body": "New Announcement: " + title + ".\n" + details,
                    })
                })
            }

        })
        } catch (e) {
            alert(JSON.stringify(error));
        }

       
        


    
        //////////////////////////
        ///// Set Group bits /////
        //////////////////////////
        for(let i=0;i<groupsString.length;i++){
            if(groupsString[i] == "staff"){groupsBits[0] = 1}
            if(groupsString[i] == "parents"){groupsBits[1] = 1}
            if(groupsString[i] == "participants"){groupsBits[2] = 1}
            if(groupsString[i] == "honorees"){groupsBits[3] = 1}
            if(groupsString[i] == "community"){groupsBits[4] = 1}
        }
        let groupsBitString = "" + groupsBits[0] + groupsBits[1] + groupsBits[2] + groupsBits[3] + groupsBits[4]

        ///////////////////////////////
        ///// Set DateTime Posted /////
        ///////////////////////////////
        var currentDate = moment().utcOffset('-05:00').isDST();
        if (currentDate) {
            currentDate = moment().utcOffset('-05:00').format('YYYY-MM-DD HH:mm:ss');
        }
        else{
            currentDate = moment().utcOffset('-04:00').format('YYYY-MM-DD HH:mm:ss');
        }
        setDateTimePosted(currentDate);
        
        //////////////////////////////////////////////
        ///// Add new announcement to the server /////
        //////////////////////////////////////////////
        try {
            fetch('https://eo9260z47k.execute-api.us-east-2.amazonaws.com/default/newaddannouncement', {
            method: 'POST',
            headers: {
                // Accept: 'application/json',
                'x-api-key': 'kezCnfAATA2cs6bHh39sg4IEXvPkfnaM220seEk2',
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "AnnouncementGroups": groupsBitString,
                    "AnnouncementTitle": title,
                    "AnnouncementDescription": details,
                    "PostedDateTime": dateTimePosted,
                })
            })
        } catch (e) {
            console.log(e)
            throw(e)
        }
        navigation.navigate('Home Page')
    }
    return (
        <View style={styles.background}>
            <TopBar navigation={props.navigation}/>
            <View style={styles.mainContent}>
                <Text style = {styles.textStyle2}>Add Announcement</Text>

                <Text style = {styles.textStyle}>setTitle</Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder={'Add Annoucement Title'}
                    onChangeText={(val)=>setTitle(val)}
                />

                <Text style = {styles.textStyle}>setDetails</Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder={'Add Announcement Details'}
                    onChangeText={(val)=>setDetails(val)}
                    //multiline
                />

                <Text style = {styles.textStyle}>setGroups</Text>
                <DropDownPicker
                        onChangeItem={(value) => groupsString = value}
                        items={[
                                {label: 'Staff', value: 'staff', icon: () => <Icon name="flag" size={18} color="#900" />},
                                {label: 'Parents', value: 'parents', icon: () => <Icon name="flag" size={18} color="#900" />},
                                {label: 'Participants', value: 'participants', icon: () => <Icon name="flag" size={18} color="#900" />},
                                {label: 'Women’s History Month Honorees', value: 'honorees', icon: () => <Icon name="flag" size={18} color="#900" />},
                                {label: 'Audience/Community Members', value: 'community', icon: () => <Icon name="flag" size={18} color="#900" />},

                            ]}
                        placeholder="Select your groups"
                        multiple={true}
                        
                        multipleText="%d groups have been selected."
                        min={0}
                        defaultValue={groups}
                        containerStyle={styles.dropDownStyle}
                    />

                {/* <View style = {styles.buttonContainer}>
                    <Button  onPress={buttonHandeler} title='Submit'/>
                </View> */}
                <View style = {styles.buttonContainer}>
                    <TouchableOpacity onPress = {buttonHandeler}>
                      <Text style = {styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </View>


            </View>
            <AdminBottomBar/>
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
    textStyle2:{
        color: '#f1cf5b',
        paddingHorizontal:10,
        paddingTop: 10,
        margin:2,
        fontSize:30,
        textAlign: 'center',
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
        fontSize:14,
      
    },

    buttonContainer:{
        borderRadius:10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        margin: 0,
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 0,
        zIndex: 999,
    },
    dropDownStyle:{
        height: 40,
        paddingHorizontal:8,
        margin:10,
        //zIndex: -5 
        
        

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
        marginBottom:1,
        justifyContent: "center",
        alignSelf: "center",
        textAlignVertical: "center",

	}, 

})