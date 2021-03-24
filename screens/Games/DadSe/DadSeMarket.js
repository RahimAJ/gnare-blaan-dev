import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, StatusBar, TouchableOpacity , Animated, 
    ImageBackground, PanResponder, Dimensions, AsyncStorage} from 'react-native';
import { withNavigation } from 'react-navigation';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet';
import GameBG from '../gameImages/GameBG.png';
import Home_icon from '../../images/Home_icon.png';
import Back_icon from '../../images/Back_icon.png';

import GnareIcon from '../gameImages/GnareMain.png';
import KwartoBG from '../gameImages/KwartoBG.png';
import DSKaibe from '../gameImages/Market/DS_Kaibe.png';
import DSSwatSalah from '../gameImages/Market/DS_SwatSlahContainer.png';
import DSUlel from '../gameImages/Market/DS_UlelContainer.png';
import DSLbung from '../gameImages/Market/DS_LbungContainer.png';
import DSTlayong from '../gameImages/Market/DS_TlayongContainer.png';
import DSDafeng from '../gameImages/Market/DS_DafengContainer.png';
import DSKulangTana from '../gameImages/Market/DS_KulangTanaContainer.png';
import DSSlah from '../gameImages/Market/DS_SlahContainer.png';
import Coinbank from '../gameImages/Coinbank.png';
import DSMayad from '../gameImages/Market/Mayad.png';
import DSFule from '../gameImages/Market/Fule.png';
import DSXButton from '../gameImages/Market/XButton.png';
import DSProgressBarEmpty from '../gameImages/Market/ProgressBarEmpty.png';
import SwatSalah from '../gameImages/Market/DS_SwatSlah.png';
import Ulel from '../gameImages/Market/DS_Ulel.png';
import Lbung from '../gameImages/Market/DS_Lbung.png';
import Tlayong from '../gameImages/Market/DS_Tlayong.png';
import Dafeng from '../gameImages/Market/DS_Dafeng.png';
import KulangTana from '../gameImages/Market/DS_KulangTana.png';
import Slah from '../gameImages/Market/DS_Slah.png';

import KaibeDafeng from '../gameImages/Market/Skirt.png';
import KaibeLbung from '../gameImages/Market/Blouse.png';
import KaibeTlayong from '../gameImages/Market/KaibeBelt.png';
import KaibeSwatSlah from '../gameImages/Market/Headband.png';
import KaibeUlel from '../gameImages/Market/KaibeUlel.png';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const clothWidth = screenWidth * 0.05;
const clothHeight = screenHeight * 0.1;
let fule = [];
let balance = 0;

// let barStack = 0;
// let bar = 100;

const SessionPlayer = '@MyApp:SessionPlayer';
let Realm = require('realm');
let realm;

