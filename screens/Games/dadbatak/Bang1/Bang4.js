import React, { Component } from 'react';
import { Text, View, Image, PanResponder, StyleSheet, TouchableOpacity, BackHandler, ImageBackground, AsyncStorage} from 'react-native';
import { withNavigation } from 'react-navigation';
import GameBG from '../../gameImages/GameBG.png';
import { globalStyleSheet } from '../../../globalStyleSheet/globalStyleSheet';
import * as Animatable from 'react-native-animatable';
import Home_icon from '../../../images/Home_icon.png';
import Back_icon from '../../../images/Back_icon.png';
import stars from '../../gameImages/12Icon_Star.png';
import emptyStars from '../../gameImages/13Icon_EmptyStar.png';
import FadlugIcon from '../../gameImages/fadlug_icon.png';
import LamwaIcon from '../../gameImages/lamwa_icon.png';
import GufadyanIcon from '../../gameImages/gufadyan_icon.png';
import Gufadyan from '../../gameImages/gufadyan.png';
import Coins from '../../gameImages/Coinbank.png';
import Sound from 'react-native-sound';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import choiceA from '../../gameImages/DB_choices1/a.png';
import choiceA2ccent from '../../gameImages/DB_choices1/a2-accent.png';
import choiceAccent from '../../gameImages/DB_choices1/a-accent.png';
import choiceB from '../../gameImages/DB_choices1/b.png';
import choiceD from '../../gameImages/DB_choices1/d.png';
import choiceE from '../../gameImages/DB_choices1/e.png';
import choiceE2ccent from '../../gameImages/DB_choices1/e2-accent.png';
import choiceEccent from '../../gameImages/DB_choices1/e-accent.png';
import choiceG from '../../gameImages/DB_choices1/g.png';
import choiceH from '../../gameImages/DB_choices1/h.png';
import choiceL from '../../gameImages/DB_choices1/l.png';
import choiceIccent from '../../gameImages/DB_choices1/i-accent.png';
import choiceN from '../../gameImages/DB_choices1/n.png';
import choiceOccent from '../../gameImages/DB_choices1/o-accent.png';
import choiceU from '../../gameImages/DB_choices1/u.png';
import choiceUccent from '../../gameImages/DB_choices1/u-accent.png';
import choiceW from '../../gameImages/DB_choices1/w.png';
import choiceK from '../../gameImages/DB_choices1/k.png';



import correctA from '../../gameImages/DB_choices1/correctA.png';
import correctAAccent from '../../gameImages/DB_choices1/correctAAccent.png';
import correctAAccent2 from '../../gameImages/DB_choices1/correctAAccent2.png';
import correctB from '../../gameImages/DB_choices1/correctB.png';
import correctD from '../../gameImages/DB_choices1/correctD.png';
import correctE from '../../gameImages/DB_choices1/correctE.png';
import correctEAccent from '../../gameImages/DB_choices1/correctEAccent.png';
import correctEAccent2 from '../../gameImages/DB_choices1/correctEAccent2.png';
import correctG from '../../gameImages/DB_choices1/correctG.png';
import correctH from '../../gameImages/DB_choices1/correctH.png';
import correctIAccent from '../../gameImages/DB_choices1/correctIAccent.png';
import correctK from '../../gameImages/DB_choices1/correctK.png';
import correctL from '../../gameImages/DB_choices1/correctL.png';
import correctN from '../../gameImages/DB_choices1/correctN.png';
import correctOAccent from '../../gameImages/DB_choices1/correctOAccent.png';
import correctU from '../../gameImages/DB_choices1/correctU.png';
import correctUAccent from '../../gameImages/DB_choices1/correctUAccent.png';
import correctW from '../../gameImages/DB_choices1/correctW.png';

import tranparentA from '../../gameImages/DB_choices1/tranparentA.png';
import tranparentAAccent from '../../gameImages/DB_choices1/tranparentAAccent.png';
import tranparentAAccent2 from '../../gameImages/DB_choices1/tranparentAAccent2.png';
import tranparentB from '../../gameImages/DB_choices1/tranparentB.png';
import tranparentD from '../../gameImages/DB_choices1/tranparentD.png';
import tranparentE from '../../gameImages/DB_choices1/tranparentE.png';
import tranparentEAccent from '../../gameImages/DB_choices1/tranparentEAccent.png';
import tranparentEAccent2 from '../../gameImages/DB_choices1/tranparentEAccent2.png';
import tranparentG from '../../gameImages/DB_choices1/tranparentG.png';
import tranparentH from '../../gameImages/DB_choices1/tranparentH.png';
import tranparentIAccent from '../../gameImages/DB_choices1/tranparentIAccent.png';
import tranparentK from '../../gameImages/DB_choices1/tranparentK.png';
import tranparentL from '../../gameImages/DB_choices1/tranparentL.png';
import tranparentN from '../../gameImages/DB_choices1/tranparentN.png';
import tranparentOAccent from '../../gameImages/DB_choices1/tranparentOAccent.png';
import tranparentU from '../../gameImages/DB_choices1/tranparentU.png';
import tranparentUAccent from '../../gameImages/DB_choices1/tranparentUAccent.png';
import tranparentW from '../../gameImages/DB_choices1/tranparentW.png';

import Empty from '../../gameImages/DB_choices1/emptyChoice.png';

