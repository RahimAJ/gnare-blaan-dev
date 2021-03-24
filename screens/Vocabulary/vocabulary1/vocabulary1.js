import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, TouchableOpacity, BackHandler, PanResponder, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';

import Sound from 'react-native-sound';
import { sound } from '../../HomePage';

import Vocab1BG from '../../images/FamilyMemBG.png';
import LolaAsset from './vocabulary1Images/lolaAsset.png';
import LoloAsset from './vocabulary1Images/loloAsset.png';
import TatayAsset from './vocabulary1Images/tatayAsset.png';
import NanayAsset from './vocabulary1Images/nanayAsset.png';
import KaibeAsset from './vocabulary1Images/kaibeAsset.png';
import KaitoAsset from './vocabulary1Images/kaitoAsset.png';
import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';
import Tatay from './vocabulary1Images/tatay.png';
import Nanay from './vocabulary1Images/nanay.png';
import Lola from './vocabulary1Images/lola.png';
import Lolo from './vocabulary1Images/lolo.png';
import Kaito from './vocabulary1Images/kaito.png';
import Kaibe from './vocabulary1Images/kaibe.png';
import SpeakerIcon from '../../images/Speaker_icon.png';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

Sound.setCategory('Playback');

// Vocab Sound List
const soundList = ['tatay', 'nanay', 'lolo', 'lola', 'brother', 'sister', ];

const BackgroundList = [Tatay,Nanay,Lolo,Lola,Kaito,Kaibe];

class Vocabulary1 extends Component {
    static navigationOptions = {
        header: null,
    }

  constructor(props) {
        super(props);
        this.state = {
          BackgroundImage: Vocab1BG,
          clearBackground:'gotoVocab1Menu',
          NanayTop:'26%',
          LoloTop:'23%',
          LolaTop:'25%',
          KaitoTop:'37%',
          KaibeTop: '37%',
          TatayTop:'23%',
          speakerTop:'1000%',
          clickSoundIndex:'',
    }

    // Sounds
    this.vocabSound = null;
    this.timeoutSound = null;
  }


  changeBackground = (index) =>{
    this.setState({
      BackgroundImage:BackgroundList[index],
      NanayTop: '1000%',
      LoloTop: '1000%',
      LolaTop: '1000%',
      KaitoTop: '1000%',
      KaibeTop: '1000%',
      TatayTop: '1000%',
      speakerTop: '20%',
      clearBackground:'clear',
      clickSoundIndex:index
    })
    this.autoPlaySound(index);
    try {
        // sound.setVolume(0);
        sound.pause();
    } catch(error) {
        
    }
  }

