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

import Choiceagnu from '../../gameImages/DB_choices2/agnu.png';
import Choiceagong from '../../gameImages/DB_choices2/agong.png';
import Choiceagung from '../../gameImages/DB_choices2/agung.png';
import Choiceaklat from '../../gameImages/DB_choices2/aklat.png';
import Choicebalakol from '../../gameImages/DB_choices2/balakol.png';
import Choicebampura from '../../gameImages/DB_choices2/bampura.png';
import Choicebao from '../../gameImages/DB_choices2/bao.png';
import Choiceboboyog from '../../gameImages/DB_choices2/boboyog.png';
import Choicebubuyog from '../../gameImages/DB_choices2/bubuyog.png';
import Choiceigat from '../../gameImages/DB_choices2/igat.png';
import Choiceipis from '../../gameImages/DB_choices2/ipis.png';
import Choiceisda from '../../gameImages/DB_choices2/isda.png';
import Choicekabebe from '../../gameImages/DB_choices2/kabebe.png';
import Choicekabibi from '../../gameImages/DB_choices2/kabibi.png';
import Choicekagabe from '../../gameImages/DB_choices2/kagabe.png';
import Choicekila from '../../gameImages/DB_choices2/kila.png';
import Choicelafish from '../../gameImages/DB_choices2/lafish.png';
import Choicelamik from '../../gameImages/DB_choices2/lamik.png';
import Choicelamok from '../../gameImages/DB_choices2/lamok.png';
import Choicelamuk from '../../gameImages/DB_choices2/lamuk.png';
import Choicelapis from '../../gameImages/DB_choices2/lapis.png';
import Choicelibro from '../../gameImages/DB_choices2/libro.png';
import Choicelibru from '../../gameImages/DB_choices2/libru.png';
import Choiceligat from '../../gameImages/DB_choices2/ligat.png';
import Choicepafeel from '../../gameImages/DB_choices2/pafeel.png';
import Choicepagong from '../../gameImages/DB_choices2/pagong.png';
import Choicepagung from '../../gameImages/DB_choices2/pagung.png';
import Choicepail from '../../gameImages/DB_choices2/pail.png';
import Choicepakola from '../../gameImages/DB_choices2/pakola.png';
import Choicepalakol from '../../gameImages/DB_choices2/palakol.png';
import Choicepambura from '../../gameImages/DB_choices2/pambura.png';
import Choicepampunas from '../../gameImages/DB_choices2/pampunas.png';
import Choicepantahal from '../../gameImages/DB_choices2/pantahal.png';
import Choicepantalim from '../../gameImages/DB_choices2/pantalim.png';
import Choicepantasa from '../../gameImages/DB_choices2/pantasa.png';
import Choicepapel from '../../gameImages/DB_choices2/papel.png';
import Choicepara from '../../gameImages/DB_choices2/para-para.png';
import Choiceparo from '../../gameImages/DB_choices2/paro-paro.png';
import Choiceparu from '../../gameImages/DB_choices2/paru-paru.png';
import Choiceposit from '../../gameImages/DB_choices2/posit.png';
import Choicepusit from '../../gameImages/DB_choices2/pusit.png';
import Choicetala from '../../gameImages/DB_choices2/tala.png';
import Choicetambol from '../../gameImages/DB_choices2/tambol.png';
import Choicetambul from '../../gameImages/DB_choices2/tambul.png';
import Choicetutubi from '../../gameImages/DB_choices2/tutubi.png';
import Choicetutubig from '../../gameImages/DB_choices2/tutubig.png';
import Choicetutubik from '../../gameImages/DB_choices2/tutubik.png';

