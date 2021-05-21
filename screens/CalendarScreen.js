import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Agenda} from 'react-native-calendars';

import BottomBar from '../components/BottomBar';
import TopBar from '../components/TopBar';
import moment, * as moments from 'moment';
import {useState} from 'react';
import { useEffect } from 'react';
import _ from 'lodash';
import { useNavigation } from '@react-navigation/native';

//console.log("got here 1")
function CalendarScreen(props) {
    var count;
    var response;
    const [items,setItems] = useState({});
    
    const CALENDAR_ID = 'qancinc@gmail.com';
    const API_KEY = 'AIzaSyBEzBUuhCcQ-UR0-q8oyMmSzSAJZBMHu0k';
  
    const beginDate = moment();

    useEffect(() => {
        fetch(`https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&timeMin=${beginDate.toISOString()}&maxResults=45&singleEvents=true&orderBy=startTime`, {
          method: 'GET',
          headers: {
              // Accept: 'application/json',
              'x-api-key': 'kezCnfAATA2cs6bHh39sg4IEXvPkfnaM220seEk2',
              'Content-Type': 'application/json',
          },       
      })
      
      .then((response) => response.json())
      .then((responseJson) => {
          response = responseJson.items;
          count = Object.keys(responseJson.items).length;
  
      })
      .catch((error) => {
          console.error(error);
      });
      },[]);


const loadItems = (day) => {

    setTimeout(() => {
        

        for (let i = 0; i < count; i++) {
            //var beginDateYear = response[i][3].substring(0,4)
            //var beginDateMonth = response[i][3].substring(5,7)
            //var beginDateDay = response[i][3].substring(8,10)
            // Prevoiusly we had  response.items[i]
            var beginDate = response[i].start.dateTime.substring(0,10)

            //console.log("beginDate: " + beginDate)
            var unixtime = timeToString(moment(new Date(beginDate)));//.format('YYYY-MM-DD');
            //console.log("unixtime: " + unixtime)
            const time = day.timestamp + i * 24 * 60 * 60 * 1000;
            const strTime = timeToString(time);
            //console.log("unixtime should look like: " + strTime)

            var summary = response[i].summary
            //strTime = '2021-04-25'
            //console.log("time = " + time)
            //console.log("strTime = " + strTime)
            //console.log("unixime = " + unixtime)
            if (!items[unixtime]) {
                items[unixtime] = [];
                items[unixtime].push({
                    marked: true,
                    name: summary,//response[i][1],
                    //description: "This is a second test"//response[i][2]
                });
            }
        }
      const newItems = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
}


const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };

  const renderItem = (item) => {
    return (
        <View>
            <Text>{item.name}</Text>
        </View>
    );
};
// converting that to show that it changed it to milli. This means converting it 
// 
    return (
        <View style={styles.background}>
            <TopBar navigation={props.navigation}/>

            <View style={styles.mainContent}>
                <Agenda
                    renderItem = {renderItem}

                    theme={{
                        todayTextColor: "#57B9BB",
                        selectedDayTextColor: "pink",
                        selectedDayBackgroundColor: "red",
                    }}

                    items={ items}
                    loadItemsForMonth = {loadItems} 
                        // '2021-03-22': [{name: 'item 1 - any js object'}],
                        // '2021-03-23': [{name: 'item 2 - any js object', height: 80}],
                        // '2021-03-24': [],
                        // '2021-03-25': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
                    //}

                    // markedDates={{
                        
                    //     '2021-03-22': {startingDay: true, endingDay: true, color: '#2d0f4c', textColor: '#f1cf5b'},
                    //     '2021-03-23': {startingDay: true, endingDay: true, color: '#2d0f4c', textColor: '#f1cf5b'},
                    //     '2021-03-24': {startingDay: true, endingDay: true, color: '#2d0f4c', textColor: '#f1cf5b'},
                    //     '2021-03-28': {startingDay: true, endingDay: true, color: '#2d0f4c', textColor: '#f1cf5b'},
                    // }}

                    markingType={'dot'}  

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