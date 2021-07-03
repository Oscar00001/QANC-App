import React,{useState,useEffect, useContext} from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Button,Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../context/UserContext';
import TopBar from '../components/TopBar';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default Login = (props) => {

    const [roles,setRoles] = useState([]);
    const [contextRoles,setContextRoles] = useContext(UserContext);//context is global

    const [buttonOne,setButtonOne] = useState(0);//context is global
    const [buttonTwo,setButtonTwo] = useState(0);//context is global
    const [buttonThree,setButtonThree] = useState(0);//context is global
    const [buttonFour,setButtonFour] = useState(0);//context is global
    const [buttonFive,setButtonFive] = useState(0);//context is global



    function App() {
      useEffect(() => {
        let len = contextRoles.length
        
        for(let i = 0; i<len; i++){
          if(contextRoles[i] == "Participants"){setButtonOne(1)}
          else if(contextRoles[i] == "Staff"){setButtonTwo(1)}
          else if(contextRoles[i] == "Parents"){setButtonThree(1)}
          else if(contextRoles[i] == "Women’s History Month Honorees"){setButtonFour(1)}
          else if(contextRoles[i] == "Audience/Community"){setButtonFive(1)}
          else{console.log("Impossible role!\n" + contextRoles[i])}
        }
      }, []);
    } 
    App()
    

    
    const addRole = (role) => {
      const currentRoles = roles
      currentRoles.push(role)
      setRoles(currentRoles)

     
      
      if(role == "Participants"){setButtonOne(1)}
      else if(role == "Staff"){setButtonTwo(1)}
      else if(role == "Parents"){setButtonThree(1)}
      else if(role == "Women’s History Month Honorees"){setButtonFour(1)}
      else if(role == "Audience/Community"){setButtonFive(1)}
      else{console.log("Impossible role")}
 
        
      
    }
  
    
    const save = async () => {
      const currentRoles = roles
      
      let len = contextRoles.length
      for(let i=0; i<len; i++){
        currentRoles.push(contextRoles[i])
      }
      

      setRoles(currentRoles)
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
        
      setButtonOne(0)
      setButtonTwo(0)
      setButtonThree(0)
      setButtonFour(0)
      setButtonFive(0)
      setContextRoles(roles);
    };

  
  // Set this up to another Screen  and the useEffect 
  



  
  
  const b1Style = function(options) {
    if(buttonOne == 0){return styles.loginButtonSection} 
    else{return styles.loginButtonSection2}
  }
  const b2Style = function(options) {
    if(buttonTwo == 0){return styles.loginButtonSection} 
    else{return styles.loginButtonSection2}
  }
  const b3Style = function(options) {
    if(buttonThree == 0) {return styles.loginButtonSection} 
    else{return styles.loginButtonSection2}
  }
  const b4Style = function(options) {
    if(buttonFour == 0){return styles.loginButtonSection} 
    else{return styles.loginButtonSection2}
  }
  const b5Style = function(options) {
    if(buttonFive == 0){return styles.loginButtonSection} 
    else{return styles.loginButtonSection2}
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
              <Text style={styles.logoText}>  Welcome, Please Pick A Group  </Text>
            </View>

            <View style= {b1Style()}>
              <TouchableOpacity onPress = {() => addRole("Participants") }>
                <Text style = {styles.buttonText}>Participants</Text>
              </TouchableOpacity>
            </View>

            <View style= {b2Style()}>
              <TouchableOpacity onPress = {() => addRole("Staff") }>
                <Text style = {styles.buttonText}>Staff</Text>
              </TouchableOpacity>
            </View>

          <View style= {b3Style()}>
            <TouchableOpacity onPress = {() => addRole("Parents") }>
              <Text style = {styles.buttonText}>Parents</Text>
            </TouchableOpacity>
          </View>

          <View style= {b4Style()}>
            <TouchableOpacity onPress = {() => addRole(" Women’s History Month Honorees") }>
              <Text style = {styles.buttonText}>Women’s History Month Honorees</Text>
            </TouchableOpacity>
          </View>

          <View style= {b5Style()}>
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
        // marginHorizontal: 1,

        backgroundColor: '#2d0f4c',
    },
    loginButtonSection: {
      backgroundColor: '#E7B128',
      marginHorizontal: 10,
      justifyContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      borderWidth: 4,
      borderColor: '#5d57ff',
      // width: '90%',
      height: '5%',
      flexDirection: 'column',
      flex: 1,
      margin: 5, 
   },
   loginButtonSection2: {
    backgroundColor: '#B1E728',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#5d57ff',
    //width: '70%',
    height: '5%',
    flexDirection: 'column',
    flex: 1,
    margin: 5, 
 },
   logoContainer:{
     alignItems:'center',
    //  flexGrow:1,
     justifyContent: 'center',
     flexDirection: 'column',
    //  height: '1%',
     marginBottom:10,
    //  margin: 90,
     flex: 5,
   },
   logo:{
     width:150,
     height:150
   },
   logoText:{
     color:'#CD6012', //FFF
    //  fontSize:15,
    fontSize: RFValue(15,680),
     marginBottom:1,
     padding: 12,

    },
   buttonText: {
		// textTransform: 'uppercase',
		color: '#aD4042', // CD6012 // 3C1A00
		fontSize: 16,
    alignSelf: 'center',
    padding: 12

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