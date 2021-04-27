import React from 'react'
import {View, Text, StyleSheet, Image,Touchable, TouchableOpacity} from 'react-native';


const topBar = (props) => {
    return (
        <View style={styles.topBar}>
            <View style={styles.burgerButton}>
                <TouchableOpacity  onPress={props.navigation.openDrawer}  activeOpacity={0.5}>
                    <Image
                    source={require('../assets/burger.jpg')}
                    style={{flex: 1, width: 60, height: 60, resizeMode: 'contain'}}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.nzingaCrown}>
                
                <TouchableOpacity  onPress={ ()=> props.navigation.navigate('Home Page')}  activeOpacity={0.5}>
                    <Image
                        source={require('../assets/Crown.png')}
                        style={{flex: 1, width: 70, height: 70, resizeMode: 'contain'}}
                    />
                </TouchableOpacity>
                
            </View>  
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
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 0,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: "center",
        borderColor: '#048074' ,
        borderWidth: 5,
    },
    buttonTextStyle: {
        color: '#ffffff',
        fontSize: 18,
        alignSelf: "center",
        
        
        //textAlign: 'center',
        //fontWeight: "bold",
    },

    


});
export default topBar;

