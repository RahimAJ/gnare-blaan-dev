import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ImageBackground, AsyncStorage} from 'react-native';
import { withNavigation } from 'react-navigation';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';
import GameBG from '../gameImages/GameBG.png';
import Home_icon from '../../images/Home_icon.png';
import Back_icon from '../../images/Back_icon.png';
import GnareIcon from '../gameImages/GnareMain.png';
import MoneyContainer from '../gameImages/moneyContainer.png';
import TlasIcon from '../gameImages/tlas_icon.png';
import Coins from '../gameImages/Coinbank.png';
import Coin from '../gameImages/moneyCoin.png';
import money20 from '../gameImages/money20.png';
import money50 from '../gameImages/money50.png';
import money100 from '../gameImages/money100.png';
import Instruction from '../gameImages/instruction.png';
import CheckIcon from '../gameImages/check_icon.png';
import XIcon from '../gameImages/x_icon.png';


const SessionPlayer = '@MyApp:SessionPlayer';

var Realm = require('realm');
let realm;


class DadSeBank extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            coinViewTop: '1000%',
            money:0,
            Balance:0,
            confirmTop: '1000%', //18%
            checkTop:'1000%',//80%
            XTop: '1000%',//80%,
            TlasTop: '82%',//
            moneyTop1:'25%',
            moneyTop2: '25%',
            coin1Top: '28.5%',
            bangBank: '',
        }
    }

   async componentDidMount(){
        const storedValue = await AsyncStorage.getItem(SessionPlayer);
        realm = new Realm({ path: 'PlayerDatabase.realm' });
        var getCoin = realm.objects('Players');
        var id = 0;
        for (a = 0; a < getCoin.length; a++) {
            const con = parseInt(a);
            if (storedValue == getCoin[con].playername) {
               this.setState({
                   money: getCoin[con].coinBalance,
                   Balance: getCoin[con].coinBalance,
               })
            }
        }
    }

    gotoMainMenu = () =>{
        this.props.navigation.replace('mainMenu')
    }

    goBack = () =>{
        if (this.state.bangBank == 'dadse')
        {
            // alert(this.state.bangBank);
            this.props.navigation.replace('gameMenu', { showDadseBang: 'show' });
        }
        if (this.state.bangBank == 'dadbatak')
        {
            // alert(this.state.bangBank);
            this.props.navigation.replace('gameMenu', { showDadBatakBang: 'show' });
        }
    }

    coinView = () => {
        const coin = [];
        for( let index=0 ; index < this.state.money; index++) {
            coin.push(
                <Image source={Coin} style={styles.coinImage}></Image>
            )
        }
        return coin;
    }

    coinExchange = () => {
        let moneyExchange = this.state.money;
        const coin = [];

        while (moneyExchange != 0)
        {
            if (moneyExchange >= 100)
            {
                let counter1 = 0;
                counter1 = parseInt(moneyExchange/100);
                
                for( let index=0 ; index < counter1; index++) {
                    coin.push(
                        <Image source={money100} style={styles.moneyImage}></Image>
                    )
                    moneyExchange = moneyExchange - 100;
                }
            }
            if (moneyExchange >= 50 && moneyExchange < 100)
            {
                let counter2 = 0;
                counter2 = parseInt(moneyExchange/50);

                for( let index=0 ; index < counter2; index++) {
                    coin.push(
                        <Image source={money50} style={styles.moneyImage}></Image>
                    )
                    moneyExchange = moneyExchange - 50;
                }
            }
            if (moneyExchange >= 20 && moneyExchange < 50)
            {
                let counter3 = 0;
                counter3 = parseInt(moneyExchange/20);

                for( let index=0 ; index < counter3; index++) {
                    coin.push(
                        <Image source={money20} style={styles.moneyImage}></Image>
                    )
                    moneyExchange = moneyExchange - 20;
                }
            }
            if (moneyExchange < 20)
            {
                for( let index=0 ; index < moneyExchange; index++) {
                    coin.push(
                        <Image source={Coin} style={styles.coinImage}></Image>
                    )
                    moneyExchange = moneyExchange - 1;
                }
            }
        }

        return coin;
    }

    tlas = () => {
      //  coinViewTop: '28.5%',
        this.setState({ 
            checkTop: '80%',//80%
            XTop: '80%',//80%,
            confirmTop: '18%', //18%
            TlasTop:'1000%',
            moneyTop1:'1000%',
            moneyTop2:'1000%',
            coin1Top:'1000%'
        })
    }

    check = () => {
        this.setState({
            checkTop: '1000%',//80%
            XTop: '1000%',//80%,
            confirmTop: '1000%', //18%
            TlasTop: '82%',//
            moneyTop1: '25%',
            moneyTop2: '25%',
            coin1Top: '28.5%',
            coinViewTop: '28.5%',
        })
    }

    cancel = () => {
        this.setState({
            checkTop: '1000%',//80%
            XTop: '1000%',//80%,
            confirmTop: '1000%', //18%
            TlasTop: '82%',//
            moneyTop1: '25%',
            moneyTop2: '25%',
            coin1Top: '28.5%',
        })
    }


    render() {
        console.disableYellowBox = true; 
        const { navigation } = this.props;
        const bangID = navigation.getParam('Bang', 'NO-ID');
        this.state.bangBank = bangID;

        return (
            <ImageBackground
                source={GameBG}
                style={globalStyleSheet.image}
            >

                <View style={globalStyleSheet.homeContainer}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image source={Home_icon} style={globalStyleSheet.home}></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.backContainer}>
                  <TouchableOpacity onPress={this.goBack}>
                      <Image
                          source={Back_icon}
                          style={globalStyleSheet.back}
                      ></Image>
                  </TouchableOpacity>
              </View>
                <View style={{
                    position: 'absolute',
                    top: this.state.moneyTop1,
                    left: '6.5%',
                    width: '45%',
                    height: '50%',
                }}>
                    <Image source={MoneyContainer} style={styles.image}></Image>
                </View>
                <View style={{
                    position: 'absolute',
                    top: this.state.moneyTop2,
                    left: '50%',
                    width: wp('45%'),
                    height: hp('50%'),
                }}>
                    <Image source={MoneyContainer} style={styles.image}></Image>
                </View>
                <View style={{
                    position: 'absolute',
                    width: '17%',
                    height: '24%',
                    top: '75%',
                    left: '1%',
                }}>
                    <Image source={Coins} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                    <View style={{
                        position: 'absolute',
                        top: '20%',
                        left: '40%',
                    }}>
                        <Text style={{
                            fontSize: 20,
                            color: '#ffea00'
                        }}>{this.state.Balance}.00</Text>
                    </View>
                </View>
                <View style={{
                    position: 'absolute',
                    top:this.state.TlasTop,
                    left: '20%',
                    width: wp('15%'),
                    height: hp('15%'),
                }}>
                    <TouchableOpacity onPress={this.tlas}>
                        <Image source={TlasIcon} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top:this.state.coin1Top,
                    left: '10.50%',
                    width: '36%',
                    height: '42%',
                    flex:  1,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start',
                    resizeMode: 'contain',
                    borderColor:'transparent',
                    borderWidth:1
                }}>
                        {this.coinView()}
                </View>
                <View style={{
                    position: 'absolute',
                    top:this.state.coinViewTop,
                    left: '56%',
                    width: '33%',
                    height: '41%',
                    flex: 1,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start',
                    borderColor: 'transparent',
                    borderWidth: 1,
                    padding:2,
                }}>
                        {this.coinExchange()}
                </View>
                <View style={{
                    position: 'absolute',
                    top: this.state.confirmTop,
                    left: '26.5%',
                    width: wp('52%'),
                    height: hp('54%'),
                }}>
                    <Image source={Instruction} style={styles.image}></Image>
                </View>
                <View style={{
                    position: 'absolute',
                    top: this.state.checkTop,
                    left: '37%',
                    width: wp('13%'),
                    height: hp('12%'),
                }}>
                    <TouchableOpacity onPress={this.check}>
                        <Image source={CheckIcon} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top: this.state.XTop,
                    left: '50%',
                    width: wp('13%'),
                    height: hp('12%'),
                }}>
                    <TouchableOpacity onPress={this.cancel}>
                        <Image source={XIcon} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({
    gnareIconStyle: {
        position: 'absolute',
        top: '5%',
        left: '2%',
        height: '12%',
        width: '10%',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    coinImage: {
        width: '10%',
        height: '10%',
        resizeMode: 'contain'
    },
    moneyImage: {
        width: wp('8%'),
        height: hp('8%'),
        resizeMode: 'contain'
    },
    moneyConStyle: {
        position: 'absolute',
        top: '25%',
        left: '6.5%',
        width: wp('45%'),
        height: hp('50%'),
    },
    moneyConStyle2: {
        position: 'absolute',
        top: '25%',
        left: '50%',
        width: wp('45%'),
        height: hp('50%'),
    },
    tlasStyle: {
        position: 'absolute',
        top: '82%',
        left: '20%',
        width: wp('15%'),
        height: hp('15%'),
    },
    coinbankStyle: {
        position: 'absolute',
        top: '56.5%',
        left: '22%',
        height: hp('14%'),
        width: wp('13%'),
    },
})


export default withNavigation(DadSeBank);