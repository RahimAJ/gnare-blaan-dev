import React, { Component } from 'react';
import { View, Image, ImageBackground, TouchableOpacity, AsyncStorage} from 'react-native';
import { withNavigation } from 'react-navigation';
import MenuItem from './LettersMenu';

import Sound from 'react-native-sound';

import GoBackIcon from '../images/Back_icon.png';
import HomeIcon from '../images/Home_icon.png';
import GlowA from './lettersGlow/GlowA.gif';
import Glow_A from './lettersGlow/Glow_A.png';

import { soundList, sentenceBGList, sentenceSubtitleList,
        letterBGList, glowGIFList, imageGIFList } from './letterImport';

    // Letter Components Imports
import SentenceIcon from '../images/Letters_Info_Icon.png';
import SpeakerIcon from '../images/Speaker_icon.png';
import PencilIcon from '../images/Pencil_icon.png';
import NextIcon from '../images/Next_Icon.png';
import PrevIcon from '../images/Prev_Icon.png';

    // Letter Main Background Import
import imageMainBG from '../images/BG.jpg';
import letterMainBG from '../images/BG1.jpg';
import black from '../images/black.png';

import {globalStyleSheet as styles} from '../globalStyleSheet/globalStyleSheet.js';

import { sound } from '../HomePage';

import {letterTracingList} from './LetterTracing/tracingImport';

import Logo from '../Games/gameImages/GnareMain.png';

    // Hiding Components
const hideLeft = '-1000%';
const hideRight = '1000%';
const showPrev ='6%';
const showNext = '85%';
const showPencil = '24%';
const showGlow = '22.5%';
const showSpeaker = '25%';
const showSentence = '80%';

Sound.setCategory('Playback');


class Letters extends Component {
    static navigationOptions = {
        header: null,
    }


        // Component State
    constructor() {
        super();

        this.state = {

            //Background State
            imageBackground: imageMainBG,
            letterMainBG: letterMainBG,
            showSubtitle: 0,
            sentenceScript: sentenceSubtitleList[0],

            pencilPressed: false,
            sentencePressed: false,
            fromTracing: true,
            backIcon: Logo,

            tracing: letterTracingList[0],


            //Letter Menu State
            menuLetterHide: '22%',

            //Letter State
            prevHide: hideLeft,
            nextHide: hideRight,
            pencilHide: hideLeft,
            glowHide: hideLeft,
            speakerHide: hideLeft,
            speaker2Hide: hideLeft,
            sentenceHide: hideRight,
            indexSound: 0,

            glow: imageGIFList[0],
            hideLetterBG: '0%',
            prevBG: imageMainBG,
        },

        // Sounds
        this.letterSound = null;
        this.wordSound = null;
        this.sentenceSound = null;
        this.objectGlow = null;
        this.glow1 = null;
        this.bgSound = null;

        this.timeoutSound = null;
    }

    componentDidMount(){
        try {
            sound.setVolume(0.5);
            sound.play();
        } catch(error) {
            
        }
    }

    changeBackground = (imageBG, soundPlay) => {
        this.stopAutoPlaySound();
        this.setState({menuLetterHide: imageBG == imageMainBG ? '22%' : '-1000%', 
                        prevHide: imageBG == letterBGList[0] ? hideLeft : showPrev,
                        imageBackground: imageBG, letterMainBG: imageBG != imageMainBG ? letterMainBG : imageMainBG,
                        nextHide: imageBG == imageMainBG ? hideRight : showNext,
                        backIcon: imageBG == imageMainBG ? Logo : HomeIcon,
                        glowHide: imageBG == imageMainBG ? hideLeft : showGlow,
                        speakerHide: imageBG == imageMainBG ? hideLeft : showSpeaker,
                        sentenceHide: imageBG == imageMainBG ? hideRight : showSentence,
                        pencilHide: imageBG == imageMainBG ? hideLeft : showPencil,
                        indexSound: soundPlay, glow: imageGIFList[soundPlay],
                        });
        if(imageBG != imageMainBG) {
            try {
                sound.setVolume(0);
                sound.paused();
            } catch(error) {
                
            }
        } else {
            try {
                sound.setVolume(0.5);
                sound.play();
            } catch(error) {
                
            }
        }
        if(!this.state.pencilPressed) {
            this.autoPlaySound();
        } else {
            try {
                sound.setVolume(0.5);
                sound.play();
            } catch(error) {
                
            }
        }
    }