import correctAgnu from '../../gameImages/DB_choices2/correctAgnu.png';
import correctAgong from '../../gameImages/DB_choices2/correctAgong.png';
import correctAgung from '../../gameImages/DB_choices2/correctAgung.png';
import correctBalakol from '../../gameImages/DB_choices2/correctBalakol.png';
import correctBampura from '../../gameImages/DB_choices2/correctBampura.png';
import correctBao from '../../gameImages/DB_choices2/correctBao.png';
import correctBoboyog from '../../gameImages/DB_choices2/correctBoboyog.png';
import correctBubuyog from '../../gameImages/DB_choices2/correctBubuyog.png';
import correctIgat from '../../gameImages/DB_choices2/correctIgat.png';
import correctIpis from '../../gameImages/DB_choices2/correctIpis.png';
import correctIsda from '../../gameImages/DB_choices2/correctIsda.png';
import correctKabebe from '../../gameImages/DB_choices2/correctKabebe.png';
import correctKabibi from '../../gameImages/DB_choices2/correctKabibi.png';
import correctKagabe from '../../gameImages/DB_choices2/correctKagabe.png';
import correctKila from '../../gameImages/DB_choices2/correctKila.png';
import correctLafish from '../../gameImages/DB_choices2/correctLafish.png';
import correctLamik from '../../gameImages/DB_choices2/correctLamik.png';
import correctLamok from '../../gameImages/DB_choices2/correctLamok.png';
import correctLamuk from '../../gameImages/DB_choices2/correctLamuk.png';
import correctLapis from '../../gameImages/DB_choices2/correctLapis.png';
import correctLigat from '../../gameImages/DB_choices2/correctLigat.png';
import correctPafeel from '../../gameImages/DB_choices2/correctPafeel.png';
import correctPagong from '../../gameImages/DB_choices2/correctPagong.png';
import correctPagung from '../../gameImages/DB_choices2/correctPagung.png';
import correctPail from '../../gameImages/DB_choices2/correctPail.png';
import correctPakola from '../../gameImages/DB_choices2/correctPakola.png';
import correctPalakol from '../../gameImages/DB_choices2/correctPalakol.png';
import correctPambura from '../../gameImages/DB_choices2/correctPambura.png';
import correctPampunas from '../../gameImages/DB_choices2/correctPampunas.png';
import correctPantahal from '../../gameImages/DB_choices2/correctPantahal.png';
import correctPantalim from '../../gameImages/DB_choices2/correctPantalim.png';
import correctPantasa from '../../gameImages/DB_choices2/correctPantasa.png';
import correctPapel from '../../gameImages/DB_choices2/correctPapel.png';
import correctParapara from '../../gameImages/DB_choices2/correctParapara.png';
import correctParoparo from '../../gameImages/DB_choices2/correctParoparo.png';
import correctParuparu from '../../gameImages/DB_choices2/correctParuparu.png';
import correctPosit from '../../gameImages/DB_choices2/correctPosit.png';
import correctPusit from '../../gameImages/DB_choices2/correctPusit.png';
import correctTala from '../../gameImages/DB_choices2/correctTala.png';
import correctTambol from '../../gameImages/DB_choices2/correctTambol.png';
import correctTambul from '../../gameImages/DB_choices2/correctTambul.png';
import correctTutubi from '../../gameImages/DB_choices2/correctTutubi.png';
import correctTutubig from '../../gameImages/DB_choices2/correctTutubig.png';
import correctTutubik from '../../gameImages/DB_choices2/correctTutubik.png';

