import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { UserContext } from '../context/UserContext';
// import Demo from "../screens/DemoScreen";
import MainStackScreens from "./MainStacksScreens";
// import Home from "../screens/Home";
import Login from "../screens/Login";
import { createDrawerNavigator } from '@react-navigation/drawer';
import AdminStackScreens from "./AdminStackScreens";



export default AppStackScreens = () => {
    // const AppStack = createStackNavigator();
    const AppStack = createDrawerNavigator();

    // const Drawer = createDrawerNavigator();

    const [contextRoles] = useContext(UserContext);//context is global
    // console.log(contextRoles.length,contextRoles.isAdmin);

    return (
        <AppStack.Navigator headerMode="none">
            
            {contextRoles.length == 0 ? (
                <AppStack.Screen name="Roles" component={Login} 

                  />
            // ) :contextRoles.isAdmin == true?(
            //     <AppStack.Screen name="Admin" component={AdminStackScreens} />

            ): (
                <AppStack.Screen name="Main" component={MainStackScreens} />
            ) 
        }
        </AppStack.Navigator>
    );
};



// if you made the array null and then check == null then have the loading screen, then when it figures out its 
// not null then you go to login or if role is choosen then it would be main
