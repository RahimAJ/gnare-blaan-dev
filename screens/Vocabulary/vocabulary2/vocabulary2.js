import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, TouchableOpacity, BackHandler,Animated } from 'react-native';

import Sound from 'react-native-sound';
import { sound } from '../../HomePage';

import { withNavigation } from 'react-navigation';
import { globalStyleSheet } from '../../globalStyleSheet/globalStyleSheet'
import BG2 from '../../images/BG.jpg';
import BG from '../../images/boy.png';
import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';
import Head from './vocabulary2Images/ulo.png';
import Eyes from './vocabulary2Images/mata.png';
import Hair from './vocabulary2Images/buhok.png';
import Nose from './vocabulary2Images/ilong.png';
import Mouth from './vocabulary2Images/bunganga.png';
import Ears from './vocabulary2Images/tainga.png';
import Neck from './vocabulary2Images/leeg.png';
import Shoulder from './vocabulary2Images/balikat.png';
import Chest from './vocabulary2Images/dibdib.png';
import Hand from './vocabulary2Images/kamay.png';
import Hips from './vocabulary2Images/baywang.png';
import Fingers from './vocabulary2Images/daliri.png';
import Legs from './vocabulary2Images/binti.png';
import Knees from './vocabulary2Images/tuhod.png';
import Toes from './vocabulary2Images/paa.png';
import SpeakerIcon from '../../images/Speaker_icon.png';

Sound.setCategory('Playback');

// Vocab Sound List
const soundList = ['ulo', 'mata', 'buhok', 'ilong', 'bunganga', 'tainga', 'leeg', 'balikat', 'dibdib', 'kamay', 
                    'baywang', 'daliri', 'binti', 'tuhod', 'paa'];

const partList = [Head, Eyes, Hair, Nose, Mouth, Ears, Neck, Shoulder, Chest, Hand, Hips, Fingers, Legs, Knees, Toes,BG]

