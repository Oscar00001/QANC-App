import * as React from 'react';
import { useState } from 'react';
import {View, StyleSheet, Text, Button, TextInput, Dimensions} from 'react-native';

import BottomBar from '../components/BottomBar';
import TopBar from '../components/TopBar';
import moment from 'moment';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const screenWidth = Dimensions.get('window').width;

//const Example = () => {


function AdminScreen2(props) {
    const [title, setTitle] = useState('default');
    const [details, setDetails] = useState('default');
    const [groups, setGroups] = useState('default');
    const [startDateTime, setStartDateTime] = useState('default');
    const [endDateTime, setEndDateTime] = useState('default');
    const [dateTimePosted, setDateTimePosted] = useState('default');

    const [startDate, setStartDate] = useState("default");
    const [startTime, setStartTime] = useState("default");
    const [endDate, setEndDate] = useState("default");
    const [endTime, setEndTime] = useState("default");


    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [dateTimeMode, setDateTimeMode] = useState("date");
    const [startEndMode, setStartEndMode] = useState("start");
    
    const buildStartDateTime = () => {
        setStartDateTime()
    };

    const buildEndDateTime = () => {

    };


    const showDatePicker = () => {
        setDateTimeMode("date");
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    //handle needs if () for selecting start or end time
    //Fix yellow errors
    const handleConfirm = (userInput) => {


        if(startEndMode == "start"){
            if(dateTimeMode == "date"){
                setStartDate(userInput)
                setDatePickerVisibility(false);
                showTimePicker();
            }else if(dateTimeMode == "time"){
                setStartTime(userInput)
                console.log({startDate})
                setDatePickerVisibility(false);
            }else{
                setDatePickerVisibility(false);
                console.log("dateTimeMode is neither date nor time.")
            }

        }else if(startEndMode == "end"){
            if(dateTimeMode == "date"){
                setEndDate(userInput)
                setDatePickerVisibility(false);
                showTimePicker();
            }else if(dateTimeMode == "time"){
                setEndTime(userInput)
                console.log({endDate})
                setDatePickerVisibility(false);
            }else{
                setDatePickerVisibility(false);
                console.log("dateTimeMode is neither date nor time.")
            }

        }else{
            setDatePickerVisibility(false);
            console.log("startEndMode is neither start nor end.")
        }

        
        console.warn("A date has been picked: ", userInput);
    };

    


    const showTimePicker = () => {
        setDateTimeMode("time");
        setDatePickerVisibility(true);

    };

    const hideTimePicker = () => {
        setDatePickerVisibility(false);
    };

    const buttonHandeler = () => {
        
        var currentDate = moment().utcOffset('-05:00').isDST();
        if (currentDate) {    
            currentDate = moment().utcOffset('-05:00').format('YYYY-MM-DD HH:mm:ss');
        }
        else{
            currentDate = moment().utcOffset('-04:00').format('YYYY-MM-DD HH:mm:ss');
        }
        setDateTimePosted(currentDate);
        
            try {
                 fetch('https://eo9260z47k.execute-api.us-east-2.amazonaws.com/default/addEvent', {
                    
                    method: 'POST',
                    
                    headers: {
                        'x-api-key': 'kezCnfAATA2cs6bHh39sg4IEXvPkfnaM220seEk2',
                        // Accept: 'application/json',
                        'Content-Type': 'application/json',

                    },
                    body: JSON.stringify({
                        "EventID": 0,
                        "EventName": title,
                        "EventDescription": details,
                        "groups": groups,
                        "startDateTime": {dateTimePosted},
                        "endDateTime": {dateTimePosted},
                        

                    })
                
                })
            } catch (e) {
                console.log(e)
            }
        
    }
    return (
        <View style={styles.background}>
        <TopBar navigation={props.navigation}/>
        <View style={styles.mainContent}>

            {/* This is where all of our content will go!*/}


       
        {/* <Text style = {styles.textStyle}>My title is {title}</Text> */}
        

        <Text style = {styles.textStyle}>setTitle</Text>
        <TextInput 
            style={styles.textInput}
            placeholder={'Add Event Title'}
            onChangeText={(val)=>setTitle(val)}
        />

        <Text style = {styles.textStyle}>setDetails</Text>
        <TextInput 
            style={styles.textInput}
            placeholder={'Add Event Details'}
            onChangeText={(val)=>setDetails(val)}
            multiline
        />

        <Button title="Select start date and time" onPress={showDatePicker} />
        <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode={dateTimeMode}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
        />

        <Text style = {styles.textStyle}>setGroups</Text>
        <DropDownPicker
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
            // max={20}
      

            defaultValue={groups}
            containerStyle={styles.dropDownStyle}
            // itemStyle={{
            //     justifyContent: 'flex-start'
            // }}
            // onChangeItem={item => this.setState({
            //     countries: item // an array of the selected items
            // })}
        />
       

       
    


        <View style = {styles.buttonContainer}>
            <Button  onPress={buttonHandeler} title='submit'/>
        </View>
         {/* This is where all of our content will go!*/}
        
        </View>
        <BottomBar navigation={props.navigation}/>
    </View>
    );
}export default AdminScreen2;



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
