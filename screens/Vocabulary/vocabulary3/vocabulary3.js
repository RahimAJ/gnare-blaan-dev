import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, TouchableOpacity, BackHandler, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';

import Sound from 'react-native-sound';
import { sound } from '../../HomePage';

import BG from '../../images/BG.jpg';
import Vocab3BG from './vocabulary3Images/vocab3.png';
import BasketAsset from './vocabulary3Images/basketAsset.png';
import CrabAsset from './vocabulary3Images/crabAsset.png';
import EelAsset from './vocabulary3Images/eelAsset.png';
import FishAsset from './vocabulary3Images/fishAsset.png';
import FishnetAsset from './vocabulary3Images/fishnetAsset.png';
import SeaAsset from './vocabulary3Images/seaAsset.png';
import SeashoreAsset from './vocabulary3Images/seashoreAsset.png';
import ShrimpAsset from './vocabulary3Images/shrimpAsset.png';
import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';
import Basket from './vocabulary3Images/basket.png';
import Crab from './vocabulary3Images/crab.png';
import Eel from './vocabulary3Images/eel.png';
import Fish from './vocabulary3Images/fish.png';
import Fishnet from './vocabulary3Images/fishnet.png';
import Sea from './vocabulary3Images/sea.png';
import Seashore from './vocabulary3Images/seashore.png';
import Shrimp from './vocabulary3Images/shrimp.png';
import SpeakerIcon from '../../images/Speaker_icon.png';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

Sound.setCategory('Playback');

// Vocab Sound List
const soundList = ['basket', 'crab', 'eel', 'fish', 'fishnet', 'sea', 'seashore', 'shrimp' ];

const BackgroundList=[Basket,Crab,Eel,Fish,Fishnet,Sea,Seashore,Shrimp];

