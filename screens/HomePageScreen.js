import * as React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';

import BottomBar from '../components/BottomBar';
import TopBar from '../components/TopBar';


export function HomePageScreen(props) {


    const logoWidth = Dimensions.get('window').width-20;
    return (
        <View style={styles.background}>
            <TopBar navigation={props.navigation}/>
            <View style={styles.mainContent}>
  
            <Image
                source={require('../assets/HomePage.png')}
                style={{width: '100%', height: '100%', resizeMode: 'stretch'}}
            />

            </View>
            <BottomBar navigation={props.navigation}/>
        </View>
    );
}
export default HomePageScreen;







const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: '#2d0f4c',
    },
    mainContent: {
        flex: 8,
        alignItems: 'center',
        //paddingTop: 20,
        //paddingHorizontal:20,
    },
    sectionTitle:{
        color: '#f1cf5b',
        fontSize:45,
        fontWeight: 'bold',
    },
    textStyle:{
        color: '#f1cf5b',

    },
    centerStyle:{
        fontSize:16,
        color: '#f1cf5b',
        textAlign: 'center',
    },
    

})