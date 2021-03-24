import Letter_Intro from '../IntroVideos/Letter_Intro.mp4';
import Number_Intro from '../IntroVideos/Number_Intro.mp4';

import React, { Component } from 'react';
//import Video from 'react-native-video';

import Video from 'react-native-video';

import { Image, View, TouchableOpacity , ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';

import Skip_icon from '../images/skip.png';
import Replay_icon from '../images/replay.png';

import {globalStyleSheet as styles} from '../globalStyleSheet/globalStyleSheet.js';

import { sound } from '../HomePage';

class LetterIntroScreen extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor() {
        super();
        this.state = {
            paused: false,
            source: Letter_Intro,
            progress: 0,
            volume: 1,
            duration: 0,
            muted: false,
        }
    }

    componentDidMount(){
        try {
            sound.setVolume(0);
            sound.paused();
        } catch(error) {
            
        }
    }

    handleProgress = progress => {
        this.setState({
            progress: progress.currentTime / this.state.duration,
        });
    };

    handleEnd = () => {
        try {
            sound.setVolume(0.5);
            sound.play();
        } catch(error) {
            
        }
        this.setState({paused: true, volume: 0, muted: true});
        this.props.navigation.replace('letters');
    };

    handleLoad = meta => {
        this.setState({
            duration: meta.duration,
        });   
    };

    gotoLetterScreen = () => {
        try {
            sound.setVolume(0.5);
            sound.play();
        } catch(error) {
            
        }
        this.setState({paused: true, volume: 0, muted: true});
        this.props.navigation.replace('letters');
    }

    replayVideo = () => {
        try {
            sound.setVolume(0);
            sound.play();
        } catch(error) {
            
        }
        this.setState({source: Number_Intro});
        setTimeout(()=>{
            this.setState({source: Letter_Intro});
        }, 200);
    }

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
                />
                </View>

                <View style={[styles.sentenceIconContainer, {top: '80%', left: '88%'}]}>
                    <TouchableOpacity onPress={this.replayVideo}>
                        <Image source={Replay_icon} style={styles.home} />
                    </TouchableOpacity> 
                </View>

                <View style={styles.homeContainer}>
                    <TouchableOpacity onPress={this.gotoLetterScreen}>
                        <Image source={Skip_icon} style={styles.home} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

export default withNavigation(LetterIntroScreen);