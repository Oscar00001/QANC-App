import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

//import Announcement from '../screens/Announcement';
import AnnouncementScreen from '../screens/AnnouncementsScreen';

import CalendarScreen from '../screens/CalendarScreen';
//import CalendarTestingScreen from '../screens/CalendarTesting';
//import BlankPageTemplateScreen from './screens/BlankPageTemplateScreen';
import AdminScreen from '../screens/AdminScreen';
//import AdminScreen2 from '../screens/AdminScreen2';
import AdminChangePassword from '../screens/AdminChangePassword';
import DonationsScreen from '../screens/DonationsScreen';
import HomePageScreen from '../screens/HomePageScreen';
import AdminSignIn from '../screens/AdminSignIn';
import EditAnnouncement from '../screens/EditAnnoucement';
import Login from '../screens/LoginScreen';

//import RoleScreen from './screens/RoleScreen';

// const Drawer = createDrawerNavigator();

export default  MainStackScreens = () =>  {
    const Drawer = createDrawerNavigator();

  return (
    // <NavigationContainer>
    //   {/* <Drawer.Navigator initialRouteName="Home Page"> */}
      <Drawer.Navigator >
        <Drawer.Screen name="Home Page" component={HomePageScreen} />
        <Drawer.Screen name="Announcement Page" component={AnnouncementScreen} />
        <Drawer.Screen name="Calendar Page" component={CalendarScreen} />
        <Drawer.Screen name="Donations Page " component={DonationsScreen} />
        <Drawer.Screen name="Group Page" component={Login} />
        <Drawer.Screen name="Admin SignIn" component={AdminSignIn} />
        <Drawer.Screen name="Admin Page" component={AdminScreen} />
        <Drawer.Screen name="Edit Announcement" component={EditAnnouncement} />
        <Drawer.Screen name="Admin Change Password" component={AdminChangePassword} />


        {/* <Drawer.Screen name="Role screen" component={RoleScreen} />      */}

      </Drawer.Navigator>
    // </NavigationContainer>
  );
};

