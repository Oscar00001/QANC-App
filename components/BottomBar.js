import React from 'react'
import {View, Text, StyleSheet, Touchable, TouchableOpacity,Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const width1 = Dimensions.get('window').width;

const BottomBar = (props) => {
    
    const navigation = useNavigation();

    return (
        
        <View style={styles.bottomBar}>
            
                <TouchableOpacity  onPress={() => navigation.navigate('Announcement Page')} style={styles.buttonContainerStyle}>
                    <Text style={styles.buttonTextStyle2}>News</Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => navigation.navigate('Calendar Page')} style={styles.buttonContainerStyle}>
                    <Text style={styles.buttonTextStyle}>Calendar</Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => navigation.navigate('Donations Page')} style={styles.buttonContainerStyle}>
                    <Text style={styles.buttonTextStyle}>Donate</Text>
                </TouchableOpacity>

            </View>
    )
}



const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: '#2d0f4c',


    },
    topBar:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#f5f5f5',
        paddingTop: 40,
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    mainContent: {
        flex: 8,

    },
    bottomBar: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#2d0f4c',

    },
    burgerButton: {
        flex: 1,
        alignItems: 'flex-start',
        padding: 10,
    },
    nzingaCrown: {
        flex: 1,
        alignItems: 'flex-end',
        padding: 10,
        
    },
    textStyle: {
        color: '#f1cf5b',
        fontSize: 24,
        textAlign: 'center',
    },
    buttonContainerStyle: {
        flex: 1,
        backgroundColor: "#f1cf5b",
        borderRadius: 10,
        paddingVertical: 0,
        paddingHorizontal: 5,
        justifyContent: 'center',
        alignItems: "center",
        borderColor: '#d1af3b' ,
        borderWidth: 5,
    },
    buttonTextStyle: {
        color: '#ffffff',
        fontSize: 20,
        // fontSize:RFPercentage(2),

        // fontSize: RFValue(20,680), // second argument is standardScreenHeight(optional),
        alignSelf: "center",
        //textAlign: 'center',
        fontWeight: "bold",
    },
    buttonTextStyle2: {
        color: '#ffffff',
        // fontSize: .03 * width1,
        alignSelf: "center",
        fontSize: 20,
        // fontSize: RFValue(20,680), // second argument is standardScreenHeight(optional),
        // fontSize:RFPercentage(3),
        
        //textAlign: 'center',
        fontWeight: "bold",
    },

    


});
export default BottomBar;

