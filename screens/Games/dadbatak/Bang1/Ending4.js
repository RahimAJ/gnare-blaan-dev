import React, { Component } from "react";
import { StyleSheet, AsyncStorage, View, Image, ImageBackground, TouchableWithoutFeedback, TouchableOpacity, Text} from "react-native";

import Video from "react-native-video";
import FIL_EndingVideo from "../../gameImages/FIL_endingDB.mp4";
import EN_EndingVideo from "../../gameImages/EN_endingDB.mp4";

import { sound } from '../../../HomePage';
import { withNavigation } from 'react-navigation'; 

import Skip_icon from '../../../images/skip.png'
import Bang1Icon from '../../gameImages/bang1_icon.png';
import Bang2Icon from '../../gameImages/bang2_icon.png';
import Bang3Icon from '../../gameImages/12Icon_Bang3Lock.png';
import GnareIcon from '../../gameImages/GnareMain.png';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {globalStyleSheet as styles} from '../../../globalStyleSheet/globalStyleSheet.js';

const SessionPlayer = '@MyApp:SessionPlayer';

var Realm = require('realm');
let realm;

const RandomKey = '@MyApp:RandomKey';
const Stage3 = '@MyApp:Stage3';

class Ending4 extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            paused: false,
            source: FIL_EndingVideo,
            opacityVideo: 1,
            paused: false,
            progress: 0,
            duration: 0,
            muted: false,
            volume: 1,
            subtitle: ' English',
        };
    }

    onSave = async () => { 
        await AsyncStorage.removeItem(RandomKey);
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
        this.onSave();
        this.props.navigation.replace('gameMenu', { show: 'DadBatak' });
        realm = new Realm({ path: 'PlayerDatabase.realm' });
        var getPlayers = realm.objects('Players');
        const storedValue = await AsyncStorage.getItem(SessionPlayer);
        for (a = 0; a < getPlayers.length; a++) {
            const con = parseInt(a);
            if (storedValue == getPlayers[con].playername) {
                realm.write(() => {
                    getPlayers[con].DBbangStage2 = 'unlock'
                })
            }
        }
    }

    gotoGameScreen = async () => {
        try {
            sound.setVolume(0.2);
            sound.play();
        } catch(error) {
            
        }
        this.setState({paused: true, volume: 0, muted: true});
        this.props.navigation.replace('gameMenu', { show: 'DadBatak' });
        realm = new Realm({ path: 'PlayerDatabase.realm' });
        var getPlayers = realm.objects('Players');
        const storedValue = await AsyncStorage.getItem(SessionPlayer);
        for (a = 0; a < getPlayers.length; a++) {
            const con = parseInt(a);
            if (storedValue == getPlayers[con].playername) {
                realm.write(() => {
                    getPlayers[con].DBbangStage2 = 'unlock'
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
                    <TouchableOpacity onPress={this.gotoGameScreen}>
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
                
                <View style={{position: 'absolute',
                    top: hp('5%'),
                    left: wp('2%'),
                    height: hp('12%'),
                    width: wp('10%'),}
                }>
                    <TouchableOpacity onPress={this.gotoHome}>
                        <Image source={GnareIcon} style={{width: '100%',
                            height: '100%',
                            resizeMode: 'stretch'
                        }}></Image>
                    </TouchableOpacity>
                </View>

                <View style={{position: 'absolute', top: '78%', left: '88%', height: '10%', justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress={()=> {
                        this.setState({
                            source: this.state.source == FIL_EndingVideo ? EN_EndingVideo : FIL_EndingVideo,
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

export default withNavigation(Ending4);