import React,{useState,useEffect, useContext} from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Button,Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../context/UserContext';
import TopBar from '../components/TopBar';
import { useNavigation } from '@react-navigation/native';

export default Role = (props) => {
    const [roles,setRoles] = useState([]);
    let count =0;
    const [contextRoles,setContextRoles] = useContext(UserContext);//context is global
    const navigation = useNavigation();

    
    const addRole =(role) => {
      navigation.navigate('AdminSignIn');
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
              <TouchableOpacity onPress = {() => addRole("Admin") }>
                <Text style = {styles.buttonText}>Role</Text>
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


