import React, { useState,useEffect, createContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserContext = createContext([{}, () => {}]);

const UserProvider = (props) => {

    const [contextRoles,setContextRoles] = useState([
      // isAdmin= false,
    ]);
    const load = async () => {
        try {
          const currentRolesJson = await AsyncStorage.getItem("Roles") // string
          if (currentRolesJson != null){
            const currentRoles = JSON.parse(currentRolesJson) //back to array
            setContextRoles(currentRoles)
          }

        }
        catch (err){
          console.log(err);
        }
    
      };
    
      useEffect(() => {
        load()
      }),[];

    return <UserContext.Provider value={[contextRoles,setContextRoles]}>
    {props.children}
           </UserContext.Provider>;
};

export { UserContext, UserProvider };
