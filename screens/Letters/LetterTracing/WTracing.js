import React, { Component } from 'react';
import { View, Dimensions, Image, TouchableOpacity, StatusBar } from 'react-native';
import { withNavigation } from 'react-navigation';

import WLetter_1 from '../LettersAssets/tracingW_1.gif';
import WLetter_2 from '../LettersAssets/tracingW_2.gif';
import WLetter_3 from '../LettersAssets/tracingW_3.gif';
import WLetter_4 from '../LettersAssets/tracingW_4.gif';
import WLetter_5 from '../LettersAssets/tracingW_5.gif';
import WLetter_6 from '../LettersAssets/tracingW_6.gif';
import WLetter_7 from '../LettersAssets/tracingW_7.gif';
import WLetter_8 from '../LettersAssets/tracingW_8.gif';

import shaded_W_1 from '../LettersAssets/shaded_W_1.png';
import shaded_W_2 from '../LettersAssets/shaded_W_2.png';
import shaded_W_3 from '../LettersAssets/shaded_W_3.png';
import shaded_W_4 from '../LettersAssets/shaded_W_4.png';
import shaded_W_5 from '../LettersAssets/shaded_W_5.png';
import shaded_W_6 from '../LettersAssets/shaded_W_6.png';
import shaded_W_7 from '../LettersAssets/shaded_W_7.png';
import shaded_W_8 from '../LettersAssets/shaded_W_8.png';

import PencilIcon from '../../images/Pencil_icon.png';

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js'; 

import { scopeX, scopeY } from '../letterImport';
import {sound} from '../../HomePage';
import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';

const tracingLine = [WLetter_1, WLetter_2, WLetter_3, WLetter_4, WLetter_5, WLetter_6
    , WLetter_7, WLetter_8];
const shadedLine = [shaded_W_1, shaded_W_2, shaded_W_3, shaded_W_4, shaded_W_5, shaded_W_6,
    shaded_W_7, shaded_W_8];

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const boardDimension = {
    width: screenWidth * 0.75,
    height: screenHeight * 0.7,
};

const numberDimension = {
    width: boardDimension.width * 0.85,
    height: boardDimension.height * 0.8,
}


