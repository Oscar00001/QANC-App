import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';



function DemoCalendar(props) {
    const test = 45
    return (
        
        

      

        <View style={styles.background}>
           
            <View style={styles.topBar}>
                <View style={styles.burgerButton}>
                    <TouchableOpacity  onPress={props.navigation.openDrawer}  activeOpacity={0.5}>
                        <Image
                        source={require('../assets/burger.jpg')}
                        style={{flex: 1, width: 60, height: 60, resizeMode: 'contain'}}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.nzingaCrown}>
                    <Image
                    source={require('../assets/Crown.png')}
                    style={{flex: 1, width: 70, height: 70, resizeMode: 'contain'}}
                    resizeMethod="resize"
                    />
                </View>  
            </View>

            <View style={styles.mainContent}>
                <CalendarList/>

            </View>
            <View style={styles.bottomBar}>
                <Button onPress={() => props.navigation.goBack()} title="Go back home" />
            </View>






           
        </View>




      

        

    );
}

export default DemoCalendar;











const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: '#2d0f4c',


    },
    topBar:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#f5f5f5',
        paddingTop: 40,
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    mainContent: {
        flex: 8,

    },
    bottomBar: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#f5f5f5',

    },
    burgerButton: {
        flex: 1,
        alignItems: 'flex-start',
        padding: 10,
    },
    nzingaCrown: {
        flex: 1,
        alignItems: 'flex-end',
        padding: 10,
        
    },
    textStyle: {
        color: '#f1cf5b',
        fontSize: 24,
        textAlign: 'center',
    },
})