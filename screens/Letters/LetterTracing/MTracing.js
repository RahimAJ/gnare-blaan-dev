import React, { Component } from 'react';
import { View, Dimensions, Image, TouchableOpacity, StatusBar } from 'react-native';
import { withNavigation } from 'react-navigation';

import MLetter_1 from '../LettersAssets/tracingM_1.gif';
import MLetter_2 from '../LettersAssets/tracingM_2.gif';
import MLetter_3 from '../LettersAssets/tracingM_3.gif';
import MLetter_4 from '../LettersAssets/tracingM_4.gif';
import MLetter_5 from '../LettersAssets/tracingM_5.gif';
import MLetter_6 from '../LettersAssets/tracingM_6.gif';
import MLetter_7 from '../LettersAssets/tracingM_7.gif';

import shaded_M_1 from '../LettersAssets/shaded_M_1.png';
import shaded_M_2 from '../LettersAssets/shaded_M_2.png';
import shaded_M_3 from '../LettersAssets/shaded_M_3.png';
import shaded_M_4 from '../LettersAssets/shaded_M_4.png';
import shaded_M_5 from '../LettersAssets/shaded_M_5.png';
import shaded_M_6 from '../LettersAssets/shaded_M_6.png';
import shaded_M_7 from '../LettersAssets/shaded_M_7.png';

import PencilIcon from '../../images/Pencil_icon.png';

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js'; 

import { scopeX, scopeY, trail } from '../letterImport';
import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';
import {sound} from '../../HomePage';

const tracingLine = [MLetter_1, MLetter_2, MLetter_3, MLetter_4, MLetter_5, MLetter_6, MLetter_7];
const shadedLine = [shaded_M_1, shaded_M_2, shaded_M_3, shaded_M_4, shaded_M_5, shaded_M_6,
    shaded_M_7];

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const boardDimension = {
    width: screenWidth * 0.75,
    height: screenHeight * 0.7,
};

const numberDimension = {
    width: boardDimension.width * 0.85,
    height: boardDimension.height * 0.9,
}


