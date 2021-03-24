import React, { Component } from "react";
import { StyleSheet, AsyncStorage, View, Image, ImageBackground, TouchableWithoutFeedback, TouchableOpacity, Text} from "react-native";

import Video from "react-native-video";
import DadSe_FIL_Slide2 from '../IntroVideos/DadSe_FIL_Slide2.mp4';
import DadSe_EN_Slide2 from '../IntroVideos/DadSe_EN_Slide2.mp4';
import { globalStyleSheet as styles } from '../globalStyleSheet/globalStyleSheet.js';
import { withNavigation } from 'react-navigation'; 
import { sound } from '../HomePage';
import Skip_icon from '../images/skip.png';
import Bang1Icon from './gameImages/bang1_icon.png';
import Bang2Icon from './gameImages/12Icon_Bang2Lock.png';
import Bang3Icon from './gameImages/12Icon_Bang3Lock.png';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

var Realm = require('realm');
let realm;
const SessionPlayer = '@MyApp:SessionPlayer';

class DSBangIntroScreen extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            paused: false,
            source: DadSe_FIL_Slide2,
            opacityVideo: 1,
            paused: false,
            progress: 0,
            duration: 0,
            muted: false,
            volume: 1,
            subtitle: ' English',
        };
    }

    static navigationOptions = {
        header:null,
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
        this.setState({paused: true, volume: 0, muted: true});
        this.props.navigation.replace('gameMenu',{showDadseBang:'show'});
        realm = new Realm({ path: 'PlayerDatabase.realm' });
        var getStage = realm.objects('Players');
        const storedValue = await AsyncStorage.getItem(SessionPlayer);
        for (a = 0; a < getStage.length; a++) {
            const con = parseInt(a);
            if (storedValue == getStage[con].playername) {
                realm.write(() => {
                getStage[con].dadseintro = 'done';
                })
            }
        }
    }

    gotoBangScreen = async () => {
        try {
            sound.setVolume(0.2);
            sound.play();
        } catch(error) {
            
        }
        this.setState({paused: true, volume: 0, muted: true});
        this.props.navigation.replace('gameMenu', { showDadseBang: 'show' });
        realm = new Realm({ path: 'PlayerDatabase.realm' });
        var getStage = realm.objects('Players');
        const storedValue = await AsyncStorage.getItem(SessionPlayer);
        for (a = 0; a < getStage.length; a++) {
            const con = parseInt(a);
            if (storedValue == getStage[con].playername) {
                realm.write(() => {
                    getStage[con].dadseintro = 'done';
                })
            }
        }
    }

    gotoHome = () => {
        this.props.navigation.navigate('home');
    }

    render() {

        return (
            <ImageBackground style={videoStyle.container}>
                <View style={{position: 'absolute', width: '100%', height: '100%',}}>
                    <TouchableWithoutFeedback onPress={this.hideControl}>
                        <Video
                            paused={this.state.paused}
                            source={this.state.source}
                            
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

                <View style={styles.homeContainer}>
                    <TouchableOpacity onPress={this.gotoBangScreen}>
                        <Image source={Skip_icon} style={styles.home} />
                    </TouchableOpacity>
                </View>

                <View style={{
                    position: 'absolute',
                    top: hp('22%'),
                    left: wp('63%'),
                    height: hp('16%'),
                    width: wp('28%'),
                }}>
                    <Image source={Bang1Icon} style={styles.image}></Image>
                </View>
                <View style={{
                    position: 'absolute',
                    left: wp('63%'),
                    top: hp('40%'),
                    height: hp('16%'),
                    width: wp('28%'),
                }}>
                    <Image source={Bang2Icon} style={styles.image}></Image>
                </View>
                <View style={{
                    position: 'absolute',
                    left: wp('63%'),
                    top: hp('59%'),
                    height: hp('16%'),
                    width: wp('28%'),
                }}>
                    <Image source={Bang3Icon} style={styles.image}></Image>
                </View>

                <View style={{position: 'absolute', top: '78%', left: '88%', height: '10%', justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress={()=> {
                        this.setState({
                            source: this.state.source == DadSe_FIL_Slide2 ? DadSe_EN_Slide2 : DadSe_FIL_Slide2,
                            subtitle: this.state.subtitle == ' English' ? ' Filipino' : ' English',
                        });
                        // this.handleProgressPress;
                    }}>
                        <Text style={{color: 'white', borderWidth: 2, borderColor: 'white', borderRadius: 5, padding: 3, fontSize: 18, backgroundColor: '#242424', shadowOpacity: 100}}>{this.state.subtitle}</Text>
                    </TouchableOpacity>
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

export default withNavigation(DSBangIntroScreen);