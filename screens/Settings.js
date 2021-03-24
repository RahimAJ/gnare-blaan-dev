import React, { Component } from 'react';
import { Math, StyleSheet, View, ImageBackground, Text, Image, PanResponder, TouchableOpacity, StatusBar, Animated } from 'react-native';
import { withNavigation } from 'react-navigation';
import Sound from 'react-native-sound';

import Slider from 'react-native-slider';

import {sound} from './HomePage';

import Back_icon from './images/Back_icon.png';

import Icon from "react-native-vector-icons/FontAwesome";

import {globalStyleSheet as styles} from './globalStyleSheet/globalStyleSheet.js'; 

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

Sound.setCategory('Playback');

class SettingBG extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            value: sound.getVolume(),
            muted: false,
            iconChange: true,
        }
    }


    // componentDidMount() {
    //     try {
    //         sound.setVolume(0.2);
    //         sound.play();
    //     } catch(error) {

    //     }
    // }

    gotoMainMenu = () => {
       try {
            // sound.setVolume(0.2);
            sound.play();
        } catch(error) {

        }
        this.props.navigation.navigate('home');
    }

    goBack = () => {
        this.props.navigation.navigate('mainMenu');
    }


    playClickSound = () => {
        if(this.clickSound != null) {
            this.clickSound.release();
        }
        this.clickSound = new Sound('click.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            alert('failed to load the sound', error);
            return;
        } else {
            this.clickSound.play();
        }});
    }

    releaseSounds = ()=> {
        if(this.clickSound != null) {
            this.clickSound.release();
        }
    }

    changeBGVolume = () =>{
        if (this.state.value == 0){
            this.setState({
                // muted: true,
                iconChange: false,
            })
        } else if(this.state.value > 0){
            this.setState({
                // muted: false,
                iconChange: true,
            })
        }
        sound.setVolume(this.state.value);
    }

    muteBG = () => {
        if (this.state.muted == false) {
            // this.changeBGVolume();
            
            sound.setVolume(0.2);
            this.setState({
                value: 0.2,
                muted: true,
                iconChange: true,
            })
            
        } else if (this.state.muted == true){
            sound.setVolume(0);
            this.setState({
                value: 0,
                muted: false,  
                iconChange: false,
            })
        }
    }

    render() {
        StatusBar.setHidden(true);
        return (
            <ImageBackground style={styles.image}
                source={require('./images/BG.jpg')}
            >

                <View style={styles.backContainer}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image
                            source={Back_icon}
                            style={styles.back}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={{flex: 1,
                            position: 'absolute',
                            marginLeft: 10,
                            marginRight: 10,
                            alignItems: "stretch",
                            justifyContent: "center",
                            left: wp('35%'),
                            top: hp('42%'),}}>
                    <Slider
                            trackStyle={customStyles6.track}
                            thumbStyle={customStyles6.thumb}
                            // step={0.1}
                            minimumTrackTintColor='#eee400'
                            value={this.state.value}
                            onValueChange={value => {this.setState({ value }); this.changeBGVolume()}}
                        />
                                    
                    {/* <Text>
                    Value: {this.state.value*100}
                    </Text> */}
                </View>

                <View style={{position: 'absolute',
                                left: '25%',
                                top: '35%',
                                width: '14%',
                                height: '28%',}}>
                    <TouchableOpacity onPress={this.muteBG}>
                                <Icon name={this.state.iconChange ? "volume-up" : "volume-off"} size={85} color="#FFF" />
                    </TouchableOpacity>
                </View>

                {/* <View style={{position: 'absolute',
                                left: '25%',
                                top: '60%',
                                width: '14%',
                                height: '28%',
                                }}>
                                <Icon name={"music"} size={85} color="#FFF" />
                </View> */}


            </ImageBackground>

            
        )
    }
}

var customStyles6 = StyleSheet.create({
    track: {
      height: 34,
      borderRadius: 2,
      backgroundColor: 'white',
      borderColor: '#9a9a9a',
      borderWidth: 1,
      width: 400,
    },
    thumb: {
      width: 40,
      height: 40,
      borderRadius: 2,
      backgroundColor: '#eaeaea',
      borderColor: '#9a9a9a',
      borderWidth: 1,
    }
  });
export default withNavigation(SettingBG);
