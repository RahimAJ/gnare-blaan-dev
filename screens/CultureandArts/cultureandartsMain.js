import React,{Component} from 'react';
import { ImageBackground, TouchableOpacity, View, Image} from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet as styles} from '../globalStyleSheet/globalStyleSheet.js';

import GnareIcon from '../Games/gameImages/GnareMain.png'
import Back_icon from '../images/Back_icon.png';
import Chants_icon from './cultureandartsImages/Chants.png';
import Kastifun_icon from './cultureandartsImages/Kastifun.png';
import Prayers_icon from './cultureandartsImages/Prayers.png';
import cultureandarts_BG from '../images/Flalok_BG.jpg';


class cultureandartsMain extends Component {
    static navigationOptions = {
        header:null,
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
    }

    gotoHome = () => {
        this.props.navigation.navigate('home');
    }

    render(){
        return(
           <ImageBackground style={styles.image} source={cultureandarts_BG}>
                <View style={styles.CultureandArtsContainer}>
                    <View style={styles.row}>
                        <View style={[styles.itemSize, {height: '45%', marginRight: "5%"}]} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('chantsScreen')} >
                                <Image style={styles.imageSizeStoryMenu} source={Chants_icon} />
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.itemSize, {height: '45%', marginLeftt: "5%"}]} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('prayersScreen')} >
                                <Image style={styles.imageSizeStoryMenu} source={Prayers_icon} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.row1}>
                        <View style={[styles.itemSize, {height: '45%'}]} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('kastifunScreen')} >
                                <Image style={styles.imageSizeStoryMenu} source={Kastifun_icon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                
                <View style={styles.backContainer}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image
                            source={Back_icon}
                            style={styles.back}
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
           </ImageBackground>
        );
    }
}



export default withNavigation(cultureandartsMain);