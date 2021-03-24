import React, { Component } from 'react';
import { View, ImageBackground, Image, AsyncStorage, 
    TouchableOpacity, StatusBar } from 'react-native';
import { withNavigation } from 'react-navigation';
import MenuItem from './MenuItem';
import Sound from 'react-native-sound';

import {sound} from './HomePage';

import Icon from "react-native-vector-icons/FontAwesome";

import {globalStyleSheet as styles} from './globalStyleSheet/globalStyleSheet.js'; 
Sound.setCategory('Playback');

const gameintro = '@MyApp:gameintro';

class Mainmenu extends Component {
    static navigationOptions = {
        header: null,
    }

    // componentDidMount() {
    //     try {
    //         sound.setVolume(0.2);
    //         sound.play();
    //     } catch(error) {

    //     }
    // }

    gotoLetters = async () => {
        this.props.navigation.navigate('letterIntro');
    }

    gotoNumbers = async () => {
        this.props.navigation.navigate('numberIntro');
    }

    gotoVocabulary = () => { 
        this.props.navigation.push('vocabularyMenu');
    }

    gotoFlalok = () => {
        this.props.navigation.push('flalok');
    }

    gotoMainMenu = () => {
       try {
            // sound.setVolume(0.2);
            sound.play();
        } catch(error) {

        }
        this.props.navigation.navigate('home');
    }

    gotoCultureandArts = () => {

        this.props.navigation.push('cultureandarts');
    }

    goBack = () => {
        this.props.navigation.navigate('home');
    }

    gotoGame = async () => {
        const storedValue = await AsyncStorage.getItem(gameintro);
        if(storedValue == 'close'){
            this.props.navigation.replace('gameMenu', { openProfile: 'showProfile' });
        }else{
            this.props.navigation.replace('gameIntro');
        }
    }

    gotoSettings = () => {
        this.props.navigation.navigate('settingBG');
    }

    playClickSound = () => {
        if(this.clickSound != null) {
            this.clickSound.release();
        }
        this.clickSound = new Sound('click.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            alert('failed to load the sound', error);
            return;
        } else {
            this.clickSound.play();
        }});
    }

    releaseSounds = ()=> {
        if(this.clickSound != null) {
            this.clickSound.release();
        }
    }

    render() {
        console.disableYellowBox = true; 
        StatusBar.setHidden(true);
        return (
            <ImageBackground style={styles.image}
                source={require('./images/BG.jpg')}
            >
                <View style={styles.menuContainer}>
                    <MenuItem itemImage={require('./images/Icon_Letter.png')} goto={this.gotoLetters} />
                    <MenuItem itemImage={require('./images/Icon_Number.png')} goto={this.gotoNumbers}/>
                    <MenuItem itemImage={require('./images/Flalok.png')} goto={this.gotoFlalok} />
                    <MenuItem itemImage={require('./images/Games.png')} goto={this.gotoGame}/>
                    <MenuItem itemImage={require('./images/CultureandArts.png')} goto={this.gotoCultureandArts} />
                    <MenuItem itemImage={require('./images/Vocabulary.png')} goto={this.gotoVocabulary}/>
                </View>

                <View style={styles.backContainer}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image
                            source={require('./Games/gameImages/GnareMain.png')}
                            style={styles.back}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{position: 'absolute',
                                left: '90%',
                                top: '3%',
                                width: '14%',
                                height: '28%',}}>
                    <TouchableOpacity onPress={this.gotoSettings}>
                                <Icon name={"cog"} size={85} color="#FFF" />
                    </TouchableOpacity>
                </View>
            </ImageBackground>

            
        )
    }
}

export default withNavigation(Mainmenu);
