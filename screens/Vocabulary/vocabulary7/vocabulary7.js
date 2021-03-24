import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, TouchableOpacity, BackHandler, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';

import Sound from 'react-native-sound';
import { sound } from '../../HomePage';

import Vocab7BG from './vocabulary7Images/kitchenBG.png';
import bayuhanAsset from './vocabulary7Images/item_bayuhan.png';
import bilaoAsset from './vocabulary7Images/item_bilao.png';
import cookingpotAsset from './vocabulary7Images/item_cookingPot.png';
import cupAsset from './vocabulary7Images/item_cup.png';
import firewoodAsset from './vocabulary7Images/item_firewood.png';
import kettleAsset from './vocabulary7Images/item_kettle.png';
import kutsilyoAsset from './vocabulary7Images/item_kutsilyo.png';
import plateAsset from './vocabulary7Images/item_plate.png';
import sandokAsset from './vocabulary7Images/item_sandok.png';
import spoonAsset from './vocabulary7Images/item_spoon.png';
import stoveAsset from './vocabulary7Images/item_stove.png';

import Cup from './vocabulary7Images/cup.png';
import Firewood from './vocabulary7Images/firewood.png';
import Kettle from './vocabulary7Images/kettle.png';
import Knife from './vocabulary7Images/knife.png';
import Laddle from './vocabulary7Images/laddle.png';
import Mortar from './vocabulary7Images/mortar.png';  
import Plate from './vocabulary7Images/plate.png';
import Pot from './vocabulary7Images/pot.png';
import Spoon from './vocabulary7Images/spoon.png';
import Stove from './vocabulary7Images/stove.png';
import Tray from './vocabulary7Images/tray.png';
import SpeakerIcon from '../../images/Speaker_icon.png';

import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

Sound.setCategory('Playback');

// Vocab Sound List
const soundList = ['cup', 'firewood', 'kettle', 'knife', 'laddle', 'mortar', 'plate', 
                    'pot', 'spoon', 'stove', 'tray'];

const backgroundList = [Cup,Firewood,Kettle,Knife,Laddle,Mortar,Plate,Pot,Spoon,Stove,Tray];