import BlackBoard1 from '../../gameImages/DB_blackboard1/bang1Q1.png';
import BlackBoard2 from '../../gameImages/DB_blackboard1/bang1Q2.png';
import BlackBoard3 from '../../gameImages/DB_blackboard1/bang1Q3.png';
import BlackBoard4 from '../../gameImages/DB_blackboard1/bang1Q4.png';
import BlackBoard5 from '../../gameImages/DB_blackboard1/bang1Q5.png';
import BlackBoard6 from '../../gameImages/DB_blackboard1/bang1Q6.png';
import BlackBoard7 from '../../gameImages/DB_blackboard1/bang1Q7.png';
import BlackBoard8 from '../../gameImages/DB_blackboard1/bang1Q8.png';
import BlackBoard9 from '../../gameImages/DB_blackboard1/bang1Q9.png';
import BlackBoard10 from '../../gameImages/DB_blackboard1/bang1Q10.png';
import BlackBoard11 from '../../gameImages/DB_blackboard1/bang1Q11.png';
import BlackBoard12 from '../../gameImages/DB_blackboard1/bang1Q12.png';

import Answer1 from '../../gameImages/DB_blackboard1/DB_bang1A1.png';
import Answer2 from '../../gameImages/DB_blackboard1/DB_bang1A2.png';
import Answer3 from '../../gameImages/DB_blackboard1/DB_bang1A3.png';
import Answer4 from '../../gameImages/DB_blackboard1/DB_bang1A4.png';
import Answer5 from '../../gameImages/DB_blackboard1/DB_bang1A5.png';
import Answer6 from '../../gameImages/DB_blackboard1/DB_bang1A6.png';
import Answer7 from '../../gameImages/DB_blackboard1/DB_bang1A7.png';
import Answer8 from '../../gameImages/DB_blackboard1/DB_bang1A8.png';
import Answer9 from '../../gameImages/DB_blackboard1/DB_bang1A9.png';
import Answer10 from '../../gameImages/DB_blackboard1/DB_bang1A10.png';
import Answer11 from '../../gameImages/DB_blackboard1/DB_bang1A11.png';
import Answer12 from '../../gameImages/DB_blackboard1/DB_bang1A12.png';

const SessionPlayer = '@MyApp:SessionPlayer';

var Realm = require('realm');
let realm;

Sound.setCategory('Playback');

const blackboardList = [
    BlackBoard1, 
    BlackBoard2, 
    BlackBoard3, 
    BlackBoard4, 
    BlackBoard5, 
    BlackBoard6, 
    BlackBoard7, 
    BlackBoard8, 
    BlackBoard9,
    BlackBoard10,
    BlackBoard11,
    BlackBoard12,
];

const choiceList = [
    {
        choice:choiceA,
        choicestring:'choiceA',
    },
    {
        choice: choiceA2ccent,
        choicestring:'choiceA2ccent'
    },
     {
         choice: choiceAccent,
         choicestring: 'choiceAccent'
    },
    {
        choice: choiceB,
        choicestring: 'choiceB'
    },  
    {
        choice: choiceD,
        choicestring: 'choiceD'
    },
    {
        choice: choiceE,
        choicestring: 'choiceE'
    },
     {
        choice: choiceE2ccent,
        choicestring: 'choiceE2ccent'
    },
    {
        choice: choiceEccent,
        choicestring: 'choiceEccent'
    },
    {
        choice: choiceG,
        choicestring: 'choiceG'
    },
    {
        choice: choiceH,
        choicestring: 'choiceH'
    },
    {
        choice: choiceL,
        choicestring: 'choiceL'
    },
    {
        choice: choiceIccent,
        choicestring: 'choiceIccent'
    },
    {
        choice: choiceN,
        choicestring: 'choiceN'
    },
    {
        choice: choiceOccent,
        choicestring: 'choiceOccent'
    },
    {
        choice: choiceU,
        choicestring: 'choiceU'
    },
    {
        choice:   choiceUccent,
        choicestring: 'choiceUccent'
    },
    {
        choice: choiceW,
        choicestring: 'choiceW'
    },
    {
        choice: choiceK,
        choicestring: 'choiceK'
    },
];

const tranparent = [
    tranparentA,
    tranparentAAccent2,
    tranparentAAccent,
    tranparentB,
    tranparentD,
    tranparentE,
    tranparentEAccent2,
    tranparentEAccent,
    tranparentG,
    tranparentH,
    tranparentL,
    tranparentIAccent,
    tranparentN,
    tranparentOAccent,
    tranparentU,
    tranparentUAccent,
    tranparentW,
    tranparentK,   
]

const answer = [
    'choiceA',
    'choiceA2ccent',
    'choiceAccent',
    'choiceB',
    'choiceD',
    'choiceE',
    'choiceE2ccent',
    'choiceEccent',
    'choiceG',
    'choiceH',
    'choiceL',
    'choiceIccent',
    'choiceN',
    'choiceOccent',
    'choiceU',
    'choiceUccent',
    'choiceW',
    'choiceK',
]

const correct = [
    correctA,
    correctAAccent2,
    correctAAccent,
    correctB,
    correctD,
    correctE,
    correctEAccent2,
    correctEAccent,
    correctG,
    correctH,
    correctL,
    correctIAccent,
    correctN,
    correctOAccent,
    correctU,
    correctUAccent,
    correctW,
    correctK,  
    ];

