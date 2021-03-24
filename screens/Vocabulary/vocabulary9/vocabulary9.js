import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, TouchableOpacity, BackHandler, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';

import Sound from 'react-native-sound';
import { sound } from '../../HomePage';

import Vocab9BG from './vocabulary9Images/calendarBG.png';
import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';
import januaryAsset from './vocabulary9Images/item_january.png';
import februaryAsset from './vocabulary9Images/item_february.png';
import MarchAsset from './vocabulary9Images/Item_march.png';
import AprilAsset from './vocabulary9Images/item_april.png';
import MayAsset from './vocabulary9Images/item_may.png';
import JuneAsset from './vocabulary9Images/item_june.png';
import JulyAsset from './vocabulary9Images/item_july.png';
import AugustAsset from './vocabulary9Images/item_august.png';
import SeptemberAsset from './vocabulary9Images/item_september.png';
import OctoberAsset from './vocabulary9Images/item_october.png';
import NovemberAsset from './vocabulary9Images/item_november.png';
import DecemberAsset from './vocabulary9Images/item_december.png';
import Month1 from './vocabulary9Images/january.png';
import Month2 from './vocabulary9Images/february.png';
import Month3 from './vocabulary9Images/march.png';
import Month4 from './vocabulary9Images/april.png';
import Month5 from './vocabulary9Images/may.png';
import Month6 from './vocabulary9Images/june.png';
import Month7 from './vocabulary9Images/july.png';
import Month8 from './vocabulary9Images/august.png';
import Month9 from './vocabulary9Images/september.png';
import Month10 from './vocabulary9Images/october.png';
import Month11 from './vocabulary9Images/november.png';
import Month12 from './vocabulary9Images/december.png';
import Day1 from './vocabulary9Images/monday.png';
import Day2 from './vocabulary9Images/tuesday.png';
import Day3 from './vocabulary9Images/wednesday.png';
import Day4 from './vocabulary9Images/thursday.png';
import Day5 from './vocabulary9Images/friday.png';
import Day6 from './vocabulary9Images/saturday.png';
import Day7 from './vocabulary9Images/sunday.png';
import NextIcon from '../../images/Next_Icon.png';
import PrevIcon from '../../images/Prev_Icon.png';
import SpeakerIcon from '../../images/Speaker_icon.png';

Sound.setCategory('Playback');

// Vocab Sound List
const soundList = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 
                    'august', 'september', 'october', 'november', 'december', 
                    'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const calendarList = [
    januaryAsset,
    februaryAsset,
    MarchAsset,
    AprilAsset,
    MayAsset,
    JuneAsset,
    JulyAsset,
    AugustAsset,
    SeptemberAsset,
    OctoberAsset,
    NovemberAsset,
    DecemberAsset
];

const monthList = [
    Month1,
    Month2,
    Month3,
    Month4,
    Month5,
    Month6,
    Month7,
    Month8,
    Month9,
    Month10,
    Month11,
    Month12
];

const daylist = [Day1,Day2,Day3,Day4,Day5,Day6,Day7];