class Vocabulary7 extends Component {
  static navigationOptions = {
      header: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      BackgroundImage: Vocab7BG,
      clearBackground: 'gotoVocab7Menu',
      trayTop: '21%',
      stoveTop: '36%',
      potTop: '44%',
      firewoodTop: '59%',
      plateTop:'43%',
      cupTop: '38%',
      kettleTop: '53%',
      knifeTop: '67%',
      mortarTop: '55%',
      sandokTop: '20%',
      spoonTop: '49%',
      speakerTop:'1000%',
      clickSoundIndex:'',
    } 
     // Sounds
     this.vocabSound = null;
     this.timeoutSound = null;
  }


  changeBackground = (index) => {
    this.setState({
      BackgroundImage:backgroundList[index],
      clearBackground: 'clear',
      trayTop: '1000%',
      stoveTop: '1000%',
      potTop: '1000%',
      firewoodTop: '1000%',
      plateTop: '1000%',
      cupTop: '1000%',
      kettleTop: '1000%',
      knifeTop: '1000%',
      mortarTop: '1000%',
      sandokTop: '1000%',
      spoonTop: '1000%',
      speakerTop: '20%',
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
      this.vocabSound = new Sound('vocab7_' + soundList[index] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
        this.vocabSound.play();
      });  
    }, 1000);   
  }
  releaseSounds = ()=> {
    if(this.vocabSound != null) {
        this.vocabSound.release();
    }
  }

  playVocabSound = () => {
    if(this.vocabSound != null) {
        this.vocabSound.release();
    }
    if(this.timeoutSound != null){
      clearTimeout(this.timeoutSound);
    }
    this.stopSounds();
    this.vocabSound = new Sound('vocab7_' + soundList[this.state.clickSoundIndex] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        alert('failed to load the sound', error);
        return;
    } else {
        this.vocabSound.play();
    }});
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

  goBack = () => {
      try {
        // sound.setVolume(0.2);
        sound.play();
    } catch(error) {
        
    }
    const clear = this.state.clearBackground;
    if (clear == 'gotoVocab7Menu') {
      this.props.navigation.navigate('vocabulary6')
    }
    if (clear == 'clear') {
      this.stopSounds();
      this.setState({
        BackgroundImage: Vocab7BG,
        clearBackground: 'gotoVocab7Menu',
        trayTop: '21%',
        stoveTop: '36%',
        potTop: '44%',
        firewoodTop: '59%',
        plateTop: '43%',
        cupTop: '38%',
        kettleTop: '53%',
        knifeTop: '67%',
        mortarTop: '55%',
        sandokTop: '20%',
        spoonTop: '49%',
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
        source={Vocab7BG}
      >
        <View style={{ position: 'absolute', top: '0%', width: '100%', height: '100%' }}>
          <Image source={Vocab7BG} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }}></Image>
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
          left: '16%',
          top:this.state.trayTop,
          }}>
            <TouchableOpacity onPress={() => {
              this.changeBackground(10);
            }}>
              <Image
                  source={bilaoAsset}
                  style={styles.trayImage}
              ></Image>
            </TouchableOpacity>
        </View>

        <View style={{
          position: 'absolute',
          left: '38%',
          top: this.state.stoveTop,
          }}>
        <TouchableOpacity onPress={() => {
          this.changeBackground(9);
        }}>
          <Image
              source={stoveAsset}
              style={styles.stoveImage}
          ></Image>
        </TouchableOpacity>
        </View>

        <View style={{
          position: 'absolute',
          left: '50%',
          top:this.state.potTop,
          }}>
          <TouchableOpacity onPress={() => {
            this.changeBackground(7);
          }}>
            <Image
              source={cookingpotAsset}
              style={styles.potImage}
            ></Image>
          </TouchableOpacity>
        </View>

          <View style={{
            position: 'absolute',
            left: '28.4%',
            top: this.state.firewoodTop,
            }}>
          <TouchableOpacity onPress={() => {
            this.changeBackground(1);
          }}>
            <Image
              source={firewoodAsset}
              style={styles.firewoodImage}
            ></Image>
          </TouchableOpacity>
        </View>

          <View style={{
            position: 'absolute',
            left: '73%',
            top: this.state.plateTop,
            }}>
          <TouchableOpacity onPress={() => {
            this.changeBackground(6);
          }}>
            <Image
              source={plateAsset}
              style={styles.plateImage}
            ></Image>
            </TouchableOpacity>
         </View>

          <View style={{
            position: 'absolute',
            left: '65%',
            top:this.state.cupTop,
            }}>
          <TouchableOpacity onPress={() => {
            this.changeBackground(0);
          }}>
            <Image
              source={cupAsset}
              style={styles.cupImage}
            ></Image>
          </TouchableOpacity>
        </View>

        <View style={{
            position: 'absolute',
            left: '79%',
            top:this.state.kettleTop
        }}>
          <TouchableOpacity onPress={() => {
            this.changeBackground(2);
          }}>
              <Image
                source={kettleAsset}
                style={styles.kettleImage}
              ></Image>
            </TouchableOpacity>
          </View>

          <View style={{
            position: 'absolute',
            left: '15%',
            top: this.state.knifeTop,
            }}>
          <TouchableOpacity onPress={() => {
            this.changeBackground(3);
          }}>
            <Image
              source={kutsilyoAsset}
              style={styles.knifeImage}
            ></Image>
            </TouchableOpacity>
          </View>

          <View style={{
            position: 'absolute',
            left: '12%',
            top: this.state.mortarTop,
              }}>
          <TouchableOpacity onPress={() => {
            this.changeBackground(5);
          }}>
              <Image
                source={bayuhanAsset}
                style={styles.mortarImage}
              ></Image>
            </TouchableOpacity>
          </View>

          <View style={{
            position: 'absolute',
            left: '72%',
            top: this.state.sandokTop,
            }}>
          <TouchableOpacity onPress={() => {
            this.changeBackground(9);
          }}>
              <Image
                source={sandokAsset}
                style={styles.sandokImage}
              ></Image>
            </TouchableOpacity>
          </View>

          <View style={{
            position: 'absolute',
            left: '66%',
            top: this.state.spoonTop,
            }}>
          <TouchableOpacity onPress={() => {
            this.changeBackground(8);
          }}>
              <Image
                source={spoonAsset}
                style={styles.spoonImage}
              ></Image>
            </TouchableOpacity>
          </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({


  mortarBorder: {
    position: 'absolute',
    left: '12%',
    top: '55%',
  },
  mortarImage: {
    height: hp('18%'),
    width: wp('13%'),
    resizeMode: 'contain',
  },

  trayBorder: {
    position: 'absolute',
    left: '16%',
    top: '21%',
  },
  trayImage: {
    height: hp('23%'),
    width: wp('13%'),
    resizeMode: 'contain',
  },


  potBorder: {
    position: 'absolute',
    left: '50%',
    top: '44%',
  },

  potImage: {
    height: hp('13%'),
    width: wp('10%'),
    resizeMode: 'contain',
  },

  cupBorder: {
    position: 'absolute',
    left: '65%',
    top: '38%',
  },

  cupImage: {
    height: hp('10%'),
    width: wp('6%'),
    resizeMode: 'contain',
  },

  firewoodBorder: {
    position: 'absolute',
    left: '28.4%',
    top: '58%',
  },
  firewoodImage: {
    height: hp('32%'),
    width: wp('34%'),
    resizeMode: 'contain',
  },

  kettleBorder: {
    position: 'absolute',
    left: '79%',
    top: '53%',
  },
  kettleImage: {
    height: hp('13%'),
    width: wp('9%'),
    resizeMode: 'contain',
  },

  knifeBorder: {
    position: 'absolute',
    left: '15%',
    top: '67%',
  },
  knifeImage: {
    height: hp('15%'),
    width: wp('20%'),
    resizeMode: 'contain',
  },

  plateBorder: {
    position: 'absolute',
    left: '73%',
    top: '43%',
  },
  plateImage: {
    height: hp('18%'),
    width: wp('13%'),
    resizeMode: 'contain',
  },

  sandokBorder: {
    position: 'absolute',
    left: '72%',
    top: '20%',
  },
  sandokImage: {
    height: hp('20%'),
    width: wp('8%'),
    resizeMode: 'contain',
  },

  spoonBorder: {
    position: 'absolute',
    left: '66%',
    top: '49%',
  },
  spoonImage: {
    height: hp('15%'),
    width: wp('7%'),
    resizeMode: 'contain',
  },

  stoveBorder: {
    position: 'absolute',
    left: '38%',
    top: '36%',
  },

  stoveImage: {
    height: hp('22%'),
    width: wp('17%'),
    resizeMode: 'contain',
  },

});

export default withNavigation(Vocabulary7);
