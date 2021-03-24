import React, { Component } from 'react';
import { View, Dimensions, Image, TouchableOpacity, StatusBar } from 'react-native';
import { withNavigation } from 'react-navigation';

import ELetter_1 from '../LettersAssets/tracingE_1.gif';
import ELetter_2 from '../LettersAssets/tracingE_2.gif';
import ELetter_3 from '../LettersAssets/tracingE_3.gif';
import ELetter_4 from '../LettersAssets/tracingE_4.gif';
import ELetter_5 from '../LettersAssets/tracingE_5.gif';
import ELetter_6 from '../LettersAssets/tracingE_6.gif';
import ELetter_7 from '../LettersAssets/tracingE_7.gif';
import ELetter_8 from '../LettersAssets/tracingE_8.gif';

import shaded_E_1 from '../LettersAssets/shaded_E_1.png';
import shaded_E_2 from '../LettersAssets/shaded_E_2.png';
import shaded_E_3 from '../LettersAssets/shaded_E_3.png';
import shaded_E_4 from '../LettersAssets/shaded_E_4.png';
import shaded_E_5 from '../LettersAssets/shaded_E_5.png';
import shaded_E_6 from '../LettersAssets/shaded_E_6.png';
import shaded_E_7 from '../LettersAssets/shaded_E_7.png';
import shaded_E_8 from '../LettersAssets/shaded_E_8.png';

import PencilIcon from '../../images/Pencil_icon.png';

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js'; 

import { scopeX, scopeY } from '../letterImport';
import {sound} from '../../HomePage';

import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';

const tracingLine = [ELetter_1, ELetter_2, ELetter_3, ELetter_4,
            ELetter_5, ELetter_6, ELetter_7, ELetter_8,];

const shadedLine = [shaded_E_1, shaded_E_2, shaded_E_3, shaded_E_4,
    shaded_E_5, shaded_E_6, shaded_E_7, shaded_E_8,];

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const boardDimension = {
    width: screenWidth * 0.75,
    height: screenHeight * 0.7,
};

const numberDimension = {
    width: boardDimension.width * 0.7,
    height: boardDimension.height * 0.95,
}

