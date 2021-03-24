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

import Choicesboatman from '../../gameImages/DB_choices3/boatman.png';
import Choicescariage from '../../gameImages/DB_choices3/cariage.png';
import Choicescarpenter from '../../gameImages/DB_choices3/carpenter.png';
import Choicescarpentir from '../../gameImages/DB_choices3/carpentir.png';
import Choicescarriage from '../../gameImages/DB_choices3/carriage.png';
import Choiceschurch from '../../gameImages/DB_choices3/church.png';
import Choicescoke from '../../gameImages/DB_choices3/coke.png';
import Choicescook from '../../gameImages/DB_choices3/cook.png';
import Choicescooker from '../../gameImages/DB_choices3/cooker.png';
import Choicesdoctor from '../../gameImages/DB_choices3/doctor.png';
import Choicesdoctur from '../../gameImages/DB_choices3/doctur.png';
import Choicesfireman from '../../gameImages/DB_choices3/fireman.png';
import Choicesfisherman from '../../gameImages/DB_choices3/fisherman.png';
import Choicesfishman from '../../gameImages/DB_choices3/fishman.png';
import Choiceshospital from '../../gameImages/DB_choices3/hospital.png';
import Choiceskarriage from '../../gameImages/DB_choices3/karriage.png';
import Choicesmarket from '../../gameImages/DB_choices3/market.png';
import Choicesnurse from '../../gameImages/DB_choices3/nurse.png';
import Choicesplayground from '../../gameImages/DB_choices3/playground.png';
import Choicesplayhouse from '../../gameImages/DB_choices3/playhouse.png';
import Choicesplaymate from '../../gameImages/DB_choices3/playmate.png';
import Choicesschool from '../../gameImages/DB_choices3/school.png';
import Choicessell from '../../gameImages/DB_choices3/sell.png';
import Choicesskol from '../../gameImages/DB_choices3/skol.png';
import Choicesskull from '../../gameImages/DB_choices3/skull.png';
import Choicesstore from '../../gameImages/DB_choices3/store.png';
import Choicesteacher from '../../gameImages/DB_choices3/teacher.png';
import Choicestubeman from '../../gameImages/DB_choices3/tubeman.png';
import Choicesvendor from '../../gameImages/DB_choices3/vendor.png';
import Choiceswaterman from '../../gameImages/DB_choices3/waterman.png';


import correctBoatman from '../../gameImages/DB_choices3/correctBoatman.png';
import correctCariage from '../../gameImages/DB_choices3/correctCariage.png';
import correctCarpenter from '../../gameImages/DB_choices3/correctCarpenter.png';
import correctCarpentir from '../../gameImages/DB_choices3/correctCarpentir.png';
import correctCarriage from '../../gameImages/DB_choices3/correctCarriage.png';
import correctChurch from '../../gameImages/DB_choices3/correctChurch.png';
import correctCoke from '../../gameImages/DB_choices3/correctCoke.png';
import correctCook from '../../gameImages/DB_choices3/correctCook.png';
import correctCooker from '../../gameImages/DB_choices3/correctCooker.png';
import correctDoctor from '../../gameImages/DB_choices3/correctDoctor.png';
import correctDoctur from '../../gameImages/DB_choices3/correctDoctur.png';
import correctFireman from '../../gameImages/DB_choices3/correctFireman.png';
import correctFisherman from '../../gameImages/DB_choices3/correctFisherman.png';
import correctFishman from '../../gameImages/DB_choices3/correctFishman.png';
import correctHospital from '../../gameImages/DB_choices3/correctHospital.png';
import correctKarriage from '../../gameImages/DB_choices3/correctKarriage.png';
import correctMarket from '../../gameImages/DB_choices3/correctMarket.png';
import correctNurse from '../../gameImages/DB_choices3/correctNurse.png';
import correctPlayground from '../../gameImages/DB_choices3/correctPlayground.png';
import correctPlayhouse from '../../gameImages/DB_choices3/correctPlayhouse.png';
import correctPlaymate from '../../gameImages/DB_choices3/correctPlaymate.png';
import correctSchool from '../../gameImages/DB_choices3/correctSchool.png';
import correctSell from '../../gameImages/DB_choices3/correctSell.png';
import correctSkol from '../../gameImages/DB_choices3/correctSkol.png';
import correctSkull from '../../gameImages/DB_choices3/correctSkull.png';
import correctStore from '../../gameImages/DB_choices3/correctStore.png';
import correctTeacher from '../../gameImages/DB_choices3/correctTeacher.png';
import correctTubeman from '../../gameImages/DB_choices3/correctTubeman.png';
import correctVendor from '../../gameImages/DB_choices3/correctVendor.png';
import correctWaterman from '../../gameImages/DB_choices3/correctWaterman.png';


