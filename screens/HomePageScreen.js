import * as React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';
import {useEffect} from 'react';

import BottomBar from '../components/BottomBar';
import TopBar from '../components/TopBar';

import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions'
import * as Notifications from 'expo-notifications'


async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data
      console.log("the unique token is: " + token);
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    //return token;

    // useEffect(() => {
    //   fetch('https://eo9260z47k.execute-api.us-east-2.amazonaws.com/default/addPhoneID', {
    //     method: 'POST',
    //     headers: {
    //       // Accept: 'application/json',
    //       'x-api-key': 'Ihw1k1jwsv19i9LgRDpKF2lqBeHijkJZ1f6peUMF',
    //       'Content-Type': 'application/json',
    //   }, 
    //   body: JSON.stringify({
    //     "phoneID": token,
    //   })        
    // }) 
    // .catch((error) => {
    //   console.error(error);
    // });
    // },[]);






    try {
      fetch('https://eo9260z47k.execute-api.us-east-2.amazonaws.com/default/addPhoneID', {
        method: 'POST',
        headers: {
          // Accept: 'application/json',
          'x-api-key': 'Ihw1k1jwsv19i9LgRDpKF2lqBeHijkJZ1f6peUMF',
          'Content-Type': 'application/json',
      }, 
      body: JSON.stringify({
        "phoneID": token,
      })  
    })
  } catch (e) {
    console.log(e)
    throw(e)
  }












    


  }




export function HomePageScreen(props) {
    registerForPushNotificationsAsync()


    const logoWidth = Dimensions.get('window').width-20;
    return (
        <View style={styles.background}>
            <TopBar navigation={props.navigation}/>
            <View style={styles.mainContent}>
  
            <Image
                source={require('../assets/HomePage.png')}
                style={{width: '100%', height: '100%', resizeMode: 'stretch'}}
            />

            </View>
            <BottomBar navigation={props.navigation}/>
        </View>
    );
}
export default HomePageScreen;







const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: '#2d0f4c',
    },
    mainContent: {
        flex: 8,
        alignItems: 'center',

    },
    sectionTitle:{
        color: '#f1cf5b',
        fontSize:45,
        fontWeight: 'bold',
    },
    textStyle:{
        color: '#f1cf5b',

    },
    centerStyle:{
        fontSize:16,
        color: '#f1cf5b',
        textAlign: 'center',
    },
    

})