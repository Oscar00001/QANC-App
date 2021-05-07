import * as React from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

import BottomBar from '../components/BottomBar';
import TopBar from '../components/TopBar';


function DonationsScreen(props) {
    return (
        <View style={styles.background}>
            <TopBar navigation={props.navigation}/>
            <View style={styles.mainContent}>


            <TouchableOpacity  onPress={ ()=> Linking.openURL('https://www.qanc.org/donate')}  activeOpacity={0.5}>
                <Image
                    source={require('../assets/DonatePage.png')}
                    style={{width: '100%', height: '100%', resizeMode: 'stretch'}}
                />
            </TouchableOpacity>

            
            
            </View>
            <BottomBar/>
        </View>
    );
}export default DonationsScreen;







const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: '#2d0f4c',
    },
    mainContent: {
        flex: 8,
    },
})