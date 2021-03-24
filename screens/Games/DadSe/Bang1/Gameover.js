import React, { Component } from "react";
import { StyleSheet, AsyncStorage, View, Image, Text, ImageBackground, TouchableWithoutFeedback, TouchableOpacity} from "react-native";

import Video from "react-native-video";
import GameoverDS_FL from "../../gameImages/gameoverDS_FL.mp4";
import GameoverDS_EN from "../../gameImages/gameoverDS_EN.mp4";
import { sound } from '../../../HomePage';
import { withNavigation } from 'react-navigation'; 

const RandomKey = '@MyApp:RandomKey';
const Stage2 = '@MyApp:Stage2';

class GameoverDS extends Component {
    
    constructor () {
        super();
        this.state = {
            pause: false,
            source: GameoverDS_FL,
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

    handleEnd =  () => {
        try {
            sound.setVolume(0.2);
            sound.play();
        } catch(error) { 
            
        }
        this.props.navigation.replace('bang', { showGameover: 'Gameover' });
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
                <View style={{position: 'absolute', top: '78%', left: '88%', height: '10%', justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress={()=> {
                        this.setState({
                            source: this.state.source == GameoverDS_FL ? GameoverDS_EN : GameoverDS_FL,
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

export default withNavigation(GameoverDS);