import tranparentBoatman from '../../gameImages/DB_choices3/tranparentBoatman.png';
import tranparentCariagee from '../../gameImages/DB_choices3/tranparentCariagee.png';
import tranparentCarpenter from '../../gameImages/DB_choices3/tranparentCarpenter.png';
import tranparentCarpentir from '../../gameImages/DB_choices3/tranparentCarpentir.png';
import tranparentCarriage from '../../gameImages/DB_choices3/tranparentCarriage.png';
import tranparentChurch from '../../gameImages/DB_choices3/tranparentChurch.png';
import tranparentCoke from '../../gameImages/DB_choices3/tranparentCoke.png';
import tranparentCook from '../../gameImages/DB_choices3/tranparentCook.png';
import tranparentCooker from '../../gameImages/DB_choices3/tranparentCooker.png';
import tranparentDoctor from '../../gameImages/DB_choices3/tranparentDoctor.png';
import tranparentDoctur from '../../gameImages/DB_choices3/tranparentDoctur.png';
import tranparentFireman from '../../gameImages/DB_choices3/tranparentFireman.png';
import tranparentFisherman from '../../gameImages/DB_choices3/tranparentFisherman.png';
import tranparentFishman from '../../gameImages/DB_choices3/tranparentFishman.png';
import tranparentHospital from '../../gameImages/DB_choices3/tranparentHospital.png';
import tranparentKarriage from '../../gameImages/DB_choices3/tranparentKarriage.png';
import tranparentMarket from '../../gameImages/DB_choices3/tranparentMarket.png';
import tranparentNurse from '../../gameImages/DB_choices3/tranparentNurse.png';
import tranparentPlayground from '../../gameImages/DB_choices3/tranparentPlayground.png';
import tranparentPlaymate from '../../gameImages/DB_choices3/tranparentPlaymate.png';
import tranparentPlayhouse from '../../gameImages/DB_choices3/tranparentPlayhouse.png';
import tranparentSchool from '../../gameImages/DB_choices3/tranparentSchool.png';
import tranparentSell from '../../gameImages/DB_choices3/tranparentSell.png';
import tranparentSkol from '../../gameImages/DB_choices3/tranparentSkol.png';
import tranparentSkull from '../../gameImages/DB_choices3/tranparentSkull.png';
import tranparentStore from '../../gameImages/DB_choices3/tranparentStore.png';
import tranparentTeacher from '../../gameImages/DB_choices3/tranparentTeacher.png';
import tranparentTubeman from '../../gameImages/DB_choices3/tranparentTubeman.png';
import tranparentVendor from '../../gameImages/DB_choices3/tranparentVendor.png';
import tranparentWaterman from '../../gameImages/DB_choices3/tranparentWaterman.png';


import Empty from '../../gameImages/choices/emptyChoices.png';

import BlackBoard1 from '../../gameImages/DB_blackboard3/db_bang3Q1.png';
import BlackBoard2 from '../../gameImages/DB_blackboard3/db_bang3Q2.png';
import BlackBoard3 from '../../gameImages/DB_blackboard3/db_bang3Q3.png';
import BlackBoard4 from '../../gameImages/DB_blackboard3/db_bang3Q4.png';
import BlackBoard5 from '../../gameImages/DB_blackboard3/db_bang3Q5.png';
import BlackBoard6 from '../../gameImages/DB_blackboard3/db_bang3Q6.png';
import BlackBoard7 from '../../gameImages/DB_blackboard3/db_bang3Q7.png';
import BlackBoard8 from '../../gameImages/DB_blackboard3/db_bang3Q8.png';
import BlackBoard9 from '../../gameImages/DB_blackboard3/db_bang3Q9.png';
import BlackBoard10 from '../../gameImages/DB_blackboard3/db_bang3Q10.png';
import BlackBoard11 from '../../gameImages/DB_blackboard3/db_bang3Q11.png';
import BlackBoard12 from '../../gameImages/DB_blackboard3/db_bang3Q12.png';