const combine = [
    combine1 = {
        blackboard:blackboardList[0],
        choices1:choiceList[7].choice,
        choices2: choiceList[0].choice,
        choices3: choiceList[13].choice,
        choices4: choiceList[2].choice,
        choice1String: choiceList[7].choicestring,
        choice2String: choiceList[0].choicestring,
        choice3String: choiceList[13].choicestring,
        choice4String: choiceList[2].choicestring,
        answer: 'choiceAccent',
        sound: 'choiceAccent',
        description: Answer1,
        leftPosition:'48%',
    },
    combine2 = {
        blackboard: blackboardList[1],
        choices1: choiceList[5].choice,
        choices2: choiceList[15].choice,
        choices3: choiceList[13].choice,
        choices4: choiceList[11].choice,
        choice1String: choiceList[5].choicestring,
        choice2String: choiceList[15].choicestring,
        choice3String: choiceList[13].choicestring,
        choice4String: choiceList[11].choicestring,
        answer: 'choiceUccent',
        sound: 'choiceUccent',
        description: Answer2,
        leftPosition: '47%',
    },
    combine3 = {
        blackboard: blackboardList[2],
        choices1: choiceList[1].choice,
        choices2: choiceList[15].choice,
        choices3: choiceList[14].choice,
        choices4: choiceList[11].choice,
        choice1String: choiceList[1].choicestring,
        choice2String: choiceList[15].choicestring,
        choice3String: choiceList[14].choicestring,
        choice4String: choiceList[11].choicestring,
        answer: 'choiceU',
        sound: 'choiceU',
        description: Answer3,
        leftPosition: '46%',
    },
    combine4 = {
        blackboard: blackboardList[3],
        choices1: choiceList[1].choice,
        choices2: choiceList[15].choice,
        choices3: choiceList[0].choice,
        choices4: choiceList[11].choice,
        choice1String: choiceList[1].choicestring,
        choice2String: choiceList[15].choicestring,
        choice3String: choiceList[0].choicestring,
        choice4String: choiceList[11].choicestring,
        answer: 'choiceA',
        sound: 'choiceA',
        description: Answer4,
        leftPosition: '47.50%',
    },
    combine5 = {
        blackboard: blackboardList[4],
        choices1: choiceList[5].choice,
        choices2: choiceList[0].choice,
        choices3: choiceList[13].choice,
        choices4: choiceList[2].choice,
        choice1String: choiceList[5].choicestring,
        choice2String: choiceList[0].choicestring,
        choice3String: choiceList[13].choicestring,
        choice4String: choiceList[2].choicestring,
        answer: 'choiceA',
        sound: 'choiceAA',
        description: Answer5,
        leftPosition: '47.60%',
    },
    combine6 = {
        blackboard: blackboardList[5],
        choices1: choiceList[5].choice,
        choices2: choiceList[15].choice,
        choices3: choiceList[13].choice,
        choices4: choiceList[11].choice,
        choice1String: choiceList[5].choicestring,
        choice2String: choiceList[15].choicestring,
        choice3String: choiceList[13].choicestring,
        choice4String: choiceList[11].choicestring,
        answer: 'choiceE',
        sound: 'choiceE',
        description: Answer6,
        leftPosition: '47.60%',
    },
    combine7 = {
        blackboard: blackboardList[6],
        choices1: choiceList[16].choice,
        choices2: choiceList[9].choice,
        choices3: choiceList[12].choice,
        choices4: choiceList[10].choice,
        choice1String: choiceList[16].choicestring,
        choice2String: choiceList[9].choicestring,
        choice3String: choiceList[12].choicestring,
        choice4String: choiceList[10].choicestring,
        answer: 'choiceW',
        sound: 'choiceW',
        description: Answer7,
        leftPosition: '44%',
    },
    combine8 = {
        blackboard: blackboardList[7],
        choices1: choiceList[10].choice,
        choices2: choiceList[17].choice,
        choices3: choiceList[3].choice,
        choices4: choiceList[9].choice,
        choice1String: choiceList[10].choicestring,
        choice2String: choiceList[17].choicestring,
        choice3String: choiceList[3].choicestring,
        choice4String: choiceList[9].choicestring,
        answer: 'choiceH',
        sound: 'choiceH',
        description: Answer8,
        leftPosition: '45.20%',
    },
    combine9 = {
        blackboard: blackboardList[8],
        choices1: choiceList[5].choice,
        choices2: choiceList[0].choice,
        choices3: choiceList[13].choice,
        choices4: choiceList[6].choice,
        choice1String: choiceList[5].choicestring,
        choice2String: choiceList[0].choicestring,
        choice3String: choiceList[13].choicestring,
        choice4String: choiceList[6].choicestring,
        answer: 'choiceE2ccent',
        sound: 'choiceE2ccent',
        description: Answer9,
        leftPosition: '45.50%',
    },
    combine10 = {
        blackboard: blackboardList[9],
        choices1: choiceList[2].choice,
        choices2: choiceList[15].choice,
        choices3: choiceList[6].choice,
        choices4: choiceList[11].choice,
        choice1String: choiceList[2].choicestring,
        choice2String: choiceList[15].choicestring,
        choice3String: choiceList[6].choicestring,
        choice4String: choiceList[11].choicestring,
        answer: 'choiceAccent',
        sound: 'choiceE2ccent2',
        description: Answer10,
        leftPosition: '48%',
    },
    combine11 = {
        blackboard: blackboardList[10],
        choices1: choiceList[12].choice,
        choices2: choiceList[17].choice,
        choices3: choiceList[3].choice,
        choices4: choiceList[10].choice,
        choice1String: choiceList[12].choicestring,
        choice2String: choiceList[17].choicestring,
        choice3String: choiceList[3].choicestring,
        choice4String: choiceList[10].choicestring,
        answer: 'choiceL',
        sound: 'choiceL',
        description: Answer11,
        leftPosition: '46%',
    },
     combine12 = {
        blackboard: blackboardList[11],
        choices1: choiceList[4].choice,
        choices2: choiceList[17].choice,
        choices3: choiceList[8].choice,
        choices4: choiceList[3].choice,
         choice1String: choiceList[4].choicestring,
         choice2String: choiceList[17].choicestring,
         choice3String: choiceList[8].choicestring,
         choice4String: choiceList[3].choicestring,
         answer: 'choiceK',
         sound: 'choiceK',
        description: Answer12,
         leftPosition: '48%',
    }
];

