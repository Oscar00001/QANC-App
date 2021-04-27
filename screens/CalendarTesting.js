import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Agenda} from 'react-native-calendars';

import BottomBar from '../components/BottomBar';
import TopBar from '../components/TopBar';



const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };

function CalendarTestingScreen(props) {
    
    const [items, setItems, ] = useState({}); {/*This is a 'hook'. Look this up later */}

    
    
    //This generates 30 days worth of random events
    //LoadItems seems to run over and over causing lag.
    //  Why does this loop? 
    //  Can we stop it from looping?
    //  if we stop it from looping, would we lose functionality?
    const loadItems = (day) => {
        setTimeout(() => {

            let skipAmount = 1;
            for (let i = -15; i < 15; i+=skipAmount) {
                skipAmount = Math.floor(Math.random() * 3 + 1)
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = timeToString(time);
                if (!items[strTime]) {
                    items[strTime] = [];
                    const numItems = Math.floor(Math.random() * 3 + 1);
                    for (let j = 0; j < numItems; j++) {
                        items[strTime].push({
                            marked: true,
                            name: 'Item for ' + strTime + ' #' + j,
                            description: 'Some words that describe the event. This could be several lines, or nothing at all'
                        });
                        
                    }
                }
            }
          const newItems = {};
          Object.keys(items).forEach(key => {
            newItems[key] = items[key];
          });
         
          setItems(newItems);
        }, 1000);
    }


    const renderItem = (item) => {
        return (
            <View>
                <Text>{item.name}</Text>
                <Text>{item.description}</Text>
            </View>
        );
    };

    return (
        <View style={styles.background}>
           <TopBar navigation={props.navigation}/>

            <View style={styles.mainContent}>
                <Agenda
                    items={items}
 
                    loadItemsForMonth={loadItems}
                    renderItem={renderItem}

                    theme={{
                        todayTextColor: "#57B9BB",
                        selectedDayTextColor: "black",
                        selectedDayBackgroundColor: "#f1cf5b",
                    }}

                    

                    
                />
            </View>

            <BottomBar/>
        </View>
    );
}
export default CalendarTestingScreen;



const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: '#2d0f4c',
    },
    mainContent: {
        flex: 8,
    },
})

//To set Agenda to default open you must:
//  In module/src/agenda/index.js 
//  replaced  tis.setScrollPadPosition(this.initialScrollPadPosition(), false); 
//  with 
//  this.setScrollPadPosition(10, true);
//  this.enableCalendarScrolling();