import Answer1 from '../../gameImages/DB_blackboard3/DB_bang3A1.png';
import Answer2 from '../../gameImages/DB_blackboard3/DB_bang3A2.png';
import Answer3 from '../../gameImages/DB_blackboard3/DB_bang3A3.png';
import Answer4 from '../../gameImages/DB_blackboard3/DB_bang3A4.png';
import Answer5 from '../../gameImages/DB_blackboard3/DB_bang3A5.png';
import Answer6 from '../../gameImages/DB_blackboard3/DB_bang3A6.png';
import Answer7 from '../../gameImages/DB_blackboard3/DB_bang3A7.png';
import Answer8 from '../../gameImages/DB_blackboard3/DB_bang3A8.png';
import Answer9 from '../../gameImages/DB_blackboard3/DB_bang3A9.png';
import Answer10 from '../../gameImages/DB_blackboard3/DB_bang3A10.png';
import Answer11 from '../../gameImages/DB_blackboard3/DB_bang3A11.png';
import Answer12 from '../../gameImages/DB_blackboard3/DB_bang3A12.png';

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
        choice: Choicesboatman,//0
        choicestring: 'Choicesboatman',
    },
    {
        choice: Choicescariage,//1
        choicestring: 'Choicescariage'
    },
    {
        choice: Choicescarpenter,//2
        choicestring: 'Choicescarpenter'
    },
    {
        choice: Choicescarpenter,//3
        choicestring: 'Choicescarpenter'
    },
    {
        choice: Choicescarpentir,//4
        choicestring: 'Choicescarpentir'
    },
    {
        choice: Choicescarpentir,//5
        choicestring: 'Choicescarpinter'
    },
    {
        choice: Choicescarriage,//6
        choicestring: 'Choicescarriage'
    },
    {
        choice: Choiceschurch,//7
        choicestring: 'Choiceschurch'
    },
    {
        choice: Choicescoke,//8
        choicestring: 'Choicescoke'
    },
    {
        choice: Choicescook,//9
        choicestring: 'Choicescook'
    },
     {
        choice: Choicescooker,//10
        choicestring: 'Choicescooker'
    },
     {
        choice: Choicesdoctor,//11
        choicestring: 'Choicesdoctor'
    },
     {
        choice: Choicesdoctur,//12
        choicestring: 'Choicesdoctur'
    },
     {
        choice: Choicesfireman,//13
        choicestring: 'Choicesfireman'
    },
     {
        choice: Choicesfisherman,//14
        choicestring: 'Choicesfisherman'
    },
     {
        choice: Choicesfishman,//15
        choicestring: 'Choicesfishman'
    },
     {
        choice: Choiceshospital,//16
        choicestring: 'Choiceshospital'
    },
     {
        choice: Choiceskarriage,//17
        choicestring: 'Choiceskarriage'
    },
     {
        choice: Choicesmarket,//18
        choicestring: 'Choicesmarket'
    },
     {
        choice: Choicesnurse,//19
        choicestring: 'Choicesnurse'
    },
     {
        choice: Choicesplayground,//20
        choicestring: 'Choicesplayground'
    },
     {
        choice: Choicesplayhouse,//21
        choicestring: 'Choicesplayhouse'
    },
     {
        choice: Choicesplaymate,//22
        choicestring: 'Choicesplaymate'
    },
      {
        choice: Choicesschool,//23
        choicestring: 'Choicesschool'
    },
      {
        choice: Choicessell,//24
        choicestring: 'Choicessell'
    },
      {
        choice: Choicesskol,//25
        choicestring: 'Choicesskol'
    },
      {
        choice: Choicesskull,//26
        choicestring: 'Choicesskull'
    },
    {
        choice: Choicesstore,//27
        choicestring: 'Choicesstore'
    },
    {
        choice: Choicesteacher,//28
        choicestring: 'Choicesteacher'
    },
    {
        choice: Choicestubeman,//29
        choicestring: 'Choicestubeman'
    },
    {
        choice: Choicesvendor,//30
        choicestring: 'Choicesvendor'
    },
    {
        choice: Choiceswaterman,//31
        choicestring: 'Choiceswaterman'
    },
];

