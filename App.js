import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Announcement from './screens/Announcement';
import Calendar from './screens/Calendar';
import CalendarDemo from './screens/CalendarDemo';



function HomeScreen({ navigation }) {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate('Announcement')}
        title="Go to Announcement"
      />
      <Button
        onPress={() => navigation.navigate('Calendar')}
        title="Go to Calendar"
      />

<Button
        onPress={() => navigation.navigate('CalendarDemo')}
        title="Go to Calendar"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View>
      <Button onPress={() => thnavigation.goBack()} title="Go back home" />
    </View>
  );
}



const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Announcement">
        <Drawer.Screen name="Announcement" component={Announcement} />
        <Drawer.Screen name="Calendar" component={Calendar} />
        <Drawer.Screen name="CalendarDemo" component={CalendarDemo} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}