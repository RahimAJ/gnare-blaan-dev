import React, { Component } from 'react';
import { View, Image, TouchableOpacity, StatusBar, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';

import PencilIcon from '../../images/Pencil_icon.png';

import trace1 from '../numberTracingGIF/9_1.gif';
import trace2 from '../numberTracingGIF/9_2.gif';
import shaded_9_1 from '../numberTracingImage/shaded_9_1.png';
import shaded_9_2 from '../numberTracingImage/shaded_9_2.png';

import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';

const shadedLine = [shaded_9_1, shaded_9_2];
const tracingLine = [trace1, trace2];

import { numberDimension, boardDimension,
    scopeX, scopeY } from '../numbersImport';
    import {sound} from '../../HomePage';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js'; 

class NineTracing extends Component {
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
        },

        this.line1 = [{
            x: screenWidth * 0.57,
            y: screenHeight * 0.45,
        }, {
            x: screenWidth * 0.48,
            y: screenHeight * 0.3,
        }, {
            x: screenWidth * 0.4,
            y: screenHeight * 0.45,
        }, {
            x: screenWidth * 0.48,
            y: screenHeight * 0.59,
        }, {
            x: screenWidth * 0.56,
            y: screenHeight * 0.65,
        }, {
            x: screenWidth * 0.48,
            y: screenHeight * 0.79,
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
        if(this.state.dot4) {
            if(this.state.dot6) {
                this.setState({showShaded: 1, shaded: shadedLine[1], 
                    tracing: tracingLine[0], showTracing: 0});
            } else {
                this.setState({showShaded: 1, shaded: shadedLine[0], 
                    dot5: false, dot6: false,
                    tracing: tracingLine[1], showTracing: 1});
            }
        } else {
            this.clearBoard();
        }
    }

    clearBoard = () => {
        this.setState({dot1: false, dot2: false, dot3: false, 
            dot4: false, dot5: false, dot6: false, showShaded: 0, showTracing: 1});
        this.setState({tracing: trace1});
    }

    render() {

        StatusBar.setHidden(true);
        return (
            <View style={{position: 'absolute', 
                        width: boardDimension.width, height: boardDimension.height, top: '20%', left: '12.5%', backgroundColor: 'rgba(255, 255, 255, 0.000000001)'}}
                        >
                    <View style={{position: 'absolute', width: numberDimension.width, 
                                height: numberDimension.height, 
                                top: '5%', left: '32%', opacity: this.state.showTracing,}}>
                        <Image source={this.state.tracing} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>


                        {/* <View style={[styles.dot, {top: numberDimension.height * 0.32,
                            left: numberDimension.width * 0.78}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.11,
                            left: numberDimension.width * 0.45}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.32,
                            left: numberDimension.width * 0.15}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.57,
                            left: numberDimension.width * 0.45}]}></View>
                            
                        <View style={[styles.dot, {top: numberDimension.height * 0.6,
                            left: numberDimension.width * 0.78}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.88,
                            left: numberDimension.width * 0.55}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.85,
                            left: numberDimension.width * 0.3}]}></View> */}

                        {/*
                            this.line1 = [{
                                x: numberDimension * 0.78,
                                y: numberDimension * 0.32,
                            }, {
                                x: numberDimension * 0.45,
                                y: numberDimension * 0.11,
                            }, {
                                x: numberDimension * 0.15,
                                y: numberDimension * 0.32,
                            }, {
                                x: numberDimension * 0.45,
                                y: numberDimension * 0.57,
                            },];
                        */}

                        {/*
                            this.line2 = [{
                                x: numberDimension * 0.78,
                                y: numberDimension * 0.6,
                            }, {
                                x: numberDimension * 0.55,
                                y: numberDimension * 0.88,
                            },{
                                x: numberDimension * 0.3,
                                y: numberDimension * 0.85,
                            },];
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

                // <View style={[styles.dot, {top: screenHeight * 0.45,
                //     left: screenWidth * 0.57}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.3,
                //     left: screenWidth * 0.48}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.45,
                //     left: screenWidth * 0.4}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.59,
                //     left: screenWidth * 0.48}]}></View>
                
                // <View style={[styles.dot, {top: screenHeight * 0.65,
                //     left: screenWidth * 0.56}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.79,
                //     left: screenWidth * 0.48}]}></View>

                // {/*
                //     this.line1 = [{
                //         x: screenWidth * 0.57,
                //         y: screenHeight * 0.45,
                //     }, {
                //         x: screenWidth * 0.48,
                //         y: screenHeight * 0.3,
                //     }, {
                //         x: screenWidth * 0.4,
                //         y: screenHeight * 0.45,
                //     }, {
                //         x: screenWidth * 0.48,
                //         y: screenHeight * 0.59,
                //     }, {
                //         x: screenWidth * 0.56,
                //         y: screenHeight * 0.65,
                //     }, {
                //         x: screenWidth * 0.48,
                //         y: screenHeight * 0.79,
                //     }, ];
                // */}
        )
    }
}

export default withNavigation(NineTracing);