const tranparent = [
    tranparentBoatman,
    tranparentCariagee,
    tranparentCarpenter,
    tranparentCarpentir,
    tranparentCarriage,
    tranparentChurch,
    tranparentCoke,
    tranparentCook,
    tranparentCooker,
    tranparentDoctor,
    tranparentDoctur,
    tranparentFireman,
    tranparentFisherman,
    tranparentFishman,
    tranparentHospital,
    tranparentKarriage,
    tranparentMarket,
    tranparentNurse,
    tranparentPlayground,
    tranparentPlayhouse,
    tranparentPlaymate,
    tranparentSchool,
    tranparentSell,
    tranparentSkol,
    tranparentSkull,
    tranparentStore,
    tranparentTeacher,
    tranparentTubeman,
    tranparentVendor,
    tranparentWaterman,
];
const correct = [
    correctBoatman,
    correctCariage,
    correctCarpenter,
    correctCarpentir,
    correctCarriage,
    correctChurch,
    correctCoke,
    correctCook,
    correctCooker,
    correctDoctor,
    correctDoctur,
    correctFireman,
    correctFisherman,
    correctFishman,
    correctHospital,
    correctKarriage,
    correctMarket,
    correctNurse,
    correctPlayground,
    correctPlayhouse,
    correctPlaymate,
    correctSchool,
    correctSell,
    correctSkol,
    correctSkull,
    correctStore,
    correctTeacher,
    correctTubeman,
    correctVendor,
    correctWaterman,
];

const answer = [
    'Choicesboatman',
    'Choicescariage',
    'Choicescarpenter',
    'Choicescarpentir',
    'Choicescarriage',
    'Choiceschurch',
    'Choicescoke',
    'Choicescook',
    'Choicescooker',
    'Choicesdoctor',
    'Choicesdoctur',
    'Choicesfireman',
    'Choicesfisherman',
    'Choicesfishman',
    'Choiceshospital',
    'Choiceskarriage',
    'Choicesmarket',
    'Choicesnurse',
    'Choicesplayground',
    'Choicesplayhouse',
    'Choicesplaymate',
    'Choicesschool',
    'Choicessell',
    'Choicesskol',
    'Choicesskull',
    'Choicesstore',
    'Choicesteacher',
    'Choicestubeman',
    'Choicesvendor',
    'Choiceswaterman',
];

