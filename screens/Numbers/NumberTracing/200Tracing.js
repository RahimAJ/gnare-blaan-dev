import React, { Component } from 'react';
import { View, Dimensions, ImageBackground, StyleSheet, Image, PanResponder, TouchableOpacity, StatusBar, Animated } from 'react-native';
import { withNavigation } from 'react-navigation';

import Home_icon from '../../images/Home_icon.png';
import Back_icon from '../../images/Back_icon.png';
import imageBG from '../../images/BG.jpg';
import PencilIcon from '../../images/Pencil_icon.png';

import trace1 from '../numberTracingGIF/2_1.gif';
import trace2 from '../numberTracingGIF/2_2.gif';

import shaded_2_1 from '../numberTracingImage/shaded_2_1.png';
import shaded_2_2 from '../numberTracingImage/shaded_2_2.png';
import traceZero from '../numberTracingImage/0.png';

import shaded_0 from '../numberTracingImage/shaded_0.png';

import trace3 from '../numberTracingGIF/0.gif';

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js'; 
import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';
import { scopeX, scopeY, trail, } from '../numbersImport';
import {sound} from '../../HomePage';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const shadedLine = [shaded_2_1, shaded_2_2, shaded_0];
const tracingLine = [trace1, trace2, trace3];

const boardDimension = {
    width: screenWidth * 0.75,
    height: screenHeight * 0.7,
};

const numberDimension = {
    width: boardDimension.width * 0.3,
    height: boardDimension.height * 0.9,
}

const numberDimension2 = {
    width: boardDimension.width * 0.3,
    height: boardDimension.height * 0.9,
}

class TwoHundredTracing extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this. state = {
            
            //Tracing State
            shaded: shadedLine[0],

