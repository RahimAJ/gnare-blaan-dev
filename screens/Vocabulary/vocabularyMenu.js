import React,{Component} from 'react';
import { ImageBackground, TouchableOpacity, View, Image} from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet as styles} from '../globalStyleSheet/globalStyleSheet.js';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import GnareIcon from '../Games/gameImages/GnareMain.png'
import Back_icon from '../images/Back_icon.png';
import MembersFamily_icon from './vocabularyMenuImages/Vocab1.png';
import BodyParts_icon from './vocabularyMenuImages/Vocab2.png';
import FishingTools_icon from './vocabularyMenuImages/Vocab3.png';
import FarmingTools_icon from './vocabularyMenuImages/Vocab4.png';
import Mountains_icon from './vocabularyMenuImages/Vocab5.png';
import HouseParts_icon from './vocabularyMenuImages/Vocab6.png';
import GreetingsHeavenlyBodies_icon from './vocabularyMenuImages/Vocab8.png';
import Calendar_icon from './vocabularyMenuImages/Vocab9.png';
import Kastifun_icon from './vocabularyMenuImages/Vocab10.png';
import VocabularyItem from './vocabularyItem';
import NextIcon from '../images/Next_Icon.png';
import PrevIcon from '../images/Prev_Icon.png';


class vocabularyMenu extends Component {
    static navigationOptions = {
        header:null,
    }

    constructor(props) {
        super(props);
        this.state = {
            top2:'1000%',
            top1:'20%',
            nextTop: '45%',
            prevTop:'1000%',
            top3:'1000%',
            top4: '1000%',
            top5: '1000%',
            add:0,
        }
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
    }
    gotoHome = () => {
        this.props.navigation.navigate('home');
    }
    vocabulary1 = () => {
        this.props.navigation.push('vocabulary1');
    }
    vocabulary2 = () => {
        this.props.navigation.push('vocabulary2');
    }
    vocabulary3 = () => {
        this.props.navigation.push('vocabulary3');
    }
    vocabulary4 = () => {
        this.props.navigation.push('vocabulary4');
    }
    vocabulary5 = () => {
        this.props.navigation.push('vocabulary5');
    }
    vocabulary6 = () => {
        this.props.navigation.push('vocabulary6');
    }
    vocabulary8 = () => {
        this.props.navigation.push('vocabulary8');
    }
    vocabulary9 = () => {
        this.props.navigation.push('vocabulary9');
    }
    vocabulary10 = () => {
        this.props.navigation.push('vocabulary10');
    }

    goBack = () => {
        this.props.navigation.navigate('mainMenu');
    }
    gotoNextPage = (index) => {
        if(index == 1){
            this.setState({
                top1: '1000%',
                top2: '20%',
                nextTop: '45%',
                prevTop: '45%',
            })
        }else if(index == 2){
            this.setState({
                top2: '1000%',
                top3: '20%',
                nextTop: '45%',
                prevTop: '45%',
            })
        }else if(index == 3){
            this.setState({
                top3: '1000%',
                top4: '20%',
                nextTop: '45%',
                prevTop: '45%',
            })
        } else if (index == 4) {
            this.setState({
                top4: '1000%',
                top5: '20%',
                nextTop: '1000%',
                prevTop: '45%',
            })
        }
    }

    gotoPrevPage = (index) => {
        if (index == 3) {
            this.setState({
                top5: '1000%',
                top4: '20%',
                nextTop: '45%',
            })
        } else if (index == 2) {
            this.setState({
                top4: '1000%',
                top3: '20%',
                nextTop: '45%',
            })
        } else if (index == 1) {
            this.setState({
                top3: '1000%',
                top2: '20%',
                nextTop: '45%',
            })
        } else if (index == 0) {
            this.setState({
                top2: '1000%',
                top1: '20%',
                nextTop: '45%',
                prevTop: '1000%',
            })
        } 
    }
    render(){
        return(
                <ImageBackground style={styles.image} source={require('../images/Flalok_BG.jpg')}>
                <View style={styles.backContainer}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image
                            source={Back_icon}
                            style={styles.back}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    justifyContent: 'center',
                    position: 'absolute',
                    top: this.state.top1,
                    width: '98%',
                    height: '80%',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    }}>
                    <VocabularyItem itemImage={MembersFamily_icon} goto={this.vocabulary1} />
                    <VocabularyItem itemImage={BodyParts_icon} goto={this.vocabulary2} />
                </View>
                <View style={{
                    justifyContent: 'center',
                    position: 'absolute',
                    top: this.state.top2,
                    width: '98%',
                    height: '80%',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    }}>
                    <VocabularyItem itemImage={FishingTools_icon} goto={this.vocabulary3} />
                    <VocabularyItem itemImage={FarmingTools_icon} goto={this.vocabulary4} />
                </View>
                <View style={{
                    justifyContent: 'center',
                    position: 'absolute',
                    top: this.state.top3,
                    width: '98%',
                    height: '80%',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}>
                    <VocabularyItem itemImage={Mountains_icon} goto={this.vocabulary5} />
                    <VocabularyItem itemImage={HouseParts_icon} goto={this.vocabulary6} />
                </View>
                <View style={{
                    justifyContent: 'center',
                    position: 'absolute',
                    top: this.state.top4,
                    width: '98%',
                    height: '80%',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}>
                    <VocabularyItem itemImage={GreetingsHeavenlyBodies_icon} goto={this.vocabulary8} />
                    <VocabularyItem itemImage={Calendar_icon} goto={this.vocabulary9} />
                </View>
                <View style={{
                    justifyContent: 'center',
                    position: 'absolute',
                    top: this.state.top5,
                    width: '98%',
                    height: '80%',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}>
                    <VocabularyItem itemImage={Kastifun_icon} goto={this.vocabulary10} />
                </View>
                <View style={{
                    position: 'absolute',
                    left: '90%',
                    top: this.state.nextTop,
                    width: '12%',
                    height: '24%',}}>
                    <TouchableOpacity onPress={()=> {
                        this.state.add = this.state.add + 1;
                        this.gotoNextPage(this.state.add);
                    }}>
                        <Image
                            source={NextIcon}
                            style={styles.next}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.homeContainer}>
                    <TouchableOpacity onPress={this.gotoHome}>
                        <Image
                            source={GnareIcon}
                            style={styles.home}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    left: '1%',
                    top: this.state.prevTop,
                    width: '12%',
                    height: '24%',}}>
                    <TouchableOpacity onPress={() => {
                        this.state.add = this.state.add - 1;
                        this.gotoPrevPage(this.state.add);
                    }}>
                        <Image
                            source={PrevIcon}
                            style={styles.prev}
                        ></Image>
                    </TouchableOpacity>
                </View>
           </ImageBackground>
        );
    }
}



export default withNavigation(vocabularyMenu);