class DadSeMarket extends Component {

    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);

        this.state = {
            showLbung: 0,
            showLbung2: 1,
            showDafeng: 0,
            showDafeng2: 1,
            showUlel: 0,
            showUlel2: 1,
            showTlayong: 0,
            showTlayong2: 1,
            showSwatSlah: 0,
            showSwatSlah2: 1,
            CoinBalance: 0,
            showSlah: 0,
            showSlah2: 1,
            showKulangTana: 0,
            showKulangTana2: 1,

            progress: '100%',
            balance: 0,
            indexPlayer: 0,

            pan: new Animated.ValueXY(),
            swatX: '27.5%',
            swatY: '17%',

            ulelX: '25%',
            ulelY: '33%',

            lbungX: '26%',
            lbungY: '54%',

            tlayongX: '26%',
            tlayongY: '74%',

            dafengX: '64%',
            dafengY: '22%',

            kulangTanaX: '64%',
            kulangTanaY: '42%',

            slahX: '64%',
            slahY: '62%',
            index: 0,
            fule: [],
        };

        this.fill = 100;
        this.prog = 0;
        this.unFill = 0;
        this.progress = null;

        this.clothing = [{
            x: '27.5%',
            y: '17%',
            width: screenWidth * 0.05,
            height: screenHeight * 0.09,
            price: 10,
        }, {
            x: '25%',
            y: '33%',
            width: screenWidth * 0.1,
            height: screenHeight * 0.16,
            price: 5,
        }, {
            x: '26%',
            y: '54%',
            width: screenWidth * 0.08,
            height: screenHeight * 0.13,
            price: 15,
        }, {
            x: '26%',
            y: '74%',
            width: screenWidth * 0.08,
            height: screenHeight * 0.13,
            price: 15,
        }, {
            x: '64%',
            y: '22%',
            width: screenWidth * 0.08,
            height: screenHeight * 0.13,
            price: 15,
        }, {
            x: '64%',
            y: '42%',
            width: screenWidth * 0.08,
            height: screenHeight * 0.13,
            price: 15,
        }, {
            x: '64%',
            y: '62%',
            width: screenWidth * 0.08,
            height: screenHeight * 0.13,
            price: 10,
        }, ];

        this._val = {x: screenWidth * 0.275, y: screenHeight * 0.147};
        this.state.pan.addListener((value) => this._val = value);

        this.swatResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture)=> true,
            onPanResponderMove: (e, gesture)=> {
                this.setState({swatX: gesture.moveX - (clothWidth/2), swatY: gesture.moveY - (clothHeight/2)});
            },
            onPanResponderRelease: (e, gesture)=> {
                if(gesture.moveX >= (screenWidth * 0.49) - (screenWidth * 0.05) && 
                gesture.moveX <= (screenWidth * 0.49) + (screenWidth * 0.05)) {
                    if(gesture.moveY >= (screenHeight * 0.12) - (screenHeight * 0.05) &&
                    gesture.moveY <= (screenHeight * 0.12) + (screenHeight * 0.05)) {
                        if(this.state.balance >= 10) {
                            if(this.state.showSwatSlah2 != 0) {
                                this.setState({showSwatSlah: 1, showSwatSlah2: 0,
                                    balance: this.state.balance - 10});
                                    fule.push(DSSwatSalah);
                                    balance = balance - 10;
                            }
                        }
                    }
                }
                this.setState({swatX: this.clothing[0].x, swatY: this.clothing[0].y});
            },
        });

        this.ulelResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture)=> true,
            onPanResponderMove: (e, gesture)=> {
                this.setState({ulelX: gesture.moveX - ((screenWidth * 0.09)/2), 
                    ulelY: gesture.moveY  - ((screenHeight * 0.17)/2)});
            },
            onPanResponderRelease: (e, gesture)=> {
                if(gesture.moveX >= (screenWidth * 0.49) - (screenWidth * 0.05) && 
                gesture.moveX <= (screenWidth * 0.49) + (screenWidth * 0.05)) {
                    if(gesture.moveY >= (screenHeight * 0.2) - (screenHeight * 0.05) &&
                    gesture.moveY <= (screenHeight * 0.2) + (screenHeight * 0.05)) {
                        if(this.state.balance >= 5) {
                            if(this.state.showUlel2 != 0) {
                                this.setState({showUlel: 1, showUlel2: 0,
                                    balance: this.state.balance + 5});
                                fule.push(DSUlel);
                                balance = balance - 5;
                            }
                        }
                    }
                }
                this.setState({ulelX: this.clothing[1].x, ulelY: this.clothing[1].y});
            },
        });

        this.lbungResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture)=> true,
            onPanResponderMove: (e, gesture)=> {
                this.setState({lbungX: gesture.moveX - ((screenWidth * 0.08)/2), 
                    lbungY: gesture.moveY - ((screenHeight * 0.14)/2)});
            },
            onPanResponderRelease: (e, gesture)=> {
                if(gesture.moveX >= (screenWidth * 0.49) - (screenWidth * 0.05) && 
                gesture.moveX <= (screenWidth * 0.49) + (screenWidth * 0.05)) {
                    if(gesture.moveY >= (screenHeight * 0.28) - (screenHeight * 0.05) &&
                    gesture.moveY <= (screenHeight * 0.28) + (screenHeight * 0.2)) {
                        if(this.state.balance >= 15) {
                            if(this.state.showLbung2 != 0) {
                                this.setState({showLbung: 1, showLbung2: 0,
                                    balance: this.state.balance - 15});
                                fule.push(DSLbung);
                                balance = balance - 15;
                            }
                        }
                    }
                }
                this.setState({lbungX: this.clothing[2].x, lbungY: this.clothing[2].y});
            },
        });

        this.tlayongResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture)=> true,
            onPanResponderMove: (e, gesture)=> {
                this.setState({tlayongX: gesture.moveX - ((screenWidth * 0.08)/2), 
                    tlayongY: gesture.moveY - ((screenHeight * 0.14)/2)});
            },
            onPanResponderRelease: (e, gesture)=> {
                if(gesture.moveX >= (screenWidth * 0.49) - (screenWidth * 0.05) && 
                gesture.moveX <= (screenWidth * 0.49) + (screenWidth * 0.05)) {
                    if(gesture.moveY >= (screenHeight * 0.45) - (screenHeight * 0.05) &&
                    gesture.moveY <= (screenHeight * 0.45) + (screenHeight * 0.05)) {
                        if(this.state.balance >= 15) {
                            if(this.state.showTlayong2 != 0) {
                                this.setState({showTlayong: 1, showTlayong2: 0,
                                    balance: this.state.balance - 15});
                                fule.push(DSTlayong);
                                balance = balance - 15;
                            }
                        }
                    }
                }
                this.setState({tlayongX: this.clothing[3].x, tlayongY: this.clothing[3].y});
            },
        });

        this.dafengResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture)=> true,
            onPanResponderMove: (e, gesture)=> {
                this.setState({dafengX: gesture.moveX - ((screenWidth * 0.08)/2), 
                    dafengY: gesture.moveY - ((screenHeight * 0.14)/2)});
            },
            onPanResponderRelease: (e, gesture)=> {
                if(gesture.moveX >= (screenWidth * 0.49) - (screenWidth * 0.05) && 
                gesture.moveX <= (screenWidth * 0.49) + (screenWidth * 0.05)) {
                    if(gesture.moveY >= (screenHeight * 0.45) - (screenHeight * 0.05) &&
                    gesture.moveY <= (screenHeight * 0.45) + (screenHeight * 0.2)) {
                        if(this.state.balance >= 15) {
                            if(this.state.showDafeng2 != 0) {
                                this.setState({showDafeng: 1, showDafeng2: 0,
                                    balance: this.state.balance - 15});
                                fule.push(DSDafeng);
                                balance = balance - 15;
                            }
                        }
                    }
                }
                this.setState({dafengX: this.clothing[4].x, dafengY: this.clothing[4].y});
            },
        });

        this.kulangTanaResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture)=> true,
            onPanResponderMove: (e, gesture)=> {
                this.setState({kulangTanaX: gesture.moveX - ((screenWidth * 0.08)/2), 
                    kulangTanaY: gesture.moveY - ((screenHeight * 0.14)/2)});
            },
            onPanResponderRelease: (e, gesture)=> {
                if(gesture.moveX >= (screenWidth * 0.49) - (screenWidth * 0.05) && 
                gesture.moveX <= (screenWidth * 0.49) + (screenWidth * 0.05)) {
                    if(gesture.moveY >= (screenHeight * 0.4) - (screenHeight * 0.4) &&
                    gesture.moveY <= (screenHeight * 0.4) + (screenHeight * 0.4)) {
                        if(this.state.balance >= 15) {
                            if(this.state.showKulangTana2 != 0) {
                                this.setState({showKulangTana: 1, showKulangTana2: 0, 
                                    balance: this.state.balance - 15});
                                fule.push(DSKulangTana);
                                balance = parseInt(balance) - parseInt(15);
                            }
                        }
                    }
                }
                this.setState({kulangTanaX: this.clothing[5].x, kulangTanaY: this.clothing[5].y});
            },
        });

        this.slahResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture)=> true,
            onPanResponderMove: (e, gesture)=> {
                this.setState({slahX: gesture.moveX - ((screenWidth * 0.08)/2), 
                    slahY: gesture.moveY - ((screenHeight * 0.14)/2)});
            },
            onPanResponderRelease: (e, gesture)=> {
                if(gesture.moveX >= (screenWidth * 0.49) - (screenWidth * 0.05) && 
                gesture.moveX <= (screenWidth * 0.49) + (screenWidth * 0.05)) {
                    if(gesture.moveY >= (screenHeight * 0.4) - (screenHeight * 0.4) &&
                    gesture.moveY <= (screenHeight * 0.4) + (screenHeight * 0.4)) {
                        if(this.state.balance >= 10) {
                            if(this.state.showSlah2 != 0) {
                                this.setState({showSlah: 1, showSlah2: 0,
                                    balance: this.state.balance - 10});
                                fule.push(DSSlah);
                                balance = parseInt(balance) - parseInt(10);
                            }
                        }
                        
                    }
                }
                this.setState({slahX: this.clothing[6].x, slahY: this.clothing[6].y});
            },
        });

    }

    fillProgressBar = () => {
        this.unFill = this.unFill + 20;
        
        if(this.progress == null) {
            this.progress = setInterval(()=> {
                this.unFill = this.unFill - 2;
                this.fill = this.fill - 2;
                this.setState({progress: this.fill + '%'});
                if(this.unFill == 0) {          
                    clearInterval(this.progress);
                    this.progress = null;
                }
            }, 5);
        }
    }

    fule = () => {
        switch(fule[fule.length - 1]) {
            case DSSwatSalah: {
                this.setState({showSwatSlah2: 1, showSwatSlah: 0, 
                    balance: this.state.balance + 10});
                fule.pop();
                break;
            };
            case DSUlel: {
                this.setState({showUlel2: 1, showUlel: 0, 
                    balance: this.state.balance + 5});
                fule.pop();
                break;
            };
            case DSLbung: {
                this.setState({showLbung2: 1, showLbung: 0, 
                    balance: this.state.balance + 15});
                fule.pop();
                break;
            };
            case DSTlayong: {
                this.setState({showTlayong2: 1, showTlayong: 0, 
                    balance: this.state.balance + 15});
                fule.pop();
                break;
            };
            case DSDafeng: {
                this.setState({showDafeng2: 1, showDafeng: 0, 
                    balance: this.state.balance + 15});
                fule.pop();
                break;
            };
            case DSKulangTana: {
                this.setState({showKulangTana2: 1, showKulangTana: 0,
                    balance: this.state.balance + 15});
                fule.pop();
                break;
            };
            case DSSlah: {
                this.setState({showSlah2: 1, showSlah: 0, 
                    balance: this.state.balance + 10});
                fule.pop();
                break;
            };
        }
    }
    async componentDidMount() {
        let realm = new Realm({ path: 'PlayerDatabase.realm'});
        let kaito = realm.objects('Players');
        let storeValue = await AsyncStorage.getItem(SessionPlayer);
        for(i = 0; i < kaito.length; i++) {
            const num = parseInt(i);
            if(storeValue == kaito[num].playername) {
                this.setState({indexPlayer: num});

                this.setState({CoinBalance: kaito[num].coinBalance});
                balance = kaito[num].coinBalance;
                this.init(kaito[num].coinBalance);
                this.setState({balance: kaito[num].coinBalance});

                this.setState({progress: kaito[num].dadseProgress + '%'});
                this.fill = parseInt(kaito[num].dadseProgress);

                this.setState({showSwatSlah: kaito[num].dadseCloth1});
                this.setState({showSwatSlah2: this.state.showSwatSlah == 1 ? 0 : 1});

                this.setState({showUlel: kaito[num].dadseCloth2});
                this.setState({showUlel2: this.state.showUlel == 1 ? 0 : 1});

                this.setState({showLbung: kaito[num].dadseCloth3});
                this.setState({showLbung2: this.state.showLbung == 1 ? 0 : 1});

                this.setState({showTlayong: kaito[num].dadseCloth4});
                this.setState({showTlayong2: this.state.showTlayong == 1 ? 0 : 1});

                this.setState({showDafeng: kaito[num].dadseCloth5});
                this.setState({showDafeng2: this.state.showDafeng == 1 ? 0 : 1});

                this.setState({showKulangTana: kaito[num].dadseCloth6});
                this.setState({showKulangTana2: this.state.showKulangTana == 1 ? 0 : 1});

                this.setState({showSlah: kaito[num].dadseCloth7});
                this.setState({showSlah2: this.state.showSlah == 1 ? 0 : 1});
                break;
            }
        }
    }

    init = (coin) => {
        this.setState({CoinBalance: coin});
    }

    mayad = () => {
        if(fule.length != 0) {
            let realm = new Realm({ path: 'PlayerDatabase.realm'});
            let kaito = realm.objects('Players');   
            for(i = 0; i < fule.length; i++) {
                switch(fule[i]) {
                    case DSSwatSalah: {
                        this.fillProgressBar();
                        realm.write(() => {
                            kaito[this.state.indexPlayer].dadseCloth1 = parseInt(1);
                        });
                        break;
                    };
                    case DSUlel: {
                        this.fillProgressBar();
                        realm.write(() => {
                            kaito[this.state.indexPlayer].dadseCloth2 = parseInt(1);
                        });
                        break;
                    };
                    case DSLbung: {
                        this.fillProgressBar();
                        realm.write(() => {
                            kaito[this.state.indexPlayer].dadseCloth3 = parseInt(1);
                        });
                        break;
                    };
                    case DSTlayong: {
                        this.fillProgressBar();
                        realm.write(() => {
                            kaito[this.state.indexPlayer].dadseCloth4 = parseInt(1);
                        });
                        
                        break;
                    };
                    case DSDafeng: {
                        this.fillProgressBar();
                        realm.write(() => {
                            kaito[this.state.indexPlayer].dadseCloth5 = parseInt(1);
                        });
                        
                        break;
                    };
                    case DSKulangTana: {
                        realm.write(() => {
                            kaito[this.state.indexPlayer].dadseCloth6 = parseInt(1);
                        });
                        break;
                    };
                    case DSSlah: {
                        realm.write(() => {
                            kaito[this.state.indexPlayer].dadseCloth7 = parseInt(1);
                        });
                        break;                      
                    };
                }
            }
            this.setState({CoinBalance: parseInt(balance)});
            let coins = parseInt(balance);
            this.setState({balance: coins});
            realm.write(() => {    
                kaito[this.state.indexPlayer].coinBalance = String(coins);
                kaito[this.state.indexPlayer].dadseProgress = parseInt(this.fill);
            });               
            fule = [];
        }
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              

    gotoMainMenu = () => {
        this.props.navigation.replace('gameMenu')
    }

    gotoBack = () =>{
        this.props.navigation.replace('gameMenu', { showDadBatakBang: 'show' });
    }
    
    render() {
        StatusBar.setHidden(true);
        const panStyle = {
            transform: this.state.pan.getTranslateTransform()
        }
        return (
            <ImageBackground source={GameBG} style={styles.image}>

                <View style={{position: 'absolute', width: '70%', height: '90%'}}>
                    <Image source={KwartoBG} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>

                <View style={{position: 'absolute', top:'10%', left: '42.5%',
                    width: '15%', height: '70%'}}>
                    <Image source={DSKaibe} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>

                <View style={{position: 'absolute', top:'12.5%', left: '25%',
                    width: '12%', height: '17%'}}>
                    <Image source={DSSwatSalah} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>
                <View style={{position: 'absolute', top:'32%', left: '25%',
                    width: '12%', height: '17%'}}>
                    <Image source={DSUlel} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>
                <View style={{position: 'absolute', top:'51.5%', left: '25%',
                    width: '12%', height: '17%'}}>
                    <Image source={DSLbung} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>
                <View style={{position: 'absolute', top:'71%', left: '25%',
                    width: '12%', height: '17%'}}>
                    <Image source={DSTlayong} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>

                <View style={{position: 'absolute', top:'20%', right: '25%',
                    width: '12%', height: '17%'}}>
                    <Image source={DSDafeng} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>
                <View style={{position: 'absolute', top:'39.5%', right: '25%',
                    width: '12%', height: '17%'}}>
                    <Image source={DSKulangTana} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>
                <View style={{position: 'absolute', top:'59%', right: '25%',
                    width: '12%', height: '17%'}}>
                    <Image source={DSSlah} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>

                <View style={{position: 'absolute', top:'2.5%', right: '12%',
                    width: '12%', height: '17%'}}>
                    <Image source={Coinbank} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                    <Text style={{position: 'absolute', top: '15%',
                        left: '40%', fontSize: screenWidth * 0.02, color: '#ffea00'}}>{this.state.CoinBalance}.0</Text>
                </View>

                <View style={{position: 'absolute', top:'20%', right: '12%',
                    width: '8%', height: '70%'}}>
                        <View style={{position: 'absolute', top: '16%', width: '65%', height: '81%', 
                        left: '17.5%',
                        backgroundColor: 'white'}}>
                        <View style={{ width: '100%', height: '20%', top: '1%', 
                            position: 'absolute',
                            backgroundColor: '#F1C40F'}}>
                        </View>
                        <View style={{ width: '100%', height: '20%', top: '20.5%', 
                            position: 'absolute',
                            backgroundColor: '#F39C12'}}>
                        </View>
                        <View style={{ width: '100%', height: '20%', top: '39.5%', 
                            position: 'absolute',
                            backgroundColor: '#E67E22'}}>
                        </View>
                        <View style={{ width: '100%', height: '20%', top: '59.5%', 
                            position: 'absolute',
                            backgroundColor: '#D35400'}}>
                        </View>
                        <View style={{ width: '100%', height: '20%', top: '79%', 
                            position: 'absolute',
                            backgroundColor: '#C0392B'}}>
                        </View>
                        <View style={{position: 'absolute', top: 0, width: '100%', height: this.state.progress, 
                            backgroundColor: 'white'}}>
                        </View>
                    </View>
                    <Image source={DSProgressBarEmpty} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>


                <View style={{position: 'absolute', top:'10%', left: '47%',
                    width: '6%', height: '8%', opacity: this.state.showSwatSlah}}>
                    <Image source={KaibeSwatSlah} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>

                <View style={{position: 'absolute', top:'25%', left: '43%',
                    width: '14.5%', height: '22%', opacity: this.state.showLbung}}>
                    <Image source={KaibeLbung} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>

                <View style={{position: 'absolute', top:'20%', left: '46%',
                    width: '7%', height: '15%', opacity: this.state.showUlel}}>
                    <Image source={KaibeUlel} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>
                <View style={{position: 'absolute', top:'42%', left: '45%',
                    width: '10%', height: '32%', opacity: this.state.showDafeng}}>
                    <Image source={KaibeDafeng} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>

                <View style={{position: 'absolute', top:'39%', left: '45.5%',
                    width: '9%', height: '20%', opacity: this.state.showTlayong}}>
                    <Image source={KaibeTlayong} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>
                

                <View style={{position: 'absolute', top:'67%', left: '38%',
                    width: '8%', height: '13%', opacity: this.state.showSlah}}>
                    <Image source={Slah} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>

                <View style={{position: 'absolute', top:'67%', left: '54%',
                    width: '8%', height: '13%', opacity: this.state.showKulangTana}}>
                    <Image source={KulangTana} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>


                <View style={{position: 'absolute', top: this.state.swatY, 
                    left: this.state.swatX, opacity: this.state.showSwatSlah2,
                    width: '5%', height: '9%'}} {...this.swatResponder.panHandlers}>
                    <Image source={SwatSalah} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>

                <View style={{position: 'absolute', top: this.state.ulelY, 
                    left: this.state.ulelX, opacity: this.state.showUlel2,
                    width: '10%', height: '16%'}} {...this.ulelResponder.panHandlers}>
                    <Image source={Ulel} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>

                <View style={{position: 'absolute', top: this.state.lbungY, 
                    left: this.state.lbungX, opacity: this.state.showLbung2,
                    width: '8%', height: '13%'}} {...this.lbungResponder.panHandlers}>
                    <Image source={Lbung} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>

                <View style={{position: 'absolute', top: this.state.tlayongY, 
                    left: this.state.tlayongX, opacity: this.state.showTlayong2,
                    width: '8%', height: '13%'}} {...this.tlayongResponder.panHandlers}>
                    <Image source={Tlayong} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>

                <View style={{position: 'absolute', top: this.state.dafengY, 
                    left: this.state.dafengX, opacity: this.state.showDafeng2,
                    width: '8%', height: '13%'}} {...this.dafengResponder.panHandlers}>
                    <Image source={Dafeng} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>

                <View style={{position: 'absolute', top: this.state.kulangTanaY, 
                    left: this.state.kulangTanaX, opacity: this.state.showKulangTana2,
                    width: '8%', height: '13%'}} {...this.kulangTanaResponder.panHandlers}>
                    <Image source={KulangTana} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>

                <View style={{position: 'absolute', top: this.state.slahY, 
                    left: this.state.slahX, opacity: this.state.showSlah2,
                    width: '8%', height: '13%'}} {...this.slahResponder.panHandlers}>
                    <Image source={Slah} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>



                <View style={{position: 'absolute', top:'83%', left: '41%',
                    width: '8%', height: '8%'}}>
                    <TouchableOpacity onPress={this.mayad}>
                        <Image source={DSMayad} style={{width: '100%', height: '100%',
                        resizeMode: 'stretch'}}></Image>
                    </TouchableOpacity>
                </View>

                <View style={{position: 'absolute', top:'83%', right: '41%',
                    width: '8%', height: '8%'}}>
                    <TouchableOpacity onPress={this.fule}>
                        <Image source={DSFule} style={{width: '100%', height: '100%',
                        resizeMode: 'stretch'}}></Image>
                    </TouchableOpacity>
                </View>

                {/* <View style={{position: 'absolute',  left: '3%', 
                    bottom: '3%', width: '10%', height: '24%'}}>
                        <Image source={GnareIcon} style={styles.image}></Image>
                </View> */}


                <View style={styles.backContainer}>
                    <TouchableOpacity onPress={this.gotoBack}>
                        <Image source={Back_icon} style={styles.home}></Image>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.homeContainer}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image source={Home_icon} style={styles.home}></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}


const style = StyleSheet.create({
    gnareIconStyle: {
        position: 'absolute',
        bottom: '9%',
        left: '2%',
        height: hp('12%'),
        width: wp('12%'),
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})



export default withNavigation(DadSeMarket);