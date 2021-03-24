import React, { Component } from 'react';
import { View, Image, 
    TouchableOpacity, StatusBar, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';

import Home_icon from '../../images/Home_icon.png';
import Back_icon from '../../images/Back_icon.png';
import imageBG from '../../images/BG.jpg';
import PencilIcon from '../../images/Pencil_icon.png';

import trace1 from '../numberTracingGIF/5_1.gif';
import trace2 from '../numberTracingGIF/5_2.gif';
import trace3 from '../numberTracingGIF/5_3.gif';

import shaded_5_1 from '../numberTracingImage/shaded_5_1.png';
import shaded_5_2 from '../numberTracingImage/shaded_5_2.png';
import shaded_5_3 from '../numberTracingImage/shaded_5_3.png';

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js';
import {sound} from '../../HomePage';
import { numberDimension, boardDimension,
    scopeX, scopeY, trail } from '../numbersImport';

import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const shadedLine = [shaded_5_1, shaded_5_2, shaded_5_3];
const tracingLine = [trace1, trace2, trace3];

class FiveTracing extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this. state = {

            // Tracing State
            shaded: shadedLine[0],
            tracing: tracingLine[0],
            lineIndex: 0,
            showShaded: 0,
            showTracing: 1,
            dot1: false,
            dot2: false,
            dot3: false,
            dot4: false,
            dot5: false,
            dot6: false,
            dot7: false,
            dot8: false,
        },

        this.line1 = [{
            x: screenWidth * 0.55,
            y: screenHeight * 0.3,
        }, {
            x: screenWidth * 0.48,
            y: screenHeight * 0.3,
        }, {
            x: screenWidth * 0.425,
            y: screenHeight * 0.365,
        }, {
            x: screenWidth * 0.42,
            y: screenHeight * 0.44,
        }, {
            x: screenWidth * 0.5,
            y: screenHeight * 0.485,
        }, {
            x: screenWidth * 0.58,
            y: screenHeight * 0.6,
        }, {
            x: screenWidth * 0.54,
            y: screenHeight * 0.77,
        }, {
            x: screenWidth * 0.46,
            y: screenHeight * 0.78,
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
        
        } else if(this.state.dot6 && !this.state.dot7) {
            this.setState({dot7: 
                ((X >= this.line1[6].x - scopeX && X <= this.line1[6].x + scopeX) && 
                (Y >= this.line1[6].y - scopeY && Y <= this.line1[6].y + scopeY)) ? true : false});
        
        } else if(this.state.dot7 && !this.state.dot8) {
            this.setState({dot8: 
                ((X >= this.line1[7].x - scopeX && X <= this.line1[7].x + scopeX) && 
                (Y >= this.line1[7].y - scopeY && Y <= this.line1[7].y + scopeY)) ? true : false});
        
        } 
    }

    ifTraced = () => {
        if(this.state.dot2) {
            if(this.state.dot4) {
                if(this.state.dot8) {
                    this.setState({shaded: shaded_5_3, showShaded: 1,
                        showTracing: 0});
                } else {
                    this.setState({shaded: shaded_5_2, dot6: false,
                        dot7: false, dot8: false, dot5: false, showShaded: 1, 
                        tracing: tracingLine[2]});
                }
            } else {
                this.setState({showShaded: 1, shaded: shaded_5_1,
                    dot4: false, dot3: false,
                    tracing: tracingLine[1], showTracing: 1,});
            }
        } else {
            this.clearBoard();
        }
    }

    clearBoard = () => {
        this.setState({dot1: false, dot2: false, dot3: false, 
            dot4: false, dot5: false, dot6: false, dot7: false, dot8: false, 
            showShaded: 0, shaded: shadedLine[0], tracing: tracingLine[0], showTracing: 1});
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
                        
                        {/* <View style={[styles.dot, {top: numberDimension.height * 0.1,
                            left: numberDimension.width * 0.8}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.1,
                            left: numberDimension.width * 0.5}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.1,
                            left: numberDimension.width * 0.28}]}></View> */}
                        
                        {/*
                            this.line1 = [{
                                x: numberDimension.width * 0.8,
                                y: numberDimension.height * 0.1,
                            }, {
                                x: numberDimension.width * 0.5,
                                y: numberDimension.height * 0.1,
                            }, {
                                x: numberDimension.width * 0.28,
                                y: numberDimension.height * 0.1,
                            }, ];
                        */}

                        {/* <View style={[styles.dot, {top: numberDimension.height * 0.2,
                            left: numberDimension.width * 0.25}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.37,
                            left: numberDimension.width * 0.2}]}></View> */}

                        {/*
                            this.line2 = [{
                                x: numberDimension.width * 0.25,
                                y: numberDimension.height * 0.2,
                            }, {
                                x: numberDimension.width * 0.2,
                                y: numberDimension.height * 0.37,
                            }, ];
                        */}

                        {/* <View style={[styles.dot, {top: numberDimension.height * 0.38,
                            left: numberDimension.width * 0.5}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.47,
                            left: numberDimension.width * 0.76}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.7,
                            left: numberDimension.width * 0.81}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.89,
                            left: numberDimension.width * 0.45}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.8,
                            left: numberDimension.width * 0.22}]}></View> */}
                        
                        {/*
                            this.line3 = [{
                                x: numberDimension.width * 0.5,
                                y: numberDimension.height * 0.38,
                            }, {
                                x: numberDimension.width * 0.76,
                                y: numberDimension.height * 0.47,
                            }, {
                                x: numberDimension.width * 0.81,
                                y: numberDimension.height * 0.7,
                            }, {
                                x: numberDimension.width * 0.45,
                                y: numberDimension.height * 0.89,
                            }, {
                                x: numberDimension.width * 0.22,
                                y: numberDimension.height * 0.8,
                            }, ];
                        */}
                        
                    
                    </View>
                    <View style={{position: 'absolute', width: numberDimension.width, 
                                height: numberDimension.height, 
                                top: '5%', left: '32%', opacity: this.state.showShaded}}>
                        <Image source={this.state.shaded} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
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

export default withNavigation(FiveTracing);