  autoPlaySound = (index) => {
    this.releaseSounds();
    this.timeoutSound = setTimeout(()=> {
      this.vocabSound = new Sound('vocab1_' + soundList[index] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
        this.vocabSound.play();
      });  
    }, 1000);   
  }

  playVocabSound = () => {
    if(this.vocabSound != null) {
        this.vocabSound.release();
    }
    if(this.timeoutSound != null){
      clearTimeout(this.timeoutSound);
    }
    this.stopSounds();
    this.vocabSound = new Sound('vocab1_' + soundList[this.state.clickSoundIndex] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        alert('failed to load the sound', error);
        return;
    } else {
        this.vocabSound.play();
    }});
  }

  releaseSounds = ()=> {
    if(this.vocabSound != null) {
        this.vocabSound.release();
    }
  }
  stopSounds = () => {
    if (this.vocabSound != null){
      this.vocabSound.stop();
    }
  }

  gotoMainMenu = () =>{
      try {
        // sound.setVolume(0.2);
        sound.play();
    } catch(error) {
        
    }
    const clear = this.state.clearBackground;
        if (clear == 'clear'){
            this.stopSounds();
        }
        this.props.navigation.navigate('mainMenu');
  }

  goBack = () =>{
      try {
        // sound.setVolume(0.2);
        sound.play();
    } catch(error) {
        
    }
    const clear = this.state.clearBackground;
    if (clear == 'gotoVocab1Menu'){
      this.props.navigation.goBack()
    }
    if(clear == 'clear'){
      this.stopSounds();
      this.setState({
        BackgroundImage: Vocab1BG,
        NanayTop: '26%',
        LoloTop: '23%',
        LolaTop: '25%',
        KaitoTop: '37%',
        KaibeTop: '37%',
        TatayTop: '23%',
        clearBackground:'gotoVocab1Menu',
        speakerTop: '1000%',
      })
    }
    if(this.timeoutSound != null){
      clearTimeout(this.timeoutSound);
    }
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    try {
        // sound.setVolume(0.2);
        sound.play();
    } catch(error) {
        
    }
  }

  componentWillUnmount() {
    this.backHandler.remove()
  }

  handleBackPress = () => {
    this.goBack(); 
    return true;
  }

  render() {

    return (
        <ImageBackground style={{ flex: 1, width: '100%', height: '100%', resizeMode: 'stretch' }}
          source={Vocab1BG}
        >
          <View style={{ position: 'absolute', top: '0%', width: '100%', height: '100%' }}>
            <Image source={Vocab1BG} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }}></Image>
          </View>
          <View style={{ position: 'absolute', width: '100%', height: '100%' }}>
            <Image source={this.state.BackgroundImage} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }}></Image>
          </View>
              <View style={globalStyleSheet.backContainer}>
                  <TouchableOpacity onPress={this.goBack}>
                      <Image
                          source={Back_icon}
                          style={globalStyleSheet.back}
                      ></Image>
                  </TouchableOpacity>
              </View>
              <View style={globalStyleSheet.homeContainer}>
                  <TouchableOpacity onPress={this.gotoMainMenu}>
                      <Image
                          source={Home_icon}
                          style={globalStyleSheet.home}
                      ></Image>
                  </TouchableOpacity>
              </View>
              <View style={{
                  position: 'absolute',
                  left: '80%',
                  top:this.state.speakerTop,
                  width: '6%',
                  height: '10%',
              }}>
                  <TouchableOpacity onPress={this.playVocabSound}>
                      <Image
                          source={SpeakerIcon}
                          style={globalStyleSheet.A_Speaker_2}
                      ></Image>
                  </TouchableOpacity>
              </View>
                <View style={{
            position: 'absolute',
            left: '37%',
            top: this.state.TatayTop,
            width: '18%',
            resizeMode: 'cover',
          }}>
                    <TouchableOpacity onPress={() => {
                      this.changeBackground(0);
                    }}>
                        <Image
                            source={TatayAsset}
                            style={styles.tatayImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
          <View style={{
            position: 'absolute',
            left: '50%',
            top: this.state.NanayTop
          }}>
            <TouchableOpacity onPress={() => {
              this.changeBackground(1);
            }}>
                        <Image
                            source={NanayAsset}
                            style={styles.nanayImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                  <View style={{
            position: 'absolute',
            left: '32%',
            top: this.state.LoloTop,
            width: '11%',
            resizeMode: 'cover',
                  }}>
            <TouchableOpacity onPress={() => {
              this.changeBackground(2);
            }}>
                          <Image
                              source={LoloAsset}
                              style={styles.loloImage}
                          ></Image>
                      </TouchableOpacity>
                  </View>

          <View style={{
            position: 'absolute',
            left: '25%',
            top: this.state.LolaTop,
            }}>
            <TouchableOpacity onPress={() => {
              this.changeBackground(3);
            }}>
                          <Image
                              source={LolaAsset}
                              style={styles.lolaImage}
                          ></Image>
                      </TouchableOpacity>
                  </View>

                  <View style={{
            position: 'absolute',
            
            left: '65%',
            top: this.state.KaitoTop,
                  }}>
            <TouchableOpacity onPress={() => {
              this.changeBackground(4);
            }}>
                          <Image
                              source={KaitoAsset}
                              style={styles.kaitoImage}
                          ></Image>
                      </TouchableOpacity>
                  </View>

                  <View style={{
            position: 'absolute',
            left: '58%',
            top: this.state.KaibeTop,
                  }}>
            <TouchableOpacity onPress={() => {
              this.changeBackground(5);
            }}>
                          <Image
                              source={KaibeAsset}
                              style={styles.kaibeImage}
                          ></Image>
                      </TouchableOpacity>
                  </View>
          </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
      lolaImage: {
        height: hp('66%'),
        width: wp('12%'),
        resizeMode: 'contain',
      },
      loloImage: {
        height: hp('68%'),
        width: wp('14%'),
        resizeMode: 'contain',
      },
      tatayImage: {
        height: hp('70%'),
        width: wp('40%'),
        resizeMode: 'contain',
      },
      nanayImage: {
        height: hp('66%'),
        width: wp('12%'),
        resizeMode: 'contain',
      },
      kaibeImage: {
        height: hp('54%'),
        width: wp('11%'),
        resizeMode: 'contain',
      },
      kaitoImage: {
        height: hp('54%'),
        width: wp('11%'),
        resizeMode: 'contain',
      },
});

export default withNavigation(Vocabulary1);
