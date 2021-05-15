import React,{useState,useEffect, useContext} from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Button,Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../context/UserContext';
import TopBar from '../components/TopBar';
export default Login = (props) => {

    const [roles,setRoles] = useState([]);

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
      } 
      catch (err) {
        
      }
    };
    
  
  // Set this up to another Screen  and the useEffect 
  let b1 = 0
  let b2 = 0
  let b3 = 0
  let b4 = 0
  let b5 = 0

  
  
  const b1Style = function(options) {

    for(let  i=0; i<roles.length; i++){
      if(roles[i] == "Participants"){b1 = 1}
    }
    if(b1 == 1){
        return {
          backgroundColor: '#b79100',//f1cf5b // CD6012 
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
          flexDirection: 'column',
          flex: 0,
          margin: 5,
      }
    } 
    else{
        return {
          backgroundColor: '#E7B128',//f1cf5b // CD6012 
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
          flexDirection: 'column',
          flex: 0,
          margin: 5,
        }//f1cf5b // CD6012 
    }
  }
    
    return (
        <View style={styles.container}>
          <TopBar navigation={props.navigation}/>


          <View style = {styles.mainContent}>
<View style = {styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require('../assets/Crown.png')}
            />
            <Text style={styles.logoText}>Welcome, Please Pick A Group</Text>
          </View>

          <View style= {styles.loginButtonSection}>
              <TouchableOpacity onPress = {() => addRole("Participants") }>
                <Text style = {styles.buttonText}>Participants</Text>
              </TouchableOpacity>
          </View>

          <View style= {styles.loginButtonSection}>
            <TouchableOpacity onPress = {() => addRole("Staff") }>
              <Text style = {styles.buttonText}>Staff</Text>
            </TouchableOpacity>
          </View>

        <View style= {styles.loginButtonSection}>
          <TouchableOpacity onPress = {() => addRole("Parents") }>
            <Text style = {styles.buttonText}>Parents</Text>
          </TouchableOpacity>
        </View>

        <View style= {styles.loginButtonSection}>
          <TouchableOpacity onPress = {() => addRole("Women’s History Month Honorees") }>
            <Text style = {styles.buttonText}>Women’s History Month Honorees</Text>
          </TouchableOpacity>
        </View>

        <View style= {styles.loginButtonSection}>
          <TouchableOpacity onPress = {() => addRole("Audience/Community") }>
            <Text style = {styles.buttonText}>Audience/Community</Text>
          </TouchableOpacity>
        </View>

        <View style= {styles.loginButtonSection}>
          <TouchableOpacity onPress = {() => save() }>
            <Text style = {styles.buttonText}>Save Role</Text>
          </TouchableOpacity>
        </View>

        <View style= {styles.loginButtonSection}>
          <TouchableOpacity onPress = {() => remove() }>
            <Text style = {styles.buttonText}>Reset Role</Text>
          </TouchableOpacity>
        </View>
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

      marginHorizontal: 10,
      justifyContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      borderWidth: 4,
      borderColor: '#5d57ff', // 5d57ff
      //width: '70%',
      height: '5%',
      
      backgroundColor: '#E7B128',//f1cf5b // CD6012 
      flexDirection: 'column',
      flex: 1,
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
     fontSize:15
   },
   buttonText: {
		// textTransform: 'uppercase',
		color: '#aD4042', // CD6012 // 3C1A00
		fontSize: 16,
	}, 
  mainContent: {
    flex: 8,
},
   
});




// for(let  i=0; i<roles.length; i++){
    //   if(roles[i] == "Participants"){b1 = 1}
    //   if(roles[i] == "Staff"){b2 = 1}
    //   if(roles[i] == "Parents"){b3 = 1}
    //   if(roles[i] == "Women’s History Month Honorees"){b4 = 1}
    //   if(roles[i] == "Audience/Community"){b5 = 1}
    // }