var stageNumber = [0,1,2,3,4,5,6,7,8,9,10,11];

const questionAnswered = [];
const choiceGame = ['game_wrong', 'game_correct'];
const audio = [
    'dadbatak1_bata',
    'dadbatak1_pusa',
    'dadbatak1_araw',
    'dadbatak1_isda',
    'dadbatak1_pinto',
    'dadbatak1_buwan',
    'dadbatak1_suklay',
    'dadbatak1_dagat',
    'dadbatak1_tubig',
    'dadbatak1_kabayo',
    'dadbatak1_langgam',
    'dadbatak1_buhok',
];

const audioIndex = [
    'choiceAccent',
    'choiceUccent',
    'choiceU',
    'choiceA',
    'choiceAA',
    'choiceE',
    'choiceW',
    'choiceH',
    'choiceE2ccent',
    'choiceE2ccent2',
    'choiceL',
    'choiceK',
]

//playsound
//answer
//correct
//combine[answer]


class Bang4 extends Component {
    handleViewRef = ref => this.view = ref;
    wrong = () => this.view.tada();
    Animatecorrect = () => this.view.pulse();
    StarAnimation = () => this.view.shake();
    static navigationOptions = {
        header: null,
    }

    constructor(props){
        super(props);
        this.state={
            max: stageNumber.length,
            getChoice1Name:'',
            getChoice2Name: '',
            getChoice3Name: '',
            getChoice4Name: '',
            showGameover: '',
            answer:'',
            choice1Top: '1000%',//75%
            choice2Top: '1000%',//75%
            choice3Top: '1000%',//75%
            choice4Top: '1000%',//75%
            emptyChoiceLeft: '1000%',
            randomQuestion:0,
            answerTop: '1000%', //51%
            answerImage: tranparentA,
            descriptionTop:'1000%',
            blackboardTop:'1000%',
            star1Top:'1%',
            star2Top:'1%',
            star3Top:'1%',
            emptyStar1Top:'1000%',
            emptyStar2Top:'1000%',
            emptyStar3Top:'1000%',
            fadlugTop:'1000%',
            gufadyanTop:'1000%',
            marketBottom: '3%',
            lamwaTop:'1000%',
            Balance:0,
            soundName:'',
            homeTop: '3%',
            backTop: '3%',
        }

        //Sound
        answerAudio = null;
    }

    componentDidMount() {
        const showIt = this.state.showGameover;
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);

        if(showIt == 'Gameover') {
            setTimeout(() => {
                this.setState({
                    star1Top: '1000%',
                    emptyStar1Top: '1%',
                    fadlugTop: '19%',
                    gufadyanTop: '19%',
                    lamwaTop: '56%',
                    choice1Top: '1000%',//75%
                    choice2Top: '1000%',//75%
                    choice3Top: '1000%',//75%
                    choice4Top: '1000%',//75%
                    blackboardTop: '1000%',
                    star1Top: '1000%',
                    star2Top: '1000%',
                    star3Top: '1000%',
                    emptyStar1Top: '1000%',
                    emptyStar2Top: '1000%',
                    emptyStar3Top: '1000%',
                    marketBottom: '1000%',
                })
            },1000)
        }

