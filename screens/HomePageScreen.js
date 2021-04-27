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
                <View style={{flex:1,}}>
                    <Image
                        source={require('../assets/QANC_Logo.jpg')}
                        style={{flex: 1, width: logoWidth, }}
                    />
                </View>
                <View style={{flex:1,}}>
                    <Text style = {styles.sectionTitle}>Home Page</Text> 
                </View>
                <View style={{flex:6,}}>
                    <Text style = {styles.centerStyle}>
                        THE CENTER :{"\n"}
                    </Text>
                    <Text style = {styles.textStyle}>
                        Queen Ann Nzinga Center is a non profit organization named for a prominent 15th century African queen. The center is an umbrella for three distinct youth programs, a professional music group and an annual series of concerts & events.
                    </Text>
                </View>
            
            {/* This is where all of our content will go!*/}



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
        paddingTop: 20,
        paddingHorizontal:20,
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