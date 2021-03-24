import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity , ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';
import DadSeBG2 from '../gameImages/DadSeBG2.png';
import Home_icon from '../../images/Home_icon.png';
import GnareIcon from '../gameImages/GnareMain.png';
import FyeDuDiKdee from '../gameImages/FyeDuDiKdee.png';

class DadSeEnd extends Component {
    static navigationOptions = {
        header: null,
    }

    gotoMainMenu = () =>{
        this.props.navigation.navigate('mainMenu')
    }
    
    gotoHome = () =>{
        this.props.navigation.navigate('home')
    }
    
    render() {
        return (
            <ImageBackground
                source={DadSeBG2}
                style={globalStyleSheet.image}
            >
                <View style={styles.gnareIconStyle}>
                    <TouchableOpacity onPress={this.gotoHome}>
                        <Image source={GnareIcon} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.homeContainer}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image source={Home_icon} style={globalStyleSheet.home}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.fyeduStyle}>
                    <Image source={FyeDuDiKdee} style={styles.image}></Image>
                </View>
            </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({
    gnareIconStyle: {
        position: 'absolute',
        top: hp('5%'),
        left: wp('2%'),
        height: hp('12%'),
        width: wp('10%'),
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    fyeduStyle: {
        position: 'absolute',
        top: '16%',
        left: '17%',
        width: wp('40%'),
        height: hp('45%'),
    },
})


export default withNavigation(DadSeEnd);