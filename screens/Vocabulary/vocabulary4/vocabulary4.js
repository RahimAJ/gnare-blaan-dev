import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, TouchableOpacity,  BackHandler} from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';

import Sound from 'react-native-sound';
import { sound } from '../../HomePage';

import Vocab4BG from './vocabulary4Images/vocab4.png';
import BambooAsset from './vocabulary4Images/bambooAsset.png';
import BoloAsset from './vocabulary4Images/boloAsset.png';
import CarabaoAsset from './vocabulary4Images/carabaoAsset.png';
import ChickenAsset from './vocabulary4Images/chickenAsset.png';
import CornAsset from './vocabulary4Images/cornAsset.png';
import CowAsset from './vocabulary4Images/cowAsset.png';
import FarmlandAsset from './vocabulary4Images/farmlandAsset.png';
import GoatAsset from './vocabulary4Images/goatAsset.png';
import PigAsset from './vocabulary4Images/pigAsset.png';
import PlowAsset from './vocabulary4Images/plowAsset.png';
import RiceAsset from './vocabulary4Images/riceAsset.png';
import SweetPotatoAsset from './vocabulary4Images/sweetpotatoAsset.png';
import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';
import BG from '../../images/BG.jpg';

import Bamboo from './vocabulary4Images/bamboo.png';
import Bolo from './vocabulary4Images/bolo.png';
import Carabao from './vocabulary4Images/carabao.png';
import Chicken from './vocabulary4Images/chicken.png';
import Corn from './vocabulary4Images/corn.png';
import Cow from './vocabulary4Images/cow.png';
import Farmland from './vocabulary4Images/farmland.png';
import Goat from './vocabulary4Images/goat.png';
import Pig from './vocabulary4Images/pig.png';
import Plow from './vocabulary4Images/plow.png';
import Rice from './vocabulary4Images/rice.png';
import Potato from './vocabulary4Images/sweetpotato.png';
import SpeakerIcon from '../../images/Speaker_icon.png';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

Sound.setCategory('Playback');

// Vocab Sound List
const soundList = ['bamboo', 'bolo', 'carabao', 'chicken', 'corn', 'cow', 'farmland', 
                    'goat', 'pig', 'plow', 'rice', 'sweetpotato'];

const backgroundList = [Bamboo,Bolo,Carabao,Chicken,Corn,Cow,Farmland,Goat,Pig,Plow,Rice,Potato];

