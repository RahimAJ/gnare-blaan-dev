import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, TouchableOpacity, BackHandler } from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';

import Sound from 'react-native-sound';
import { sound } from '../../HomePage';

import Vocab8BG from './vocabulary8Images/Vocab8.png';

import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';


import Hapon from './vocabulary8Images/hapon.png';
import Umaga from './vocabulary8Images/umaga.png';
import Gabi from './vocabulary8Images/gabi.png';
import Cloud from './vocabulary8Images/Item_Clouds.png';
import Goodbye from './vocabulary8Images/Item_GoodBye.png';
import Moon from './vocabulary8Images/Item_Moon.png';
import Sun from './vocabulary8Images/Item_Sun.png';
import Star from './vocabulary8Images/Item_Stars.png';

import Afternoon from './vocabulary8Images/afternoon.png';
import Clouder from './vocabulary8Images/cloud.png';
import Evening from './vocabulary8Images/evening.png';
import Goodbyer from './vocabulary8Images/goodbye.png';
import Mooner from './vocabulary8Images/moon.png';
import Morning from './vocabulary8Images/morning.png';
import Starer from './vocabulary8Images/star.png';
import Suner from './vocabulary8Images/sun.png';
import SpeakerIcon from '../../images/Speaker_icon.png';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

Sound.setCategory('Playback');

// Vocab Sound List
const soundList = ['afternoon', 'cloud', 'evening', 'goodbye', 'moon', 'morning', 'star', 
                    'sun'];

const backgroundList = [Afternoon, Clouder, Evening, Goodbyer, Mooner, Morning, Starer, Suner];