const combine = [
    combine1 = {
        blackboard:blackboardList[0],
        choices1:choiceList[25].choice,
        choices2: choiceList[26].choice,
        choices3: choiceList[23].choice,
        choice1String: choiceList[25].choicestring,
        choice2String: choiceList[26].choicestring,
        choice3String: choiceList[23].choicestring,
        answer: 'Choicesschool',
        description: Answer1
    },
    combine2 = {
        blackboard: blackboardList[1],
        choices1: choiceList[16].choice,
        choices2: choiceList[7].choice,
        choices3: choiceList[23].choice,
        choice1String: choiceList[16].choicestring,
        choice2String: choiceList[7].choicestring,
        choice3String: choiceList[23].choicestring,
        answer: 'Choiceshospital',
        description: Answer2
    },
    combine3 = {
        blackboard: blackboardList[2],
        choices1: choiceList[18].choice,
        choices2: choiceList[7].choice,
        choices3: choiceList[23].choice,
        choice1String: choiceList[18].choicestring,
        choice2String: choiceList[7].choicestring,
        choice3String: choiceList[23].choicestring,
        answer: 'Choiceschurch',
        description: Answer3
    },
    combine4 = {
        blackboard: blackboardList[3],
        choices1: choiceList[21].choice,
        choices2: choiceList[20].choice,
        choices3: choiceList[22].choice,
        choice1String: choiceList[21].choicestring,
        choice2String: choiceList[20].choicestring,
        choice3String: choiceList[22].choicestring,
        answer: 'Choicesplayground',
        description: Answer4
    },
    combine5 = {
        blackboard: blackboardList[4],
        choices1: choiceList[28].choice,
        choices2: choiceList[11].choice,
        choices3: choiceList[19].choice,
        choice1String: choiceList[28].choicestring,
        choice2String: choiceList[11].choicestring,
        choice3String: choiceList[19].choicestring,
        answer: 'Choicesteacher', 
        description: Answer5
    },
    combine6 = {
        blackboard: blackboardList[5],
        choices1: choiceList[12].choice,
        choices2: choiceList[11].choice,
        choices3: choiceList[28].choice,
        choice1String: choiceList[12].choicestring,
        choice2String: choiceList[11].choicestring,
        choice3String: choiceList[28].choicestring,
        answer: 'Choicesdoctor',
        description: Answer6
    },
    combine7 = {
        blackboard: blackboardList[6],
        choices1: choiceList[2].choice,
        choices2: choiceList[5].choice,
        choices3: choiceList[29].choice,
        choice1String: choiceList[2].choicestring,
        choice2String: choiceList[5].choicestring,
        choice3String: choiceList[29].choicestring,
        answer: 'Choicescarpenter',
        description: Answer7
    },
    combine8 = {
        blackboard: blackboardList[7],
        choices1: choiceList[0].choice,
        choices2: choiceList[14].choice,
        choices3: choiceList[15].choice,
        choice1String: choiceList[0].choicestring,
        choice2String: choiceList[14].choicestring,
        choice3String: choiceList[15].choicestring,
        answer: 'Choicesfisherman',
        description: Answer8
    },
    combine9 = {
        blackboard: blackboardList[8],
        choices1: choiceList[6].choice,
        choices2: choiceList[17].choice,
        choices3: choiceList[1].choice,
        choice1String: choiceList[6].choicestring,
        choice2String: choiceList[17].choicestring,
        choice3String: choiceList[1].choicestring,
        answer: 'Choicescarriage',
        description: Answer9
    },
    combine10 = {
        blackboard: blackboardList[9],
        choices1: choiceList[27].choice,
        choices2: choiceList[24].choice,
        choices3: choiceList[30].choice,
        choice1String: choiceList[27].choicestring,
        choice2String: choiceList[24].choicestring,
        choice3String: choiceList[30].choicestring,
        answer: 'Choicesvendor',
        description: Answer10
    },
     combine11 = {
        blackboard: blackboardList[10],
        choices1: choiceList[10].choice,
        choices2: choiceList[9].choice,
        choices3: choiceList[8].choice,
        choice1String: choiceList[10].choicestring,
        choice2String: choiceList[9].choicestring,
        choice3String: choiceList[8].choicestring,
         answer: 'Choicescook',
        description: Answer11
    },
    combine12 = {
        blackboard: blackboardList[11],
        choices1: choiceList[31].choice,
        choices2: choiceList[29].choice,
        choices3: choiceList[13].choice,
        choice1String: choiceList[31].choicestring,
        choice2String: choiceList[29].choicestring,
        choice3String: choiceList[13].choicestring,
        answer: 'Choicesfireman',
        description: Answer12
    },
];

var stageNumber = [0,1,2,3,4,5,6,7,8,9,10,11];

const questionAnswered = [];
const choiceGame = ['game_wrong', 'game_correct'];
const audio = [
    'dadbatak3_paaralan',
    'dadbatak3_hospital',
    'dadbatak3_simbahan',
    'dadbatak3_palaruan',
    'dadbatak3_guro',
    'dadbatak3_doctor',
    'dadbatak3_carpenter',
    'dadbatak3_fisherman',
    'dadbatak3_kalesa',
    'dadbatak3_tindera',
    'dadbatak3_cook',
    'dadbatak3_bumbero',
];

audioIndex = [
    'Choicesschool',
    'Choiceshospital',
    'Choiceschurch',
    'Choicesplayground',
    'Choicesteacher',
    'Choicesdoctor',
    'Choicescarpenter',
    'Choicesfisherman',
    'Choicescarriage',
    'Choicesvendor',
    'Choicescook',
    'Choicesfireman'
]

//playsound
//answer
//correct
//combine[answer]