import tranparentAgnu from '../../gameImages/DB_choices2/tranparentAgnu.png';
import tranparentAgong from '../../gameImages/DB_choices2/tranparentAgong.png';
import tranparentAgung from '../../gameImages/DB_choices2/tranparentAgung.png';
import tranparentBalakol from '../../gameImages/DB_choices2/tranparentBalakol.png';
import tranparentBampura from '../../gameImages/DB_choices2/tranparentBampura.png';
import tranparentBao from '../../gameImages/DB_choices2/tranparentBao.png';
import tranparentBoboyog from '../../gameImages/DB_choices2/tranparentBoboyog.png';
import tranparentBubuyog from '../../gameImages/DB_choices2/tranparentBubuyog.png';
import tranparentIgat from '../../gameImages/DB_choices2/tranparentIgat.png';
import tranparentIpis from '../../gameImages/DB_choices2/tranparentIpis.png';
import tranparentIsda from '../../gameImages/DB_choices2/tranparentIsda.png';
import tranparentKabebe from '../../gameImages/DB_choices2/tranparentKabebe.png';
import tranparentKabibi from '../../gameImages/DB_choices2/tranparentKabibi.png';
import tranparentKagabe from '../../gameImages/DB_choices2/tranparentKagabe.png';
import tranparentKils from '../../gameImages/DB_choices2/tranparentKils.png';
import tranparentLafish from '../../gameImages/DB_choices2/tranparentLafish.png';
import tranparentLamik from '../../gameImages/DB_choices2/tranparentLamik.png';
import tranparentLamok from '../../gameImages/DB_choices2/tranparentLamok.png';
import tranparentLamuk from '../../gameImages/DB_choices2/tranparentLamuk.png';
import tranparentLapis from '../../gameImages/DB_choices2/tranparentLapis.png';
import tranparentLigat from '../../gameImages/DB_choices2/tranparentLigat.png';
import tranparentPafeel from '../../gameImages/DB_choices2/tranparentPafeel.png';
import tranparentPagong from '../../gameImages/DB_choices2/tranparentPagong.png';
import tranparentPagung from '../../gameImages/DB_choices2/tranparentPagung.png';
import tranparentPail from '../../gameImages/DB_choices2/tranparentPail.png';
import tranparentPakola from '../../gameImages/DB_choices2/tranparentPakola.png';
import tranparentPalakol from '../../gameImages/DB_choices2/tranparentPalakol.png';
import tranparentPambura from '../../gameImages/DB_choices2/tranparentPambura.png';
import tranparentPampunas from '../../gameImages/DB_choices2/tranparentPampunas.png';
import tranparentPantahal from '../../gameImages/DB_choices2/tranparentPantahal.png';
import tranparentPantalim from '../../gameImages/DB_choices2/tranparentPantalim.png';
import tranparentPantasa from '../../gameImages/DB_choices2/tranparentPantasa.png';
import tranparentPapel from '../../gameImages/DB_choices2/tranparentPapel.png';
import tranparentParapara from '../../gameImages/DB_choices2/tranparentParapara.png';
import tranparentParoparo from '../../gameImages/DB_choices2/tranparentParoparo.png';
import tranparentParuparu from '../../gameImages/DB_choices2/tranparentParuparu.png';
import tranparentPosit from '../../gameImages/DB_choices2/tranparentPosit.png';
import tranparentPusit from '../../gameImages/DB_choices2/tranparentPusit.png';
import tranparentTala from '../../gameImages/DB_choices2/tranparentTala.png';
import tranparentTambol from '../../gameImages/DB_choices2/tranparentTambol.png';
import tranparentTambul from '../../gameImages/DB_choices2/tranparentTambul.png';
import tranparentTutubi from '../../gameImages/DB_choices2/tranparentTutubi.png';
import tranparentTutubig from '../../gameImages/DB_choices2/tranparentTutubig.png';
import tranparentTutubik from '../../gameImages/DB_choices2/tranparentTutubik.png';

import Empty from '../../gameImages/choices/emptyChoices.png';

import BlackBoard1 from '../../gameImages/DB_blackboard2/db_bang2Q1.png';
import BlackBoard2 from '../../gameImages/DB_blackboard2/db_bang2Q2.png';
import BlackBoard3 from '../../gameImages/DB_blackboard2/db_bang2Q3.png';
import BlackBoard4 from '../../gameImages/DB_blackboard2/db_bang2Q4.png';
import BlackBoard5 from '../../gameImages/DB_blackboard2/db_bang2Q5.png';
import BlackBoard6 from '../../gameImages/DB_blackboard2/db_bang2Q6.png';
import BlackBoard7 from '../../gameImages/DB_blackboard2/db_bang2Q7.png';
import BlackBoard8 from '../../gameImages/DB_blackboard2/db_bang2Q8.png';
import BlackBoard9 from '../../gameImages/DB_blackboard2/db_bang2Q9.png';
import BlackBoard10 from '../../gameImages/DB_blackboard2/db_bang2Q10.png';
import BlackBoard11 from '../../gameImages/DB_blackboard2/db_bang2Q11.png';
import BlackBoard12 from '../../gameImages/DB_blackboard2/db_bang2Q12.png';
import BlackBoard13 from '../../gameImages/DB_blackboard2/db_bang2Q13.png';
import BlackBoard14 from '../../gameImages/DB_blackboard2/db_bang2Q14.png';
import BlackBoard15 from '../../gameImages/DB_blackboard2/db_bang2Q15.png';