class vocabulary2 extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        global.BGVolume = "0.2",
        this.moveAnimation = new Animated.ValueXY({ x: 400, y: 100 })
        this.state = {
            BackgroundImage: BG,
            view1Height: '0%',
            view1Width:'0%',
            View1Left:'300%',
            view1Top:'19%',
            view2Height:'0%',
            view2Width:'0%',
            View2Left:'300%',
            view2Top:'19%',
            view3Height: '0%',
            view3Width: '0%',
            View3Left: '300%',
            view3Top: '18%',
            boyTop:'16%',
            boyLeft:'40%',
            stillView:'',
            speakerTop:'1000%',
            clearBackground:'goVocabMenu',
        }

        // Sounds
        this.vocabSound = null;
        this.timeoutSound = null;
    }

    View = (View) => {
        Animated.spring(this.animatedValue, {
            toValue: 1,
        }).start()
        if(View == 1){
            this.setState({
                boyTop: '20%',
                boyLeft: '20%',
                View1Left: '37%',
                view1Top: '25%',
                view1Height: '80%',
                view1Width: '50%',
                view2Top: '1000%',
                View2Left: '1000%',
                view3Top: '1000%',
                View3Left: '1000%',
                stillView:1,
            })
        }
        if(View == 2){
            this.setState({
                boyTop: '20%',
                boyLeft: '20%',
                view1Top: '1000%',
                View1Left: '1000%',
                view3Top: '1000%',
                View3Left: '1000%',
                view3Height: '0%',
                view3Width: '0%',
                view2Height: '80%',
                view2Width: '50%',
                view2Top: '10%',
                View2Left: '35%',
                stillView: 2,
            })
        }
        if(View == 3){
            this.setState({
                boyTop: '20%',
                boyLeft: '20%',
                view1Height: '0%',
                view1Width: '0%',
                view1Top: '1000%',
                View1Left: '1000%',
                view2Top: '1000%',
                View2Left: '1000%',
                view2Height: '0%',
                view2Width: '0%',
                view3Height: '80%',
                view3Width: '50%',
                View3Left: '37%',
                view3Top: '13%',
                stillView: 3,
            })
        }
    }

    changeBackground = (Background, soundPlay) => {
        this.setState({
            BackgroundImage: partList[Background],
            view1Top: '1000%',
            view2Top: '1000%',
            view3Top: '1000%',
            boyTop: '1000%',
            speakerTop: '20%',
            clearBackground: 'clear',
            indexSound: soundPlay,
        })
        this.autoPlaySound(Background);
        try {
            // sound.setVolume(0);
            sound.pause();
        } catch(error) {
            
        }
    }

    autoPlaySound = (index) => {
        this.releaseSounds();
        this.timeoutSound = setTimeout(()=> {
          this.vocabSound = new Sound('vocab2_' + soundList[index] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
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
        this.vocabSound = new Sound('vocab2_' + soundList[this.state.indexSound] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
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
    
    componentWillMount(){
        this.animatedValue = new Animated.Value(1);
        Animated.spring(this.animatedValue,{
            toValue: 0.5
         }).start()
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
        if (clear == 'goVocabMenu'){

            this.props.navigation.goBack()
        }
        if (clear == 'clear'){
        this.stopSounds();
          const show = this.state.stillView;
          this.View(show);
          this.setState({
              clearBackground:'goVocabMenu',
          })
        }
        this.setState({
            BackgroundImage:partList[15],
            speakerTop:'1000%',
        })
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
                source={BG}
            >
                <View style={{ position: 'absolute', top: '0%', width: '100%', height: '100%' }}>
                    <Image source={BG} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }}></Image>
                </View>
                <View style={{ position: 'absolute',width: '100%', height: '100%' }}>
                    <Image source={this.state.BackgroundImage} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }}></Image>
                </View>
                    <View style={{
                    position: 'absolute',          
                    width:'20%',
                    height:'70%',
                    top:this.state.boyTop,
                    left:this.state.boyLeft,
                    justifyCotent:'center',
                    alignItems:'center'
                    }}>
                    <View style={{ position: 'absolute', width: '35%', height: '45%',top:'-6.30%',left:'31.50%'}}>
                        <TouchableOpacity onPress={() => {
                            this.View(1)
                        }}>
                            <Image source={require('./vocabulary2Images/TO_ulo.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ position: 'absolute', width: '71%', height: '55%',top:'16.45%',left:'11%'}}>
                        <TouchableOpacity onPress={() => {
                            this.View(2)
                        }}>
                            <Image source={require('./vocabulary2Images/TO_dibdib.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ position: 'absolute', width: '80%', height: '50%', top: '48%', left: '9%',top:'44%' }}>
                        <TouchableOpacity onPress={() => {
                            this.View(3)
                        }}>
                            <Image source={require('./vocabulary2Images/TO_paa.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    </View>
                <Animated.View 
                style={{
                    position: 'absolute',
                    width: this.state.view1Width,
                    height: this.state.view1Height,
                    left: this.state.View1Left,
                    top:this.state.view1Top,
                    justifyCotent:'center',
                    alignItems:'center',
                }}> 
                    <View style={{ position: 'absolute', width: '23.80%', height: '40%', top: '25.88%', left: '37.90%' }}>
                        <Image source={require('./vocabulary2Images/ulo5.png')}
                            style={{
                                resizeMode: 'contain',
                                height: '100%',
                                width: '100%'
                            }}
                        />
                    </View>
                   
                    <View style={{ position: 'absolute', width: '23%', height: '30%', top: '19.30%', left: '38%' }}>
                        <TouchableOpacity onPress={() => {
                            this.changeBackground(1, 1)
                        }}>
                            <Image source={require('./vocabulary2Images/ulo2.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ position: 'absolute', width: '7%', height: '12%', top: '27.47%', left: '59%' }}>
                        <TouchableOpacity onPress={() => {
                            this.changeBackground(2, 2)
                        }}>
                            <Image source={require('./vocabulary2Images/ulo3.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ position: 'absolute', width: '7%', height: '12%',top: '27.47%', left: '33.20%'}}>
                        <TouchableOpacity onPress={() => {
                            this.changeBackground(2, 2)
                        }}>
                            <Image source={require('./vocabulary2Images/ulo4.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ position: 'absolute', width: '35%', height: '27%', top: '6%' }}>
                        <TouchableOpacity onPress={() => {
                            this.changeBackground(0, 0)
                        }}>
                            <Image source={require('./vocabulary2Images/ulo1.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ position: 'absolute', width: '9%', height: '13%', top: '34%', left: '58.65%' }}>
                        <TouchableOpacity onPress={() => {
                            this.changeBackground(5, 5)
                        }}>
                            <Image source={require('./vocabulary2Images/ulo7.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ position: 'absolute', width: '9%', height: '13%', top: '34%', left: '31.65%' }}>
                        <TouchableOpacity onPress={() => {
                            this.changeBackground(5, 5)
                        }}>
                            <Image source={require('./vocabulary2Images/ulo8.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    
                    <View style={{ position: 'absolute', width: '9%', height: '13%', top: '36%', left: '45%' }}>
                        <TouchableOpacity onPress={() => {
                            this.changeBackground(3, 3)
                        }}>
                            <Image source={require('./vocabulary2Images/ulo9.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ position: 'absolute', width: '12%', height: '9%', top: '43.50%', left: '43.50%'}}>
                        <TouchableOpacity onPress={() => {
                            this.changeBackground(4, 4)
                        }}>
                            <Image source={require('./vocabulary2Images/ulo10.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ position: 'absolute', width: '15%', height: '7%', top: '50%', left: '42%',}}>
                        <TouchableOpacity onPress={() => {
                            this.changeBackground(6, 6)
                        }}>
                            <Image source={require('./vocabulary2Images/ulo11.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>   
                </Animated.View>
                <View style={globalStyleSheet.backContainer}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image
                            source={Back_icon}
                            style={globalStyleSheet.back}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <Animated.View
                    style={{
                        position: 'absolute',
                        width: this.state.view2Width,
                        height: this.state.view2Height,
                        left: this.state.View2Left,
                        top: this.state.view2Top,
                        justifyCotent: 'center',
                    }}>
                    <View style={{ position: 'absolute', width: '15%', height: '16.50%', top: '29%', left: '34.20%',}}>
                        <TouchableOpacity onPress={() => {
                            this.changeBackground(7, 7)
                        }}>
                            <Image source={require('./vocabulary2Images/dibdib3.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ position: 'absolute', width: '15%', height: '16.50%', top: '29%', left: '65.40%',}}>
                        <TouchableOpacity onPress={() => {
                            this.changeBackground(7, 7)
                        }}>
                            <Image source={require('./vocabulary2Images/dibdib2.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ position: 'absolute', width: '27%', height: '50%', top: '28%', left: '43.50%',}}>
                            <Image source={require('./vocabulary2Images/dibdib4.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                    </View>
                    <View style={{ position: 'absolute', width: '30%', height: '50%', top: '10%', left: '42%',}}>
                        <TouchableOpacity onPress={() => {
                            this.changeBackground(8, 8)
                        }}>
                            <Image source={require('./vocabulary2Images/dibdib1.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ position: 'absolute', width: '15%', height: '40%', top: '37.47%', left: '29.95%',}}>
                        <TouchableOpacity onPress={() => {
                            this.changeBackground(9, 9)
                        }}>
                            <Image source={require('./vocabulary2Images/dibdib5.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ position: 'absolute', width: '15%', height: '35%', top: '41.7%', left: '68.3%'}}>
                        <TouchableOpacity onPress={() => {
                            this.changeBackground(9, 9)
                        }}>
                            <Image source={require('./vocabulary2Images/dibdib6.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ position: 'absolute',width: '8%', height: '10%', top: '75.25%', left: '74.3%',}}>
                        <TouchableOpacity onPress={() => {
                            this.changeBackground(11, 11)
                        }}>
                            <Image source={require('./vocabulary2Images/dibdib7.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ position: 'absolute', width: '8%', height: '10%', top: '77%', left: '29.70%', }}>
                        <TouchableOpacity onPress={() => {
                            this.changeBackground(11, 11)
                        }}>
                            <Image source={require('./vocabulary2Images/dibdib8.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </Animated.View>
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
                <Animated.View
                    style={{
                        position: 'absolute',
                        width: this.state.view3Width,
                        height: this.state.view3Height,
                        left: this.state.View3Left,
                        top: this.state.view3Top,
                        justifyCotent: 'center',
                        alignItems:'center',
                    }}>
                    <View style={{ position: 'absolute', width: '30%', height: '16%', top: '5%', left: '29.70%', }}>
                        <TouchableOpacity onPress={() => {
                            this.changeBackground(10, 10)
                        }}>
                            <Image source={require('./vocabulary2Images/paa1.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                     <View style={{ position: 'absolute',width: '35%', height: '25%', top: '19.45%', left: '27.43%', }}>
                        <TouchableOpacity onPress={() => {
                            this.changeBackground(12, 12)
                        }}>
                            <Image source={require('./vocabulary2Images/paa2.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                      <View style={{position: 'absolute',width: '33%', height: '21%', top: '42.60%', left: '28.25%', }}>
                        <TouchableOpacity onPress={() => {
                            this.changeBackground(13, 13)
                        }}>
                            <Image source={require('./vocabulary2Images/paa3.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{position: 'absolute', width: '30%', height: '21%', top: '61%', left: '30.33%', }}>
                            <Image source={require('./vocabulary2Images/paa5.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                    </View>
                    <View style={{position: 'absolute', width: '37.50%', height: '16%', top: '79%', left: '26.40%', }}>
                        <TouchableOpacity onPress={() => {
                            this.changeBackground(14, 14)
                        }}>
                            <Image source={require('./vocabulary2Images/paa6.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </Animated.View>       
                <View style={globalStyleSheet.homeContainer}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image
                            source={Home_icon}
                            style={globalStyleSheet.home}
                        ></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}


export default withNavigation(vocabulary2);