            tracing: tracingLine[0],
            tracing2: traceZero,
            tracing3: traceZero,
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
            fot9: false,
            dot10: false,
            dot11: false,
            dot12: false,
            dot13: false,
            dot14: false,
        },

        // Dots Locations
        this.line1 = [{
            x: screenWidth * 0.25,
            y: screenHeight * 0.315,
        }, {
            x: screenWidth * 0.36,
            y: screenHeight * 0.4,
        }, {
            x: screenWidth * 0.325,
            y: screenHeight * 0.55,
        }, {
            x: screenWidth * 0.26,
            y: screenHeight * 0.67,
        },{
            x: screenWidth * 0.27,
            y: screenHeight * 0.78,
        }, {
            x: screenWidth * 0.33,
            y: screenHeight * 0.78,
        },
        {
            x: screenWidth * 0.45,
            y: screenHeight * 0.35,
        }, {
            x: screenWidth * 0.44,
            y: screenHeight * 0.7,
        }, {
            x: screenWidth * 0.55,
            y: screenHeight * 0.74,
        }, {
            x: screenWidth * 0.56,
            y: screenHeight * 0.4,
        }, 
        {
            x: screenWidth * 0.675,
            y: screenHeight * 0.35,
        }, {
            x: screenWidth * 0.665,
            y: screenHeight * 0.7,
        }, {
            x: screenWidth * 0.775,
            y: screenHeight * 0.74,
        }, {
            x: screenWidth * 0.785,
            y: screenHeight * 0.4,
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
        
        } else if(this.state.dot8 && !this.state.dot9) {
            this.setState({dot9: 
                ((X >= this.line1[8].x - scopeX && X <= this.line1[8].x + scopeX) && 
                (Y >= this.line1[8].y - scopeY && Y <= this.line1[8].y + scopeY)) ? true : false});
        
        } else if(this.state.dot9 && !this.state.dot10) {
            this.setState({dot10: 
                ((X >= this.line1[9].x - scopeX && X <= this.line1[9].x + scopeX) && 
                (Y >= this.line1[9].y - scopeY && Y <= this.line1[9].y + scopeY)) ? true : false});
        
        } else if(this.state.dot10 && !this.state.dot11) {
            this.setState({dot11: 
                ((X >= this.line1[10].x - scopeX && X <= this.line1[10].x + scopeX) && 
                (Y >= this.line1[10].y - scopeY && Y <= this.line1[10].y + scopeY)) ? true : false});
        
        } else if(this.state.dot11 && !this.state.dot12) {
            this.setState({dot12: 
                ((X >= this.line1[11].x - scopeX && X <= this.line1[11].x + scopeX) && 
                (Y >= this.line1[11].y - scopeY && Y <= this.line1[11].y + scopeY)) ? true : false});
        
        } else if(this.state.dot12 && !this.state.dot13) {
            this.setState({dot13: 
                ((X >= this.line1[12].x - scopeX && X <= this.line1[12].x + scopeX) && 
                (Y >= this.line1[12].y - scopeY && Y <= this.line1[12].y + scopeY)) ? true : false});
        
        } else if(this.state.dot13 && !this.state.dot14) {
            this.setState({dot14: 
                ((X >= this.line1[13].x - scopeX && X <= this.line1[13].x + scopeX) && 
                (Y >= this.line1[13].y - scopeY && Y <= this.line1[13].y + scopeY)) ? true : false});
        
        } 
    }

    ifTraced = () => {
        if(this.state.dot4) {
            if(this.state.dot6) {
                if(this.state.dot10) {
                    if(this.state.dot14) {
                        this.setState({arrayMove: [], tracing3: shadedLine[2]});
                    } else {
                        this.setState({arrayMove: [], tracing2: shadedLine[2], tracing3: tracingLine[2],
                            showTracing: 0, dot11: false, dot12: false, dot13: false,
                            dot14: false,});
                    }
                } else {
                    this.setState({arrayMove: [], shaded: shadedLine[1], tracing2: tracingLine[2],
                        showTracing: 0, dot7: false, dot8: false, dot9: false,
                        dot10: false,showShaded: 1,});
                }
            } else {
                this.setState({arrayMove: [], showShaded: 1, shaded: shadedLine[0],
                 tracing: tracingLine[1], dot5: false, dot6: false,});
            }
        } else {
            this.clearBoard();
        }
    }

    clearBoard = () => {
        this.setState({arrayMove: [], dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false,
            dot7: false, dot8: false, dot9: false, dot10: false, dot11: false, dot12: false,
            dot13: false, dot14: false,
            showShaded: 0, shaded: shadedLine[0], tracing: tracingLine[0], showTracing: 1,
            tracing2: traceZero, tracing3: traceZero});
    }

    render() {

        StatusBar.setHidden(true);
        return (
            <View style={{position: 'absolute', 
                        width: boardDimension.width, height: boardDimension.height, 
                        top: '20%', left: '12.5%', backgroundColor: 'rgba(255, 255, 255, 0.000000001)'}}>
                    <View style={{position: 'absolute', width: numberDimension.width, 
                                height: numberDimension.height, 
                                top: '5%', left: '7.5%', opacity: this.state.showTracing,}}>
                        <Image source={this.state.tracing} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                    </View>

                    <View style={{position: 'absolute', width: numberDimension.width, 
                                height: numberDimension.height, 
                                top: '5%', left: '7.5%', opacity: this.state.showShaded}}>
                        <Image source={this.state.shaded} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                    </View>

                    <View style={{position: 'absolute', width: numberDimension.width, 
                                height: numberDimension.height, 
                                top: '5%', left: '37.5%',}}>
                        <Image source={this.state.tracing2} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                    </View>

                    <View style={{position: 'absolute', width: '30%', height: '90%', 
                                top: '5%', left: '67.5%',}}>
                        <Image source={this.state.tracing3} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
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

                // <View style={[styles.dot, {top: screenHeight * 0.315,
                //     left: screenWidth * 0.25}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.4,
                //     left: screenWidth * 0.36}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.55,
                //     left: screenWidth * 0.325}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.67,
                //     left: screenWidth * 0.26}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.78,
                //     left: screenWidth * 0.27}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.78,
                //     left: screenWidth * 0.33}]}></View>

                // {/*
                //     this.line1 = [{
                //         x: screenWidth * 0.25,
                //         y: screenHeight * 0.315,
                //     }, {
                //         x: screenWidth * 0.36,
                //         y: screenHeight * 0.4,
                //     }, {
                //         x: screenWidth * 0.325,
                //         y: screenHeight * 0.55,
                //     }, {
                //         x: screenWidth * 0.26,
                //         y: screenHeight * 0.67,
                //     },{
                //         x: screenWidth * 0.27,
                //         y: screenHeight * 0.78,
                //     }, {
                //         x: screenWidth * 0.33,
                //         y: screenHeight * 0.78,
                //     },
                //     {
                //         x: screenWidth * 0.45,
                //         y: screenHeight * 0.35,
                //     }, {
                //         x: screenWidth * 0.44,
                //         y: screenHeight * 0.7,
                //     }, {
                //         x: screenWidth * 0.55,
                //         y: screenHeight * 0.74,
                //     }, {
                //         x: screenWidth * 0.56,
                //         y: screenHeight * 0.4,
                //     }, 
                //     {
                //         x: screenWidth * 0.675,
                //         y: screenHeight * 0.35,
                //     }, {
                //         x: screenWidth * 0.665,
                //         y: screenHeight * 0.7,
                //     }, {
                //         x: screenWidth * 0.775,
                //         y: screenHeight * 0.74,
                //     }, {
                //         x: screenWidth * 0.785,
                //         y: screenHeight * 0.4,
                //     }, ];
                // */}

                // <View style={[styles.dot, {top: screenHeight * 0.35,
                //     left: screenWidth * 0.47}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.7,
                //     left: screenWidth * 0.46}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.74,
                //     left: screenWidth * 0.57}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.4,
                //     left: screenWidth * 0.58}]}></View>

                // <View style={[styles.dot, {top: screenHeight * 0.35,
                //     left: screenWidth * 0.695}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.7,
                //     left: screenWidth * 0.685}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.74,
                //     left: screenWidth * 0.795}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.4,
                //     left: screenWidth * 0.805}]}></View>
        )
    }
}

export default withNavigation(TwoHundredTracing);