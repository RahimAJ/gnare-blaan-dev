import DadBatak_FIL_Slide2 from '../IntroVideos/DadBatak_FIL_Slide2.mp4';
import DadBatak_EN_Slide2 from '../IntroVideos/DadBatak_EN_Slide2.mp4';

import React, { Component } from 'react';
import Video from 'react-native-video';
import { Text, Image, View, TouchableOpacity, ImageBackground, AsyncStorage} from 'react-native';
import { withNavigation } from 'react-navigation';
import Skip_icon from '../images/skip.png';
import Bang1Icon from './gameImages/bang1_icon.png';
import Bang2Icon from './gameImages/12Icon_Bang2Lock.png';
import Bang3Icon from './gameImages/12Icon_Bang3Lock.png';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {globalStyleSheet as styles} from '../globalStyleSheet/globalStyleSheet.js';
import { sound } from '../HomePage';

var Realm = require('realm');
let realm;
const SessionPlayer = '@MyApp:SessionPlayer';

class DadBatak_GameMenuIntro extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            paused: false,
            source: DadBatak_FIL_Slide2,
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
        this.setState({paused: true, volume: 0, muted: true});
        this.props.navigation.replace('gameMenu',{showDadBatakBang:'show' });
        realm = new Realm({ path: 'PlayerDatabase.realm' });
        var getStage = realm.objects('Players');
        const storedValue = await AsyncStorage.getItem(SessionPlayer);
        for (a = 0; a < getStage.length; a++) {
            const con = parseInt(a);
            if (storedValue == getStage[con].playername) {
                realm.write(() => {
                    getStage[con].dadbatakintro = 'done';
                })
            }
        }
    };

    gotoGameScreen = async () => {
        try {
            sound.setVolume(0.2);
            sound.play();
        } catch(error) {
            
        }
        this.setState({paused: true, volume: 0, muted: true});
        this.props.navigation.replace('gameMenu', { showDadBatakBang: 'show' });
        realm = new Realm({ path: 'PlayerDatabase.realm' });
        var getStage = realm.objects('Players');
        const storedValue = await AsyncStorage.getItem(SessionPlayer);
        for (a = 0; a < getStage.length; a++) {
            const con = parseInt(a);
            if (storedValue == getStage[con].playername) {
                realm.write(() => {
                    getStage[con].dadbatakintro = 'done';
                })
            }
        }
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
                

                <View style={{position: 'absolute', top: '78%', left: '88%', height: '10%', justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress={()=> {
                        this.setState({
                            source: this.state.source == DadBatak_FIL_Slide2 ? DadBatak_EN_Slide2 : DadBatak_FIL_Slide2,
                            subtitle: this.state.subtitle == ' English' ? ' Filipino' : ' English',
                        });
                        // this.handleProgressPress;
                    }}>
                        <Text style={{color: 'white', borderWidth: 2, borderColor: 'white', borderRadius: 5, padding: 3, fontSize: 18, backgroundColor: '#242424', shadowOpacity: 100}}>{this.state.subtitle}</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        )
    }
}

export default withNavigation(DadBatak_GameMenuIntro);