import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


//import RoleScreen from './screens/RoleScreen';
import {UserProvider} from "./context/UserContext";
import AppStackScreen from "./stacks/AppStackScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <UserProvider>
        <NavigationContainer>
            <AppStackScreen />
        </NavigationContainer>
    </UserProvider>




    
  );
}