import Answer1 from '../../gameImages/DB_blackboard2/DB_bang2A1.png';
import Answer2 from '../../gameImages/DB_blackboard2/DB_bang2A2.png';
import Answer3 from '../../gameImages/DB_blackboard2/DB_bang2A3.png';
import Answer4 from '../../gameImages/DB_blackboard2/DB_bang2A4.png';
import Answer5 from '../../gameImages/DB_blackboard2/DB_bang2A5.png';
import Answer6 from '../../gameImages/DB_blackboard2/DB_bang2A6.png';
import Answer7 from '../../gameImages/DB_blackboard2/DB_bang2A7.png';
import Answer8 from '../../gameImages/DB_blackboard2/DB_bang2A8.png';
import Answer9 from '../../gameImages/DB_blackboard2/DB_bang2A9.png';
import Answer10 from '../../gameImages/DB_blackboard2/DB_bang2A10.png';
import Answer11 from '../../gameImages/DB_blackboard2/DB_bang2A11.png';
import Answer12 from '../../gameImages/DB_blackboard2/DB_bang2A12.png';
import Answer13 from '../../gameImages/DB_blackboard2/DB_bang2A13.png';
import Answer14 from '../../gameImages/DB_blackboard2/DB_bang2A14.png';
import Answer15 from '../../gameImages/DB_blackboard2/DB_bang2A15.png';

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
    BlackBoard13,
    BlackBoard14,
    BlackBoard15
];

const choiceList = [
    {
        choice: Choiceagnu,//0
        choicestring: 'Choiceagnu',
    },
    {
        choice: Choiceagong,//1
        choicestring: 'Choiceagong'
    },
    {
        choice: Choiceagung,//2
        choicestring: 'Choiceagung'
    },
    {
        choice: Choicebalakol,//3
        choicestring: 'Choicebalakol'
    },
    {
        choice: Choicebampura,//4
        choicestring: 'Choicebampura'
    },
    {
        choice: Choicebao,//5
        choicestring: 'Choicebao'
    },
    {
        choice: Choiceboboyog,//6
        choicestring: 'Choiceboboyog'
    },
    {
        choice: Choicebubuyog,//7
        choicestring: 'Choicebubuyog'
    },
    {
        choice: Choiceigat,//8
        choicestring: 'Choiceigat'
    },
    {
        choice: Choiceipis,//9
        choicestring: 'Choiceipis'
    },
     {
        choice: Choiceisda,//10
        choicestring: 'Choiceisda'
    },
     {
        choice: Choicekabebe,//11
        choicestring: 'Choicekabebe'
    },
     {
        choice: Choicekabibi,//12
        choicestring: 'Choicekabibi'
    },
     {
        choice: Choicekagabe,//13
        choicestring: 'Choicekagabe'
    },
     {
        choice: Choicekila,//14
        choicestring: 'Choicekila'
    },
     {
        choice: Choicelafish,//15
        choicestring: 'Choicelafish'
    },
     {
        choice: Choicelamik,//16
        choicestring: 'Choicelamik'
    },
     {
        choice: Choicelamok,//17
        choicestring: 'Choicelamok'
    },
     {
        choice: Choicelamuk,//18
        choicestring: 'Choicelamuk'
    },
     {
        choice: Choicelapis,//19
        choicestring: 'Choicelapis'
    },
     {
        choice: Choiceligat,//20
        choicestring: 'Choiceligat'
    },
     {
        choice: Choicepafeel,//21
        choicestring: 'Choicepafeel'
    },
     {
        choice: Choicepagong,//22
        choicestring: 'Choicepagong'
    },
      {
        choice: Choicepagung,//23
        choicestring: 'Choicepagung'
    },
      {
        choice: Choicepail,//24
        choicestring: 'Choicepail'
    },
      {
        choice: Choicepakola,//25
        choicestring: 'Choicepakola'
    },
      {
        choice: Choicepalakol,//26
        choicestring: 'Choicepalakol'
    },
    {
        choice: Choicepambura,//27
        choicestring: 'Choicepambura'
    },
    {
        choice: Choicepampunas,//28
        choicestring: 'Choicepampunas'
    },
    {
        choice: Choicepantahal,//29
        choicestring: 'Choicepantahal'
    },
    {
        choice: Choicepantalim,//30
        choicestring: 'Choicepantalim'
    },
    {
        choice: Choicepantasa,//31
        choicestring: 'Choicepantasa'
    },
    {
        choice: Choicepapel,//32
        choicestring: 'Choicepapel'
    },
    {
        choice: Choicepara,//33
        choicestring: 'Choicepara'
    },
    {
        choice: Choiceparo,//34
        choicestring: 'Choiceparo'
    },
    {
        choice: Choiceparu,//35
        choicestring: 'Choiceparu'
    },
    {
        choice: Choiceposit,//36
        choicestring: 'Choiceposit'
    },
    {
        choice: Choicepusit,//37
        choicestring: 'Choicepusit'
    },
     {
        choice: Choicetala,//38
        choicestring: 'Choicetala'
    },
     {
        choice: Choicetambol,//39
        choicestring: 'Choicetambol'
    },
     {
        choice: Choicetambul,//40
        choicestring: 'Choicetambul'
    },
     {
        choice: Choicetutubi,//41
        choicestring: 'Choicetutubi'
    },
    {
        choice: Choicetutubig,//42
        choicestring: 'Choicetutubig'
    },
    {
        choice: Choicetutubik,//44
        choicestring: 'Choicetutubik'
    },
];

