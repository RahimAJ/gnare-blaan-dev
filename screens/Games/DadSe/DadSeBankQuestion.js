import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity , ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';
import GameBG from '../gameImages/GameBG.png';
import Home_icon from '../../images/Home_icon.png';
import Back_icon from '../../images/Back_icon.png';
import GnareIcon from '../gameImages/GnareMain.png';
import Instruction from '../gameImages/instruction.png';
import CheckIcon from '../gameImages/check_icon.png';
import XIcon from '../gameImages/x_icon.png';

class DadSeBankQuestion extends Component {
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
                source={GameBG}
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
                <View style={styles.instructionStyle}>
                    <Image source={Instruction} style={styles.image}></Image>
                </View>
                <View style={styles.checkStyle}>
                    <TouchableOpacity>
                        <Image source={CheckIcon} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.xStyle}>
                    <TouchableOpacity>
                        <Image source={XIcon} style={styles.image}></Image>
                    </TouchableOpacity>
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
    instructionStyle: {
        position: 'absolute',
        top: '18%',
        left: '26.5%',
        width: wp('52%'),
        height: hp('54%'),
    },
    checkStyle: {
        position: 'absolute',
        top: '80%',
        left: '37%',
        width: wp('13%'),
        height: hp('12%'),
    },
    xStyle: {
        position: 'absolute',
        top: '80%',
        left: '50%',
        width: wp('13%'),
        height: hp('12%'),
    },
})


export default withNavigation(DadSeBankQuestion);