import * as React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, View, Text,TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';

import AnnouncementScreen from '../screens/AnnouncementsScreen';
import CalendarScreen from '../screens/CalendarScreen';
import AdminScreen from '../screens/AdminScreen';
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
    <Drawer.Navigator drawerStyle={drawerStyle} drawerContent={props => customDrawerContent(props)}>
        <Drawer.Screen name="Home Page" component={HomePageScreen} />
        <Drawer.Screen name="Announcement Page" component={AnnouncementScreen} />
        <Drawer.Screen name="Calendar Page" component={CalendarScreen} />
        <Drawer.Screen name="Donations Page" component={DonationsScreen} />
        <Drawer.Screen name="Group Page" component={Login} />
        <Drawer.Screen name="Admin SignIn" component={AdminSignIn} />
        <Drawer.Screen name="Admin Page" component={AdminScreen} />
        <Drawer.Screen name="Edit Announcement" component={EditAnnouncement} />
        <Drawer.Screen name="Admin Change Password" component={AdminChangePassword} />
        <Drawer.Screen name="Role Page" component={Login} />     
      </Drawer.Navigator>
    // </NavigationContainer>
  );
};
const drawerStyle = {
  activeTintColor: 'black',
  inactiveTintColor: 'black',
  labelStyle: {
      marginVertical: 16,
      marginHorizontal: 0,
  },
  iconContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
  },
  itemStyle: {

  }
}
const customDrawerContent = (props) => {
  return (
      <View style={{flex: 1}}>
          <View style={{height: '90%'}}>
              <DrawerContentScrollView {...props}>
              <TouchableOpacity 
               style={styles.contactUsContainer} 
                onPress={() => { console.log(props.navigation.navigate('Home Page'))}}>
                <Text style={styles.drawerText}>Home Page</Text>                    
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.contactUsContainer} 
                onPress={() => { console.log(props.navigation.navigate('Announcement Page'))}}>
                <Text style={styles.drawerText}>Announcement Page</Text>                    
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.contactUsContainer} 
                onPress={() => { console.log(props.navigation.navigate('Calendar Page'))}}>
                <Text style={styles.drawerText}>Calendar Page</Text>                    
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.contactUsContainer} 
                onPress={() => { console.log(props.navigation.navigate('Donations Page'))}}>
                <Text style={styles.drawerText}>Donations Page</Text>                    
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.contactUsContainer} 
                onPress={() => { console.log(props.navigation.navigate('Admin SignIn'))}}>
                <Text style={styles.drawerText}>Admin SignIn</Text>                    
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.contactUsContainer} 
                onPress={() => { console.log(props.navigation.navigate('Role Page'))}}>
                <Text style={styles.drawerText}>Roles</Text>                    
              </TouchableOpacity>
              </DrawerContentScrollView>
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0
},
container: {
    flex: 1,  
},
contactUsContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    alignItems: 'center',
    paddingLeft: 15
},
drawerText: {
    marginLeft: 16,
}
});

