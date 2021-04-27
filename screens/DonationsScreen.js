import * as React from 'react';
import {View, StyleSheet} from 'react-native';

import BottomBar from '../components/BottomBar';
import TopBar from '../components/TopBar';


function DonationsScreen(props) {
    return (
        <View style={styles.background}>
            <TopBar navigation={props.navigation}/>
            <View style={styles.mainContent}>

            
            
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