class MTracing extends Component {
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
            dot26: false,
        },

        // Dots Location
        this.line1 = [{
            x: screenWidth * 0.236,
            y: screenHeight * 0.37,
        }, {
            x: screenWidth * 0.236,
            y: screenHeight * 0.55,
        }, {
            x: screenWidth * 0.236,
            y: screenHeight * 0.7,
        }, {
            x: screenWidth * 0.3,
            y: screenHeight * 0.47,
        }, {
            x: screenWidth * 0.323,
            y: screenHeight * 0.65,
        }, {
            x: screenWidth * 0.392,
            y: screenHeight * 0.44,
        }, {
            x: screenWidth * 0.368,
            y: screenHeight * 0.6,
        }, {
            x: screenWidth * 0.45,
            y: screenHeight * 0.37,
        }, {
            x: screenWidth * 0.45,
            y: screenHeight * 0.55,
        }, {
            x: screenWidth * 0.45,
            y: screenHeight * 0.7,
        }, {
            x: screenWidth * 0.565,
            y: screenHeight * 0.5,
        }, {
            x: screenWidth * 0.565,
            y: screenHeight * 0.7,
        }, {
            x: screenWidth * 0.64,
            y: screenHeight * 0.44,
        }, {
            x: screenWidth * 0.683,
            y: screenHeight * 0.55,
        }, {
            x: screenWidth * 0.683,
            y: screenHeight * 0.7,
        }, {
            x: screenWidth * 0.77,
            y: screenHeight * 0.44,
        }, {
            x: screenWidth * 0.802,
            y: screenHeight * 0.55,
        }, {
            x: screenWidth * 0.802,
            y: screenHeight * 0.7,
        }, ];
    }

    letterTrace = (X, Y) => {

        // Reverse 1st line, tracing
        if(!this.state.dot19) {
            this.setState({dot19: 
                ((X >= this.line1[2].x - scopeX && X <= this.line1[2].x + scopeX) && 
                (Y >= this.line1[2].y - scopeY && Y <= this.line1[2].y + scopeY)) ? true : false});
        
        } else if(this.state.dot19 && !this.state.dot20) {
            this.setState({dot20: 
                ((X >= this.line1[1].x - scopeX && X <= this.line1[1].x + scopeX) && 
                (Y >= this.line1[1].y - scopeY && Y <= this.line1[1].y + scopeY)) ? true : false});
        
        } else if(this.state.dot20 && !this.state.dot21) {
            this.setState({dot21: 
                ((X >= this.line1[0].x - scopeX && X <= this.line1[0].x + scopeX) && 
                (Y >= this.line1[0].y - scopeY && Y <= this.line1[0].y + scopeY)) ? true : false});
        
        } 
        
        // 1st line, tracing
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

        
        // 2nd line, tracing
        if((this.state.dot3 || this.state.dot21) && !this.state.dot4) {
            this.setState({dot4: 
                ((X >= this.line1[3].x - scopeX && X <= this.line1[3].x + scopeX) && 
                (Y >= this.line1[3].y - scopeY && Y <= this.line1[3].y + scopeY)) ? true : false});
        
        } else if(this.state.dot4 && !this.state.dot5) {
            this.setState({dot5: 
                ((X >= this.line1[4].x - scopeX && X <= this.line1[4].x + scopeX) && 
                (Y >= this.line1[4].y - scopeY && Y <= this.line1[4].y + scopeY)) ? true : false});
        
        } 
        
        
        // Reverse 3rd line, tracing
        if(this.state.dot5 && !this.state.dot22) {
            this.setState({dot22: 
                ((X >= this.line1[6].x - scopeX && X <= this.line1[6].x + scopeX) && 
                (Y >= this.line1[6].y - scopeY && Y <= this.line1[6].y + scopeY)) ? true : false});
        
        }  else if(this.state.dot22 && !this.state.dot23) {
            this.setState({dot23: 
                ((X >= this.line1[5].x - scopeX && X <= this.line1[5].x + scopeX) && 
                (Y >= this.line1[5].y - scopeY && Y <= this.line1[5].y + scopeY)) ? true : false});
        
        } 

        // 3rd line, tracing
        if(this.state.dot5 && !this.state.dot6) {
            this.setState({dot6: 
                ((X >= this.line1[5].x - scopeX && X <= this.line1[5].x + scopeX) && 
                (Y >= this.line1[5].y - scopeY && Y <= this.line1[5].y + scopeY)) ? true : false});
        
        }  else if(this.state.dot6 && !this.state.dot7) {
            this.setState({dot7: 
                ((X >= this.line1[6].x - scopeX && X <= this.line1[6].x + scopeX) && 
                (Y >= this.line1[6].y - scopeY && Y <= this.line1[6].y + scopeY)) ? true : false});
        
        }

        
        // Reverse 4th line, tracing
        if((this.state.dot7 || this.state.dot23) && !this.state.dot8) {
            this.setState({dot8: 
                ((X >= this.line1[7].x - scopeX && X <= this.line1[7].x + scopeX) && 
                (Y >= this.line1[7].y - scopeY && Y <= this.line1[7].y + scopeY)) ? true : false});
        
        }
        else if(this.state.dot8 && !this.state.dot9) {
            this.setState({dot9: 
                ((X >= this.line1[8].x - scopeX && X <= this.line1[8].x + scopeX) && 
                (Y >= this.line1[8].y - scopeY && Y <= this.line1[8].y + scopeY)) ? true : false});
        
        } 
        else if(this.state.dot9 && !this.state.dot10) {
            this.setState({dot10: 
                ((X >= this.line1[9].x - scopeX && X <= this.line1[9].x + scopeX) && 
                (Y >= this.line1[9].y - scopeY && Y <= this.line1[9].y + scopeY)) ? true : false});
        
        } 
        

        if(this.state.dot10 && !this.state.dot11) {
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
        
        } else if(this.state.dot14 && !this.state.dot15) {
            this.setState({dot15: 
                ((X >= this.line1[14].x - scopeX && X <= this.line1[14].x + scopeX) && 
                (Y >= this.line1[14].y - scopeY && Y <= this.line1[14].y + scopeY)) ? true : false});
        
        } else if(this.state.dot15 && !this.state.dot16) {
            this.setState({dot16: 
                ((X >= this.line1[15].x - scopeX && X <= this.line1[15].x + scopeX) && 
                (Y >= this.line1[15].y - scopeY && Y <= this.line1[15].y + scopeY)) ? true : false});
        
        } else if(this.state.dot16 && !this.state.dot17) {
            this.setState({dot17: 
                ((X >= this.line1[16].x - scopeX && X <= this.line1[16].x + scopeX) && 
                (Y >= this.line1[16].y - scopeY && Y <= this.line1[16].y + scopeY)) ? true : false});
        
        } else if(this.state.dot17 && !this.state.dot18) {
            this.setState({dot18: 
                ((X >= this.line1[17].x - scopeX && X <= this.line1[17].x + scopeX) && 
                (Y >= this.line1[17].y - scopeY && Y <= this.line1[17].y + scopeY)) ? true : false});
        
        } 
    }

    ifTraced = () => {
        if(this.state.dot3 || this.state.dot21) {
            if(this.state.dot5) {
                if(this.state.dot7 || this.state.dot23) {
                    if(this.state.dot10) {
                        if(this.state.dot12) {
                            if(this.state.dot15) {
                                if(this.state.dot18) {
                                    this.setState({shaded: shadedLine[6], showShaded: 1, showTracing: 0,});
                                } else {
                                    this.setState({dot16: false, dot17: false,
                                        shaded: shadedLine[5], showShaded: 1, dot18: false, tracing: tracingLine[6]});
                                }
                            } else {
                                this.setState({dot14: false, dot13: false,
                                    shaded: shadedLine[4], showShaded: 1, dot15: false, tracing: tracingLine[5]});
                            }
                        } else {
                            this.setState({dot12: false, dot11: false,
                                shaded: shadedLine[3], showShaded: 1, tracing: tracingLine[4]});
                        }
                    } else {
                        this.setState({dot10: false, dot8: false, 
                            shaded: shadedLine[2], showShaded: 1, dot9: false, tracing: tracingLine[3]});
                    }
                } else {
                    this.setState({dot7: false, dot6: false, dot22: false, dot23: false,
                        shaded: shadedLine[1], showShaded: 1, tracing: tracingLine[2]});
                }
            } else {
                this.setState({dot5: false, dot4: false, 
                    shaded: shadedLine[0], showShaded: 1, tracing: tracingLine[1]});
            }
        } else {
            this.clearBoard();
        }
    }

    clearBoard = () => {
        this.setState({dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false,
            dot7: false, dot8: false, dot9: false, dot10: false, dot11: false, dot22: false, dot23: false, dot24: false,
            dot12: false, dot13: false, dot14: false, dot15: false, dot19: false, dot20: false, dot21: false,
            dot16: false, dot17: false, dot18: false, shaded: shadedLine[0], showShaded: 0,
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
                        height: numberDimension.height, top: '5%', left: '10%'}}>
                        <Image source={this.state.tracing} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                    </View>
                    <View style={{position: 'absolute', width: numberDimension.width,
                        opacity: this.state.showShaded, 
                        height: numberDimension.height, top: '5%', left: '10%'}}>
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

                // <View style={[styles.dot, {top: screenHeight * 0.37,
                //     left: screenWidth * 0.236}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.55,
                //     left: screenWidth * 0.236}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.7,
                //     left: screenWidth * 0.236}]}></View>

                // <View style={[styles.dot, {top: screenHeight * 0.47,
                //     left: screenWidth * 0.3}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.65,
                //     left: screenWidth * 0.323}]}></View>

                // <View style={[styles.dot, {top: screenHeight * 0.44,
                //     left: screenWidth * 0.392}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.6,
                //     left: screenWidth * 0.368}]}></View>

                // <View style={[styles.dot, {top: screenHeight * 0.37,
                //     left: screenWidth * 0.45}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.55,
                //     left: screenWidth * 0.45}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.7,
                //     left: screenWidth * 0.45}]}></View>
                
                // {/*
                //     this.line1 = [{
                //         x: screenWidth * 0.236,
                //         y: screenHeight * 0.37,
                //     }, {
                //         x: screenWidth * 0.236,
                //         y: screenHeight * 0.55,
                //     }, {
                //         x: screenWidth * 0.236,
                //         y: screenHeight * 0.7,
                //     }, {
                //         x: screenWidth * 0.3,
                //         y: screenHeight * 0.47,
                //     }, {
                //         x: screenWidth * 0.323,
                //         y: screenHeight * 0.65,
                //     }, {
                //         x: screenWidth * 0.392,
                //         y: screenHeight * 0.44,
                //     }, {
                //         x: screenWidth * 0.368,
                //         y: screenHeight * 0.6,
                //     }, {
                //         x: screenWidth * 0.45,
                //         y: screenHeight * 0.37,
                //     }, {
                //         x: screenWidth * 0.45,
                //         y: screenHeight * 0.55,
                //     }, {
                //         x: screenWidth * 0.45,
                //         y: screenHeight * 0.7,
                //     }, {
                //         x: screenWidth * 0.565,
                //         y: screenHeight * 0.5,
                //     }, {
                //         x: screenWidth * 0.565,
                //         y: screenHeight * 0.7,
                //     }, {
                //         x: screenWidth * 0.64,
                //         y: screenHeight * 0.44,
                //     }, {
                //         x: screenWidth * 0.683,
                //         y: screenHeight * 0.55,
                //     }, {
                //         x: screenWidth * 0.683,
                //         y: screenHeight * 0.7,
                //     }, {
                //         x: screenWidth * 0.77,
                //         y: screenHeight * 0.44,
                //     }, {
                //         x: screenWidth * 0.802,
                //         y: screenHeight * 0.55,
                //     }, {
                //         x: screenWidth * 0.802,
                //         y: screenHeight * 0.7,
                //     }, ];
                // */}

                // <View style={[styles.dot, {top: screenHeight * 0.5,
                //     left: screenWidth * 0.565}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.7,
                //     left: screenWidth * 0.565}]}></View>

                // <View style={[styles.dot, {top: screenHeight * 0.44,
                //     left: screenWidth * 0.64}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.55,
                //     left: screenWidth * 0.683}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.7,
                //     left: screenWidth * 0.683}]}></View>

                // <View style={[styles.dot, {top: screenHeight * 0.44,
                //     left: screenWidth * 0.77}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.55,
                //     left: screenWidth * 0.802}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.7,
                //     left: screenWidth * 0.802}]}></View>


                // {/*
                //     this.line1 = [{
                //         x: screenWidth * 0.565,
                //         y: screenHeight * 0.5,
                //     }, {
                //         x: screenWidth * 0.565,
                //         y: screenHeight * 0.7,
                //     }, {
                //         x: screenWidth * 0.64,
                //         y: screenHeight * 0.44,
                //     }, {
                //         x: screenWidth * 0.683,
                //         y: screenHeight * 0.55,
                //     }, {
                //         x: screenWidth * 0.683,
                //         y: screenHeight * 0.7,
                //     }, {
                //         x: screenWidth * 0.77,
                //         y: screenHeight * 0.44,
                //     }, {
                //         x: screenWidth * 0.802,
                //         y: screenHeight * 0.55,
                //     }, {
                //         x: screenWidth * 0.802,
                //         y: screenHeight * 0.7,
                //     }, ];
                // */}
        )
    }
}

export default withNavigation(MTracing);