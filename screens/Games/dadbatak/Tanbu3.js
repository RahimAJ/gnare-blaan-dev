import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity , ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';
import DadBatakBG from '../gameImages/DadBatakBG.png';
import Tanbu from '../gameImages/3Icon_Tanbu.png';

class Tanbu3 extends Component {
    static navigationOptions = {
        header: null,
    }
    render() {
        return (
            <ImageBackground
                source={DadBatakBG}
                style={globalStyleSheet.image}
            >
                <View style={styles.tanbuStyle}>
                    <Image
                        source={Tanbu}
                        style={styles.image}
                    >
                    </Image>
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
    tanbuStyle: {
        position: 'absolute',
        top: '30%',
        left: '48%',
        height: hp('40%'),
        width: wp('50%'),
    }
})

export default withNavigation(Tanbu3);