        this.load('check');
        this.minusStar();
        this.checkBalance();
    }

    componentWillUnmount() {
        this.backHandler.remove()
      }
    
      handleBackPress = () => {
        this.goBack(); 
        return true;
      }

    playChoiceGame = (index) => {
        this.choiceGame = new Sound(choiceGame[index] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            alert('failed to load the sound', error);
            return;
        } else {
            this.choiceGame.play();
        }});
    }

    playSound = (index) => {
        for(var a = 0; a<=audio.length;a++){
            if(index == audioIndex[a]){
                const set = a;
                this.answerAudio = new Sound(audio[set] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
                    if (error) {
                        alert('failed to load the sound', error);
                        return;
                    } else {
                        this.answerAudio.play();
                    }
                });
            }
        }
  }

  stopSounds = () => {
    if (this.answerAudio != null){
      this.answerAudio.stop();
    }
  }

    checkBalance = async (index) => {
        const storedValue = await AsyncStorage.getItem(SessionPlayer);
        realm = new Realm({ path: 'PlayerDatabase.realm' });
        var getCoin = realm.objects('Players');

        var id = 0;
        var coin = '';
        for (a = 0; a < getCoin.length; a++) {
            const con = parseInt(a);
            if (storedValue == getCoin[con].playername) {
                coin = getCoin[con].coinBalance;
                id = con;
            }
        }
        if (coin == '0') {
            const value = 0;
            this.setState({
                Balance: value,
            })
        } else {
            this.setState({
                Balance: coin
            })
        }

        if (index == 'addBalance') {
            if (this.state.Balance == 0) {
                const value = 2;
                realm.write(() => {
                    getCoin[id].coinBalance = String(value);
                })
                this.setState({
                    Balance: value,
                })
            } else {
                const convertToNumber = Number(this.state.Balance);
                this.state.Balance = convertToNumber + 2;
                realm.write(() => {
                    getCoin[id].coinBalance = String(this.state.Balance);
                })
                this.setState({
                    Balance: this.state.Balance,
                })
            }
        }

    }

    gotoMainMenu = () =>{
        this.props.navigation.replace('mainMenu');
    }

    gotoMarket = () =>{
        this.props.navigation.replace('dadseMarket');
    }

    gotoLamwa = () =>{
        this.props.navigation.replace('gameMenu', { showDadBatakBang: 'show' });
    }

    goBack = () => {
        this.stopSounds();
        this.props.navigation.replace('gameMenu', { showDadBatakBang: 'show' });
    }
    
    load = async (index) => {
        const storedValue = await AsyncStorage.getItem(SessionPlayer);
        realm = new Realm({ path: 'PlayerDatabase.realm' });
        var getPlayers = realm.objects('Players');
        var id = 0;
        var random = 0;
        const randomizer = Math.floor(Math.random() * stageNumber.length);
        var use = stageNumber[randomizer];
        stageNumber.splice(randomizer, 1);
        var q = '';
        for (a = 0; a < getPlayers.length; a++) {
            const con = parseInt(a);
            if (storedValue == getPlayers[con].playername) {
                q = getPlayers[con].questionDoneBang1Dadbatak;
            }
        }

        if (q == 5) {
            for (a = 0; a < getPlayers.length; a++) {
                const con = parseInt(a);
                if (storedValue == getPlayers[con].playername) {
                    realm.write(() => {
                        getPlayers[con].Dadbatakstar1 = 'null';
                        getPlayers[con].Dadbatakstar2 = 'null';
                        getPlayers[con].Dadbatakstar3 = 'null';
                        getPlayers[con].questionDoneBang1Dadbatak = 'null';
                    })
                }
            }
            this.props.navigation.replace('ending4');
        }
        if (index == 'check') {
            for (a = 0; a < getPlayers.length; a++) {
                const con = parseInt(a);
                if (storedValue == getPlayers[con].playername) {
                    random = getPlayers[con].dadseBatak1RandomKey;
                    id = con;
                    if (random == 'null') {
                        realm.write(() => {
                            getPlayers[con].dadseBatak1RandomKey = String(use);
                        })
                        this.setState({
                            randomQuestion: use,
                            choice1Top: '75%',//75%
                            choice2Top: '75%',//75%
                            choice3Top: '75%',//75%
                            choice4Top: '75%',//75%
                            blackboardTop: '14%',
                        });
                    } else {
                        stageNumber.splice(random, 1);
                        this.setState({
                            randomQuestion: random,
                            choice1Top: '75%',//75%
                            choice2Top: '75%',//75%
                            choice3Top: '75%',//75%
                            choice4Top: '75%',//75%
                            blackboardTop: '14%',
                        });   
                    }
                }
            }
        }

        if (index == 'next') {
            this.setState({
                choice1Top: '1000%',//75%
                choice2Top: '1000%',//75%
                choice3Top: '1000%',//75%
                choice4Top: '1000%',//75%
                blackboardTop: '1000%',
            });
            realm.write(() => {
                getPlayers[id].dadseBatak1RandomKey = String(use);
            })
            this.setState({
                randomQuestion: use,
                choice1Top: '75%',//75%
                choice2Top: '75%',//75%
                choice3Top: '75%',//75%
                choice4Top: '75%',//75%
                blackboardTop: '14%',
                homeTop: '3%',
                backTop: '3%',
                marketBottom: '3%',
            });
        }

        if (index == 'retry') {
            this.setState({
                choice1Top: '1000%',//75%
                choice2Top: '1000%',//75%
                choice3Top: '1000%',//75%
                choice4Top: '1000%',//75%
                blackboardTop: '1000%',
            });
            realm.write(() => {
                getPlayers[id].dadseBatak1RandomKey = String(use);
            })
            this.setState({
                randomQuestion: use,
                choice1Top: '75%',//75%
                choice2Top: '75%',//75%
                choice3Top: '75%',//75%
                choice4Top: '75%',//75%
                blackboardTop: '14%',
                marketBottom: '3%',
            });
        }
    }

    validate = async (index) => {
       if(index == 1){
           if(this.state.getChoice1Name == this.state.answer){
               this.correct(this.state.getChoice1Name);
               this.Animatecorrect();
               setTimeout(() => {
                   this.playSound(this.state.soundName);
                   this.setState({
                       answerTop: '1000%',
                       blackboardTop: '1000%',
                       descriptionTop: '14%',
                       choice1Top: '1000%',
                       choice2Top: '1000%',
                       choice3Top: '1000%',
                       choice4Top: '1000%'
                   });
                   setTimeout(() => {
                       const next = 'next';
                       this.load(next);
                       this.setState({
                           descriptionTop: '1000%',
                       });
                       setTimeout(() => {
                           this.setState({
                               answerTop: '1000%',
                               blackboardTop: '14%',
                               choice1Top: '75%',
                               choice2Top: '75%',
                               choice3Top: '75%',
                               choice4Top: '75%'
                           });
                       }, 1300)
                   }, 3000)
               }, 2000)
           }else{
               this.answer(this.state.getChoice1Name);
               this.wrong();
               const minus = 'minus';
               this.minusStar(minus);
               this.setState({
                   choice1Top: '1000%',
                   emptyChoiceLeft: '18%',
               })
               setTimeout(() => {
                   this.setState({
                       choice1Top: '75%',
                       emptyChoiceLeft: '1000%',
                   })
               }, 1000)
           }
       }
        if (index == 2) {
            if (this.state.getChoice2Name == this.state.answer) {
                this.correct(this.state.getChoice2Name);
                this.Animatecorrect();
                setTimeout(() => {
                    this.playSound(this.state.soundName);
                    this.setState({
                        answerTop: '1000%',
                        blackboardTop: '1000%',
                        descriptionTop: '14%',
                        choice1Top: '1000%',
                        choice2Top: '1000%',
                        choice3Top: '1000%',
                        choice4Top: '1000%'
                    });
                    setTimeout(() => {
                        const next = 'next';
                        this.load(next);
                        this.setState({
                            descriptionTop: '1000%',
                        });
                        setTimeout(() => {
                            this.setState({
                                answerTop: '1000%',
                                blackboardTop: '14%',
                                choice1Top: '75%',
                                choice2Top: '75%',
                                choice3Top: '75%',
                                choice4Top: '75%'
                            });
                        }, 1300)
                    }, 3000)
                }, 2000)
            } else {
                this.wrong();
                const minus = 'minus';
               this.minusStar(minus);
                this.answer(this.state.getChoice2Name);
                this.setState({
                    choice2Top: '1000%',
                    emptyChoiceLeft: '35%',
                })
                setTimeout(()=>{
                    this.setState({
                        choice2Top: '75%',
                        emptyChoiceLeft: '1000%',
                    })
                },1000)
            }
        }
        if (index == 3) {
            if (this.state.getChoice3Name == this.state.answer) {
                this.correct(this.state.getChoice3Name);
                this.Animatecorrect();
                setTimeout(() => {
                    this.playSound(this.state.soundName);
                    this.setState({
                        answerTop: '1000%',
                        blackboardTop: '1000%',
                        descriptionTop: '14%',
                        choice1Top: '1000%',
                        choice2Top: '1000%',
                        choice3Top: '1000%',
                        choice4Top: '1000%'
                    });
                    setTimeout(() => {
                        const next = 'next';
                        this.load(next);
                        this.setState({
                            descriptionTop: '1000%',
                        });
                        setTimeout(() => {
                            this.setState({
                                answerTop: '1000%',
                                blackboardTop: '14%',
                                choice1Top: '75%',
                                choice2Top: '75%',
                                choice3Top: '75%',
                                choice4Top: '75%'
                            });
                        }, 1300)
                    }, 3000)
                }, 2000)
            } else {
                this.wrong();
                const minus = 'minus';
               this.minusStar(minus);
                this.answer(this.state.getChoice3Name);
                this.setState({
                    choice3Top: '1000%',
                    emptyChoiceLeft: '53%',
                })
                setTimeout(() => {
                    this.setState({
                        choice3Top: '75%',
                        emptyChoiceLeft: '1000%',
                    })
                }, 1000)
            }
        }
        if (index == 4) {
            if (this.state.getChoice4Name == this.state.answer) {
                this.correct(this.state.getChoice4Name);
                this.Animatecorrect();
                setTimeout(() => {
                    this.playSound(this.state.soundName);
                    this.setState({
                        answerTop: '1000%',
                        blackboardTop: '1000%',
                        descriptionTop: '14%',
                        choice1Top: '1000%',
                        choice2Top: '1000%',
                        choice3Top: '1000%',
                        choice4Top: '1000%'
                    });
                    setTimeout(() => {
                        const next = 'next';
                        this.load(next);
                        this.setState({
                            descriptionTop: '1000%',
                        });
                        setTimeout(() => {
                            this.setState({
                                answerTop: '1000%',
                                blackboardTop: '14%',
                                choice1Top: '75%',
                                choice2Top: '75%',
                                choice3Top: '75%',
                                choice4Top: '75%'
                            });
                        }, 1300)
                    }, 3000)
                }, 2000)
            } else {
                this.wrong();
             const minus = 'minus';
               this.minusStar(minus);
                this.answer(this.state.getChoice4Name);
                this.setState({
                    choice4Top: '1000%',
                    emptyChoiceLeft: '70%',
                })
                setTimeout(() => {
                    this.setState({
                        choice4Top: '75%',
                        emptyChoiceLeft: '1000%',
                    })
                }, 1000)
            }
        }
    }

    answer = (index) => {
        this.playChoiceGame(0);
       for(var a = 0 ; a<=answer.length;a++){
           if(index == answer[a] ){
               const get  = a;
               this.setState({
                   answerImage:tranparent[get],
                   answerTop:'51%',
               })
               setTimeout(()=>{
                   this.setState({
                       answerTop: '1000%',
                   })
               },1000)
           }
       }
    }

    correct = async (index) => {
        this.playChoiceGame(1);

        const add = 'addBalance';
        this.checkBalance(add);
        questionAnswered.push(1);
        var value = JSON.stringify(questionAnswered.length);
        const storedValue = await AsyncStorage.getItem(SessionPlayer);
        realm = new Realm({ path: 'PlayerDatabase.realm' });
        var getPlayers = realm.objects('Players');

        for (a = 0; a < getPlayers.length; a++) {
            const con = parseInt(a);
            if (storedValue == getPlayers[con].playername) {
                realm.write(() => {
                    getPlayers[con].questionDoneBang1Dadbatak = String(value);
                })
            }
        }

     
        for (var a = 0; a <= answer.length; a++) {
            if (index == answer[a]) {
                const get = a;
                this.setState({
                    answerImage: correct[get],
                    answerTop: '51%',
                    choice1Top: '1000%',
                    choice2Top: '1000%',
                    choice3Top: '1000%',
                    choice4Top: '1000%',
                    homeTop: '1000%',
                    backTop: '1000%',
                    marketBottom: '1000%',
                })
                setTimeout(() => {
                    this.setState({
                        answerTop: '1000%',
                    })
                }, 1000)
            }
        }
    }

    minusStar = async (index) => {
        const storedValue = await AsyncStorage.getItem(SessionPlayer);
        realm = new Realm({ path: 'PlayerDatabase.realm' });
        var getStars = realm.objects('Players');
        var id = 0;
        var star1 = '';
        var star2 = '';
        var star3 = '';
        for (a = 0; a < getStars.length; a++) {
            const con = parseInt(a);
            if (storedValue == getStars[con].playername) {
                star1 = getStars[con].Dadbatakstar1;
                star2 = getStars[con].Dadbatakstar2;
                star3 = getStars[con].Dadbatakstar3;
                id = con;

            }
        }
        if (star1 == 'wrong') {
            this.setState({
                star3Top: '1000%',
                emptyStar3Top: '1%',
            })
        }

        if (star2 == 'wrong') {
            this.setState({
                star2Top: '1000%',
                emptyStar2Top: '1%',
            })
        }

        if (star3 == 'wrong') {
            this.setState({
                star1Top: '1000%',
                emptyStar1Top: '1%',
                fadlugTop: '19%',
                gufadyanTop: '19%',
                lamwaTop: '56%',
                choice1Top: '1000%',//75%
                choice2Top: '1000%',//75%
                choice3Top: '1000%',//75%
                choice4Top: '1000%',//75%
                blackboardTop: '1000%',
                star1Top: '1000%',
                star2Top: '1000%',
                star3Top: '1000%',
                emptyStar1Top: '1000%',
                emptyStar2Top: '1000%',
                emptyStar3Top: '1000%',
            })
        }

        if (index == 'minus') {
            if (star1 == 'null') {
                realm.write(() => {
                    getStars[id].Dadbatakstar1 = 'wrong';
                })
                this.setState({
                    star3Top: '1000%',
                    emptyStar3Top: '1%',
                })
            } else {
                if (star2 == 'null') {
                    realm.write(() => {
                        getStars[id].Dadbatakstar2 = 'wrong';
                    })
                    this.setState({
                        star2Top: '1000%',
                        emptyStar2Top: '1%',
                    })
                } else {
                    if (star3 == 'null') {
                        realm.write(() => {
                            getStars[id].Dadbatakstar3  = 'wrong';
                        })
                        this.props.navigation.navigate('gameover4');
                        //     setTimeout(() => {
                        //     this.setState({
                        //         star1Top: '1000%',
                        //         emptyStar1Top: '1%',
                        //         fadlugTop: '19%',
                        //         gufadyanTop: '19%',
                        //         lamwaTop: '56%',
                        //         choice1Top: '1000%',//75%
                        //         choice2Top: '1000%',//75%
                        //         choice3Top: '1000%',//75%
                        //         choice4Top: '1000%',//75%
                        //         blackboardTop: '1000%',
                        //         star1Top: '1000%',
                        //         star2Top: '1000%',
                        //         star3Top: '1000%',
                        //         emptyStar1Top: '1000%',
                        //         emptyStar2Top: '1000%',
                        //         emptyStar3Top: '1000%',
                        //     })
                        // },1000)
                    }
                }
            }
        }
    }

    retry = async () => {
        const storedValue = await AsyncStorage.getItem(SessionPlayer);
        realm = new Realm({ path: 'PlayerDatabase.realm' });
        var getStars = realm.objects('Players');
        var id = 0;
        stageNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        for (a = 0; a < getStars.length; a++) {
            const con = parseInt(a);
            if (storedValue == getStars[con].playername) {
                realm.write(() => {
                    getStars[con].Dadbatakstar1 = 'null';
                    getStars[con].Dadbatakstar2 = 'null';
                    getStars[con].Dadbatakstar3 = 'null';
                })
            }
        }
        const retry = 'retry';
        this.load(retry);
        this.setState({
            star1Top: '1%',
            star2Top: '1%',
            star3Top: '1%',
            emptyStar1Top: '1000%',
            emptyStar2Top: '1000%',
            emptyStar3Top: '1000%',
            fadlugTop: '1000%',
            gufadyanTop: '1000%',
            lamwaTop: '1000%',
            marketBottom: '3%'
        })

    }
    render() {
        const show = combine[this.state.randomQuestion ];
        const convert1 = show.choice1String;
        this.state.getChoice1Name = convert1;
        const convert2 = show.choice2String;
        this.state.getChoice2Name = convert2;
         const convert3 = show.choice3String;
        this.state.getChoice3Name = convert3;
        const convert4 = show.choice4String;
        this.state.getChoice4Name = convert4;
        const answer = show.answer;
        this.state.answer = answer;
        const sound = show.sound;
        this.state.soundName = sound;

        const { navigation } = this.props;
        const itemId = navigation.getParam('showGameover', 'NO-ID');
        this.state.showGameover = itemId;
        return (
            <ImageBackground
                source={GameBG}
                style={globalStyleSheet.image}
            >
                <View style={{
                    position: 'absolute',
                    left: '88%',
                    top: this.state.homeTop,
                    width: '14%',
                    height: '28%',
                }}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image source={Home_icon} style={globalStyleSheet.home}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    left: '2%',
                    top: this.state.backTop,
                    width: '14%',
                    height: '28%',
                }}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image
                            source={Back_icon}
                            style={globalStyleSheet.back}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={{
                     position: 'absolute',
                     bottom: this.state.marketBottom,
                     right: '8%',
                     height: hp('9%'),
                     width: wp('18%'),
                }}>
                    <TouchableOpacity onPress={this.gotoMarket}>
                        <Image
                            source={Gufadyan}
                            style={styles.image}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={{ position: 'absolute',width:'60%',height:'50%',top:this.state.blackboardTop}}> 
                    <Image source={show.blackboard}
                    style={{
                        width:'100%',
                        height:'100%',
                        resizeMode:'contain'
                    }}
                    ></Image>
                </View>
                <View style={{position:'absolute', width: '70%', height: '60%', top:this.state.descriptionTop }}>
                    <Image source={show.description}
                        style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'contain'
                        }}
                    ></Image>
                </View>
                <View style={{
                    position: 'absolute',
                    top: this.state.choice1Top,
                    left: '18%',
                    height: '10%',
                    width: '14%',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.validate(1);
                    }}>
                        <Image source={show.choices1}
                         style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'contain'
                        }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top: this.state.choice2Top,
                    left: '35%',
                    height: '10%',
                    width: '14%',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.validate(2);
                    }}>
                        <Image source={show.choices2} 
                        style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'contain'
                        }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top: this.state.choice3Top,
                    left: '53%',
                    height: '10%',
                    width: '14%',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.validate(3);
                    }}>
                        <Image source={show.choices3} 
                        style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'contain'
                        }}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top: this.state.choice4Top,
                    left: '70%',
                    height: '10%',
                    width: '14%',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.validate(4);
                    }}>
                        <Image source={show.choices4} 
                        style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'contain'
                        }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top: '75%',
                    left: this.state.emptyChoiceLeft,
                    height: '10%',
                    width: '14%',
                }}>
                        <Image source={Empty}
                            style={{
                                width: '100%',
                                height: '100%',
                                resizeMode: 'contain'
                            }}></Image>
                </View>
                <Animatable.View ref={this.handleViewRef} 
                style={{
                    position: 'absolute',
                    width: '10%',
                    height: '10%',
                    left:show.leftPosition,
                    top:this.state.answerTop,
                }}>
                    <Image source={this.state.answerImage} style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'contain',
                    }}></Image>
                </Animatable.View>
                <Animatable.View ref={this.handleViewRef} style={{ position: 'absolute', left: '16%', width: '20%', height: '12%', top: '2%', }}>
                    <View style={{ position: 'absolute', width: '100%', height: '100%', top: this.state.star1Top }}>
                        <Image source={stars} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                    </View>
                    <View style={{ position: 'absolute', width: '100%', height: '100%', left: '39%', top: this.state.star2Top }}>
                        <Image source={stars} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                    </View>
                    <View style={{ position: 'absolute', width: '100%', height: '100%', left: '77%', top: this.state.star3Top }}>
                        <Image source={stars} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                    </View>
                    <View style={{ position: 'absolute', width: '100%', height: '100%', top: this.state.emptyStar1Top }}>
                        <Image source={emptyStars} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                    </View>
                    <View style={{ position: 'absolute', width: '100%', height: '100%', left: '39%', top: this.state.emptyStar2Top }}>
                        <Image source={emptyStars} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                    </View>
                    <View style={{ position: 'absolute', width: '100%', height: '100%', left: '77%', top: this.state.emptyStar3Top }}>
                        <Image source={emptyStars} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                    </View>
                </Animatable.View>
               <View style={{
                    position:'absolute',
                    width:'30%',
                    height:'31%',
                    left:'18%',
                    top:this.state.fadlugTop
               }}>
                   <TouchableOpacity onPress={this.retry}>
                        <Image 
                        style={{width:'100%',height:'100%',resizeMode:'contain'}}
                        source={FadlugIcon}/>
                    </TouchableOpacity>
               </View>
                <View style={{
                    position: 'absolute',
                    width: '30%',
                    height: '31%',
                    left: '55%',
                    top: this.state.gufadyanTop
                }}>
                    <TouchableOpacity onPress={this.gotoMarket}>
                        <Image
                            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                            source={GufadyanIcon} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    width: '30%',
                    height: '31%',
                    left: '36%',
                    top: this.state.lamwaTop
                }}>
                    <TouchableOpacity onPress={this.gotoLamwa}>
                        <Image
                            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                            source={LamwaIcon} />
                    </TouchableOpacity>
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
            </ImageBackground>
        )
           
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    }
})


export default withNavigation(Bang4);