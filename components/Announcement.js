import React from 'react'
import {View, Text, StyleSheet, Touchable, TouchableOpacity} from 'react-native';

const Announcement = (props) => {
    return (
        <View style = {styles.item}>
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


