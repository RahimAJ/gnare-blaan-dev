import GameIntro_FIL from '../IntroVideos/GameIntro_FIL.mp4';
import GameIntro_EN from '../IntroVideos/GameIntro_EN.mp4';
import Number_Intro from '../IntroVideos/Number_Intro.mp4';

import React, { Component } from 'react';
import Video from 'react-native-video';
import { Text, Image, View, TouchableOpacity, ImageBackground, AsyncStorage} from 'react-native';
import { withNavigation } from 'react-navigation';

import Skip_icon from '../images/skip.png';
import Replay_icon from '../images/replay.png';

import {globalStyleSheet as styles} from '../globalStyleSheet/globalStyleSheet.js';
import { sound } from '../HomePage';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DadBatak from './gameImages/1Icon_DadBatak.png';
import DadSe from './gameImages/1Icon_DadSe.png';

const gameintro = '@MyApp:gameintro';

class GameIntroScreen extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            dadbatakTop: '5%',
            dadseTop:'5%',
            paused: false,
            source: GameIntro_FIL,
            progress: 0,
            volume: 1,
            duration: 0,
            muted: false,

            subtitle: ' English',
        }
    }

    componentDidMount(){
        try {
            sound.setVolume(0);
            sound.play();
        } catch(error) {
            
        }
    }

    handleEnd = async () => {
        try {
            sound.setVolume(0.2);
            sound.play();
        } catch(error) {
            
        }
        this.setState({paused: true, volume: 0, muted: true,});
        this.props.navigation.replace('gameMenu', { openProfile: 'showProfile' });
        await AsyncStorage.setItem(gameintro, 'close');
    };

    gotoGameScreen = async () => {
        try {
            sound.setVolume(0.2);
            sound.play();
        } catch(error) {
            
        }
        this.setState({paused: true, volume: 0, muted: true});
        this.props.navigation.replace('gameMenu', { openProfile: 'showProfile' });
        await AsyncStorage.setItem(gameintro, 'close');
    }

    gotoHome = () => {
        this.props.navigation.navigate('home');
    }

    // replayVideo = () => {
    //     this.setState({source: Number_Intro});
    //     setTimeout(()=>{
    //         this.setState({source: Letter_Intro});
    //     }, 200);
    // }

    render() {
        return (
            <ImageBackground style={styles.image}>
                <View style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'black'}}>
                    <Video
                            paused={false}
                            source={this.state.source}
                            style={{ width: "100%", height: '100%' }}
                            resizeMode="stretch"
                            volume={this.state.volume}
                            muted={this.state.muted}
                            onLoad={this.handleLoad}
                            onProgress={this.handleProgress}
                            onEnd={this.handleEnd}
                            ref={ref => {
                                this.player = ref;
                            }}
                        />
                </View>

                {/* <View style={[styles.sentenceIconContainer, {top: '80%', left: '88%'}]}>
                    <TouchableOpacity onPress={this.replayVideo}>
                        <Image source={Replay_icon} style={styles.home} />
                    </TouchableOpacity>
                </View> */}

                <View style={{position: 'absolute', top: '78%', left: '88%', height: '10%', justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress={()=> {
                        this.setState({
                            source: this.state.source == GameIntro_FIL ? GameIntro_EN : GameIntro_FIL,
                            subtitle: this.state.subtitle == ' English' ? ' Filipino' : ' English',
                        });
                        // this.handleProgressPress;
                    }}>
                        <Text style={{color: 'white', borderWidth: 2, borderColor: 'white', borderRadius: 5, padding: 3, fontSize: 18, backgroundColor: '#242424', shadowOpacity: 100}}>{this.state.subtitle}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.homeContainer}>
                    <TouchableOpacity onPress={this.gotoGameScreen}>
                        <Image source={Skip_icon} style={styles.home} />
                    </TouchableOpacity>
                </View>

                <View style={{
                    position: 'absolute',
                    top:this.state.dadbatakTop,
                    left: wp('10.5%'),
                    height: hp('12%'),
                    width: wp('33%'),
                }}>
                    <Image source={DadBatak} style={styles.image}/>
                </View>

                <View style={{
                    position: 'absolute',
                    top:this.state.dadbatakTop,
                    right: wp('10.5%'),
                    height: hp('12%'),
                    width: wp('33%'),
                }}>
                    <Image source={DadSe} style={styles.image}/>
                </View>

            </ImageBackground>
        )
    }
}

export default withNavigation(GameIntroScreen);