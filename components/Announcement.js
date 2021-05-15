import React from 'react'
import {View, Text, StyleSheet, Touchable, TouchableOpacity} from 'react-native';
import { useContext} from 'react';
import { UserContext } from '../context/UserContext';

const Announcement = (props) => {

    
    
    announcementStyle = function(options) {
        const [contextRoles,setContextRoles] = useContext(UserContext);//context is global
        const valueContext = contextRoles

        let staffGroupAnnouncement = props.groups[0]
        let parentsGroupAnnouncement = props.groups[1]
        let participantsGroupAnnouncement = props.groups[2]
        let honoreesGroupAnnouncement = props.groups[3]
        let audienceGroupAnnouncement = props.groups[4]

        let staffGroupUser = 0
        let parentsGroupUser = 0
        let participantsGroupUser = 0
        let honoreesGroupUser = 0
        let audienceGroupUser = 0

        for(let  i=0; i<valueContext.length; i++){
            if(valueContext[i] == "Participants"){participantsGroupUser = 1}
            if(valueContext[i] == "Parents"){parentsGroupUser = 1}
            if(valueContext[i] == "Audience/Community"){audienceGroupUser = 1}
            if(valueContext[i] == "Staff"){staffGroupUser = 1}
            if(valueContext[i] == "Women’s History Month Honorees"){honoreesGroupUser = 1}
        }

        let groupMatch = (staffGroupAnnouncement == 1 && staffGroupUser == 1 ||
        parentsGroupAnnouncement == 1 && parentsGroupUser == 1||
        participantsGroupAnnouncement == 1 && participantsGroupUser == 1||
        honoreesGroupAnnouncement == 1 && honoreesGroupUser == 1||
        audienceGroupAnnouncement == 1 && audienceGroupUser == 1)



        if(groupMatch){
            return {
                backgroundColor: '#FbF',
                //color: '#f1cf5b',
                padding:10,
                borderRadius: 10,
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'space-between',
                marginBottom:20,
            }
        } 
        else{
            return {
                backgroundColor: '#FFF',
                //color: '#f1cf5b',
                padding:10,
                borderRadius: 10,
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'space-between',
                marginBottom:20,
            }
        }
      }

    return (
        <View style = {announcementStyle()}>
            <View style = {styles.itemLeft}>
                {/* <TouchableOpacity styles = {styles.square}></TouchableOpacity> */}
                <Text style={{ fontSize: 20, fontWeight:'bold', textDecorationLine: 'underline',}}> {props.title} </Text>
                
            </View>

            <View style={{ padding:10,}}>
                <Text styles = {styles.textStyle}> {props.text}</Text>
            </View>


            {/* <View style = {styles.circular}></View>    */}
        </View>
    )
}
export default Announcement;



const styles = StyleSheet.create ({

    item:{
        backgroundColor: '#FFF',
        //color: '#f1cf5b',
        padding:10,
        borderRadius: 10,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20,
    },
    titleText:{
        fontSize:200,
        padding:15,
    },
    
    textStyle: {
        color: '#f1cf5b',
        fontSize:200,
        textAlign: 'right',
        padding:15,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        

      },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
        
      },

      itemText: {
        maxWidth: '80%',
        

      },
      circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
      },
    

    

    


    


});


