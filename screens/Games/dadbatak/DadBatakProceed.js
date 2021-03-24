import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity , ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';
import GameBG from '../gameImages/GameBG.png';
import Home_icon from '../../images/Home_icon.png';
import GnareIcon from '../gameImages/GnareMain.png';
import FadlugIcon from '../gameImages/fadlug_icon.png';
import LamwaIcon from '../gameImages/lamwa_icon.png';
import GufadyanIcon from '../gameImages/gufadyan_icon.png';

class DadBatakProceed extends Component {
    static navigationOptions = {
        header: null,
    }

    gotoMainMenu = () =>{
        this.props.navigation.navigate('mainMenu')
    }
    
    render() {
        return (
            <ImageBackground
                source={GameBG}
                style={globalStyleSheet.image}
            >
                <View style={globalStyleSheet.gnareIconStyle}>
                    <Image source={GnareIcon} style={styles.image}></Image>
                </View>
                <View style={globalStyleSheet.homeContainer}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image source={Home_icon} style={globalStyleSheet.home}></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.fadlugStyle}>
                    <TouchableOpacity>
                        <Image source={FadlugIcon} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.gufadyanStyle}>
                    <TouchableOpacity>
                        <Image source={GufadyanIcon} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.lamwaStyle}>
                    <TouchableOpacity>
                        <Image source={LamwaIcon} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
})


export default withNavigation(DadBatakProceed);