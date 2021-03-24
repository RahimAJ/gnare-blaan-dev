import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity , ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';
import GnareIcon from '../gameImages/GnareMain.png';
import DadBatakBG from '../gameImages/DadBatakBG.png';
import Bang1Icon from '../gameImages/bang1_icon.png';
import Bang2Icon from '../gameImages/bang2_icon.png';
import Bang3Icon from '../gameImages/bang3_icon.png';
import KastifunIcon from '../gameImages/kastifun_icon.png';

class DadBatak extends Component {
    static navigationOptions = {
        header: null,
    }

    gotoTanbu1 = () => {
        this.props.navigation.navigate('dadbataktanbu1')
    }

    gotoTanbu2 = () => {
        this.props.navigation.navigate('dadbataktanbu2')
    }

    gotoTanbu3 = () => {
        this.props.navigation.navigate('dadbataktanbu3')
    }

    gotoKastifun = () => {
        this.props.navigation.navigate('kastifunScreen')
    }

    render() {
        return (
            <ImageBackground
                source={DadBatakBG}
                style={globalStyleSheet.image}
            >
                <View style={styles.gnareIconStyle}>
                    <Image
                        source={GnareIcon}
                        style={styles.image}
                    >
                    </Image>
                </View>
                <View style={styles.bang1Style}>
                    <TouchableOpacity onPress={this.gotoTanbu1}>
                        <Image
                            source={Bang1Icon}
                            style={styles.image}
                        >
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.bang2Style}>
                    <TouchableOpacity onPress={this.gotoTanbu2}>
                        <Image
                            source={Bang2Icon}
                            style={styles.image}
                        >
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.bang3Style}>
                <TouchableOpacity onPress={this.gotoTanbu3}>
                        <Image
                            source={Bang3Icon}
                            style={styles.image}
                        >
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.kastifunStyle}>
                    <TouchableOpacity onPress={this.gotoKastifun}>
                        <Image
                            source={KastifunIcon}
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
        resizeMode: 'stretch'
    },
    bang1Style: {
        position: 'absolute',
        top: hp('8%'),
        left: wp('60%'),
        height: hp('16%'),
        width: wp('28%'),
    },
    bang2Style: {
        position: 'absolute',
        top: hp('26%'),
        left: wp('60%'),
        height: hp('16%'),
        width: wp('28%'),
    },
    bang3Style: {
        position: 'absolute',
        top: hp('43%'),
        left: wp('60%'),
        height: hp('16%'),
        width: wp('28%'),
    },
    kastifunStyle: {
        position: 'absolute',
        top: hp('60%'),
        left: wp('60%'),
        height: hp('16%'),
        width: wp('28%'),
    }
})

export default withNavigation(DadBatak);