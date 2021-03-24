import React, { Component } from 'react';
import { View, Dimensions, Image, TouchableOpacity, StatusBar } from 'react-native';
import { withNavigation } from 'react-navigation';

import PencilIcon from '../../images/Pencil_icon.png';

import trace1 from '../numberTracingGIF/8_1.gif';

import shaded_8_1 from '../numberTracingImage/shaded_8_1.png';

import shaded_0 from '../numberTracingImage/shaded_0.png';
import traceZero from '../numberTracingImage/0.png';
import trace8 from '../numberTracingImage/8.png';

import trace2 from '../numberTracingGIF/0.gif';

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js'; 
import { scopeX, scopeY, trail } from '../numbersImport';
import {sound} from '../../HomePage';
import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const shadedLine = [shaded_8_1, shaded_0];
const tracingLine = [trace1, trace2];

const boardDimension = {
    width: screenWidth * 0.75,
    height: screenHeight * 0.7,
};

const numberDimension = {
    width: boardDimension.width * 0.35,
    height: boardDimension.height * 0.9,
}

const numberDimension2 = {
    width: boardDimension.width * 0.35,
    height: boardDimension.height * 0.9,
}

class EightyTracing extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this. state = {
            
            //Tracing State
            tracing: tracingLine[0],
            tracing2: traceZero,
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
        },

        // Dots Locations
        this.line1= [{
            x: screenWidth * 0.35,
            y: screenHeight * 0.3,
        }, {
            x: screenWidth * 0.29,
            y: screenHeight * 0.42,
        }, {
            x: screenWidth * 0.4,
            y: screenHeight * 0.535,
        }, {
            x: screenWidth * 0.435,
            y: screenHeight * 0.73,
        }, {
            x: screenWidth * 0.3,
            y: screenHeight * 0.75,
        }, {
            x: screenWidth * 0.3,
            y: screenHeight * 0.575,
        }, {
            x: screenWidth * 0.43,
            y: screenHeight * 0.45,
        }, {
            x: screenWidth * 0.43,
            y: screenHeight * 0.38,
        }, {
            x: screenWidth * 0.57,
            y: screenHeight * 0.35,
        }, {
            x: screenWidth * 0.57,
            y: screenHeight * 0.725,
        }, {
            x: screenWidth * 0.69,
            y: screenHeight * 0.74,
        }, {
            x: screenWidth * 0.7,
            y: screenHeight * 0.39,
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
        
        } 
    }

    ifTraced = () => {
        if(this.state.dot8) {
            if(this.state.dot12) {
                this.setState({arrayMove: [], tracing2: shadedLine[1]});
            } else {
                this.setState({arrayMove: [], dot11: false, dot10: false, dot12: false,
                    tracing: shadedLine[0], tracing2: tracingLine[1], dot9: false,});
            }
        } else {
            this.clearBoard();
        }
    }

    clearBoard = () => {
        this.setState({tracing: trace8});
        this.setState({arrayMove: [], dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false,
            dot7: false, dot8: false, dot9: false, dot10: false, dot11: false, dot12: false,
            tracing: tracingLine[0], tracing2: traceZero});
    }

    render() {

        StatusBar.setHidden(true);
        return (
            <View style={{position: 'absolute', 
                        width: boardDimension.width, height: boardDimension.height, 
                        top: '20%', left: '12.5%', backgroundColor: 'rgba(255, 255, 255, 0.000000001)'}}>
                    <View style={{position: 'absolute', width: numberDimension.width, 
                                height: numberDimension.height, 
                                top: '5%', left: '15%',}}>
                        <Image source={this.state.tracing} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                        
                        {/* <View style={[styles.dot, {top: numberDimension.height * 0.12,
                            left: numberDimension.width * 0.75}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.25,
                            left: numberDimension.width * 0.5}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.33,
                            left: numberDimension.width * 0.2}]}></View> */}
                        
                        {/*
                            this.line1 = [{
                                x: numberDimension.width * 0.75,
                                y: numberDimension.height * 0.12,
                            }, {
                                x: numberDimension.width * 0.5,
                                y: numberDimension.height * 0.25,
                            }, {
                                x: numberDimension.width * 0.2,
                                y: numberDimension.height * 0.33,
                            }, ];
                        */}

                    {/* <View style={[styles.dot, {top: numberDimension.height * 0.3,
                            left: numberDimension.width * 0.75}]}></View>
                    <View style={[styles.dot, {top: numberDimension.height * 0.55,
                            left: numberDimension.width * 0.75}]}></View>
                    <View style={[styles.dot, {top: numberDimension.height * 0.8,
                            left: numberDimension.width * 0.75}]}></View> */}
                    
                    {/*
                        this.line2 = [{
                            x: numberDimension.width * 0.75,
                                y: numberDimension.height * 0.3,
                            }, {
                                x: numberDimension.width * 0.75,
                                y: numberDimension.height * 0.55,
                            }, {
                                x: numberDimension.width * 0.8,
                                y: numberDimension.height * 0.75,
                        }, ];
                    */}

                    </View>

                    <View style={{position: 'absolute', width: numberDimension.width, 
                                height: numberDimension.height, 
                                top: '5%', left: '50%',}}>
                        <Image source={this.state.tracing2} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                        
                        {/* <View style={[styles.dot, {top: numberDimension2.height * 0.12,
                            left: numberDimension2.width * 0.5}]}></View>
                        <View style={[styles.dot, {top: numberDimension2.height * 0.35,
                            left: numberDimension2.width * 0.2}]}></View>
                        <View style={[styles.dot, {top: numberDimension2.height * 0.7,
                            left: numberDimension2.width * 0.2}]}></View>
                        <View style={[styles.dot, {top: numberDimension2.height * 0.89,
                            left: numberDimension2.width * 0.52}]}></View>
                        <View style={[styles.dot, {top: numberDimension2.height * 0.68,
                            left: numberDimension2.width * 0.78}]}></View>
                        <View style={[styles.dot, {top: numberDimension2.height * 0.28,
                            left: numberDimension2.width * 0.78}]}></View> */}
                        
                        {/*
                            this.line3 = [{
                                x: numberDimension.width * 0.4,
                                y: numberDimension.height * 0.12,
                            }, {
                                x: numberDimension.width * 0.2,
                                y: numberDimension.height * 0.3,
                            }, {
                                x: numberDimension.width * 0.2,
                                y: numberDimension.height * 0.7,
                            }, {
                                x: numberDimension.width * 0.5,
                                y: numberDimension.height * 0.89,
                            }, {
                                x: numberDimension.width * 0.78,
                                y: numberDimension.height * 0.68,
                            }, {
                                x: numberDimension.width * 0.78,
                                y: numberDimension.height * 0.28,
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

export default withNavigation(EightyTracing);