const tranparent = [
    tranparentAgnu,
    tranparentAgong,
    tranparentAgung,
    tranparentBalakol,
    tranparentBampura,
    tranparentBao,
    tranparentBoboyog,
    tranparentBubuyog,
    tranparentIgat,
    tranparentIpis,
    tranparentIsda,
    tranparentKabebe,
    tranparentKabibi,
    tranparentKagabe,
    tranparentKils,
    tranparentLafish,
    tranparentLamik,
    tranparentLamok,
    tranparentLamuk,
    tranparentLapis,
    tranparentLigat,
    tranparentPafeel,
    tranparentPagong,
    tranparentPagung,
    tranparentPail,
    tranparentPakola,
    tranparentPalakol,
    tranparentPambura,
    tranparentPampunas,
    tranparentPantahal,
    tranparentPantalim,
    tranparentPantasa,
    tranparentPapel,
    tranparentParapara,
    tranparentParoparo,
    tranparentParuparu,
    tranparentPosit,
    tranparentPusit,
    tranparentTala,
    tranparentTambol,
    tranparentTambul,
    tranparentTutubi,
    tranparentTutubig,
    tranparentTutubik,
];
const correct = [
    correctAgnu,
    correctAgong,
    correctAgung,
    correctBalakol,
    correctBampura,
    correctBao,
    correctBoboyog,
    correctBubuyog,
    correctIgat,
    correctIpis,
    correctIsda,
    correctKabebe,
    correctKabibi,
    correctKagabe,
    correctKila,
    correctLafish,
    correctLamik,
    correctLamok,
    correctLamuk,
    correctLapis,
    correctLigat,
    correctPafeel,
    correctPagong,
    correctPagung,
    correctPail,
    correctPakola,
    correctPalakol,
    correctPambura,
    correctPampunas,
    correctPantahal,
    correctPantalim,
    correctPantasa,
    correctPapel,
    correctParapara,
    correctParoparo,
    correctParuparu,
    correctPosit,
    correctPusit,
    correctTala,
    correctTambol,
    correctTambul,
    correctTutubi,
    correctTutubig,
    correctTutubik,
];

const answer = [
    'Choiceagnu',
    'Choiceagong',
    'Choiceagung',
    'Choicebalakol',
    'Choicebampura',
    'Choicebao',
    'Choiceboboyog',
    'Choicebubuyog',
    'Choiceigat',
    'Choiceipis',
    'Choiceisda',
    'Choicekabebe',
    'Choicekabibi',
    'Choicekagabe',
    'Choicekila',
    'Choicelafish',
    'Choicelamik',
    'Choicelamok',
    'Choicelamuk',
    'Choicelapis',
    'Choiceligat',
    'Choicepafeel',
    'Choicepagong',
    'Choicepagung',
    'Choicepail',
    'Choicepakola',
    'Choicepalakol',
    'Choicepambura',
    'Choicepampunas',
    'Choicepantahal',
    'Choicepantalim',
    'Choicepantasa',
    'Choicepapel',
    'Choicepara',
    'Choiceparo',
    'Choiceparu',
    'Choiceposit',
    'Choicepusit',
    'Choicetala',
    'Choicetambol',
    'Choicetambul',
    'Choicetutubi',
    'Choicetutubig',
    'Choicetutubik',
];

