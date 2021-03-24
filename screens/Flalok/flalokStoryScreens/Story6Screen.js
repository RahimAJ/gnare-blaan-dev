import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ImageBackground, TouchableWithoutFeedback, TouchableOpacity} from "react-native";

import Video from "react-native-video";
import ProgressBar from "react-native-progress/Bar";
import { withNavigation } from 'react-navigation'; 
import Icon from "react-native-vector-icons/FontAwesome";
import RNBackgroundDownloader from "react-native-background-downloader";

// import Story6_FL from '../flalokVideos/Story6_FL.mp4';
// import Story6_EN from '../flalokVideos/Story6_EN.mp4';
import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';

import { sound } from '../../HomePage';

import NextStory from '../flalokImages/NextStory.png';
import Vocabulary10and11 from '../flalokImages/Vocabulary10&11Btn.png';
import CultureandArts from '../flalokImages/Culture&ArtsBtn.png';
import flalokAfterStory_BG from '../../Games/gameImages/DadSeBG.png';

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js';

const Story6_FL = {
  uri: RNBackgroundDownloader.directories.documents + "/Story6_FL.mp4",
};
const Story6_EN = {
  uri: RNBackgroundDownloader.directories.documents + "/Story6_EN.mp4",
};

function secondsToTime(time) {
    return ~~(time / 60) + ":" + (time % 60 < 10 ? "0" : "") + time % 60;
}


class Story6Screen extends Component {
    
    constructor () {
        super();
        this.state = {
            changeVideo: false,
            videoFile: Story6_FL,
            opacityVideo: 1,
            opacityNext: 0,
            hideVideo: '-1200%',
            hideTabs: '-1000%',
            hideHome: '-1000%',
            hideStory: '0%',

            subtitle: ' English',
            hideSub: '-1000%',

            controlHide: '-1000%',
            vidSkip: '-1000%',
            
            progressHeight: 48,
            paused: false,
            progress: 0,
            duration: 0,
            muted: false,
            volume: 1,
        };
    }

    static navigationOptions = {
        header:null,
    }

    componentDidMount(){
        try {
            // sound.setVolume(0);
            sound.pause();
        } catch(error) {
            
        }
    }

    handleMainButtonTouch = () => {
        if (this.state.progress >= 1) {
            this.player.seek(0);
        }

        this.setState(state => {
        return {
            paused: !state.paused,
        };
        });
    };

    handleProgressPress = e => {
        
        let position = e.nativeEvent.locationX;
        let progress = (position / 300) * this.state.duration;
        this.player.seek(progress);
    };

    handleBackward = () => {

        const currentProgress = this.state.progress * this.state.duration;
        const backward = currentProgress - 10;
        this.player.seek(backward);
    }

    handleForward = () => {
        
        const currentProgress = this.state.progress * this.state.duration;
        const forward = currentProgress + 10;
        this.player.seek(forward);
    }


    handleProgress = progress => {
        this.setState({
            progress: progress.currentTime / this.state.duration,
        });
    };

    handleEnd = () => {
        try {
            // sound.setVolume(0.2);
            sound.play();
        } catch(error) {
            
        }
        this.setState({ paused: true, opacityVideo: 0, opacityNext: 1, 
                    hideVideo: 0, hideTabs: '15%', hideHome: '3%',
                    hideStory: '-1000%'});
        //his.props.navigation.navigate('endstory');
    };

    handleLoad = meta => {
        this.setState({
            duration: meta.duration,
        });
    };

    goBack = () => {
        try {
            // sound.setVolume(0.2);
            sound.play();
        } catch(error) {
            
        }
        this.setState({ paused: true});
        this.props.navigation.navigate('flalok');
    }

    gotoMainMenu = () => {
        try {
            // sound.setVolume(0.2);
            sound.play();
        } catch(error) {
            
        }
        this.props.navigation.navigate('mainMenu');
    }


    gotoNextStory = () => {
        this.props.navigation.navigate('story1');
    }

    gotoVocabulary10and11 = () => {
        this.props.navigation.navigate('vocabulary10');
    }

    gotoCultureandArts = () => {
        this.props.navigation.navigate('cultureandarts');
    }

    hideControl = () => {
        this.setState({
            controlHide: this.state.controlHide == 0 ? -1000 : 0,
            vidSkip: this.state.vidSkip == '3%' ? '-1000%' : '3%',
            hideSub: this.state.hideSub == '-1000%'  ? '3%' : '-1000%',
        })
    }
    