class ETracing extends Component {
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
            fot14: false,
            dot15: false,
            dot16: false,
            dot17: false,
            dot18: false,
        },

        // Dots Location
        this.line1 = [{
            x: screenWidth * 0.282,
            y: screenHeight * 0.5,
        }, {
            x: screenWidth * 0.282,
            y: screenHeight * 0.74,
        }, {
            x: screenWidth * 0.35,
            y: screenHeight * 0.445,
        }, {
            x: screenWidth * 0.43,
            y: screenHeight * 0.445,
        }, {
            x: screenWidth * 0.35,
            y: screenHeight * 0.62,
        }, {
            x: screenWidth * 0.41,
            y: screenHeight * 0.62,
        }, {
            x: screenWidth * 0.35,
            y: screenHeight * 0.81,
        }, {
            x: screenWidth * 0.43,
            y: screenHeight * 0.81,
        }, {
            x: screenWidth * 0.41,
            y: screenHeight * 0.26,
        }, {
            x: screenWidth * 0.375,
            y: screenHeight * 0.31,
        }, {
            x: screenWidth * 0.62,
            y: screenHeight * 0.68,
        }, {
            x: screenWidth * 0.69,
            y: screenHeight * 0.68,
        }, {
            x: screenWidth * 0.703,
            y: screenHeight * 0.58,
        }, {
            x: screenWidth * 0.588,
            y: screenHeight * 0.58,
        }, {
            x: screenWidth * 0.577,
            y: screenHeight * 0.77,
        }, {
            x: screenWidth * 0.66,
            y: screenHeight * 0.825,
        }, {
            x: screenWidth * 0.7,
            y: screenHeight * 0.37,
        }, {
            x: screenWidth * 0.655,
            y: screenHeight * 0.44,
        },];
    }

    letterTrace = (X, Y) => {
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
        if(this.state.dot2) {
            if(this.state.dot4) {
                if(this.state.dot6) {
                    if(this.state.dot8) {
                        if(this.state.dot10) {
                            if(this.state.dot12) {
                                if(this.state.dot16) {
                                    if(this.state.dot18) {
                                        this.setState({arrayMove: [],
                                            shaded: shadedLine[7], showShaded: 1, showTracing: 0,});
                                    } else {
                                        this.setState({arrayMove: [], dot17: false, dot18: false,
                                            shaded: shadedLine[6], showShaded: 1, tracing: tracingLine[7]});
                                    }
                                } else {
                                    this.setState({arrayMove: [], dot13: false, dot14: false,
                                        shaded: shadedLine[5], showShaded: 1, dot15: false, dot16: false, tracing: tracingLine[6]});
                                }
                            } else {
                                this.setState({arrayMove: [], dot11: false, dot12: false,
                                    shaded: shadedLine[4], showShaded: 1, dot13: false, tracing: tracingLine[5]});
                            }
                        } else {
                            this.setState({arrayMove: [], dot9: false, dot10: false,
                                shaded: shadedLine[3], showShaded: 1, tracing: tracingLine[4]});
                        }
                    } else {
                        this.setState({arrayMove: [], dot7: false, dot8: false,
                            shaded: shadedLine[2], showShaded: 1, tracing: tracingLine[3]});
                    }
                } else {
                    this.setState({arrayMove: [], dot5: false, dot6: false,
                        shaded: shadedLine[1], showShaded: 1, tracing: tracingLine[2]});
                }
            } else {
                this.setState({arrayMove: [], dot3: false, dot4: false,
                    shaded: shadedLine[0], showShaded: 1, dot7: false, tracing: tracingLine[1]});
            }
        } else {
            this.clearBoard();
        }
    }

    clearBoard = () => {
        this.setState({arrayMove: [], dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false,
            dot7: false, dot8: false, dot9: false, dot10: false, dot11: false, dot18: false,
            dot12: false, dot13: false, dot14: false, dot15: false, dot16: false, dot17: false,
            showShaded: 0, shaded: shadedLine[0],
            tracing: tracingLine[0], showTracing: 1, tracing: tracingLine[0]});
    }

    render() {

        StatusBar.setHidden(true);
        return (

            <View style={{position: 'absolute', 
                width: boardDimension.width, height: boardDimension.height, 
                top: '18.5%', left: '12.5%', backgroundColor: 'rgba(255, 255, 255, 0.000000001)'}}>
                <View style={{position: 'absolute', width: numberDimension.width, 
                    opacity: this.state.showTracing,
                    height: numberDimension.height, top: '5%', left: '15%'}}>
                    <Image source={this.state.tracing} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                </View>
                <View style={{position: 'absolute', width: numberDimension.width,
                    opacity: this.state.showShaded, 
                    height: numberDimension.height, top: '5%', left: '15%'}}>
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
            
                // <View style={[styles.dot, {top: screenHeight * 0.5,
                //     left: screenWidth * 0.282}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.74,
                //     left: screenWidth * 0.282}]}></View>
                
                // <View style={[styles.dot, {top: screenHeight * 0.445,
                //     left: screenWidth * 0.35}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.445,
                //     left: screenWidth * 0.43}]}></View>
                
                // <View style={[styles.dot, {top: screenHeight * 0.62,
                //     left: screenWidth * 0.35}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.62,
                //     left: screenWidth * 0.41}]}></View>
                
                // {/*
                //     this.line1 = [{
                //         x: screenWidth * 0.282,
                //         y: screenHeight * 0.5,
                //     }, {
                //         x: screenWidth * 0.282,
                //         y: screenHeight * 0.74,
                //     }, {
                //         x: screenWidth * 0.35,
                //         y: screenHeight * 0.445,
                //     }, {
                //         x: screenWidth * 0.43,
                //         y: screenHeight * 0.445,
                //     }, {
                //         x: screenWidth * 0.35,
                //         y: screenHeight * 0.62,
                //     }, {
                //         x: screenWidth * 0.41,
                //         y: screenHeight * 0.62,
                //     }, {
                //         x: screenWidth * 0.35,
                //         y: screenHeight * 0.81,
                //     }, {
                //         x: screenWidth * 0.43,
                //         y: screenHeight * 0.81,
                //     }, {
                //         x: screenWidth * 0.41,
                //         y: screenHeight * 0.26,
                //     }, {
                //         x: screenWidth * 0.375,
                //         y: screenHeight * 0.31,
                //     }, {
                //         x: screenWidth * 0.62,
                //         y: screenHeight * 0.68,
                //     }, {
                //         x: screenWidth * 0.69,
                //         y: screenHeight * 0.68,
                //     }, {
                //         x: screenWidth * 0.703,
                //         y: screenHeight * 0.58,
                //     }, {
                //         x: screenWidth * 0.588,
                //         y: screenHeight * 0.58,
                //     }, {
                //         x: screenWidth * 0.577,
                //         y: screenHeight * 0.77,
                //     }, {
                //         x: screenWidth * 0.66,
                //         y: screenHeight * 0.825,
                //     }, {
                //         x: screenWidth * 0.7,
                //         y: screenHeight * 0.37,
                //     }, {
                //         x: screenWidth * 0.655,
                //         y: screenHeight * 0.44,
                //     },];
                // */}

                // <View style={[styles.dot, {top: screenHeight * 0.81,
                //     left: screenWidth * 0.35}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.81,
                //     left: screenWidth * 0.43}]}></View>

                // <View style={[styles.dot, {top: screenHeight * 0.26,
                //     left: screenWidth * 0.41}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.31,
                //     left: screenWidth * 0.375}]}></View>


                

                // <View style={[styles.dot, {top: screenHeight * 0.68,
                //     left: screenWidth * 0.62}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.68,
                //     left: screenWidth * 0.69}]}></View>

                // {/*
                //     {
                //         x: screenWidth * 0.62,
                //         y: screenHeight * 0.68,
                //     }, {
                //         x: screenWidth * 0.69,
                //         y: screenHeight * 0.68,
                //     }, {
                //         x: screenWidth * 0.703,
                //         y: screenHeight * 0.58,
                //     }, {
                //         x: screenWidth * 0.588,
                //         y: screenHeight * 0.58,
                //     }, {
                //         x: screenWidth * 0.577,
                //         y: screenHeight * 0.77,
                //     }, {
                //         x: screenWidth * 0.66,
                //         y: screenHeight * 0.825,
                //     }, {
                //         x: screenWidth * 0.7,
                //         y: screenHeight * 0.37,
                //     }, {
                //         x: screenWidth * 0.655,
                //         y: screenHeight * 0.44,
                //     },
                // */}

                // <View style={[styles.dot, {top: screenHeight * 0.58,
                //     left: screenWidth * 0.703}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.58,
                //     left: screenWidth * 0.588}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.77,
                //     left: screenWidth * 0.577}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.825,
                //     left: screenWidth * 0.66}]}></View>

                // <View style={[styles.dot, {top: screenHeight * 0.37,
                //     left: screenWidth * 0.7}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.44,
                //     left: screenWidth * 0.655}]}></View>

        )
    }
}

export default withNavigation(ETracing);