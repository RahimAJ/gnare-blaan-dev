import React,{Component} from 'react';
import { ImageBackground, TouchableOpacity, View, Image, Text} from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet as styles} from './globalStyleSheet/globalStyleSheet.js';

import AboutBackground from './images/About.jpg';

class About extends Component{

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
            <ImageBackground style={styles.image} source={AboutBackground}>
                <View style={{position: "absolute", width:"100%", height:"100%"}}>
                    <TouchableOpacity  onPress={this.gotoHome}>
                        <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}


export default withNavigation(About);