class Vocabulary4 extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            BackgroundImage: Vocab4BG,
            clearBackground: 'gotoVocab4Menu',
            farmlandTop:'36%',
            carabaoTop:'42%',
            riceTop:'65.5%',
            bambooTop:'56%',
            boloTop:'53%',
            cowTop:'53%',
            pigTop:'67%',
            goatTop:'60%',
            cornTop:'55%',
            chickenTop:'59%',
            plowTop:'63%',
            potatoTop:'75%',
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
            farmlandTop: '1000%',
            carabaoTop: '1000%',
            riceTop: '1000%',
            bambooTop: '1000%',
            boloTop: '1000%',
            cowTop: '1000%',
            pigTop: '1000%',
            goatTop: '1000%',
            cornTop: '1000%',
            chickenTop: '1000%',
            plowTop: '1000%',
            potatoTop: '1000%',
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
          this.vocabSound = new Sound('vocab4_' + soundList[index] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
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
        this.vocabSound = new Sound('vocab4_' + soundList[this.state.clickSoundIndex] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
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
        if (clear == 'gotoVocab4Menu') {
            this.props.navigation.goBack()
        }
        if (clear == 'clear') {
            this.stopSounds();
            this.setState({
                BackgroundImage: Vocab4BG,
                clearBackground: 'gotoVocab4Menu',
                farmlandTop: '36%',
                carabaoTop: '42%',
                riceTop: '65.5%',
                bambooTop: '56%',
                boloTop: '53%',
                cowTop: '53%',
                pigTop: '67%',
                goatTop: '60%',
                cornTop: '55%',
                chickenTop: '59%',
                plowTop: '63%',
                potatoTop: '75%',
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
                source={Vocab4BG}
            >
                <View style={{ position: 'absolute', top: '0%', width: '100%', height: '100%' }}>
                    <Image source={BG} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }}></Image>
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
                    top:this.state.farmlandTop,
                    left: '44%',
                    justifyContent: 'center',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(6)
                    }}>
                        <Image
                            source={FarmlandAsset}
                            style={styles.farmlandImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top: this.state.carabaoTop,
                    left: '36%',
                    justifyContent: 'center',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(2)
                    }}>
                        <Image
                            source={CarabaoAsset}
                            style={styles.carabaoImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top:this.state.riceTop,
                    left: '13%',
                    justifyContent: 'center',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(10)
                    }}>
                        <Image
                            source={RiceAsset}
                            style={styles.riceImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top:this.state.bambooTop,
                    left: '58%',
                    justifyContent: 'center',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(0)
                    }}>
                        <Image
                            source={BambooAsset}
                            style={styles.bambooImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top:this.state.boloTop,
                    left: '10%',
                    justifyContent: 'center',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(1)
                    }}>
                        <Image
                            source={BoloAsset}
                            style={styles.boloImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top: this.state.cowTop,
                    left: '45%',
                    justifyContent: 'center',
                    width: '15%',

                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(5)
                    }}>
                        <Image
                            source={CowAsset}
                            style={styles.cowImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top: this.state.pigTop,
                    left: '43%',
                    justifyContent: 'center',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(8)
                    }}>
                        <Image
                            source={PigAsset}
                            style={styles.pigImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top:this.state.goatTop,
                    left: '37%',
                    justifyContent: 'center',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(7)
                    }}>
                        <Image
                            source={GoatAsset}
                            style={styles.goatImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={{
                    position: 'absolute',
                    top: this.state.cornTop,
                    left: '22%',
                    justifyContent: 'center',
                    width: wp('10%'),
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(4)
                    }}>
                        <Image
                            source={CornAsset}
                            style={styles.cornImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={{
                    position: 'absolute',
                    top:this.state.chickenTop,
                    left: '30%',
                    justifyContent: 'center',
                    height: 60,
                    width: 90,
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(3)
                    }}>
                        <Image
                            source={ChickenAsset}
                            style={styles.chickenImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={{
                    position: 'absolute',
                    top: this.state.plowTop,
                    left: '71.5%',
                    justifyContent: 'center',
                    width: '16%',
                    height: '28%',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(9)
                    }}>
                        <Image
                            source={PlowAsset}
                            style={styles.plowImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top: this.state.potatoTop,
                    left: '58%',
                    justifyContent: 'center',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(11)
                    }}>
                        <Image
                            source={SweetPotatoAsset}
                            style={styles.sweetpotatoImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    bambooImage: {
        width: wp('19%'),
        height: hp('29%'),
        resizeMode: 'contain',
    },
    boloImage: {
        width: wp('16%'),
        height: hp('9%'),
        resizeMode: 'contain',
    },
    carabaoImage: {
        width: wp('19%'),
        height: hp('22%'),
        resizeMode: 'contain',
    },

    chickenImage: {
        width: wp('7%'),
        height: hp('14%'),
        resizeMode: 'contain',
    },

    cornImage: {
        width: wp('12%'),
        height: hp('13%'),
        resizeMode: 'contain',
        right: '19%',
    },

    cowImage: {
        right: '20%',
        width: wp('20%'),
        height: hp('24%'),
        resizeMode: 'contain',
    },

    farmlandImage: {
        width: wp('41%'),
        height: hp('44%'),
        resizeMode: 'contain',
    },
    goatImage: {
        width: wp('10%'),
        height: hp('20%'),
        resizeMode: 'contain',
    },
    pigImage: {
        width: wp('17%'),
        height: hp('25%'),
        resizeMode: 'contain',
    },
    plowImage: {
        left: '-38%',
        top: '2%',
        width: wp('25%'),
        height: hp('28%'),
        resizeMode: 'contain',
    },
    riceImage: {
        bottom: '3%',
        width: wp('29.4%'),
        height: hp('27.5%'),
        resizeMode: 'contain',
    },
    sweetpotatoImage: {
        width: wp('15%'),
        height: hp('15%'),
        resizeMode: 'contain',
    },
});

export default withNavigation(Vocabulary4);