class Bang extends Component {
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
            answer:'',
            choice1Top: '1000%',//75%
            choice2Top: '1000%',//75%
            choice3Top: '1000%',//75%
            choice4Top: '1000%',//75%
            emptyChoiceLeft: '1000%',
            randomQuestion:0,
            answerTop: '1000%', //53%
            answerImage: tranparentKarriage,
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
            homeTop: '3%',
            backTop: '3%',
        }

        //Sounds
        answerAudio = null;
    }

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
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
        for (var a = 0; a <= audio.length; a++) {
            if (index == audioIndex[a]) {
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
                const value = 6;
                realm.write(() => {
                    getCoin[id].coinBalance = String(value);
                })
                this.setState({
                    Balance: value,
                })
            } else {
                const convertToNumber = Number(this.state.Balance);
                this.state.Balance = convertToNumber + 6;
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
                q = getPlayers[con].questionDoneBang3Dadbatak;
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
                        getPlayers[con].questionDoneBang3Dadbatak = 'null';
                    })
                }
            }
            this.props.navigation.replace('gameMenu', { show: 'DadBatak'});
        }
        if (index == 'check') {
            for (a = 0; a < getPlayers.length; a++) {
                const con = parseInt(a);
                if (storedValue == getPlayers[con].playername) {
                    random = getPlayers[con].dadseBatak3RandomKey;
                    id = con;
                    if (random == 'null') {
                        realm.write(() => {
                            getPlayers[con].dadseBatak3RandomKey = String(use);
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
                getPlayers[id].dadseBatak3RandomKey = String(use);
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
                getPlayers[id].dadseBatak3RandomKey = String(use);
            })
            this.setState({
                randomQuestion: use,
                choice1Top: '75%',//75%
                choice2Top: '75%',//75%
                choice3Top: '75%',//75%
                choice4Top: '75%',//75%
                blackboardTop: '14%',
            });
        }
    }


    validate = async (index) => {
       if(index == 1){
           if(this.state.getChoice1Name == this.state.answer){
               this.correct(this.state.getChoice1Name);
               this.Animatecorrect();
               setTimeout(() => {
                   this.playSound(this.state.getChoice1Name);
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
                   }, 5000)
               }, 2000)
           }else{
               this.answer(this.state.getChoice1Name);
               this.wrong();
               const minus = 'minus';
               this.minusStar(minus);
               this.setState({
                   choice1Top: '1000%',
                   emptyChoiceLeft: '24%',
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
                    this.playSound(this.state.getChoice2Name);
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
                    }, 5000)
                }, 2000)
            } else {
                this.wrong();
                const minus = 'minus';
               this.minusStar(minus);
                this.answer(this.state.getChoice2Name);
                this.setState({
                    choice2Top: '1000%',
                    emptyChoiceLeft: '44%',
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
                    this.playSound(this.state.getChoice3Name);
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
                    }, 5000)
                }, 2000)
            } else {
                this.wrong();
                const minus = 'minus';
               this.minusStar(minus);
                this.answer(this.state.getChoice3Name);
                this.setState({
                    choice3Top: '1000%',
                    emptyChoiceLeft: '63%',
                })
                setTimeout(() => {
                    this.setState({
                        choice3Top: '75%',
                        emptyChoiceLeft: '1000%',
                    })
                }, 1000)
            }
        }
    }

    answer = (index) => {
        this.playChoiceGame(0);
        for (var a = 0; a <= answer.length; a++) {
            if (index == answer[a]) {
                const get = a;
                this.setState({
                    answerImage: tranparent[get],
                    answerTop: '53%',
                })
                setTimeout(() => {
                    this.setState({
                        answerTop: '1000%',
                    })
                }, 1000)
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
                    getPlayers[con].questionDoneBang3Dadbatak = String(value);
                })
            }
        }


        for (var a = 0; a <= answer.length; a++) {
            if (index == answer[a]) {
                const get = a;
                this.setState({
                    answerImage: correct[get],
                    answerTop: '53%',
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
                            getStars[id].Dadbatakstar3 = 'wrong';
                        })
                        // this.props.navigation.navigate('gameover');
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
                        }, 1000)
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
        stageNumber = [0,1,2,3,4,5,6,7,8,9,10,11];
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
            marketBottom: '3%',
        })

    }

    render() {
        const show = combine[this.state.randomQuestion];
        const convert1 = show.choice1String;
        this.state.getChoice1Name = convert1;
        const convert2 = show.choice2String;
        this.state.getChoice2Name = convert2;
        const convert3 = show.choice3String;
        this.state.getChoice3Name = convert3;
        const answer = show.answer;
        this.state.answer = answer;
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
                    left: '24%',
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
                    left: '44%',
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
                    left: '63%',
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
                    width: '20%',
                    height: '10%',
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
                    <TouchableOpacity>
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



export default withNavigation(Bang);