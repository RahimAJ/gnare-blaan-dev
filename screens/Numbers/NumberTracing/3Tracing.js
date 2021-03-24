import React, { Component } from 'react';
import { View, Image, 
    TouchableOpacity, StatusBar, 
    Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';

import Home_icon from '../../images/Home_icon.png';
import Back_icon from '../../images/Back_icon.png';
import imageBG from '../../images/BG.jpg';
import PencilIcon from '../../images/Pencil_icon.png';

import trace1 from '../numberTracingGIF/3_1.gif';
import trace2 from '../numberTracingGIF/3_2.gif';

import shaded_3_1 from '../numberTracingImage/shaded_3_1.png';
import shaded_3_2 from '../numberTracingImage/shaded_3_2.png';

import { numberDimension, boardDimension,
    scopeX, scopeY } from '../numbersImport';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js'; 
import {sound} from '../../HomePage';

const shadedLine = [shaded_3_1, shaded_3_2];
const tracingLine = [trace1, trace2];

import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';

class ThreeTracing extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            // Tracing State
            shaded: shadedLine[0],
            tracing: tracingLine[0],
            lineIndex: 0,
            showShaded: 0,
            showTracing: 1,

            // Boolean
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
            x: screenWidth * 0.42,
            y: screenHeight * 0.35,
        }, {
            x: screenWidth * 0.5,
            y: screenHeight * 0.29,
        }, {
            x: screenWidth * 0.57,
            y: screenHeight * 0.4,
        }, {
            x: screenWidth * 0.55,
            y: screenHeight * 0.47,
        }, ];

        this.line2 = [{
            x: screenWidth * 0.575,
            y: screenHeight * 0.6,
        }, {
            x: screenWidth * 0.565,
            y: screenHeight * 0.73,
        }, {
            x: screenWidth * 0.5,
            y: screenHeight * 0.8,
        }, {
            x: screenWidth * 0.44,
            y: screenHeight * 0.77,
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
                ((X >= this.line2[0].x - scopeX && X <= this.line2[0].x + scopeX) && 
                (Y >= this.line2[0].y - scopeY && Y <= this.line2[0].y + scopeY)) ? true : false});
        
        } else if(this.state.dot5 && !this.state.dot6) {
            this.setState({dot6: 
                ((X >= this.line2[1].x - scopeX && X <= this.line2[1].x + scopeX) && 
                (Y >= this.line2[1].y - scopeY && Y <= this.line2[1].y + scopeY)) ? true : false});
        
        } else if(this.state.dot6 && !this.state.dot7) {
            this.setState({dot7: 
                ((X >= this.line2[2].x - scopeX && X <= this.line2[2].x + scopeX) && 
                (Y >= this.line2[2].y - scopeY && Y <= this.line2[2].y + scopeY)) ? true : false});
        
        } else if(this.state.dot7 && !this.state.dot8) {
            this.setState({dot8: 
                ((X >= this.line2[3].x - scopeX && X <= this.line2[3].x + scopeX) && 
                (Y >= this.line2[3].y - scopeY && Y <= this.line2[3].y + scopeY)) ? true : false});
        } 
    }

    ifTraced = () => {
        if(this.state.dot4) {
            if(this.state.dot8) {
                this.setState({arrayMove: [], showShaded: 1, shadedIndex: 1,
                    shaded: shadedLine[1], showTracing: 0});
            } else {
                this.setState({arrayMove: [], showShaded: 1, dot7: false, 
                    dot5: false, dot6: false, dot8: false,
                    shaded: shadedLine[0], shadedIndex: 0,
                    tracing: tracingLine[1]});
            }
        } else {
            //alert('After Release!');
            this.clearBoard();
        }
    }

    clearBoard = () => {
        this.setState({arrayMove: [], dot1: false, dot2: false, dot3: false, 
            dot4: false, dot5: false, dot6: false, dot7: false, dot8: false,
            showShaded: 0, shaded: shadedLine[0], tracing: tracingLine[0], showTracing: 1});
    }

    render() {
        
        StatusBar.setHidden(true);
        return (
            <View style={{position: 'absolute', 
                        width: boardDimension.width, height: boardDimension.height, top: '20%', left: '12.5%'
                        , backgroundColor: 'rgba(255, 255, 255, 0.000001'}}>
                    <View style={{position: 'absolute', width: numberDimension.width, height: numberDimension.height,
                            
                                top: '5%', left: '32%', opacity: this.state.showTracing,}}>
                        <Image source={this.state.tracing} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                        
                        {/* <View style={[styles.dot, {top: screenHeight * 0.13,
                            left: screenWidth * 0.3}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.11,
                            left: numberDimension.width * 0.62}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.3,
                            left: numberDimension.width * 0.77}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.35,
                            left: numberDimension.width * 0.7}]}></View> */}

                        {/*
                            this.line1 = [{
                                x: numberDimension.width * 0.3,
                                y: numberDimension.height * 0.13,
                            }, {
                                x: numberDimension.width * 0.62,
                                y: numberDimension.height * 0.11,
                            }, {
                                x: numberDimension.width * 0.77,
                                y: numberDimension.height * 0.3,
                            }, {
                                x: numberDimension.width * 0.66,
                                y: numberDimension.height * 0.4,
                            }, ];
                        */}

                        {/* <View style={[styles.dot, {top: numberDimension.height * 0.6,
                            left: numberDimension.width * 0.82}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.75,
                            left: numberDimension.width * 0.8}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.9,
                            left: numberDimension.width * 0.55}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.85,
                            left: numberDimension.width * 0.3}]}></View> */}

                        {/*
                            this.line2 = [{
                                x: numberDimension.width * 0.77,
                                y: numberDimension.height * 0.55,
                            }, {
                                x: numberDimension.width * 0.75,
                                y: numberDimension.height * 0.8,
                            }, {
                                x: numberDimension.width * 0.55,
                                y: numberDimension.height * 0.9,
                            }, {
                                x: numberDimension.width * 0.27,
                                y: numberDimension.height * 0.85,
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

                // <View style={[styles.dot, {top: screenHeight * 0.35,
                //     left: screenWidth * 0.42}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.29,
                //     left: screenWidth * 0.5}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.4,
                //     left: screenWidth * 0.57}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.47,
                //     left: screenWidth * 0.55}]}></View>
                    
                //     {/*
                //         this.line1 = [{
                //             x: screenWidth * 0.42,
                //             y: screenHeight * 0.35,
                //         }, {
                //             x: screenWidth * 0.5,
                //             y: screenHeight * 0.29,
                //         }, {
                //             x: screenWidth * 0.57,
                //             y: screenHeight * 0.4,
                //         }, {
                //             x: screenWidth * 0.55,
                //             y: screenHeight * 0.47,
                //         }, ];
                //     */}

                // <View style={[styles.dot, {top: screenHeight * 0.6,
                //     left: screenWidth * 0.575}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.73,
                //     left: screenWidth * 0.565}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.8,
                //     left: screenWidth * 0.5}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.77,
                //     left: screenWidth * 0.44}]}></View>
                
                // {/*
                //     this.line2 = [{
                //         x: screenWidth * 0.575,
                //         y: screenHeight * 0.6,
                //     }, {
                //         x: screenWidth * 0.565,
                //         y: screenHeight * 0.73,
                //     }, {
                //         x: screenWidth * 0.5,
                //         y: screenHeight * 0.8,
                //     }, {
                //         x: screenWidth * 0.44,
                //         y: screenHeight * 0.77,
                //     }, ];
                // */}
        )
    }
}

export default withNavigation(ThreeTracing);