const combine = [
    combine1 = {
        blackboard:blackboardList[0],
        choices1:choiceList[28].choice,
        choices2: choiceList[4].choice,
        choices3: choiceList[27].choice,
        choice1String: choiceList[28].choicestring,
        choice2String: choiceList[4].choicestring,
        choice3String: choiceList[27].choicestring,
        answer: 'Choicepambura',
        description: Answer1
    },
    combine2 = {
        blackboard: blackboardList[1],
        choices1: choiceList[29].choice,
        choices2: choiceList[30].choice,
        choices3: choiceList[31].choice,
        choice1String: choiceList[29].choicestring,
        choice2String: choiceList[30].choicestring,
        choice3String: choiceList[31].choicestring,
        answer: 'Choicepantasa',
        description: Answer2
    },
    combine3 = {
        blackboard: blackboardList[2],
        choices1: choiceList[7].choice,
        choices2: choiceList[6].choice,
        choices3: choiceList[17].choice,
        choice1String: choiceList[7].choicestring,
        choice2String: choiceList[6].choicestring,
        choice3String: choiceList[17].choicestring,
        answer: 'Choicebubuyog',
        description: Answer3
    },
    combine4 = {
        blackboard: blackboardList[3],
        choices1: choiceList[42].choice,
        choices2: choiceList[41].choice,
        choices3: choiceList[43].choice,
        choice1String: choiceList[42].choicestring,
        choice2String: choiceList[41].choicestring,
        choice3String: choiceList[43].choicestring,
        answer: 'Choicetutubi',
        description: Answer4
    },
    combine5 = {
        blackboard: blackboardList[4],
        choices1: choiceList[17].choice,
        choices2: choiceList[16].choice,
        choices3: choiceList[18].choice,
        choice1String: choiceList[17].choicestring,
        choice2String: choiceList[16].choicestring,
        choice3String: choiceList[18].choicestring,
        answer: 'Choicelamok', 
        description: Answer5
    },
    combine6 = {
        blackboard: blackboardList[5],
        choices1: choiceList[9].choice,
        choices2: choiceList[15].choice,
        choices3: choiceList[19].choice,
        choice1String: choiceList[9].choicestring,
        choice2String: choiceList[15].choicestring,
        choice3String: choiceList[19].choicestring,
        answer: 'Choiceipis',
        description: Answer6
    },
    combine7 = {
        blackboard: blackboardList[6],
        choices1: choiceList[35].choice,
        choices2: choiceList[34].choice,
        choices3: choiceList[33].choice,
        choice1String: choiceList[35].choicestring,
        choice2String: choiceList[34].choicestring,
        choice3String: choiceList[33].choicestring,
        answer: 'Choiceparu',
        description: Answer7
    },
    combine8 = {
        blackboard: blackboardList[7],
        choices1: choiceList[11].choice,
        choices2: choiceList[13].choice,
        choices3: choiceList[12].choice,
        choice1String: choiceList[11].choicestring,
        choice2String: choiceList[13].choicestring,
        choice3String: choiceList[12].choicestring,
        answer: 'Choicekabibi',
        description: Answer8
    },
    combine9 = {
        blackboard: blackboardList[8],
        choices1: choiceList[22].choice,
        choices2: choiceList[23].choice,
        choices3: choiceList[5].choice,
        choice1String: choiceList[22].choicestring,
        choice2String: choiceList[23].choicestring,
        choice3String: choiceList[5].choicestring,
        answer: 'Choicepagong',
        description: Answer9
    },
    combine10 = {
        blackboard: blackboardList[9],
        choices1: choiceList[37].choice,
        choices2: choiceList[10].choice,
        choices3: choiceList[36].choice,
        choice1String: choiceList[37].choicestring,
        choice2String: choiceList[10].choicestring,
        choice3String: choiceList[36].choicestring,
        answer: 'Choicepusit',
        description: Answer10
    },
     combine11 = {
        blackboard: blackboardList[10],
        choices1: choiceList[8].choice,
        choices2: choiceList[20].choice,
        choices3: choiceList[14].choice,
        choice1String: choiceList[8].choicestring,
        choice2String: choiceList[20].choicestring,
        choice3String: choiceList[14].choicestring,
         answer: 'Choiceigat',
        description: Answer11
    },
    combine12 = {
        blackboard: blackboardList[11],
        choices1: choiceList[32].choice,
        choices2: choiceList[21].choice,
        choices3: choiceList[24].choice,
        choice1String: choiceList[32].choicestring,
        choice2String: choiceList[21].choicestring,
        choice3String: choiceList[24].choicestring,
        answer: 'Choicepapel',
        description: Answer12
    },
    combine13 = {
        blackboard: blackboardList[12],
        choices1: choiceList[26].choice,
        choices2: choiceList[25].choice,
        choices3: choiceList[3].choice,
        choice1String: choiceList[26].choicestring,
        choice2String: choiceList[25].choicestring,
        choice3String: choiceList[3].choicestring,
        answer: 'Choicepalakol',
        description: Answer13
    },
    combine14 = {
        blackboard: blackboardList[13],
        choices1: choiceList[38].choice,
        choices2: choiceList[39].choice,
        choices3: choiceList[40].choice,
        choice1String: choiceList[38].choicestring,
        choice2String: choiceList[39].choicestring,
        choice3String: choiceList[40].choicestring,
        answer: 'Choicetambol',
        description: Answer14
    },
    combine15 = {
        blackboard: blackboardList[14],
        choices1: choiceList[2].choice,
        choices2: choiceList[0].choice,
        choices3: choiceList[1].choice,
        choice1String: choiceList[2].choicestring,
        choice2String: choiceList[0].choicestring,
        choice3String: choiceList[1].choicestring,
        answer: 'Choiceagong',
        description: Answer15
    }
];

