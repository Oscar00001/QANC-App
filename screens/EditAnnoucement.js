import * as React from 'react';
import { useState, useEffect } from 'react';
import {View, StyleSheet, Text, Button, TextInput, TouchableOpacity,Dimensions} from 'react-native';

import BottomBar from '../components/BottomBar';
import TopBar from '../components/TopBar';
import moment from 'moment';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import AdminBottomBar from '../components/AdminBottomBar';
import { useNavigation } from '@react-navigation/native';


const screenWidth = Dimensions.get('window').width;

function AdminScreen(props) {
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [id, setID] = useState('default');
    const [title, setTitle] = useState('default');
    const [details, setDetails] = useState('default');
    const [groups, setGroups] = useState('default');
    const [test, setTest] = useState("default");
    const [dateTimePosted, setDateTimePosted] = useState('default');
    const [newDetails, setNewDetails] = useState('testtesttest');
    const [selectedAnnouncement, setSelectedAnnouncement] = useState(-1);
    let groupsString = [0,0,0,0,0]
    let groupsBits = [0,0,0,0,0]
  


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
          let size = Object.keys(responseJson).length
          let temp = []
          for(let i=size-1; i>=0; i--){
              let ID = responseJson[i][1]+""
            temp[size-i-1] = {label: responseJson[i][2], value: [responseJson[i][1],responseJson[i][3],responseJson[i][2]], icon: () => <Icon name="flag" size={18} color="#900" />}
          }
          setData(temp)
      }) 
      .catch((error) => {
          console.error(error);
      });
      },[]);

    

    const buttonHandeler = () => {
        console.log(selectedAnnouncement)
        for(let i=0;i<groupsString.length;i++){
            if(groupsString[i] == "staff"){groupsBits[0] = 1}
            if(groupsString[i] == "parents"){groupsBits[1] = 1}
            if(groupsString[i] == "participants"){groupsBits[2] = 1}
            if(groupsString[i] == "honorees"){groupsBits[3] = 1}
            if(groupsString[i] == "community"){groupsBits[4] = 1}
        }
        let groupsBitString = "" + groupsBits[0] + groupsBits[1] + groupsBits[2] + groupsBits[3] + groupsBits[4]
        var currentDate = moment().utcOffset('-05:00').isDST();
        if (currentDate) {
            currentDate = moment().utcOffset('-05:00').format('YYYY-MM-DD HH:mm:ss');
        }
        else{
            currentDate = moment().utcOffset('-04:00').format('YYYY-MM-DD HH:mm:ss');
        }
        setDateTimePosted(currentDate);
        
        try {
                fetch('https://eo9260z47k.execute-api.us-east-2.amazonaws.com/default/editAnnouncement', {
                method: 'POST',
                headers: {
                    'x-api-key': 'Ihw1k1jwsv19i9LgRDpKF2lqBeHijkJZ1f6peUMF',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "AnnouncementID": selectedAnnouncement,
                    "Group": groupsBitString,
                    "AnnouncementTitle": title,
                    "AnnouncementDescription": newDetails,
                    "PostedDateTime": dateTimePosted,
                })
            })
        } catch (e) {
            console.log(e)
            throw(e)
        }
        navigation.navigate('Home Page')
    }

    const deleteButtonHandeler = () => {
        try {
            fetch('https://eo9260z47k.execute-api.us-east-2.amazonaws.com/default/deleteannouncement', {
                method: 'POST',
                headers: {
                    'x-api-key': 'Ihw1k1jwsv19i9LgRDpKF2lqBeHijkJZ1f6peUMF',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "AnnouncementID": selectedAnnouncement,
                })
            })
        } 
        catch (e) {
            throw(e)
        }
        navigation.navigate('Home Page')
    }



    return (
        <View style={styles.background}>
            <TopBar navigation={props.navigation}/>
                <View style={styles.mainContent}>
                    <Text style = {styles.textStyle2}>Edit Announcement</Text>

                    <Text style = {styles.textStyle}>Choose announcement to edit</Text>
                    <DropDownPicker
                        //onChangeItem={([value]) => selectedAnnouncement = "value[0]" }
                        onChangeItem={([value]) =>  {
                            if(value == undefined){
                                setSelectedAnnouncement(-1) 
                                setNewDetails(-1)
                                setTitle(-1)
                            }
                            else{
                                setSelectedAnnouncement(value[0] + "") 
                                setNewDetails(value[1]+"")
                                setTitle(value[2]+"")
                            }
                            
                            
                        }}
                        items = {data}
                        placeholder="Announcement Title"
                        multiple={true}
                        max={1}
                        min={0}
                        defaultValue={test}
                        containerStyle={styles.dropDownStyle}
                    />

                    <Text style = {styles.textStyle}>Enter New Announcement Details</Text>
                    <TextInput 
                        style={styles.textInput}
                        placeholder={newDetails}
                        defaultValue = {newDetails}
                        onChangeText={(val)=>setNewDetails(val)}
                        multiline
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

            {/* Spacer */}
            <View style={{flex:3}}></View> 
            
            {/* Submit Button
            <View style = {styles.submitButtonContainer}>
                <Button  
                onPress={buttonHandeler} 
                title='Submit'/>
            </View> */}

            <View style = {styles.buttonContainer}>
            <TouchableOpacity onPress = {buttonHandeler}>
            <Text style = {styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>

            
            {/* Delete Button
            <View style = {styles.deleteButtonContainer}>
                <Button
                    onPress={deleteButtonHandeler} 
                    title="Delete"
                    color="#ff0000"
                />
            </View> */}

            <View style = {styles.buttonContainerDelete}>
            <TouchableOpacity onPress = {buttonHandeler}>
            <Text style = {styles.buttonTextDelete}>Delete</Text>
            </TouchableOpacity>
        </View>

        </View>

        {/* <AdminBottomBar navigation={props.navigation}/> */}
        <AdminBottomBar navigation={props.navigation}/>
    </View>
    );
}export default AdminScreen;



const styles = StyleSheet.create({
    background:{
        flex: 1,        
        // justifyContent: "center",
        // alignItems: 'center',
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
    textStyle2:{
        color: '#f1cf5b',
        paddingHorizontal:10,
        paddingTop: 10,
        margin:2,
        fontSize:30,
        textAlign: 'center',
    },

    submitButtonContainer:{
        borderRadius:10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        margin: 0,
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 0,
        zIndex: 999,
    },
    deleteButtonContainer:{
        borderRadius:10,
        paddingHorizontal: 20,
        paddingBottom: 20,
        margin: 0,
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 0,
        zIndex: 999,
        
    },
    dropDownStyle:{
        height:40,
        paddingHorizontal:8,
        margin:10,
    },
    buttonContainer:{
        borderRadius:80,
        padding: 12,
        alignSelf: 'center',
        height: 50,   
        backgroundColor: '#f1cf5b',
        justifyContent: 'center',
        flexDirection: 'column',
        bottom:50,
        position: 'absolute',
        width:200,
        marginBottom:10,

    },
    buttonContainerDelete:{
        borderRadius:80,
        padding: 12,
        alignSelf: 'center',
        height: 50,   
        backgroundColor: '#ff0000',
        justifyContent: 'center',
        flexDirection: 'column',
        bottom:0,
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
    buttonTextDelete: {
		color: '#ffffff', // CD6012 // 3C1A00
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