class Vocabulary3 extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            BackgroundImage: Vocab3BG,
            clearBackground: 'gotoVocab3Menu',
            seaTop:'30%',
            seashoreTop:'25.5%',
            basketTop:'21%',
            ealTop:'60%',
            fishTop:'56%',
            seashoreTop2: '26%',
            seashoreTop3: '40%',
            fishnetTop:'27%',
            shrimpTop:'61%',
            crabTop:'27%',
            speakerTop:'1000%',
            clickSoundIndex:'',
        }

        //Sounds
        this.vocabSound = null;
        this.timeoutSound = null;
    }

  
    changeBackground = (index) =>{
        this.setState({
            BackgroundImage: BackgroundList[index],
            seaTop: '1000%',
            seashoreTop: '1000%',
            basketTop: '1000%',
            ealTop: '1000%',
            fishTop: '1000%',
            seashoreTop2: '1000%',
            seashoreTop3: '1000%',
            fishnetTop: '1000%',
            shrimpTop: '1000%',
            crabTop: '1000%',
            speakerTop: '20%',
            clearBackground: 'clear',
            clickSoundIndex:index
        })
        this.autoPlaySound(index);
        try {
            // sound.setVolume(0);
        sound.pause();
        } catch(error) {
            
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
        if (clear == 'gotoVocab3Menu') {
            if (this.timeoutSound != null){
                clearTimeout(this.timeoutSound);
            }
            this.props.navigation.goBack()
        }
        if (clear == 'clear') {
            this.stopSounds();
            if (this.timeoutSound != null){
                clearTimeout(this.timeoutSound);
            }
            this.setState({
                BackgroundImage: Vocab3BG,
                clearBackground: 'gotoVocab3Menu',
                seaTop: '30%',
                seashoreTop: '25.5%',
                basketTop: '21%',
                ealTop: '60%',
                fishTop: '56%',
                seashoreTop2: '26%',
                seashoreTop3: '40%',
                fishnetTop: '27%',
                shrimpTop: '61%',
                crabTop: '27%',
                speakerTop:'1000%',
            })
        }
        if (this.timeoutSound != null){
            clearTimeout(this.timeoutSound);
        }
    }

    autoPlaySound = (index) => {
        this.releaseSounds();
        this.timeoutSound = setTimeout(()=> {
          this.vocabSound = new Sound('vocab3_' + soundList[index] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
            this.vocabSound.play();
          });  
        }, 1000);   
      }
    
      releaseSounds = ()=> {
          if(this.vocabSound != null) {
              this.vocabSound.release();
          }
      }
      
      stopSounds = () => {
        if (this.vocabSound != null){
          this.vocabSound.stop();
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
        this.vocabSound = new Sound('vocab3_' + soundList[this.state.clickSoundIndex] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            alert('failed to load the sound', error);
            return;
        } else {
            this.vocabSound.play();
        }});
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
                source={Vocab3BG}
            >
                <View style={{ position: 'absolute', top: '0%', width: '100%', height: '100%' }}>
                    <Image source={Vocab3BG} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }}></Image>
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
                    top: this.state.seaTop,
                    left: '12.5%',
                    justifyContent: 'center',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(5)
                    }}>
                        <Image
                            source={SeaAsset}
                            style={styles.seaImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top:this.state.seashoreTop,
                    left: '51.5%',
                    height: '15%',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(6)
                    }}>
                        <Image
                            source={SeashoreAsset}
                            style={styles.seashoreImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top:this.state.basketTop,
                    left: '70%',
                    justifyContent: 'center',
                    width: '14%',
                    height: '17%',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(0)
                    }}>
                        <Image
                            source={BasketAsset}
                            style={styles.basketImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top:this.state.ealTop,
                    left: '45%',
                    justifyContent: 'center',
                    width: '17%',
                    height: '18%',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(2)
                    }}>
                        <Image
                            source={EelAsset}
                            style={styles.eelImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top:this.state.fishTop,
                    left: '15%',
                    justifyContent: 'center',
                    width: '26%',
                    height: '27%',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(3)
                    }}>
                        <Image
                            source={FishAsset}
                            style={styles.fishImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerStyle}>
                </View>

                <View style={{position: "absolute", height: hp('17%'), width: wp('30%'), left: '11.3%', top:this.state.seashoreTop2,}}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(6)
                    }}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

                <View style={{position: "absolute", height: hp('15%'), width: wp('10%'), left: '79%', top:this.state.seashoreTop3}}>
                   <TouchableOpacity onPress={() => {
                        this.changeBackground(6)
                    }}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    position: 'absolute',
                    top:this.state.fishnetTop,
                    left: '19%',
                    justifyContent: 'center',
                    width: '14%',
                    height: '12%',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(4)
                    }}>
                        <Image
                            source={FishnetAsset}
                            style={styles.fishnetImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top:this.state.shrimpTop,
                    left: '66%',
                    justifyContent: 'center',
                    width: '20%',
                    height: '20%',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(7)
                    }}>
                        <Image
                            source={ShrimpAsset}
                            style={styles.shrimpImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top:this.state.crabTop,
                    left: '60%',
                    justifyContent: 'center',
                    height: '12%',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(1)
                    }}>
                        <Image
                            source={CrabAsset}
                            style={styles.crabImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    basketImage: {
        width: wp('15%'),
        height: hp('20%'),
        resizeMode: 'contain',
    },
    eelImage: {
        width: wp('18%'),
        height: hp('25%'),
        resizeMode: 'contain',
    },
    fishImage: {
        width: wp('30%'),
        height: hp('30%'),
        resizeMode: 'contain',
    },
    fishnetImage: {
        width: wp('15%'),
        height: hp('20%'),
        resizeMode: 'contain',
    },
    seaImage: {
        width: wp('75%'),
        height: hp('31%'),
        resizeMode: 'contain',
    },
    shrimpImage: {
        width: wp('20%'),
        height: hp('30%'),
        resizeMode: 'contain',
    },
    crabImage: {
        width: wp('8%'),
        height: hp('12%'),
        resizeMode: 'contain',
    },
    seashoreImage: {
        top: '-18%',
        width: wp('37%'),
        height: hp('37%'),
        resizeMode: 'contain',
    },
    containerStyle: {
        position: 'absolute',
        top: '29%',
        left: '13%',
        width: '13%',
        height: '14%',
    },
});

export default withNavigation(Vocabulary3);
