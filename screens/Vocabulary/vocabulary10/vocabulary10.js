import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, TouchableOpacity, BackHandler, Text, } from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';

import Sound from 'react-native-sound';
import { sound } from '../../HomePage';

import Vocab10BG from './vocabulary10Images/kastifunBG.png';
import KaibeAsset from './vocabulary10Images/kaibeAsset.png';
import LoloAsset from './vocabulary10Images/loloAsset.png';
import LolaAsset from './vocabulary10Images/lolaAsset.png';
import kulintang_item from './vocabulary10Images/Item_kulintang.png';
import gong_item from './vocabulary10Images/Item_gong.png';
import hallowlogdrum_item from './vocabulary10Images/Item_hallowlogdrum.png';
import guitar_item from './vocabulary10Images/Item_guitar.png';
import guitarkawayan_item from './vocabulary10Images/Item_guitarkawayan.png';
import earings_item from './vocabulary10Images/Item_earings.png';

import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';

import BambooGuitar from './vocabulary10Images/bambooguitar.png';
import Blouse from './vocabulary10Images/blouse.png';
import Comb from './vocabulary10Images/comb.png';
import Earrings from './vocabulary10Images/earrings.png';
import Galing from './vocabulary10Images/galing.png';
import Gong from './vocabulary10Images/gong.png';
import Guitar from './vocabulary10Images/guitar.png';
import headCover from './vocabulary10Images/headcover.png';
import Kulintang from './vocabulary10Images/kulintang.png';
import LogDrum from './vocabulary10Images/logdrum.png';
import Necklace from './vocabulary10Images/necklace.png';
import Pants from './vocabulary10Images/pants.png';
import Saul from './vocabulary10Images/saul.png';
import Skirt from './vocabulary10Images/skirt.png';
import Tlayong from './vocabulary10Images/tlayong.png';
import SpeakerIcon from '../../images/Speaker_icon.png';

Sound.setCategory('Playback');

// Vocab Sound List
const soundList = ['bambooguitar', 'blouse', 'comb', 'earrings', 'galing', 'gong', 'guitar', 
                    'headcover', 'kulintang', 'logdrum', 'necklace', 'pants', 'saul', 'skirt', 'tlayong'];

