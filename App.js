import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import AnnouncementsScreen from './screens/AnnouncementsScreen';
import CalendarScreen from './screens/CalendarScreen';
import CalendarTestingScreen from './screens/CalendarTestingScreen';
import BlankPageTemplateScreen from './screens/BlankPageTemplateScreen';
import AdminScreen from './screens/AdminScreen';
import AdminScreen2 from './screens/AdminScreen2';
import DonationsScreen from './screens/DonationsScreen';
import HomePageScreen from './screens/HomePageScreen';
//import RoleScreen from './screens/RoleScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home Page">
        <Drawer.Screen name="Home Page" component={HomePageScreen} />
        <Drawer.Screen name="Announcements" component={AnnouncementsScreen} />
        <Drawer.Screen name="Calendar" component={CalendarScreen} />
        <Drawer.Screen name="Calendar 2" component={CalendarTestingScreen} />
        <Drawer.Screen name="Donations" component={DonationsScreen} />
        <Drawer.Screen name="Admin" component={AdminScreen} />
        <Drawer.Screen name="Admin2" component={AdminScreen2} />
        <Drawer.Screen name="Testing screen" component={BlankPageTemplateScreen} />
        {/* <Drawer.Screen name="Role screen" component={RoleScreen} />      */}

      </Drawer.Navigator>
    </NavigationContainer>
  );
}