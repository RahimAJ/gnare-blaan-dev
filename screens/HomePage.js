import React,{Component} from 'react';
import { TouchableWithoutFeedback, StyleSheet, ImageBackground, TouchableOpacity, View, Image, Text, StatusBar, AsyncStorage, Animated, Easing, BackHandler, AppState} from 'react-native';
import { withNavigation } from 'react-navigation';
import Video from "react-native-video";
import {globalStyleSheet as styles} from './globalStyleSheet/globalStyleSheet.js';

import HomepageBackground from './images/GnareMain.gif';
import About_icon from "./images/Icon_About.png";
import Like_icon from "./images/Icon_Like.png";
import Share_icon from "./images/Icon_Share.png";
import sponsorVid_video from './IntroVideos/Sponsor_Intro.mp4';

import Sound from 'react-native-sound';

import handGIF from './images/hand.gif';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export let sound = new Sound('blaanbg.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        alert('failed to load the sound', error);
        return;
    } else {
        try{
            sound.setVolume(0.2);
            sound.play();
            sound.setNumberOfLoops(-1);
            // setInterval(() => {
            //     sound.setVolume(0.2);
            //     sound.play();
            // }, (60 * 1000)*3);
        } catch(error) {
            
        }
}});

// export function increaseBGVolume() {
//     if (sound.getVolume() < 1){
//         sound.setVolume(sound.getVolume() + 0.1);
//         alert('Volume: ' + sound.getVolume());
//     } else if(sound.getVolume() >= 1) {
//         alert('Volume is at Maximum! ' + sound.getVolume())
//     }
// }

// export function decreaseBGVolume() {
//     if (sound.getVolume() > 0){
//         sound.setVolume(sound.getVolume() - 0.1);
//         alert('Volume: ' + sound.getVolume());
//     } else if(sound.getVolume() <= 0){
//         alert('Volume is at Minimum! ' + sound.getVolume())
//     }
// }

class Homescreen extends Component{

    static navigationOptions = {
        header:null,
    }

    constructor(props) {
        super(props);
        this.state = {
            yValue: new Animated.Value(0),
            changeVideo: false,
            videoFile: sponsorVid_video,
            changeScene: 0,
            opacityVideo: 1,
            opacityNext: 0,
            hideVideo: '-1200%',
            hideTabs: '-1000%',
            hideHome: '-1000%',
            hideStory: '0%',
            hideSub: '-1000%',
            hideHand: 1000,
            controlHide: '-1000%',
            vidSkip: '-1000%',
            handGIF: About_icon,
            
            progressHeight: 48,
            paused: false,
            progress: 0,
            duration: 0,
            muted: false,
            volume: 1,

            animDuration: 4500,
        }
    }

    _storeData = async () => {
        try {
          await AsyncStorage.setItem('@MyApp:FreshOpen', 'I have watched the sponsor page');
          
        } catch (error) {
          // Error saving data
        }
      };

    _retrieveData = async () => {
        try {
        const value = await AsyncStorage.getItem('@MyApp:FreshOpen');
        if (value !== null) {
            this.setState({changeScene: 0});
        } else {
            this.setState({changeScene: 1});
            this._storeData();
        }
        } catch (error) {
        // Error retrieving data
        }
    };

    _moveAnimation = () => {
        Animated.timing(this.state.yValue, {
          toValue: hp('90%'),
          duration: this.state.animDuration,
          easing: Easing.linear,
        }).start();
        sound.play();
    
      }

    componentDidMount() {
        this._retrieveData();
        StatusBar.setHidden(true);
        try{
            sound.setVolume(0.2);
            sound.play();
        } catch(error) {
            
        }
        sound.play();
        AppState.addEventListener('change', this._handleAppStateChange);
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        sound.stop();
        BackHandler.exitApp();
    }
    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
    }

    _handleAppStateChange = (currentAppState) => {
        if(currentAppState == "background") {
            sound.pause();
        } 
        if(currentAppState == "active") {
            sound.play();
        }
    }

    handleProgress = progress => {
        this.setState({
            progress: progress.currentTime / this.state.duration,
        });
    };

    handleEnd = () => {
        this.setState({ paused: true, opacityVideo: 0, opacityNext: 1, 
            hideVideo: 0, hideTabs: '15%', hideHome: '3%',
            hideStory: '-1000%'});
        this.setState({changeScene: 0});
        setTimeout(()=> {
            this.setState({handGIF: handGIF});
            this.setState({hideHand: 0});
        }, 5000);
        setTimeout(()=> {
            this.setState({handGIF: About_icon });
            this.setState({hideHand: 1000});
        }, 6500);
    };

    removeItem = () => {
        AsyncStorage.clear();
        alert('Storage Cleared!');
    }

    gotoMainMenu = () => {
        if (this.state.animDuration == 4500) {
            this.setState({
                animDuration: 0,
            })
        }
        this.props.navigation.navigate('mainMenu');
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }
    gotoAbout = () => {
      this.props.navigation.navigate('about');
    }

    render(){
        console.disableYellowBox = true; 
        return(
            <ImageBackground style={styles.image} source={HomepageBackground}>
                <View style={{position: "absolute", width:"100%", height:"100%"}}>
                    <TouchableOpacity  onPress={this.gotoMainMenu}>
                    <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>
                {this.state.changeScene == 1 && 
                    <View style={{width: '100%', height: '100%', 
                        position: 'absolute', opacity: this.state.changeScene,}}>
                        <TouchableWithoutFeedback>
                            <Video
                                paused={this.state.paused}
                                source={this.state.videoFile}
                                
                                style={{ width: "100%", height: '100%' }}
                                resizeMode="stretch"
                                volume={this.state.volume}
                                muted={this.state.muted}
                                onLoad={this.handleLoad}
                                onProgress={this.handleProgress}
                                onEnd={this.handleEnd}
                                onLoadStart={this.handleLoadStart}
                                ref={ref => {
                                this.player = ref;
                                }}
                            />
                        </TouchableWithoutFeedback>
                    </View>
                }
                <View style={{width: '100%', height: '100%', position: 'absolute', top: this.state.hideHand,
                    backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                    <View style={{position: 'absolute', top: '40%', left: '42.5%'}}>
                        <Image source={this.state.handGIF} style={{width: '100%', height: '100%', 
                            resizeMode: 'stretch'}}></Image>
                    </View>
                </View>
                <Animated.View style={[{bottom: this.state.yValue}]}>
                <View style={{
                bottom: hp('-132%'),
                height: hp('30%'),
                left: wp('1.5%'),
                }}>
                    {this._moveAnimation()}
                        <View style={styles.row}>
                            <View style={styles.HomePageItems} >
                                <TouchableOpacity>
                                    <Image style={styles.imageSizeStoryMenu} source={Like_icon} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.HomePageItems} >
                                <TouchableOpacity onPress={this.removeItem}>
                                    <Image style={styles.imageSizeStoryMenu} source={Share_icon} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.HomePageItems} >
                                <TouchableOpacity  onPress={this.gotoAbout}>
                                    <Image style={styles.imageSizeStoryMenu} source={About_icon} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Animated.View>
            </ImageBackground>
        );
    }
}

export default withNavigation(Homescreen);