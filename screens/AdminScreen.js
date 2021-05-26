import * as React from 'react';
import { useState } from 'react';
import {View, StyleSheet, Text, Button, TextInput, Dimensions} from 'react-native';

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


    const [groups, setGroups] = useState('default')
    const [title, setTitle] = useState('default');
    const [details, setDetails] = useState('default');
    const [dateTimePosted, setDateTimePosted] = useState('default');
    let groupsString = [0,0,0,0,0]
    let groupsBits = [0,0,0,0,0]
    const navigation = useNavigation();


    
    
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
        
    }
    return (
        <View style={styles.background}>
        <TopBar navigation={props.navigation}/>
        <View style={styles.mainContent}>
        <Text style = {styles.textStyle2}>Edit Announcement</Text>
            {/* This is where all of our content will go!*/}


       
        {/* <Text style = {styles.textStyle}>My title is {title}</Text> */}
        

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
            // dropDownDirection="TOP"
            // onOpen={() => open = {true}}
            multiple={true}
//                <TouchableOpacity  onPress={() => navigation.navigate('Calendar Page')} style={styles.buttonContainerStyle}>

            // multiple={true}
            // min={0}
            // max={5}
            onChangeItem={(value) => groupsString = value}
            items={[
                    {label: 'Staff', value: 'staff', icon: () => <Icon name="flag" size={18} color="#900" />},
                    {label: 'Parents', value: 'parents', icon: () => <Icon name="flag" size={18} color="#900" />},
                    {label: 'Participants', value: 'participants', icon: () => <Icon name="flag" size={18} color="#900" />},
                    {label: 'Women’s History Month Honorees', value: 'honorees', icon: () => <Icon name="flag" size={18} color="#900" />},
                    {label: 'Audience/Community Members', value: 'community', icon: () => <Icon name="flag" size={18} color="#900" />},

                ]}
                // showArrowIcon={true}
            placeholder="Select your groups"
            // multiple={true}
            open= {false}
            multipleText="%d groups have been selected."
            min={0}

            defaultValue={groups}
            containerStyle={styles.dropDownStyle}
        />
       {/* <Picker
  selectedValue={this.state.language}
  style={{ height: 50, width: 100 }}
  onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker> */}

        


        <View style = {styles.buttonContainer}>
            <Button  onPress={buttonHandeler} title='submit'/>
        </View>
         {/* This is where all of our content will go!*/}
        
        </View>
        {/* <AdminBottomBar navigation={props.navigation}/> */}
        {/* <AdminBottomBar navigation={props.navigation}/> */}
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
    dropDownStyle:{
        height: 40,
        paddingHorizontal:8,
        margin:10,

    },

})