class Vocabulary8 extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            BackgroundImage: Vocab8BG,
            clearBackground: 'gotoVocab8Menu',
            haponTop: '19%',
            gabiTop: '19%',
            umagaTop: '19%',
            sunTop: '22%',
            goodbyeTop: '45%',
            starTop: '30%',
            moonTop: '25%',
            cloudTop: '30%',
            speakerTop:'1000%',
            clickSoundIndex:'',
        }
         // Sounds
         this.vocabSound = null;
         this.timeoutSound = null;
    }

    changeBackground = (index) => {
        this.setState({
            BackgroundImage:backgroundList[index],
            clearBackground: 'clear',
            haponTop: '1000%',
            gabiTop: '1000%',
            umagaTop: '1000%',
            sunTop: '1000%',
            goodbyeTop: '1000%',
            starTop: '1000%',
            moonTop: '1000%',
            cloudTop: '1000%',
            speakerTop: '20%',
            clickSoundIndex:index
        })
        this.autoPlaySound(index);
        try {
            // sound.setVolume(0);
        sound.pause();
        } catch(error) {
            
        }
    }

    
    autoPlaySound = (index) => {
        this.releaseSounds();
        this.timeoutSound = setTimeout(()=> {
          this.vocabSound = new Sound('vocab8_' + soundList[index] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
            this.vocabSound.play();
          });  
        }, 1000);   
      }
    
    
    releaseSounds = ()=> {
        if(this.vocabSound != null) {
            this.vocabSound.release();
        }
    }
    
    playVocabSound = () => {
        if(this.vocabSound != null) {
            this.vocabSound.release();
        }
        if(this.timeoutSound != null){
            clearTimeout(this.timeoutSound);
          }
        this.stopSounds();
        this.vocabSound = new Sound('vocab8_' + soundList[this.state.clickSoundIndex] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            alert('failed to load the sound', error);
            return;
        } else {
            this.vocabSound.play();
        }});
    }
    
    stopSounds = () => {
        if (this.vocabSound != null){
          this.vocabSound.stop();
        }
      }
    
    gotoMainMenu = () =>{
        try {
            // sound.setVolume(0.2);
            sound.play();
        } catch(error) {
            
        }
        const clear = this.state.clearBackground;
        if (clear == 'clear'){
            this.stopSounds();
        }
        this.props.navigation.navigate('mainMenu');
    }

    goBack = () => {
        try {
            // sound.setVolume(0.2);
            sound.play();
        } catch(error) {
            
        }
        const clear = this.state.clearBackground;
        if (clear == 'gotoVocab8Menu') {
            this.props.navigation.goBack()
        }
        if (clear == 'clear') {
            this.stopSounds();
            this.setState({
                BackgroundImage: Vocab8BG,
                clearBackground: 'gotoVocab8Menu',
                haponTop: '19%',
                gabiTop: '19%',
                umagaTop: '19%',
                sunTop: '22%',
                goodbyeTop: '45%',
                starTop: '30%',
                moonTop: '25%',
                cloudTop: '30%',
                speakerTop: '1000%',
            })
        }
        if(this.timeoutSound != null){
            clearTimeout(this.timeoutSound);
          }
    }

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        try {
            // sound.setVolume(0.2);
            sound.play();
        } catch(error) {
            
        }
    }

    componentWillUnmount() {
        this.backHandler.remove()
    }

    handleBackPress = () => {
        this.goBack(); 
        return true;
    }

    render() {

        return (
            <ImageBackground style={{ flex: 1, width: '100%', height: '100%', resizeMode: 'stretch' }}
                source={Vocab8BG}
            >
                <View style={{ position: 'absolute', top: '0%', width: '100%', height: '100%' }}>
                    <Image source={Vocab8BG} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }}></Image>
                </View>
                <View style={{ position: 'absolute', width: '100%', height: '100%' }}>
                    <Image source={this.state.BackgroundImage} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }}></Image>
                </View>
                <View style={globalStyleSheet.backContainer}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image
                            source={Back_icon}
                            style={globalStyleSheet.back}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.homeContainer}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image
                            source={Home_icon}
                            style={globalStyleSheet.home}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={{
                    position: 'absolute',
                    left: '80%',
                    top:this.state.speakerTop,
                    width: '6%',
                    height: '10%',
                }}>
                    <TouchableOpacity onPress={this.playVocabSound}>
                        <Image
                            source={SpeakerIcon}
                            style={globalStyleSheet.A_Speaker_2}
                        ></Image>
                    </TouchableOpacity>
                </View>
                

                <View style={{
                    position: 'absolute',
                    top: this.state.haponTop,
                    left: '11.5%',
                    height: hp('46%'),
                    width: wp('23%'),
                }}>
                    <TouchableOpacity onPress={() =>{
                        this.changeBackground(0)
                    }}>
                        <Image
                            source={Hapon}
                            style={styles.Image}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={{
                    position: 'absolute',
                    top:this.state.gabiTop,
                    right:'10.5%',
                    height: hp('43.5%'),
                    width: wp('29%'),
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(2)
                    }}>
                        <Image
                            source={Gabi}
                            style={styles.Image}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={{
                    position: 'absolute',
                    top:this.state.umagaTop,
                    left: '23%',
                    height: hp('27.8%'),
                    width: wp('50%'),
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(5)
                    }}>
                        <Image
                            source={Umaga}
                            style={styles.Image}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={{
                    position: 'absolute',
                    top:this.state.sunTop,
                    left: '45%',
                    height: hp('10%'),
                    width: wp('7%')
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(7)
                    }}>
                        <Image
                            source={Sun}
                            style={styles.Image}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={{
                    position: 'absolute',
                    top:this.state.goodbyeTop,
                    left: '45%',
                    height: hp('40%'),
                    width: wp('25%'),
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(3)
                    }}>
                        <Image
                            source={Goodbye}
                            style={styles.Image}
                        ></Image>
                    </TouchableOpacity>
                </View>


                <View style={{
                    position: 'absolute',
                    top: this.state.starTop,
                    right: '15%',
                    height: hp('10%'),
                    width: wp('30%')
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(6)
                    }}>
                        <Image
                            source={Star}
                            style={styles.Image}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={{
                    position: 'absolute',
                    top:this.state.moonTop,
                    right: '14%',
                    height: hp('10%'),
                    width: wp('6%')
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(4)
                    }}>
                        <Image
                            source={Moon}
                            style={styles.Image}
                        ></Image>
                    </TouchableOpacity>
                </View>


                <View style={{
                    position: 'absolute',
                    top:this.state.cloudTop,
                    left: '34%',
                    height: hp('13%'),
                    width: wp('33%')
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(1)
                    }}>
                        <Image
                            source={Cloud}
                            style={styles.Image}
                        ></Image>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({

    Image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

    haponStyle: {
        position: 'absolute',
        top: hp('20%'),
        left: wp('7.4%'),
        height: hp('46%'),
        width: wp('23%'),
    },

    umagaStyle: {
        position: 'absolute',
        top: hp('20.7%'),
        left: wp('23%'),
        height: hp('27.8%'),
        width: wp('50%'),

    },

    gabiStyle: {
        position: 'absolute',
        top: hp('20.7%'),
        right: wp('8.5%'),
        height: hp('43.5%'),
        width: wp('29%'),
    },

    sunStyle: {
        position: 'absolute',
        top: hp('22%'),
        left: wp('45%'),
        height: hp('10%'),
        width: wp('7%')
    },

    cloudStyle: {
        position: 'absolute',
        top: hp('30%'),
        left: wp('34%'),
        height: hp('13%'),
        width: wp('33%')
    },

    goodbyeStyle: {
        position: 'absolute',
        top: hp('55%'),
        left: wp('45%'),
        height: hp('40%'),
        width: wp('25%'),

    },

    moonStyle: {
        position: 'absolute',
        top: hp('25%'),
        right: wp('14%'),
        height: hp('10%'),
        width: wp('6%')
    },

    starStyle: {
        position: 'absolute',
        top: hp('30%'),
        right: wp('15%'),
        height: hp('10%'),
        width: wp('30%')
    }

});

export default withNavigation(Vocabulary8);