var stageNumber = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];

const questionAnswered = [];
const choiceGame = ['game_wrong', 'game_correct'];
const audio = [
    'dadbatak2_pambura',
    'dadbatak2_pantasa',
    'dadbatak2_bubuyog',
    'dadbatak2_tutubi',
    'dadbatak2_lamok',
    'dadbatak2_ipis',
    'dadbatak2_paruparo',
    'dadbatak2_kabibi',
    'dadbatak2_pagong',
    'dadbatak2_pusit',
    'dadbatak2_igat',
    'dadbatak2_papel',
    'dadbatak2_palakol',
    'dadbatak2_tambol',
    'dadbatak2_agong',
];

const audioIndex = [
    'Choicepambura',
    'Choicepantasa',
    'Choicebubuyog',
    'Choicetutubi',
    'Choicelamok',
    'Choiceipis',
    'Choiceparu',
    'Choicekabibi',
    'Choicepagong',
    'Choicepusit',
    'Choiceigat',
    'Choicepapel',
    'Choicepalakol',
    'Choicetambol',
    'Choiceagong',
]
//playsound
//answer
//correct
//combine[answer]


class Bang5 extends Component {
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
            answerImage: tranparentPantasa,
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
                const value = 4;
                realm.write(() => {
                    getCoin[id].coinBalance = String(value);
                })
                this.setState({
                    Balance: value,
                })
            } else {
                const convertToNumber = Number(this.state.Balance);
                this.state.Balance = convertToNumber + 4;
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

    goBack = () => {
        this.stopSounds();
        this.props.navigation.replace('gameMenu', { showDadBatakBang: 'show' });
    }
    
    gotoMarket = () =>{
        this.props.navigation.replace('dadseMarket');
    }

    gotoLamwa = () =>{
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
                q = getPlayers[con].questionDoneBang2Dadbatak;
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
                        getPlayers[con].questionDoneBang2Dadbatak = 'null';
                        getPlayers[con].DBbangStage3 = 'unlock'
                    })
                }
            }
            this.props.navigation.replace('gameMenu', { show: 'DadBatak'});
        }
        if (index == 'check') {
            for (a = 0; a < getPlayers.length; a++) {
                const con = parseInt(a);
                if (storedValue == getPlayers[con].playername) {
                    random = getPlayers[con].dadseBatak2RandomKey;
                    id = con;
                    if (random == 'null') {
                        realm.write(() => {
                            getPlayers[con].dadseBatak2RandomKey = String(use);
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
                getPlayers[id].dadseBatak2RandomKey = String(use);
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
                getPlayers[id].dadseBatak2RandomKey = String(use);
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
                   this.playSound(this.state.answer);
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
                   }, 4000)
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
                    this.playSound(this.state.answer);
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
                    }, 4000)
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
                    this.playSound(this.state.answer);
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
                    }, 4000)
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
                    getPlayers[con].questionDoneBang2Dadbatak = String(value);
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
        stageNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
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


export default withNavigation(Bang5);