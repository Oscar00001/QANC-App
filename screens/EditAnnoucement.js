import * as React from 'react';
import { useState } from 'react';
import {View, StyleSheet, Text, Button, TextInput, Dimensions} from 'react-native';

import BottomBar from '../components/BottomBar';
import TopBar from '../components/TopBar';
import moment from 'moment';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';




const screenWidth = Dimensions.get('window').width;

function AdminScreen(props) {

    const [id, setID] = useState('default');
    const [title, setTitle] = useState('default');
    const [details, setDetails] = useState('default');
    const [groups, setGroups] = useState('default');
    const [dateTimePosted, setDateTimePosted] = useState('default');
    let groupsString = [0,0,0,0,0]
    let groupsBits = [0,0,0,0,0]

    

    const buttonHandeler = () => {
        
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
                        // Accept: 'application/json',
                        'x-api-key': 'Ihw1k1jwsv19i9LgRDpKF2lqBeHijkJZ1f6peUMF',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "AnnouncementID": id,
                        "Group": groupsBitString,
                        "AnnouncementTitle": title,
                        "AnnouncementDescription": details,
                        "PostedDateTime": dateTimePosted,
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

            {/* This is where all of our content will go!*/}


       
        {/* <Text style = {styles.textStyle}>My title is {title}</Text> */}
        
        <Text style = {styles.textStyle}>Enter Announcement ID</Text>
        <TextInput 
            style={styles.textInput}
            placeholder={'Enter Annoucement ID'}
            onChangeText={(val)=>setID(val)}
            keyboardType='numeric'
        />

        <Text style = {styles.textStyle}>Enter New Announcement Title</Text>
        <TextInput 
            style={styles.textInput}
            placeholder={'Annoucement Title'}
            onChangeText={(val)=>setTitle(val)}
        />

        <Text style = {styles.textStyle}>Enter New Announcement Details</Text>
        <TextInput 
            style={styles.textInput}
            placeholder={'Announcement Details'}
            onChangeText={(val)=>setDetails(val)}
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
        fontSize:14,
      
    },

    buttonContainer:{
        borderRadius:10,
        padding: 20,
        margin: 0,
        // alignSelf: 'flex-end',
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36,
        zIndex: 999,

        // backgroundColor:'#1E6738',
        // borderWidth: 5,
        // borderRadius: 15,   

    },
    dropDownStyle:{
        height:40,
        paddingHorizontal:8,
        margin:10,

    },

})