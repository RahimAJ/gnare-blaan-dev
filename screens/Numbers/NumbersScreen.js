

import React, { Component } from 'react';
import { View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import MenuItem from './NumbersMenu';

import Sound from 'react-native-sound';

import { numberBGList, sentenceList, soundList,
        numberGlowList, numberImageList } from './numbersImport';
  
import GoBackIcon from '../images/Back_icon.png';
import HomeIcon from '../images/Home_icon.png';

import Glow_A from '../Letters/lettersGlow/Glow_A.png';

    // Letter Components Imports
import SentenceIcon from '../images/Letters_Info_Icon.png';
import SpeakerIcon from '../images/Speaker_icon.png';
import PencilIcon from '../images/Pencil_icon.png';
import NextIcon from '../images/Next_Icon.png';
import PrevIcon from '../images/Prev_Icon.png';

    // Letter Main Background Import
import imageMainBG from '../images/BG.jpg';
import sentenceBG from '../images/BG_1.jpg';
import numberMainBG from '../images/BG1.jpg';
import black from '../images/black.png';

    // Letter Background Imports

import {globalStyleSheet as styles} from '../globalStyleSheet/globalStyleSheet.js';
import {sound} from '../HomePage';
import { numberTracingList } from './NumberTracing/tracingImport';
import Logo from '../Games/gameImages/GnareMain.png';

    // Hiding Components
const hideLeft = '-1000%';
const hideRight = '1000%';
const showPrev ='6%';
const showNext = '85%';
const showPencil = '24%';
const showGlow = '21%';
const showSpeaker = '25%';
const showSentence = '80%';
const showSentenceObject = '22%';

Sound.setCategory('Playback');


class NumberScreen extends Component {
    static navigationOptions = {
        header: null,
    }


        // Component State
    constructor() {
        super();

        this.state = {

            //Background State
            imageBackground: imageMainBG,
            numberMainBG: numberMainBG,
            //Letter Menu State
            menuLetterHide: '25%',

            pencilPressed: false,
            sentencePressed: false,
            fromTracing: true,


            backIcon: Logo,

            tracing: numberTracingList[0],

            //Letter State
            showSubtitle: 0,
            prevHide: hideLeft,
            nextHide: hideRight,
            pencilHide: hideLeft,
            glowHide: hideLeft,
            speakerHide: hideLeft,
            speaker2Hide: hideLeft,
            sentenceHide: hideRight,
            sentenceObjectHide: hideLeft,
            indexSound: 0,
            sentenceScript: sentenceList[0],

            glow: numberImageList[0],
            hideLetterBG: '0%',
            prevBG: imageMainBG,
        },

        // Sound State
        this.numberSound = null;
        this.sentenceNumberSound = null;
        this.objectGlow = null;
        this.timeoutSound = null;
    }

    componentDidMount(){
        try {
            sound.play();
        } catch(error) {
            
        }
    }

    changeBackground = (imageBG, soundPlay) => {
        this.stopAutoPlaySound();
        this.setState({menuLetterHide: imageBG == imageMainBG ? '22%' : '-1000%', 
                        prevHide: imageBG == numberBGList[0] ? hideLeft : showPrev,
                        imageBackground: imageBG, numberMainBG: imageBG != imageMainBG ? numberMainBG : imageMainBG,
                        nextHide: imageBG == imageMainBG ? hideRight : showNext,
                        backIcon: imageBG == imageMainBG ? Logo : HomeIcon,
                        glowHide: imageBG == imageMainBG ? hideLeft : showGlow,
                        speakerHide: imageBG == imageMainBG ? hideLeft : showSpeaker,
                        sentenceHide: imageBG == imageMainBG ? hideRight : showSentence,
                        pencilHide: imageBG == imageMainBG ? hideLeft : showPencil,
                        indexSound: soundPlay, });
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
        this.setState({glow: numberImageList[this.state.indexSound]});
        this.objectGlow = setTimeout(()=> {
            this.playNumberSound();
        }, 200);
    }

    stopAutoPlaySound = () => {
        if(this.objectGlow != null) {
            this.stopSounds();
            clearTimeout(this.objectGlow);
        }
    }

    sentencePage = () => {
        this.stopAutoPlaySound();
        this.setState({menuLetterHide: '-1000%', 
                        imageBackground: sentenceBG,
                        sentenceScript: sentenceList[this.state.indexSound], 
                        showSubtitle: 1,
                        prevHide: hideLeft, nextHide: hideRight,
                        glowHide: hideLeft, speakerHide: hideLeft,
                        speaker2Hide: showSpeaker, sentenceHide: hideRight,
                        sentenceObjectHide: showSentenceObject,
                        pencilHide: hideLeft, prevBG: sentenceBG});
        
        this.playSentenceSound();
    }

    handleBackPress = () => {
        if(this.timeoutSound != null) {
            clearTimeout(this.timeoutSound);
        }
        this.stopAutoPlaySound();
        this.releaseSounds();
        this.numberSound = null;
        this.sentenceNumberSound = null;
    }

    playNumberSound = () => {
        this.stopAutoPlaySound();
        this.numberSound = new Sound('number_' + soundList[this.state.indexSound] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                alert('failed to load the sound', error);
                return;
            } else {
                this.numberSound.play();
                this.setState({glow: numberImageList[this.state.indexSound]});
                this.setState({glow: numberGlowList[this.state.indexSound]});
            }});   
    }


    playSentenceSound = () => {
        this.stopAutoPlaySound();
        this.sentenceNumberSound = new Sound('numbersentence' + soundList[this.state.indexSound] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                alert('failed to load the sound', error);
                return;
            } else {
                this.sentenceNumberSound.play();
                this.setState({sentenceScript: sentenceList[1]});
                this.setState({sentenceScript: sentenceList[this.state.indexSound]});
                this.setState({glow: numberImageList[this.state.indexSound]});
                this.setState({glow: numberGlowList[this.state.indexSound]});
            }});   
    }

    letterTracing = () => {
        try {
            this.handleBackPress();
            try {
                sound.paused();
            } catch(error) {
                
            }
            this.setState({tracing: numberTracingList[this.state.indexSound],
                fromTracing: false, pencilPressed: true, sentencePressed: false});
        } catch(error) {

        }
    }


    gotoMainMenu = () => {
        this.handleBackPress();
        if(this.state.backIcon == HomeIcon) {
            this.props.navigation.navigate('mainMenu');
        } else {
            this.props.navigation.navigate('home');
        }
    }

    goNext = () => {
        let letterNum = this.state.indexSound;
        let nextPage = letterNum + 1;
        let nextBG = numberBGList[nextPage];
        this.stopAutoPlaySound();

        if(nextPage < numberBGList.length) {
            this.changeBackground(nextBG, nextPage);
            this.setState({tracing: numberTracingList[nextPage]});
        } else {
            this.changeBackground(numberBGList[0], 0);
            this.setState({tracing: numberTracingList[0]});
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

    releaseSounds = () => {
        if(this.numberSound != null) {
            this.numberSound.release();
        }
        if(this.sentenceNumberSound != null) {
            this.sentenceNumberSound.release();
        }
    }

    stopSounds = () => {
        if(this.numberSound != null) {
            this.numberSound.setVolume(0.2);
            this.numberSound.pause();
        }
        if(this.sentenceNumberSound != null) {
            this.sentenceNumberSound.setVolume(0.2);
            this.sentenceNumberSound.pause();
        }
    }

    goPrev = () => {
        const letterNum = this.state.indexSound;
        const prevPage = letterNum - 1;
        this.stopAutoPlaySound();
        const prevBG = numberBGList[prevPage];
        this.setState({prevSound: letterNum});

        if(prevPage > 0) {
            this.changeBackground(prevBG, prevPage);
            this.setState({tracing: numberTracingList[prevPage]});
        } else {
            this.changeBackground(numberBGList[0], 0);
            this.setState({tracing: numberTracingList[prevPage]});
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
        if(this.state.prevBG == sentenceBG) {
            if(this.timeoutSound != null) {
                clearTimeout(this.timeoutSound);
            }
            this.stopAutoPlaySound();
            this.setState({menuLetterHide: '-1000%', 
                    imageBackground: numberBGList[this.state.indexSound],
                    prevHide: numberBGList[this.state.indexSound] == numberBGList[0] ? hideLeft : showPrev,
                    pencilHide: showPencil,
                    glowHide: showGlow,
                    //sentenceScript: Glow_A,
                    speakerHide: showSpeaker,
                    sentenceHide: showSentence,
                    nextHide: showNext,
                    showSubtitle: 0,
                    sentenceObjectHide: hideLeft,
                    speaker2Hide: hideLeft, prevBG: numberBGList[this.state.indexSound]});
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
            try {
                sound.setVolume(0.5);
                sound.play();
            } catch(error) {
                
            }
            this.stopAutoPlaySound();
            this.setState({menuLetterHide: '25%', imageBackground: imageMainBG,
                        numberMainBG: imageMainBG,
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
                
                {
                    this.state.fromTracing && 

                    <View style={{flex: 1}}>
                        <View style={{position: 'absolute', top: '0%', width: '100%', height: '100%'}}>
                        <Image source={this.state.numberMainBG} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
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
                    <View style={{position: 'absolute', left: '82%', top: this.state.sentenceHide, width: '14%', height: '28%',}} >
                        <TouchableOpacity onPress={this.sentencePage}>
                            <Image
                                source={SentenceIcon}
                                style={styles.sentenceIcon}
                            ></Image>
                        </TouchableOpacity>
                    </View>

                    {/* Speaker 2 Container */}
                    <View style={{position: 'absolute', left: '80%', top: this.state.speakerHide, width: '6%', height: '10%',}} >
                        <TouchableOpacity onPress={this.playNumberSound}>
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

                    {/* Number Glow Container */}
                    <View style={{position: 'absolute', left: '51%', top: this.state.glowHide, width: '30%', height: '45%',}} >
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

                    
                    {/* End of Page Letters Code Part */}


                    {/* Sentence Number Obejct Glow */}
                    <View style={{position: 'absolute', left: '35%', top: this.state.sentenceObjectHide, width: '30%', height: '35%',}} >
                        <Image style={styles.Glow} source={this.state.glow}/>
                    </View>



                    {/* Start of Letters Enum Code Part */}
                    <View style={{position: 'absolute', top: this.state.menuLetterHide, left: '15%', width: '70%', 
                    height: '60%', flexDirection: 'row', flexWrap: 'wrap',}}>
                        <View style={{height: '30%', width: '100%', flexDirection: 'row', 
                                paddingTop: '3%'}}>
                            <View style={{width: '20%', height: '100%',}}>
                                <MenuItem itemImage={require('./numbersImage/1.png')} goto={() => {
                                                this.changeBackground(numberBGList[0], 0)}} />
                            </View>
                            <View style={{width: '20%', height: '100%'}}>
                                <MenuItem itemImage={require('./numbersImage/2.png')} goto={() => {
                                                this.changeBackground(numberBGList[1], 1)}} />
                            </View>
                            <View style={{width: '20%', height: '100%'}}>
                                <MenuItem itemImage={require('./numbersImage/3.png')} goto={() => {
                                                this.changeBackground(numberBGList[2], 2)}} />
                            </View>
                            <View style={{width: '20%', height: '100%'}}>
                                <MenuItem itemImage={require('./numbersImage/4.png')} goto={() => {
                                                this.changeBackground(numberBGList[3], 3)}} />
                            </View>
                            <View style={{width: '20%', height: '100%'}}>
                                <MenuItem itemImage={require('./numbersImage/5.png')} goto={() => {
                                                this.changeBackground(numberBGList[4], 4)}} />
                            </View>
                        </View>

                        <View style={{height: '30%', width: '100%', flexDirection: 'row', paddingTop: '3%'}}>
                            <View style={{width: '20%', height: '100%',}}>
                                <MenuItem itemImage={require('./numbersImage/6.png')} goto={() => {
                                                this.changeBackground(numberBGList[5], 5)}} />
                            </View>
                            <View style={{width: '20%', height: '100%'}}>
                                <MenuItem itemImage={require('./numbersImage/7.png')} goto={() => {
                                                this.changeBackground(numberBGList[6], 6)}} />
                            </View>
                            <View style={{width: '20%', height: '100%'}}>
                                <MenuItem itemImage={require('./numbersImage/8.png')} goto={() => {
                                                this.changeBackground(numberBGList[7], 7)}} />
                            </View>
                            <View style={{width: '20%', height: '100%'}}>
                                <MenuItem itemImage={require('./numbersImage/9(1).png')} goto={() => {
                                                this.changeBackground(numberBGList[8], 8)}} />
                            </View>
                            <View style={{width: '20%', height: '100%'}}>
                                <MenuItem itemImage={require('./numbersImage/10.png')} goto={() => {
                                                this.changeBackground(numberBGList[9], 9)}} />
                            </View>
                        </View>

                        <View style={{height: '30%', width: '100%', flexDirection: 'row', paddingTop: '3%'}}>
                            <View style={{width: ((100/7) + '%'), height: '100%',}}>
                                <MenuItem itemImage={require('./numbersImage/20(2).png')} goto={() => {
                                                this.changeBackground(numberBGList[10], 10)}} />
                            </View>
                            <View style={{width: ((100/7) + '%'), height: '100%'}}>
                                <MenuItem itemImage={require('./numbersImage/100.png')} goto={() => {
                                                this.changeBackground(numberBGList[11], 11)}} />
                            </View>
                            <View style={{width: ((100/7) + '%'), height: '100%'}}>
                                <MenuItem itemImage={require('./numbersImage/200.png')} goto={() => {
                                                this.changeBackground(numberBGList[12], 12)}} />
                            </View>
                            <View style={{width: ((100/7) + '%'), height: '100%'}}>
                                <MenuItem itemImage={require('./numbersImage/300.png')} goto={() => {
                                                this.changeBackground(numberBGList[13], 13)}} />
                            </View>
                            <View style={{width: ((100/7) + '%'), height: '100%'}}>
                                <MenuItem itemImage={require('./numbersImage/400.png')} goto={() => {
                                                this.changeBackground(numberBGList[14], 14)}} />
                            </View>
                            <View style={{width: ((100/7) + '%'), height: '100%'}}>
                                <MenuItem itemImage={require('./numbersImage/500.png')} goto={() => {
                                                this.changeBackground(numberBGList[15], 15)}} />
                            </View>
                            <View style={{width: ((100/7) + '%'), height: '100%'}}>
                                <MenuItem itemImage={require('./numbersImage/1000.png')} goto={() => {
                                                this.changeBackground(numberBGList[16], 16)}} />
                            </View>
                        </View>
                        
                        {/*
                            <MenuItem itemImage={require('./numbersImage/30.png')} goto={() => {
                                            this.changeBackground(numberBGList[11], 11)}} />
                            <MenuItem itemImage={require('./numbersImage/40.png')} goto={() => {
                                                this.changeBackground(numberBGList[12], 12)}} />
                            <MenuItem itemImage={require('./numbersImage/50.png')} goto={() => {
                                                this.changeBackground(numberBGList[13], 13)}} />
                            <MenuItem itemImage={require('./numbersImage/60.png')} goto={() => {
                                                this.changeBackground(numberBGList[14], 14)}} />
                            <MenuItem itemImage={require('./numbersImage/70.png')} goto={() => {
                                                this.changeBackground(numberBGList[15], 15)}} />
                            <MenuItem itemImage={require('./numbersImage/80.png')} goto={() => {
                                                this.changeBackground(numberBGList[16], 16)}} />
                            <MenuItem itemImage={require('./numbersImage/90.png')} goto={() => {
                                                this.changeBackground(numberBGList[17], 17)}} />
                        */}
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
                                left: '1%',
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

export default withNavigation(NumberScreen);