    autoPlaySound = () => {
        this.releaseSounds();
        this.objectGlow = setTimeout(()=> {
            this.letterSound = new Sound('letter_play_' + soundList[this.state.indexSound] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    alert('failed to load the sound', error);
                    return;
                } else {
                    this.letterSound.play();
                }});   
        }, 200);
        
        this.glow1 = setTimeout(() => {
            this.wordSound = new Sound('word_play_' + soundList[this.state.indexSound] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    alert('failed to load the sound', error);
                    return;
                } else {
                    this.wordSound.play();
                }});
                this.setState({glow: imageGIFList[this.state.indexSound]});
                this.setState({glow: glowGIFList[this.state.indexSound]});
        }, 5000);
    }

    stopAutoPlaySound = () => {
        if(this.objectGlow != null && this.glow1 != null) {
            this.stopSounds();
//            this.setState({glow: Glow_A});
            clearTimeout(this.glow1);
            clearTimeout(this.objectGlow);
        }
    }

    sentencePage = () => {
        const letterIndex = this.state.indexSound;
        this.stopAutoPlaySound();
        this.setState({menuLetterHide: '-1000%', 
                        imageBackground: sentenceBGList[letterIndex],
                        letterMainBG: imageMainBG,
                        sentenceScript: sentenceSubtitleList[letterIndex],
                        showSubtitle: 1, sentencePressed: false,
                        prevHide: hideLeft, nextHide: hideRight,
                        glowHide: hideLeft, speakerHide: hideLeft,
                        speaker2Hide: showSpeaker, sentenceHide: hideRight,
                        pencilHide: hideLeft, prevBG: sentenceBGList[letterIndex]});
        this.playSentenceSound();
    }

    handleBackPress = () => {
        if(this.timeoutSound != null) {
            clearTimeout(this.timeoutSound);
        }
        this.stopAutoPlaySound();
        this.releaseSounds();
        this.letterSound = null;
        this.wordSound = null;
        this.sentenceSound = null;
    }

    releaseSounds = ()=> {
        if(this.letterSound != null) {
            this.letterSound.release();
        }
        if(this.wordSound != null) {
            this.wordSound.release();
        }
        if(this.sentenceSound != null) {
            this.sentenceSound.release();
        }
    }

    playLetterSound = () => {
        if(this.letterSound != null) {
            this.letterSound.release();
        }
        this.stopAutoPlaySound();
        this.letterSound = new Sound('letter_play_' + soundList[this.state.indexSound] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                alert('failed to load the sound', error);
                return;
            } else {
                this.letterSound.setVolume(2);
                this.letterSound.play();
            }});
    }

    playSentenceSound = () => {
        if(this.sentenceSound != null) {
            this.sentenceSound.release();
        }
        if(this.timeoutSound != null) {
            clearTimeout(this.timeoutSound);
        }
        this.stopAutoPlaySound();
        this.timeoutSound = setTimeout(()=> {
            this.sentenceSound = new Sound('sentence_letter_' + soundList[this.state.indexSound] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    alert('failed to load the sound', error);
                    return;
                } else {
                    this.sentenceSound.setVolume(2);
                    this.sentenceSound.play();
                    this.setState({sentenceScript: Glow_A});
                    this.setState({sentenceScript: sentenceSubtitleList[this.state.indexSound]});
                }});
        }, 500);
    }

    playWordSound = () => {
        if(this.wordSound != null) {
            this.wordSound.release();
        }
        this.stopAutoPlaySound();
        this.wordSound = new Sound('word_play_' + soundList[this.state.indexSound] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                alert('failed to load the sound', error);
                return;
            } else {
                this.wordSound.setVolume(2);
                this.wordSound.play();
                this.setState({glow: imageGIFList[this.state.indexSound]});
                this.setState({glow: glowGIFList[this.state.indexSound]});
            }});
    }

    letterTracing = () => {
        try {
            this.handleBackPress();
            try {
                sound.setVolume(0.5);
                sound.play();
            } catch(error) {
                
            }

            this.setState({tracing: letterTracingList[this.state.indexSound],
                fromTracing: false, pencilPressed: true, sentencePressed: false});
        } catch(error) {
            
        }
    }

    gotoMainMenu = () => {
        this.handleBackPress();
        if(this.state.backIcon == HomeIcon) {
            this.props.navigation.replace('mainMenu');
        } else {
            this.props.navigation.replace('home');
        }
    }

    goNext = () => {
        const letterNum = this.state.indexSound;
        const nextPage = letterNum + 1;
        const nextBG = letterBGList[nextPage];
        this.stopAutoPlaySound();
        if(nextPage <= 17) {
            this.changeBackground(nextBG, nextPage);
            this.setState({tracing: letterTracingList[nextPage]});
        } else {
            this.changeBackground(letterBGList[0], 0);
            this.setState({tracing: letterTracingList[0]});
        }
        if(this.state.pencilPressed) {
            this.setState({pencilPressed: false, fromTracing: true,});
            try {
                sound.setVolume(0);
                sound.paused();
            } catch(error) {

            }
        }
    }

    stopSounds = () => {
        if(this.letterSound != null) {
            this.letterSound.setVolume(0.2);
            this.letterSound.pause();
        }
        if(this.wordSound != null) {
            this.wordSound.setVolume(0.2);
            this.wordSound.pause();
        }
        if(this.sentenceSound != null) {
            this.sentenceSound.setVolume(0.2);
            this.sentenceSound.pause();
        }
        if(this.timeoutSound != null) {
            clearTimeout(this.timeoutSound);
        }
    }

    goPrev = () => {
        const letterNum = this.state.indexSound;
        const prevPage = letterNum - 1;
        this.stopAutoPlaySound();
        const prevBG = letterBGList[prevPage];

        if(prevPage > 0) {
            this.changeBackground(prevBG, prevPage);
            this.setState({tracing: letterTracingList[prevPage]});
        } else {
            this.changeBackground(letterBGList[0], 0);
            this.setState({tracing: letterTracingList[0]});
        }
        if(this.state.pencilPressed) {
            this.setState({pencilPressed: false, fromTracing: true,});
            try {
                sound.setVolume(0);
                sound.paused();
            } catch(error) {

            }
        }
    }

    goBack = () => {
        if(this.state.prevBG == sentenceBGList[this.state.indexSound]) {
            this.stopAutoPlaySound();
            if(this.timeoutSound != null) {
                clearTimeout(this.timeoutSound);                                                               
            }
            this.setState({menuLetterHide: '-1000%', 
                    imageBackground: letterBGList[this.state.indexSound],
                    showSubtitle: 0, sentencePressed: false,
                    prevHide: letterBGList[this.state.indexSound] == letterBGList[0] ? hideLeft : showPrev,
                    pencilHide: showPencil,
                    glowHide: showGlow,
                    speakerHide: showSpeaker,
                    sentenceHide: showSentence,
                    nextHide: showNext,
                    speaker2Hide: hideLeft, prevBG: letterBGList[this.state.indexSound]});
                
        } else {
            if(this.state.pencilPressed) {
                this.setState({pencilPressed: false, fromTracing: true,});
                try {
                    sound.setVolume(0);
                    sound.paused();
                } catch(error) {

                }
             }
             else if(this.state.imageBackground == imageMainBG) {
                this.handleBackPress();
                try {
                    sound.setVolume(0.5);
                    sound.play();
                } catch(error) {
                    
                }
                this.props.navigation.navigate('mainMenu');
            } else {
                this.stopAutoPlaySound();
                try {
                    sound.setVolume(0.5);
                    sound.play();
                } catch(error) {
                    
                }
                this.setState({menuLetterHide: '22%', imageBackground: imageMainBG,
                            letterScreen: imageMainBG,
                            prevHide: hideLeft,
                            pencilHide: hideLeft,
                            glowHide: hideLeft,
                            speakerHide: hideLeft,
                            sentenceHide: hideRight,
                            nextHide: hideRight, backIcon: Logo,
                            speaker2Hide: hideLeft});
                }
            }
        }

    render() {

        return (

            <ImageBackground source={imageMainBG} style={{flex: 1, width: '100%', height: '100%', resizeMode: 'stretch'}}>

                <View style={{position: 'absolute', top: '0%', width: '100%', height: '100%'}}>
                    <Image source={imageMainBG} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                </View>

                { 
                    this.state.pencilPressed && 

                    <View style={{flex: 1, width: '100%', height: '100%'}}>
                        <this.state.tracing />
                    </View>
                }


                { this.state.fromTracing && 

                    <View style={{flex: 1}}>
                        <View style={{position: 'absolute', top: '0%', width: '100%', height: '100%'}}>
                            <Image source={this.state.letterMainBG} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                        </View>
                        <View style={{position: 'absolute', top: this.state.hideLetterBG, width: '100%', height: '100%'}}>
                            <Image source={this.state.imageBackground} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                        </View>
                        <View style={{position: 'absolute', top: '57.5%', left: '15%', opacity: this.state.showSubtitle,
                            width: '70%', height: '27.5%', justifyContent: 'center', alignItems: 'center'}}>
                            <Image source={black} style={{position: 'absolute', width: '100%', height: '100%', 
                                        top: '0%', resizeMode: 'stretch'}}></Image>                    
                            <Image source={this.state.sentenceScript} style={{width: '130%', height: '70%',
                                    marginLeft:'-3%' ,resizeMode: 'stretch'}}></Image>
                        </View>


                        {/* Start of Page Letters Code Part */}
                        {/* Sentence Button */}
                        <View style={{position: 'absolute', left: '83%', 
                                    top: this.state.sentenceHide, width: '14%', height: '28%',}} >
                            <TouchableOpacity onPress={this.sentencePage}>
                                <Image
                                    source={SentenceIcon}
                                    style={styles.sentenceIcon}
                                ></Image>
                            </TouchableOpacity>
                        </View>

                        {/* Speaker 1 Container */}
                        <View style={{position: 'absolute', left: '42%', top: this.state.speakerHide, width: '6%', height: '10%',}} >
                            <TouchableOpacity onPress={this.playLetterSound}>
                                <Image
                                    source={SpeakerIcon}
                                    style={styles.containImage}
                                ></Image>
                            </TouchableOpacity>
                        </View>

                        {/* Speaker 2 Container */}
                        <View style={{position: 'absolute', left: '80%', top: this.state.speakerHide, width: '6%', height: '10%',}} >
                            <TouchableOpacity onPress={this.playWordSound}>
                                <Image
                                    source={SpeakerIcon}
                                    style={styles.containImage}
                                ></Image>

                            </TouchableOpacity>
                        </View>

                        {/* Speaker Sentence 2 Container */}
                        <View style={{position: 'absolute', left: '80%', top: this.state.speaker2Hide, width: '6%', height: '10%',}} >
                            <TouchableOpacity onPress={this.playSentenceSound}>
                                <Image
                                    source={SpeakerIcon}
                                    style={styles.containImage}
                                ></Image>

                            </TouchableOpacity>
                        </View>

                        {/* Video Container */}
                        <View style={{position: 'absolute', left: '52.5%', /* borderWidth: 3, borderColor: 'red', */ top: this.state.glowHide, width: '27.5%', height: '40%',}} >                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                            <Image style={styles.Glow} source={this.state.glow}/>
                        </View>

                        {/* Pencil Button */}
                        <View style={{position: 'absolute', left: '13%', 
                        top: this.state.pencilHide, width: '7%', height: '20%',}} >
                            <TouchableOpacity onPress={this.letterTracing}>
                                <Image
                                source={PencilIcon}
                                    style={styles.containImage}
                                ></Image>
                            </TouchableOpacity>
                        </View>


                        {/* Start of Letters Enum Code Part */}
                        <View style={{position: 'absolute', top: this.state.menuLetterHide, left: '15%', width: '80%', height: '60%', flexDirection: 'row', flexWrap: 'wrap',}}>
                            <MenuItem itemImage={require('./lettersImage/a.png')} goto={() => {
                                                this.changeBackground(letterBGList[0], 0)}} />
                            <MenuItem itemImage={require('./lettersImage/b.png')} goto={() => {
                                                this.changeBackground(letterBGList[1], 1)}} />
                            <MenuItem itemImage={require('./lettersImage/d.png')} goto={() => {
                                                this.changeBackground(letterBGList[2], 2)}} />
                            <MenuItem itemImage={require('./lettersImage/e_.png')} goto={() => {
                                                this.changeBackground(letterBGList[3], 3)}} />
                            <MenuItem itemImage={require('./lettersImage/f.png')} goto={() => {
                                                this.changeBackground(letterBGList[4], 4)}} />
                            <MenuItem itemImage={require('./lettersImage/g.png')} goto={() => {
                                                this.changeBackground(letterBGList[5], 5)}} />
                            <MenuItem itemImage={require('./lettersImage/h.png')} goto={() => {
                                                this.changeBackground(letterBGList[6], 6)}} />
                            <MenuItem itemImage={require('./lettersImage/i.png')} goto={() => {
                                                this.changeBackground(letterBGList[7], 7)}} />
                            <MenuItem itemImage={require('./lettersImage/k.png')} goto={() => {
                                                this.changeBackground(letterBGList[8], 8)}} />
                            <MenuItem itemImage={require('./lettersImage/l.png')} goto={() => {
                                                this.changeBackground(letterBGList[9], 9)}} />
                            <MenuItem itemImage={require('./lettersImage/m.png')} goto={() => {
                                                this.changeBackground(letterBGList[10], 10)}} />
                            <MenuItem itemImage={require('./lettersImage/n.png')} goto={() => {
                                                this.changeBackground(letterBGList[11], 11)}} />
                            <MenuItem itemImage={require('./lettersImage/o.png')} goto={() => {
                                                this.changeBackground(letterBGList[12], 12)}} />
                            <MenuItem itemImage={require('./lettersImage/s.png')} goto={() => {
                                                this.changeBackground(letterBGList[13], 13)}} />
                            <MenuItem itemImage={require('./lettersImage/t.png')} goto={() => {
                                                this.changeBackground(letterBGList[14], 14)}} />
                            <MenuItem itemImage={require('./lettersImage/u.png')} goto={() => {
                                                this.changeBackground(letterBGList[15], 15)}} />
                            <MenuItem itemImage={require('./lettersImage/w.png')} goto={() => {
                                                this.changeBackground(letterBGList[16], 16)}} />
                            <MenuItem itemImage={require('./lettersImage/y.png')} goto={() => {
                                                this.changeBackground(letterBGList[17], 17)}} />
                        </View>
                        {/* End of Letters Enum Code Part */}
                        </View>
                }

                
                {/* Prev Button */}
                <View style={{position: 'absolute', left: this.state.prevHide, 
                                top: '46%', width: '12%', height: '24%',}}>
                        <TouchableOpacity onPress={this.goPrev}>
                            <Image
                                source={PrevIcon}
                                style={styles.prev}
                            ></Image>
                        </TouchableOpacity>
                    </View>

                {/* Next Button */}
                <View style={{position: 'absolute', left: this.state.nextHide, 
                            top: '46%', width: '12%', height: '24%',}} >
                    <TouchableOpacity onPress={this.goNext}>
                        <Image
                            source={NextIcon}
                            style={styles.next}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={{position: 'absolute',
                                left: '2%',
                                top: '3%',
                                width: '14%',
                                height: '28%'}}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image source={GoBackIcon} style={styles.back}></Image>
                    </TouchableOpacity>
                </View>

                <View style={{position: 'absolute',
                                left: '88%',
                                top: '3%',
                                width: '14%',
                                height: '28%',}}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image source={this.state.backIcon} style={styles.home}></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

export default withNavigation(Letters);
