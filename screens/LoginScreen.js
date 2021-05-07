import React,{useState,useEffect, useContext} from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Button,Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../context/UserContext';
export default Login = () => {

    const [names,setName] =useState();
    const [roles,setRoles] = useState([]);
    const [ew,setew] = useState("Hello World");

    let count =0;
    const [contextRoles,setContextRoles] = useContext(UserContext);//context is global

    
    const addRole =(role) => {
      const currentRoles = roles
      currentRoles.push(role)
      setRoles(currentRoles)
    }
  
    const save = async () => {
      try { 
        const value = JSON.stringify(roles)
        await AsyncStorage.setItem("Roles", value); 
       
      }
      catch (err){
        console.log(err);
      }
      setContextRoles(roles);
    };
    const remove = async()=>{
        try {
          await AsyncStorage.removeItem("Roles")
        } catch (err) {
          
        }
      };
    
  
  // Set this up to another Screen  and the useEffect 
    

  
    
    return (
        <View style={styles.container}>

<View style = {styles.logoContainer}>
  <Image
      style={styles.logo}
                source={require('../assets/Crown.png')}
                // style={{width: '20%', height: '20%', resizeMode: 'center'}}
            />
            <Text style={styles.logoText}> Welcome, Please Pick A Role</Text>
  </View>
<View style= {styles.loginButtonSection}>
  <TouchableOpacity 
    onPress = {() => addRole("Participants") }>
    <Text style = {styles.buttonText}>Participants</Text>
      </TouchableOpacity>
      </View>
      <View style= {styles.loginButtonSection}>
      <TouchableOpacity 
      onPress = {() => addRole("Staff") }>
 <Text style = {styles.buttonText}>Staff</Text>
      </TouchableOpacity>
      </View>

      <View style= {styles.loginButtonSection}>
      <TouchableOpacity 
      onPress = {() => addRole("Parents") }>
 <Text style = {styles.buttonText}>Parents</Text>
      </TouchableOpacity>
      </View>

      <View style= {styles.loginButtonSection}>
      <TouchableOpacity 
      onPress = {() => addRole("Women’s History Month Honorees") }>
  <Text style = {styles.buttonText}>Women’s History Month Honorees</Text>
      </TouchableOpacity>
      </View>
      <View style= {styles.loginButtonSection}>

      <TouchableOpacity 
      onPress = {() => addRole("Audience/Community") }>
   <Text style = {styles.buttonText}>Audience/Community</Text>
      </TouchableOpacity>
      </View>

      <View style= {styles.loginButtonSection}>
      <TouchableOpacity 
      onPress = {() => save() }>
     <Text style = {styles.buttonText}>Save Role</Text>

      </TouchableOpacity>
      </View>

      <View style= {styles.loginButtonSection}>
      <TouchableOpacity 
      onPress = {() => remove() }>
   <Text style = {styles.buttonText}>Reset Role</Text>

      </TouchableOpacity>
      </View>
 
     
    
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#2d0f4c',
    },
    loginButtonSection: {
      // width: '50%',
      // // height: '30%',
      // justifyContent: 'center',
      // alignItems: 'center',
      // backgroundColor: '#f1cf5b',
      // flexDirection: 'column',
      // flex: 0,
      // margin: 10,
      // marginVertical: 20,
      // height: 50,
      marginHorizontal: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      borderWidth: 4,
      borderColor: '#5d57ff', // 5d57ff
      width: '70%',
      height: '5%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E7B128',//f1cf5b // CD6012 
      flexDirection: 'column',
      flex: 0,
      margin: 5,
      
   },
   logoContainer:{
     alignItems:'center',
    //  flexGrow:1,
     justifyContent: 'center',
     flexDirection: 'column',
     height: '1%',
     margin: 90,
     flex: 0,



   },
   logo:{
     width:150,
     height:150
   },
   logoText:{
     color:'#CD6012', //FFF
     fontSize:16
   },
   buttonText: {
		// textTransform: 'uppercase',
		color: '#CD6012', // CD6012 // 3C1A00
		fontSize: 16,
	},
   
});