class Vocabulary9 extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            prevTop:'40%',
            changeCalendar:januaryAsset,
            counter:0,
            BackgroundImage:Vocab9BG,
            calendarTop:'18%',
            NextTop: '40%',
            day:0,
            clearBackground:'gotoVocab9Menu',
            speakerTop:'1000%',
        }

        this.vocabSound = null;
        this.timeoutSound = null;
    }


    day = (index, soundPlay) => {
        this.setState({
            BackgroundImage:daylist[index],
            clearBackground: 'clear',
            prevTop: '1000%',
            calendarTop: '1000%',
            NextTop: '1000%',
            speakerTop: '20%',
            clickSoundIndex:soundPlay
        })
        this.autoPlaySound(soundPlay);
        try {
            // sound.setVolume(0);
        sound.pause();
        } catch(error) {
            
        }
    }

    gotoMonth = () => {
        const index = this.state.counter;
        this.setState({
            BackgroundImage:monthList[index],
            calendarTop:'1000%',
            NextTop:'1000%',
            prevTop:'1000%',
            clearBackground: 'clear',
            speakerTop: '20%',
            clickSoundIndex:index
        })
        this.autoPlaySound(index);
        try {
            sound.setVolume(0);
            sound.play();
        } catch(error) {
            
        }
    }

    autoPlaySound = (index) => {
        this.releaseSounds();
        this.timeoutSound = setTimeout(()=> {
          this.vocabSound = new Sound('vocab9_' + soundList[index] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
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
        this.vocabSound = new Sound('vocab9_' + soundList[this.state.clickSoundIndex] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
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

    gotoNextPage = () => {
        const index = this.state.counter + 1;
        if(index <= 11){
            this.setState({
                counter: index,
                changeCalendar: calendarList[index],
            });
        }else{
            this.setState({
                counter: 0,
                changeCalendar: calendarList[0],
            });
        }     
    }

    goPrev = () => {
        const index = this.state.counter - 1;
        if (index >= 0) {
            this.setState({
                counter: index,
                changeCalendar: calendarList[index],
            });
        } else {
            this.setState({
                counter: 11,
                changeCalendar: calendarList[11],
            });
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
        if (clear == 'gotoVocab9Menu') {
            this.props.navigation.goBack()
        }
        if (clear == 'clear') {
            this.stopSounds();
            this.setState({
                BackgroundImage: Vocab9BG,
                clearBackground: 'gotoVocab9Menu',
                prevTop: '40%',
                calendarTop: '18%',
                NextTop: '40%',
                getDate: 'getDate',
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
          <ImageBackground source={Vocab9BG} style={{
              flex: 1, 
              width: '100%', 
              height: '100%', 
              resizeMode: 'stretch',
              justifyContent:'center',
              alignItems:'center'
              }}>
                <View style={{ position: 'absolute', top: '0%', width: '100%', height: '100%' }}>
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
                    top: this.state.calendarTop
                }}>
                    <TouchableOpacity onPress={this.gotoMonth}>
                        <Image
                            source={this.state.changeCalendar}
                            style={{
                                height: hp('75%'),
                                width: wp('50%'),
                                resizeMode: 'contain',
                            }}
                        ></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        this.day(6, 18);
                    }} style={{
                        position:'absolute',
                        left:'12.50%',
                        top:'40%',
                        width: '11%', 
                        height: '11%', 
                       }}>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.day(0, 12);
                    }} style={{
                        position: 'absolute',
                        left: '24%',
                        top: '40%',
                        width: '11%',
                        height: '11%',
                    }}>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.day(1, 13);
                    }} style={{
                        position: 'absolute',
                        left: '35%',
                        top: '40%',
                        width: '11%',
                        height: '11%',
                    }}>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.day(2, 14);
                    }} style={{
                        position: 'absolute',
                        left: '46%',
                        top: '40%',
                        width: '11%',
                        height: '11%',
                    }}>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.day(3, 15);
                    }} style={{
                        position: 'absolute',
                        left: '57%',
                        top: '40%',
                        width: '11%',
                        height: '11%',
                    }}>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.day(4, 16);
                    }} style={{
                        position: 'absolute',
                        left: '68%',
                        top: '40%',
                        width: '11%',
                        height: '11%',
                    }}>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.day(5, 17);
                    }} style={{
                        position: 'absolute',
                        left: '79%',
                        top: '40%',
                        width: '11%',
                        height: '11%',
                    }}>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    left: '83%',
                    top: this.state.NextTop,
                    width: '12%',
                    height: '24%',
                }}>
                    <TouchableOpacity onPress={this.gotoNextPage}>
                        <Image
                            source={NextIcon}
                            style={globalStyleSheet.next}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    left: '5%',
                    top: this.state.prevTop,
                    width: '12%',
                    height: '24%',
                }}>
                    <TouchableOpacity onPress={this.goPrev}>
                        <Image
                            source={PrevIcon}
                            style={{
                                width: '75%',
                                height: '75%',
                                resizeMode: 'contain',}}
                        ></Image>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        )
    }
}

export default withNavigation(Vocabulary9);