const backgroundList = [
    BambooGuitar,
    Blouse,
    Comb,
    Earrings,
    Galing,
    Gong,
    Guitar,
    headCover,
    Kulintang,
    LogDrum,
    Necklace,
    Pants,
    Saul,
    Skirt,
    Tlayong
];

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Vocabulary10 extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            BackgroundImage: Vocab10BG,
            clearBackground: 'gotoVocab10Menu',
            loloTop: '23%',
            lolaTop: '25%',
            kaibeTop: '35%',
            kulintangTop: '70%',
            gongTop: '32%',
            logdrumTop: '55%',
            guitarTop: '70%',
            bambooguitarTop: '81%',
            earringsTop: '73%',
            saulTop:'33.5%',
            pantsTop: '53.5%',
            blouseTop: '45.5%',
            skirtTop: '50.5%',
            combTop: '34.5%',
            necklaceTop: '38%',
            headcoverTop: '23%',
            galingTop: '51.5%',
            tlayongTop: '48.5%',
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
            loloTop: '1000%',
            lolaTop: '1000%',
            kaibeTop: '1000%',
            kulintangTop: '1000%',
            gongTop: '1000%',
            logdrumTop: '1000%',
            guitarTop: '1000%',
            bambooguitarTop: '1000%',
            earringsTop: '1000%',
            saulTop: '1000%',
            pantsTop: '1000%',
            blouseTop: '1000%',
            skirtTop: '1000%',
            combTop: '1000%',
            necklaceTop: '1000%',
            headcoverTop: '1000%',
            galingTop: '1000%',
            tlayongTop: '1000%',
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
          this.vocabSound = new Sound('vocab10_' + soundList[index] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
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
        this.vocabSound = new Sound('vocab10_' + soundList[this.state.clickSoundIndex] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
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
    
    gotoMainMenu = () => {
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
        if (clear == 'gotoVocab10Menu') {
            this.props.navigation.goBack()
        }
        if (clear == 'clear') {
            this.stopSounds();
            this.setState({
                BackgroundImage: Vocab10BG,
                loloTop: '23%',
                lolaTop: '25%',
                kaibeTop: '35%',
                kulintangTop: '70%',
                gongTop: '32%',
                logdrumTop: '55%',
                guitarTop: '70%',
                bambooguitarTop: '81%',
                earringsTop: '73%',
                saulTop: '33.5%',
                pantsTop: '53.5%',
                blouseTop: '45.5%',
                skirtTop: '50.5%',
                combTop: '34.5%',
                necklaceTop: '38%',
                headcoverTop: '23%',
                galingTop: '51.5%',
                tlayongTop: '48.5%',
                clearBackground: 'gotoVocab10Menu',
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
                source={Vocab10BG}
            >
                <View style={{ position: 'absolute', top: '0%', width: '100%', height: '100%' }}>
                    <Image source={Vocab10BG} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }}></Image>
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
                            style={globalStyleSheet .home}
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
                    left: '35%',
                    top:this.state.loloTop,
                    width: '11%',
                    resizeMode: 'cover',
                }}>
                        <Image
                            source={LoloAsset}
                            style={styles.loloImage}
                        ></Image>
                </View>

                <View style={{
                    position: 'absolute',
                    left: '52%',
                    top:this.state.lolaTop,
                }}>
                        <Image
                            source={LolaAsset}
                            style={styles.lolaImage}
                        ></Image>
                </View>

                <View style={{
                    position: 'absolute',
                    top:this.state.kaibeTop,
                    left:'44%'
                }}>
                        <Image
                            source={KaibeAsset}
                            style={styles.kaibeImage}
                        ></Image>
                </View>



                <View style={{
                    position: 'absolute',
                    left: '15%',
                    top: this.state.kulintangTop,
                    height: '11%',
                    width: '22%',
                    resizeMode: 'cover',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(8);
                    }}>
                        <Image
                            source={kulintang_item}
                            style={styles.kulintangImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={{
                    position: 'absolute',
                    left: '15%',
                    top: this.state.gongTop,
                    height: '38%',
                    width: '18%',
                    resizeMode: 'cover',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(5);
                    }}>
                        <Image
                            source={gong_item}
                            style={styles.gongImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={{
                    position: 'absolute',
                    left: '73%',
                    top:this.state.logdrumTop,
                    height: '13%',
                    width: '9%',
                    resizeMode: 'cover',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(9);
                    }}>
                        <Image
                            source={hallowlogdrum_item}
                            style={styles.hallowlogdrumImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={{
                    position: 'absolute',
                    left: '64%',
                    top:this.state.guitarTop,
                    resizeMode: 'cover',
                    transform: [{ rotate: '30deg' }],
                    width: '23%',
                    height: '6%',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(6);
                    }}>
                        <Image
                            source={guitar_item}
                            style={styles.guitarImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={{
                    position: 'absolute',
                    left: '66%',
                    top: this.state.bambooguitarTop,
                    resizeMode: 'cover',
                    width: '13%',
                    height: '6%',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(0);
                    }}>
                        <Image
                            source={guitarkawayan_item}
                            style={styles.guitarkawayanImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={{
                    position: 'absolute',
                    left: '63.5%',
                    top: this.state.earringsTop,
                    resizeMode: 'cover',
                    width: '10%',
                    height: '8%',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(3);
                    }}>
                        <Image
                            source={earings_item}
                            style={styles.earingsImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={{position: "absolute", height: hp('22%'), width: wp('10.5%'), left: '35.5%', top:this.state.saulTop}}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(12);
                    }}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

                <View style={{position: "absolute", height: hp('18%'), width: wp('8%'), left: '37.5%', top:this.state.pantsTop}}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(11);
                    }}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

                <View style={{position: "absolute", height: hp('15%'), width: wp('7%'), left: '46.5%', top:this.state.blouseTop}}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(1);
                    }}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

                <View style={{position: "absolute", height: hp('30%'), width: wp('9%'), left: '53.5%', top:this.state.skirtTop}}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(13);
                    }}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

                <View style={{position: "absolute", height: hp('6%'), width: wp('5%'), left: '47.3%', top:this.state.combTop}}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(2);
                    }}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

                <View style={{position: "absolute", height: hp('6%'), width: wp('3%'), left: '40.5%', top:this.state.necklaceTop}}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(10);
                    }}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

                <View style={{position: "absolute", height: hp('6.5%'), width: wp('5.5%'), left: '39.5%', top:this.state.headcoverTop}}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(7);
                    }}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

                <View style={{position: "absolute", height: hp('3.5%'), width: wp('7.5%'), left: '38%', top:this.state.galingTop}}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(4);
                    }}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

                <View style={{position: "absolute", height: hp('8%'), width: wp('9%'), left: '53.5%', top:this.state.tlayongTop}}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(14);
                    }}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({

    lolaBorder: {
      position: 'absolute',
      left: '52%',
      top: '25%',
    },
      lolaImage: {
        height: hp('66%'),
        width: wp('12%'),
        resizeMode: 'contain',
      },

    loloBorder: {
      position: 'absolute',
      left: '35%',
      top: '23%',
      width: '11%',
      resizeMode: 'cover',
    },
      loloImage: {
        height: hp('68%'),
        width: wp('14%'),
        resizeMode: 'contain',
      },

    kaibeBorder: {
      position: 'absolute',
      top: '35%',
    },
      kaibeImage: {
        height: hp('54%'),
        width: wp('11%'),
        resizeMode: 'contain',
      },

    kulintangBorder: {
      position: 'absolute',
      left: '15%',
      top: '70%',
      height: '11%',
      width: '22%',
      resizeMode: 'cover',
    },
      kulintangImage: {
        top: '-34%',
        left: '-20%',
        height: hp('40%'),
        width: wp('30%'),
        resizeMode: 'contain',
      },

    gongBorder: {
      position: 'absolute',
      left: '15%',
      top: '32%',
      height: '38%',
      width: '18%',
      resizeMode: 'cover',
    },
      gongImage: {
        top: '-7.5%',
        left: '-35%',
        height: hp('50%'),
        width: wp('30%'),
        resizeMode: 'contain',
      },

    hallowlogdrumBorder: {
      position: 'absolute',
      left: '73%',
      top: '55%',
      height: '13%',
      width: '9%',
      resizeMode: 'cover',
    },
      hallowlogdrumImage: {
        top: '-27%',
        left: '-35%',
        height: hp('30%'),
        width: wp('15%'),
        resizeMode: 'contain',
      },

    guitarBorder: {
      position: 'absolute',
      left: '64%',
      top: '70%',
      resizeMode: 'cover',
      transform: [{ rotate: '30deg' }],
      width: '23%',
      height: '6%',
    },
      guitarImage: {
        left: '-15%',
        top: '-40%',
        height: hp('45%'),
        width: wp('32.5%'),
        resizeMode: 'contain',
        transform: [{ rotate: '-27deg' }],
      },

    guitarkawayanBorder: {
      position: 'absolute',
      left: '66%',
      top: '81%',
      resizeMode: 'cover',
      width: '13%',
      height: '6%',
    },
      guitarkawayanImage: {
        top: '-41%',
        left: '-40%',
        height: hp('30%'),
        width: wp('22.5%'),
        resizeMode: 'contain',
        transform: [{ rotate: '40deg' }],
      },

    earingsBorder: {
      position: 'absolute',
      left: '63.5%',
      top: '73%',
      resizeMode: 'cover',
      width: '10%',
      height: '8%',
    },
      earingsImage: {
        top: '-34%',
        left: '-58%',
        height: hp('22%'),
        width: wp('22.5%'),
        resizeMode: 'contain',
        transform: [{ rotate: '70deg' }],
      },




});

export default withNavigation(Vocabulary10);