    render() {

        return (
            <ImageBackground style={videoStyle.container}>
                
                <View style={{position: 'absolute', width: '100%', height: '100%', top: this.state.hideStory, opacity: this.state.opacityVideo}}>
                    <TouchableWithoutFeedback onPress={this.hideControl}>
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

                    <View style={{position: 'absolute', justifyContent: 'center', top: this.state.controlHide, alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', width: '100%', height: '15%'}}>
                        {/* <Text style={{color: 'white', fontSize: 25}}>Magtikeng Bnatel - Mahiwagang Ibon</Text> */}
                        <Image source={require('../flalokImages/title6.png')} style={{width:'70%', position: 'absolute', left:'15%'}}></Image>
                    </View>

                    <View style={{position: 'absolute', top: this.state.hideSub, left: '88%', height: '10%', justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity onPress={()=> {
                            this.setState({
                                videoFile: this.state.videoFile == Story6_FL ? Story6_EN : Story6_FL,
                                subtitle: this.state.subtitle == ' English' ? ' Filipino' : ' English',
                            });
                            this.handleProgressPress;
                        }}>
                            <Text style={{color: 'white', borderWidth: 2, borderColor: 'white', borderRadius: 5, padding: 3, fontSize: 18}}>{this.state.subtitle}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{backgroundColor: "rgba(0, 0, 0, 0.8)",
                        height: '15%',
                        left: 0,
                        bottom: this.state.controlHide,
                        right: 0,
                        position: "absolute",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingHorizontal: 10,}}>

                        <TouchableWithoutFeedback onPress={this.handleMainButtonTouch}>
                            <Icon name={!this.state.paused ? "pause" : "play"} size={30} color="#FFF" />
                        </TouchableWithoutFeedback>

                        <View style={{marginRight: '3%', marginLeft: '15%'}}>
                            <TouchableWithoutFeedback onPress={this.handleBackward}>
                                <Icon name={"backward"} size={25} color="#FFF" />
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={{marginRight: '2%', marginLeft: '2%'}}>
                            <TouchableWithoutFeedback onPress={this.handleProgressPress}>
                                    <ProgressBar
                                        progress={this.state.progress}
                                        color="#FFF"
                                        unfilledColor="rgba(255,255,255,.5)"
                                        borderColor="#FFF"
                                        width={300}
                                        height={20}
                                    />
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={{marginRight: '15%', marginLeft: '3%'}}>
                            <TouchableWithoutFeedback onPress={this.handleForward}>
                                <Icon name={"forward"} size={25} color="#FFF" />
                            </TouchableWithoutFeedback>
                        </View>

                        <Text style={videoStyle.duration}>
                            {secondsToTime(Math.floor(this.state.progress * this.state.duration))}
                        </Text>
                    </View>

                    <View style={{position: 'absolute', 
                                top: this.state.vidSkip,
                                left: '1%', width: '14%', height: '28%',}}>
                        <TouchableOpacity onPress={this.goBack}>
                            <Image
                                source={Back_icon}
                                style={styles.back}
                            ></Image>
                        </TouchableOpacity>
                    </View>
                </View>

                <Image source={flalokAfterStory_BG} style={{position: 'absolute', top: this.state.hideVideo, opacity: this.state.opacityNext, width: '100%', height: '100%'}} />
                    <View style={{position: 'absolute', width: '14%', height: '28%', left: '85%', top: this.state.hideHome,}}>
                        <TouchableOpacity onPress={this.gotoMainMenu}>
                            <Image
                                source={Home_icon}
                                style={styles.home}
                            ></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={{position: 'absolute', top: this.state.hideTabs, left: '45%', width: '40%', height: '60%',}}>
                        
                        <View style={EndStyles.imageTab}>
                            <TouchableOpacity onPress={this.gotoNextStory}>
                                <Image
                                    source={NextStory}
                                    style={EndStyles.image}
                                ></Image>
                            </TouchableOpacity>
                        </View>

                        <View style={EndStyles.imageTab}>
                            <TouchableOpacity onPress={this.gotoVocabulary10and11}>
                                <Image
                                    source={Vocabulary10and11}
                                    style={EndStyles.image}
                                ></Image>
                            </TouchableOpacity>
                        </View>

                        <View style={EndStyles.imageTab}>
                            <TouchableOpacity onPress={this.gotoCultureandArts}>
                                <Image
                                    source={CultureandArts}
                                    style={EndStyles.image}
                                ></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
            </ImageBackground>
        );
    }
    }

const videoStyle = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
    },

    duration: {
        color: "#FFF",
        marginLeft: 15,
    },
});

const EndStyles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: '15%',
        left: '45%',
        width: '40%',
        height: '60%',
    },

    imageTab: {
        width: '90%',
        height: '25%',
        margin: '5%',
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

    homeContainer: {
        position: 'absolute',
        left: '85%',
        top: '-2%',
    },
});


export default withNavigation(Story6Screen);