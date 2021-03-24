import React, { Component } from 'react';
import { View, Image, TouchableOpacity, StatusBar, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';

import PencilIcon from '../../images/Pencil_icon.png';

import trace1 from '../numberTracingGIF/6_1.gif';
import shaded_6_1 from '../numberTracingImage/shaded_6_1.png';

import { numberDimension, boardDimension,
    scopeX, scopeY } from '../numbersImport';

import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js'; 

class SixTracing extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this. state = {
            // Tracing State
            shaded: shaded_6_1,
            tracing: trace1,
            lineIndex: 0,
            showShaded: 0,
            showTracing: 1,
            dot1: false,
            dot2: false,
            dot3: false,
            dot4: false,
            dot5: false,
            dot6: false,
        },

        this.line1 = [{
            x: screenWidth * 0.5,
            y: screenHeight * 0.29,
        }, {
            x: screenWidth * 0.415,
            y: screenHeight * 0.45,
        }, {
            x: screenWidth * 0.415,
            y: screenHeight * 0.65,
        }, {
            x: screenWidth * 0.5,
            y: screenHeight * 0.81,
        }, {
            x: screenWidth * 0.585,
            y: screenHeight * 0.65,
        }, {
            x: screenWidth * 0.55,
            y: screenHeight * 0.52,
        }, ];
    }

    numberTrace = (X, Y) => {
        if(!this.state.dot1) {
            this.setState({dot1: 
                ((X >= this.line1[0].x - scopeX && X <= this.line1[0].x + scopeX) && 
                (Y >= this.line1[0].y - scopeY && Y <= this.line1[0].y + scopeY)) ? true : false});
        
        } else if(this.state.dot1 && !this.state.dot2) {
            this.setState({dot2: 
                ((X >= this.line1[1].x - scopeX && X <= this.line1[1].x + scopeX) && 
                (Y >= this.line1[1].y - scopeY && Y <= this.line1[1].y + scopeY)) ? true : false});
        
        } else if(this.state.dot2 && !this.state.dot3) {
            this.setState({dot3: 
                ((X >= this.line1[2].x - scopeX && X <= this.line1[2].x + scopeX) && 
                (Y >= this.line1[2].y - scopeY && Y <= this.line1[2].y + scopeY)) ? true : false});
        
        } else if(this.state.dot3 && !this.state.dot4) {
            this.setState({dot4: 
                ((X >= this.line1[3].x - scopeX && X <= this.line1[3].x + scopeX) && 
                (Y >= this.line1[3].y - scopeY && Y <= this.line1[3].y + scopeY)) ? true : false});
        
        } else if(this.state.dot4 && !this.state.dot5) {
            this.setState({dot5: 
                ((X >= this.line1[4].x - scopeX && X <= this.line1[4].x + scopeX) && 
                (Y >= this.line1[4].y - scopeY && Y <= this.line1[4].y + scopeY)) ? true : false});
        
        } else if(this.state.dot5 && !this.state.dot6) {
            this.setState({dot6: 
                ((X >= this.line1[5].x - scopeX && X <= this.line1[5].x + scopeX) && 
                (Y >= this.line1[5].y - scopeY && Y <= this.line1[5].y + scopeY)) ? true : false});
        
        }
    }

    ifTraced = () => {
        if(this.state.dot6) {
            this.setState({tracing: shaded_6_1});
        } else {
           this.clearBoard();
        }
    }

    clearBoard = () => {
        this.setState({dot1: false, dot2: false, dot3: false, 
            dot4: false, dot5: false, dot6: false, showShaded: 0, showTracing: 1, 
            tracing: trace1});
    }

    render() {

        StatusBar.setHidden(true);
        return (
            <View style={{position: 'absolute', 
                        width: boardDimension.width, height: boardDimension.height, top: '20%', 
                          left: '12.5%', backgroundColor: 'rgba(255, 255, 255, 0.000000001)'}}>
                    <View style={{position: 'absolute', width: numberDimension.width, 
                                height: numberDimension.height, 
                                top: '5%', left: '32%', opacity: this.state.showTracing,}}>
                        <Image source={this.state.tracing} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                        
                        {/* <View style={[styles.dot, {top: numberDimension.height * 0.18,
                            left: numberDimension.width * 0.78}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.1,
                            left: numberDimension.width * 0.58}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.25,
                            left: numberDimension.width * 0.22}]}></View>

                        <View style={[styles.dot, {top: numberDimension.height * 0.5,
                            left: numberDimension.width * 0.15}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.75,
                            left: numberDimension.width * 0.22}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.91,
                            left: numberDimension.width * 0.5}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.75,
                            left: numberDimension.width * 0.82}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.55,
                            left: numberDimension.width * 0.82}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.43,
                            left: numberDimension.width * 0.62}]}></View>
                        
                        <View style={[styles.dot, {top: numberDimension.height * 0.45,
                            left: numberDimension.width * 0.38}]}></View> */}

                        {/*
                            this.line1 =[{
                                x: numberDimension.width * 0.78,
                                y: numberDimension.height * 0.18,
                            }, {
                                x: numberDimension.width * 0.58,
                                y: numberDimension.height * 0.1,
                            }, {
                                x: numberDimension.width * 0.22,
                                y: numberDimension.height * 0.25,
                            }, {
                                x: numberDimension.width * 0.15,
                                y: numberDimension.height * 0.5,
                            }, {
                                x: numberDimension.width * 0.22,
                                y: numberDimension.height * 0.75,
                            }, {
                                x: numberDimension.width * 0.5,
                                y: numberDimension.height * 0.91,
                            }, {
                                x: numberDimension.width * 0.82,
                                y: numberDimension.height * 0.75,
                            }, {
                                x: numberDimension.width * 0.82,
                                y: numberDimension.height * 0.55,
                            }, {
                                x: numberDimension.width * 0.62,
                                y: numberDimension.height * 0.43,
                            }, {
                                x: numberDimension.width * 0.38,
                                y: numberDimension.height * 0.45,
                            }, ];
                        */}

                    </View>

                    <View style={{ flex: 1,
                    flexDirection: 'row', justifyContent: 'center',
                        alignItems: 'center'}} >
                        <RNSketchCanvas
                            containerStyle={{backgroundColor: 'transparent', flex: 1}}
                            canvasStyle={{backgroundColor: 'transparent', flex: 1,}}
                            defaultStrokeIndex={0}
                            defaultStrokeWidth={screenWidth * 0.06}
                            onStrokeChanged={(X, Y)=>{
                                this.numberTrace(X, Y);
                            }}

                            onStrokeEnd={()=>{
                                this.ifTraced();
                            }}
                                />
                    </View>

                    {/* Pencil Button */}
                    <View style={{position: 'absolute',
                        top: '4%', width: '8%', height: '30%',}} >
                        <TouchableOpacity onPress={this.clearBoard}>
                            <Image
                            source={PencilIcon}
                                style={styles.containImage}
                            ></Image>
                        </TouchableOpacity>
                    </View>
                </View>
        )
    }
}

export default withNavigation(SixTracing);