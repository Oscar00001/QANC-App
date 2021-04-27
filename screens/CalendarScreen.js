import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Agenda} from 'react-native-calendars';

import BottomBar from '../components/BottomBar';
import TopBar from '../components/TopBar';


function CalendarScreen(props) {

    fetch('https://eo9260z47k.execute-api.us-east-2.amazonaws.com/default/getEvent', {
        
        method: 'GET',
        headers: {
            // Accept: 'application/json',
            'x-api-key': 'kezCnfAATA2cs6bHh39sg4IEXvPkfnaM220seEk2',
            'Content-Type': 'application/json',
        },       
    })
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson);
    })
    .catch((error) => {
        console.error(error);
    });

    return (
        <View style={styles.background}>
            <TopBar navigation={props.navigation}/>

            <View style={styles.mainContent}>
                <Agenda
                    

                    theme={{
                        todayTextColor: "#57B9BB",
                        selectedDayTextColor: "pink",
                        selectedDayBackgroundColor: "red",
                    }}

                    items={{
                        '2021-03-22': [{name: 'item 1 - any js object'}],
                        '2021-03-23': [{name: 'item 2 - any js object', height: 80}],
                        '2021-03-24': [],
                        '2021-03-25': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
                    }}

                    markedDates={{
                        
                        '2021-03-22': {startingDay: true, endingDay: true, color: '#2d0f4c', textColor: '#f1cf5b'},
                        '2021-03-23': {startingDay: true, endingDay: true, color: '#2d0f4c', textColor: '#f1cf5b'},
                        '2021-03-24': {startingDay: true, endingDay: true, color: '#2d0f4c', textColor: '#f1cf5b'},
                        '2021-03-28': {startingDay: true, endingDay: true, color: '#2d0f4c', textColor: '#f1cf5b'},
                    }}

                    markingType={'period'}  

                />      
            </View>
            <BottomBar/>
        </View>
    );
}
export default CalendarScreen;


const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: '#2d0f4c',
    },
    mainContent: {
        flex: 8,
    },
})




// To set Agenda to be open by default you must:
//  In module/src/agenda/index.js 
//  replaced  tis.setScrollPadPosition(this.initialScrollPadPosition(), false); 
//  with 
//  this.setScrollPadPosition(10, true);
//  this.enableCalendarScrolling();