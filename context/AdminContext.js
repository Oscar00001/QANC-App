import React, { useState,useEffect, createContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AdminContext = createContext([{}, () => {}]);

const AdminProvider = (props) => {

    const [contextAdmin,setcontextAdmin] = useState([
        isAdmin = false,
    ]);
    const load = async () => {
        try {
          const contextAdmin = await AsyncStorage.getItem("Roles") // string
          if (contextAdmin != null){
            const contextAdmin = JSON.parse(contextAdmin) //back to array
            setcontextAdmin(contextAdmin)
          }

        }
        catch (err){
          console.log(err);
        }
    
      };
    
      useEffect(() => {
        load()
      }),[];

    return <AdminContext.Provider value={[contextAdmin,setcontextAdmin]}>{props.children}</AdminContext.Provider>;
};

export { AdminContext, AdminProvider };
