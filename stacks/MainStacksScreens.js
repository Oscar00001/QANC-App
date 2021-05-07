import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Announcement from '../screens/Announcement';
import CalendarScreen from '../screens/CalendarScreen';
//import CalendarTestingScreen from '../screens/CalendarTesting';
//import BlankPageTemplateScreen from './screens/BlankPageTemplateScreen';
import AdminScreen from '../screens/AdminScreen';
//import AdminScreen2 from '../screens/AdminScreen2';
import AdminChangePassword from '../screens/AdminChangePassword';
import DonationsScreen from '../screens/DonationsScreen';
import HomePageScreen from '../screens/HomePageScreen';
import AdminSignIn from '../screens/AdminSignIn';
import EditAnnouncement from '../screens/EditAnnouncement';
import Login from '../screens/Login';

//import RoleScreen from './screens/RoleScreen';

// const Drawer = createDrawerNavigator();

export default  MainStackScreens = () =>  {
    const Drawer = createDrawerNavigator();

  return (
    // <NavigationContainer>
    //   {/* <Drawer.Navigator initialRouteName="Home Page"> */}
      <Drawer.Navigator >
        <Drawer.Screen name="Home Page" component={HomePageScreen} />
        <Drawer.Screen name="Announcement" component={Announcement} />
        <Drawer.Screen name="Calendar" component={CalendarScreen} />
        <Drawer.Screen name="Donations" component={DonationsScreen} />
        <Drawer.Screen name="Roles" component={Login} />
        <Drawer.Screen name="AdminSignIn" component={AdminSignIn} />
        <Drawer.Screen name="AddAnnouncement" component={AdminScreen} />
        <Drawer.Screen name="EditAnnouncement" component={EditAnnouncement} />
        <Drawer.Screen name="ChangePassword" component={AdminChangePassword} />

        {/* <Drawer.Screen name="Role screen" component={RoleScreen} />      */}

      </Drawer.Navigator>
    // </NavigationContainer>
  );
};