class WTracing extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this. state = {
            tracing: tracingLine[0],
            showShaded: 0,
            shaded: shadedLine[0],
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
            dot15: false,
            dot16: false,
            dot17: false,
            dot18: false,
            dot19: false,
            dot20: false,
            dot21: false,
            dot22: false,
            dot23: false,
            dot24: false,
            dot25: false,
        },

        // Dots Location
        this.line1 = [{
            x: screenWidth * 0.238,
            y: screenHeight * 0.39,
        }, {
            x: screenWidth * 0.258,
            y: screenHeight * 0.55,
        }, {
            x: screenWidth * 0.276,
            y: screenHeight * 0.68,
        }, {
            x: screenWidth * 0.35,
            y: screenHeight * 0.41,
        }, {
            x: screenWidth * 0.325,
            y: screenHeight * 0.59,
        }, {
            x: screenWidth * 0.394,
            y: screenHeight * 0.45,
        }, {
            x: screenWidth * 0.42,
            y: screenHeight * 0.61,
        }, {
            x: screenWidth * 0.5,
            y: screenHeight * 0.39,
        }, {
            x: screenWidth * 0.48,
            y: screenHeight * 0.58,
        }, {
            x: screenWidth * 0.583,
            y: screenHeight * 0.52,
        }, {
            x: screenWidth * 0.61,
            y: screenHeight * 0.68,
        }, {
            x: screenWidth * 0.675,
            y: screenHeight * 0.52,
        }, {
            x: screenWidth * 0.658,
            y: screenHeight * 0.65,
        }, {
            x: screenWidth * 0.71,
            y: screenHeight * 0.55,
        }, {
            x: screenWidth * 0.73,
            y: screenHeight * 0.68,
        }, {
            x: screenWidth * 0.795,
            y: screenHeight * 0.53,
        }, {
            x: screenWidth * 0.78,
            y: screenHeight * 0.65,
        }, 
        ];
    }

    letterTrace = (X, Y) => {

        // 2st Line, tracing
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
        
        } 
        
        // Reverse Tracing, 2nd line
        if(this.state.dot3 && !this.state.dot18) {
            this.setState({dot18: 
                ((X >= this.line1[4].x - scopeX && X <= this.line1[4].x + scopeX) && 
                (Y >= this.line1[4].y - scopeY && Y <= this.line1[4].y + scopeY)) ? true : false});
        
        } else if(this.state.dot18 && !this.state.dot19) {
            this.setState({dot19: 
                ((X >= this.line1[3].x - scopeX && X <= this.line1[3].x + scopeX) && 
                (Y >= this.line1[3].y - scopeY && Y <= this.line1[3].y + scopeY)) ? true : false});
        
        } 
        
        // 2nd Line tracing
        if(this.state.dot3 && !this.state.dot4) {
            this.setState({dot4: 
                ((X >= this.line1[3].x - scopeX && X <= this.line1[3].x + scopeX) && 
                (Y >= this.line1[3].y - scopeY && Y <= this.line1[3].y + scopeY)) ? true : false});
        
        } else if(this.state.dot4 && !this.state.dot5) {
            this.setState({dot5: 
                ((X >= this.line1[4].x - scopeX && X <= this.line1[4].x + scopeX) && 
                (Y >= this.line1[4].y - scopeY && Y <= this.line1[4].y + scopeY)) ? true : false});
        
        } 
        
        // 3rd line, tracing
        if((this.state.dot5 || this.state.dot19) && !this.state.dot6) {
            this.setState({dot6: 
                ((X >= this.line1[5].x - scopeX && X <= this.line1[5].x + scopeX) && 
                (Y >= this.line1[5].y - scopeY && Y <= this.line1[5].y + scopeY)) ? true : false});
        
        } else if(this.state.dot6 && !this.state.dot7) {
            this.setState({dot7: 
                ((X >= this.line1[6].x - scopeX && X <= this.line1[6].x + scopeX) && 
                (Y >= this.line1[6].y - scopeY && Y <= this.line1[6].y + scopeY)) ? true : false});
        
        } 


        // Reverse 4th line, tracing
        if(this.state.dot7 && !this.state.dot20) {
            this.setState({dot20: 
                ((X >= this.line1[8].x - scopeX && X <= this.line1[8].x + scopeX) && 
                (Y >= this.line1[8].y - scopeY && Y <= this.line1[8].y + scopeY)) ? true : false});
        
        } else if(this.state.dot20 && !this.state.dot21) {
            this.setState({dot21: 
                ((X >= this.line1[7].x - scopeX && X <= this.line1[7].x + scopeX) && 
                (Y >= this.line1[7].y - scopeY && Y <= this.line1[7].y + scopeY)) ? true : false});
        
        } 
        
        // 4th line, tracing
         if(this.state.dot7 && !this.state.dot8) {
            this.setState({dot8: 
                ((X >= this.line1[7].x - scopeX && X <= this.line1[7].x + scopeX) && 
                (Y >= this.line1[7].y - scopeY && Y <= this.line1[7].y + scopeY)) ? true : false});
        
        } else if(this.state.dot8 && !this.state.dot9) {
            this.setState({dot9: 
                ((X >= this.line1[8].x - scopeX && X <= this.line1[8].x + scopeX) && 
                (Y >= this.line1[8].y - scopeY && Y <= this.line1[8].y + scopeY)) ? true : false});
        
        } 
        
        
        // Small Letter, 5th line, tracing
        if((this.state.dot9 || this.state.dot21) && !this.state.dot10) {
            this.setState({dot10: 
                ((X >= this.line1[9].x - scopeX && X <= this.line1[9].x + scopeX) && 
                (Y >= this.line1[9].y - scopeY && Y <= this.line1[9].y + scopeY)) ? true : false});
        
        } else if(this.state.dot10 && !this.state.dot11) {
            this.setState({dot11: 
                ((X >= this.line1[10].x - scopeX && X <= this.line1[10].x + scopeX) && 
                (Y >= this.line1[10].y - scopeY && Y <= this.line1[10].y + scopeY)) ? true : false});
        
        } 
        
        // Small Letter, Reverse 6th line, tracing
        if(this.state.dot11 && !this.state.dot22) {
            this.setState({dot22: 
                ((X >= this.line1[12].x - scopeX && X <= this.line1[12].x + scopeX) && 
                (Y >= this.line1[12].y - scopeY && Y <= this.line1[12].y + scopeY)) ? true : false});

        } else if(this.state.dot22 && !this.state.dot23) {
            this.setState({dot23: 
                ((X >= this.line1[11].x - scopeX && X <= this.line1[11].x + scopeX) && 
                (Y >= this.line1[11].y - scopeY && Y <= this.line1[11].y + scopeY)) ? true : false});
        
        } 

        // Small Letter, 6th line, tracing
        if(this.state.dot11 && !this.state.dot12) {
            this.setState({dot12: 
                ((X >= this.line1[11].x - scopeX && X <= this.line1[11].x + scopeX) && 
                (Y >= this.line1[11].y - scopeY && Y <= this.line1[11].y + scopeY)) ? true : false});
        
        } else if(this.state.dot12 && !this.state.dot13) {
            this.setState({dot13: 
                ((X >= this.line1[12].x - scopeX && X <= this.line1[12].x + scopeX) && 
                (Y >= this.line1[12].y - scopeY && Y <= this.line1[12].y + scopeY)) ? true : false});
        
        } 
        
        // Small Letter, 7th line, tracing
        if((this.state.dot13 || this.state.dot23) && !this.state.dot14) {
            this.setState({dot14: 
                ((X >= this.line1[13].x - scopeX && X <= this.line1[13].x + scopeX) && 
                (Y >= this.line1[13].y - scopeY && Y <= this.line1[13].y + scopeY)) ? true : false});
        
        } else if(this.state.dot14 && !this.state.dot15) {
            this.setState({dot15: 
                ((X >= this.line1[14].x - scopeX && X <= this.line1[14].x + scopeX) && 
                (Y >= this.line1[14].y - scopeY && Y <= this.line1[14].y + scopeY)) ? true : false});
        
        } 
        
        // Small Letter, Reverse 8th line, tracing
        if(this.state.dot15 && !this.state.dot24) {
            this.setState({dot24: 
                ((X >= this.line1[16].x - scopeX && X <= this.line1[16].x + scopeX) && 
                (Y >= this.line1[16].y - scopeY && Y <= this.line1[16].y + scopeY)) ? true : false});
        
        } else if(this.state.dot16 && !this.state.dot25) {
            this.setState({dot25: 
                ((X >= this.line1[15].x - scopeX && X <= this.line1[15].x + scopeX) && 
                (Y >= this.line1[15].y - scopeY && Y <= this.line1[15].y + scopeY)) ? true : false});
        
        } 

        // Small Letter, 8th line, tracing
        if(this.state.dot15 && !this.state.dot16) {
            this.setState({dot16: 
                ((X >= this.line1[15].x - scopeX && X <= this.line1[15].x + scopeX) && 
                (Y >= this.line1[15].y - scopeY && Y <= this.line1[15].y + scopeY)) ? true : false});
        
        } else if(this.state.dot16 && !this.state.dot17) {
            this.setState({dot17: 
                ((X >= this.line1[16].x - scopeX && X <= this.line1[16].x + scopeX) && 
                (Y >= this.line1[16].y - scopeY && Y <= this.line1[16].y + scopeY)) ? true : false});
        
        } 
    }

    ifTraced = () => {
        if(this.state.dot3) {
            if(this.state.dot5 || this.state.dot19) {
                if(this.state.dot7) {
                    if(this.state.dot9 || this.state.dot21) {
                        if(this.state.dot11) {
                            if(this.state.dot13 || this.state.dot23) {
                                if(this.state.dot15) {
                                    if(this.state.dot17 || this.state.dot25) {
                                        this.setState({shaded: shadedLine[7], showShaded: 1, 
                                            showTracing: 0,});
                                    } else {
                                        this.setState({dot16: false, dot17: false, dot24: false, dot25: false, 
                                            shaded: shadedLine[6], showShaded: 1, tracing: tracingLine[7]});
                                    }
                                } else {
                                    this.setState({dot14: false, dot15: false, 
                                        shaded: shadedLine[5], showShaded: 1, tracing: tracingLine[6]});
                                }
                            } else {
                                this.setState({dot12: false, dot13: false, dot22: false, dot23: false, 
                                    shaded: shadedLine[4], showShaded: 1, tracing: tracingLine[5]});
                            }
                        } else {
                            this.setState({dot10: false, dot11: false,
                                shaded: shadedLine[3], showShaded: 1, tracing: tracingLine[4]});
                        }
                    } else {
                        this.setState({dot8: false, dot20: false, dot21: false, 
                            shaded: shadedLine[2], showShaded: 1, dot9: false, tracing: tracingLine[3]});
                    }
                } else {
                    this.setState({dot7: false, dot6: false,
                        shaded: shadedLine[1], showShaded: 1, tracing: tracingLine[2]});
                }
            } else {
                this.setState({dot5: false, dot4: false, dot18: false, dot19: false, 
                    shaded: shadedLine[0], showShaded: 1, tracing: tracingLine[1]});
            }
        } else {
            this.clearBoard();
        }
    }

    clearBoard = () => {
        this.setState({dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false,
            dot7: false, dot8: false, dot9: false, dot10: false, dot11: false, dot24: false, dot25: false,
            dot12: false, dot13: false, dot14: false, dot15: false, dot18: false, dot19: false,
            dot16: false, dot17: false, dot20: false, dot21: false, dot22: false, dot23: false, shaded: shadedLine[0], showShaded: 0,
            tracing: tracingLine[0], showTracing: 1, tracing: tracingLine[0]});
    }

    render() {

        StatusBar.setHidden(true);
        return (
            <View style={{position: 'absolute', 
                    width: boardDimension.width, height: boardDimension.height, 
                    top: '20%', left: '12.5%', backgroundColor: 'rgba(255, 255, 255, 0.000000001)'}}>
                <View style={{position: 'absolute', width: numberDimension.width, 
                    opacity: this.state.showTracing,
                    height: numberDimension.height, top: '10%', left: '10%'}}>
                    <Image source={this.state.tracing} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                </View>
                <View style={{position: 'absolute', width: numberDimension.width,
                    opacity: this.state.showShaded, 
                    height: numberDimension.height, top: '10%', left: '10%'}}>
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
                            this.letterTrace(X, Y);
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

                // <View style={[styles.dot, {top: screenHeight * 0.39,
                //     left: screenWidth * 0.238}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.55,
                //     left: screenWidth * 0.258}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.68,
                //     left: screenWidth * 0.276}]}></View>

                // <View style={[styles.dot, {top: screenHeight * 0.41,
                //     left: screenWidth * 0.35}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.59,
                //     left: screenWidth * 0.325}]}></View>

                // <View style={[styles.dot, {top: screenHeight * 0.45,
                //     left: screenWidth * 0.394}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.61,
                //     left: screenWidth * 0.42}]}></View>

                // <View style={[styles.dot, {top: screenHeight * 0.39,
                //     left: screenWidth * 0.5}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.58,
                //     left: screenWidth * 0.48}]}></View>
                
                // {/*
                //     this.line1 = [{
                //         x: screenWidth * 0.238,
                //         y: screenHeight * 0.39,
                //     }, {
                //         x: screenWidth * 0.258,
                //         y: screenHeight * 0.55,
                //     }, {
                //         x: screenWidth * 0.276,
                //         y: screenHeight * 0.68,
                //     }, {
                //         x: screenWidth * 0.35,
                //         y: screenHeight * 0.41,
                //     }, {
                //         x: screenWidth * 0.325,
                //         y: screenHeight * 0.59,
                //     }, {
                //         x: screenWidth * 0.394,
                //         y: screenHeight * 0.45,
                //     }, {
                //         x: screenWidth * 0.42,
                //         y: screenHeight * 0.61,
                //     }, {
                //         x: screenWidth * 0.5,
                //         y: screenHeight * 0.39,
                //     }, {
                //         x: screenWidth * 0.48,
                //         y: screenHeight * 0.58,
                //     }, {
                //         x: screenWidth * 0.583,
                //         y: screenHeight * 0.52,
                //     }, {
                //         x: screenWidth * 0.61,
                //         y: screenHeight * 0.68,
                //     }, {
                //         x: screenWidth * 0.675,
                //         y: screenHeight * 0.52,
                //     }, {
                //         x: screenWidth * 0.658,
                //         y: screenHeight * 0.65,
                //     }, {
                //         x: screenWidth * 0.71,
                //         y: screenHeight * 0.55,
                //     }, {
                //         x: screenWidth * 0.73,
                //         y: screenHeight * 0.68,
                //     }, {
                //         x: screenWidth * 0.795,
                //         y: screenHeight * 0.53,
                //     }, {
                //         x: screenWidth * 0.78,
                //         y: screenHeight * 0.65,
                //     }, ];
                // */}

                // <View style={[styles.dot, {top: screenHeight * 0.52,
                //     left: screenWidth * 0.583}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.68,
                //     left: screenWidth * 0.61}]}></View>

                // <View style={[styles.dot, {top: screenHeight * 0.52,
                //     left: screenWidth * 0.675}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.65,
                //     left: screenWidth * 0.658}]}></View>

                // <View style={[styles.dot, {top: screenHeight * 0.55,
                //     left: screenWidth * 0.71}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.68,
                //     left: screenWidth * 0.73}]}></View>

                // <View style={[styles.dot, {top: screenHeight * 0.53,
                //     left: screenWidth * 0.795}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.65,
                //     left: screenWidth * 0.78}]}></View>


                // {/*
                //     this.line1 = [{
                //         x: screenWidth * 0.583,
                //         y: screenHeight * 0.52,
                //     }, {
                //         x: screenWidth * 0.61,
                //         y: screenHeight * 0.68,
                //     }, {
                //         x: screenWidth * 0.675,
                //         y: screenHeight * 0.52,
                //     }, {
                //         x: screenWidth * 0.658,
                //         y: screenHeight * 0.65,
                //     }, {
                //         x: screenWidth * 0.71,
                //         y: screenHeight * 0.55,
                //     }, {
                //         x: screenWidth * 0.73,
                //         y: screenHeight * 0.68,
                //     }, {
                //         x: screenWidth * 0.795,
                //         y: screenHeight * 0.53,
                //     }, {
                //         x: screenWidth * 0.78,
                //         y: screenHeight * 0.65,
                //     }, ];
                // */}
        )
    }
}

export default withNavigation(WTracing);