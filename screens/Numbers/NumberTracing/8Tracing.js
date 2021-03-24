import React, { Component } from 'react';
import { View, Image, TouchableOpacity, StatusBar, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';

import PencilIcon from '../../images/Pencil_icon.png';

import trace1 from '../numberTracingGIF/8_1.gif';
import shaded_8_1 from '../numberTracingImage/shaded_8_1.png';
import trace8 from '../numberTracingImage/8.png';

import { numberDimension, boardDimension,
    scopeX, scopeY, trail } from '../numbersImport';
    import {sound} from '../../HomePage';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js'; 

class EightTracing extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this. state = {
            // Tracing State
            shaded: shaded_8_1,
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
            dot7: false,
            dot8: false,
        },

        this.line1 = [{
            x: screenWidth * 0.45,
            y: screenHeight * 0.32,
        }, {
            x: screenWidth * 0.45,
            y: screenHeight * 0.495,
        }, {
            x: screenWidth * 0.57,
            y: screenHeight * 0.6,
        }, {
            x: screenWidth * 0.52,
            y: screenHeight * 0.78,
        }, {
            x: screenWidth * 0.42,
            y: screenHeight * 0.72,
        }, {
            x: screenWidth * 0.48,
            y: screenHeight * 0.525,
        }, {
            x: screenWidth * 0.565,
            y: screenHeight * 0.4,
        }, {
            x: screenWidth * 0.555,
            y: screenHeight * 0.35,
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
        if(this.state.dot8) {
            this.setState({showTracing: 1, tracing: shaded_8_1});
        } else {
            //alert('Released');
            this.clearBoard();
        }
    }

    clearBoard = () => {
        this.setState({dot1: false, dot2: false, dot3: false, 
            dot4: false, dot5: false, dot6: false, dot7: false, dot8: false, 
            showShaded: 0, showTracing: 1});
        this.setState({tracing: trace1});
    }

    render() {

        StatusBar.setHidden(true);
        return (
            <View style={{position: 'absolute', 
                        width: boardDimension.width, height: boardDimension.height, top: '20%', left: '12.5%', 
                        backgroundColor: 'rgba(255, 255, 255, 0.000000001)'}}>
                    <View style={{position: 'absolute', width: numberDimension.width, 
                                height: numberDimension.height, 
                                top: '5%', left: '32%', opacity: this.state.showTracing,}}>
                        <Image source={this.state.tracing} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>

                        {/* <View style={[styles.dot, {top: numberDimension.height * 0.11,
                            left: numberDimension.width * 0.45}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.28,
                            left: numberDimension.width * 0.22}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.45,
                            left: numberDimension.width * 0.44}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.7,
                            left: numberDimension.width * 0.81}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.89,
                            left: numberDimension.width * 0.49}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.7,
                            left: numberDimension.width * 0.18}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.46,
                            left: numberDimension.width * 0.5}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.28,
                            left: numberDimension.width * 0.77}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.17,
                            left: numberDimension.width * 0.68}]}></View> */}

                        {/*
                            this.line1 = [{
                                x: numberDimension.width * 0.45,
                                y: numberDimension.height * 0.11,
                            }, {
                                x: numberDimension.width * 0.22,
                                y: numberDimension.height * 0.28,
                            }, {
                                x: numberDimension.width * 0.44,
                                y: numberDimension.height * 0.45,
                            }, {
                                x: numberDimension.width * 0.81,
                                y: numberDimension.height * 0.7,
                            }, {
                                x: numberDimension.width * 0.49,
                                y: numberDimension.height * 0.89,
                            }, {
                                x: numberDimension.width * 0.18,
                                y: numberDimension.height * 0.7,
                            }, {
                                x: numberDimension.width * 0.5,
                                y: numberDimension.height * 0.46,
                            }, {
                                x: numberDimension.width * 0.77,
                                y: numberDimension.height * 0.28,
                            }, {
                                x: numberDimension.width * 0.68,
                                y: numberDimension.height * 0.17,
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

                // <View style={[styles.dot, {top: screenHeight * 0.32,
                //     left: screenWidth * 0.45}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.495,
                //     left: screenWidth * 0.45}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.6,
                //     left: screenWidth * 0.57}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.78,
                //     left: screenWidth * 0.52}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.72,
                //     left: screenWidth * 0.42}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.525,
                //     left: screenWidth * 0.48}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.4,
                //     left: screenWidth * 0.565}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.35,
                //     left: screenWidth * 0.555}]}></View>

                //     {/*
                //         this.line1 = [{
                //             x: screenWidth * 0.45,
                //             y: screenHeight * 0.32,
                //         }, {
                //             x: screenWidth * 0.45,
                //             y: screenHeight * 0.495,
                //         }, {
                //             x: screenWidth * 0.57,
                //             y: screenHeight * 0.6,
                //         }, {
                //             x: screenWidth * 0.52,
                //             y: screenHeight * 0.78,
                //         }, {
                //             x: screenWidth * 0.42,
                //             y: screenHeight * 0.72,
                //         }, {
                //             x: screenWidth * 0.48,
                //             y: screenHeight * 0.525,
                //         }, , {
                //             x: screenWidth * 0.565,
                //             y: screenHeight * 0.4,
                //         }, {
                //             x: screenWidth * 0.555,
                //             y: screenHeight * 0.35,
                //         }, ];
                //     */}
        )
    }
}

export default withNavigation(EightTracing);