import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity , ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';
import DadBatakBG from '../gameImages/DadBatakBG.png';
import Tanbu from '../gameImages/3Icon_Tanbu.png';

class Tanbu1 extends Component {
    static navigationOptions = {
        header: null,
    }

    gotoQuestion1 = () => {
        this.props.navigation.navigate('db_bang1Question1')
    }

    render() {
        return (
            <ImageBackground
                source={DadBatakBG}
                style={globalStyleSheet.image}
            >
                <View style={styles.tanbuStyle}>
                    <TouchableOpacity onPress={this.gotoQuestion1}>
                        <Image
                            source={Tanbu}
                            style={styles.image}
                        >
                        </Image>
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
    tanbuStyle: {
        position: 'absolute',
        top: '30%',
        left: '48%',
        height: hp('40%'),
        width: wp('50%'),
    }
})

export default withNavigation(Tanbu1);