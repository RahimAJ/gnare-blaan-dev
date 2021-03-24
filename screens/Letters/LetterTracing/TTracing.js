import React, { Component } from 'react';
import { View, Dimensions, Image, TouchableOpacity, StatusBar } from 'react-native';
import { withNavigation } from 'react-navigation';

import TLetter_1 from '../LettersAssets/tracingT_1.gif';
import TLetter_2 from '../LettersAssets/tracingT_2.gif';
import TLetter_3 from '../LettersAssets/tracingT_3.gif';
import TLetter_4 from '../LettersAssets/tracingT_4.gif';

import shaded_T_1 from '../LettersAssets/shaded_T_1.png';
import shaded_T_2 from '../LettersAssets/shaded_T_2.png';
import shaded_T_3 from '../LettersAssets/shaded_T_3.png';
import shaded_T_4 from '../LettersAssets/shaded_T_4.png';

import PencilIcon from '../../images/Pencil_icon.png';

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js'; 

import { scopeX, scopeY } from '../letterImport';
import {sound} from '../../HomePage';
import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';

const tracingLine = [TLetter_1, TLetter_2, TLetter_3, TLetter_4,];
const shadedLine = [shaded_T_1, shaded_T_2, shaded_T_3, shaded_T_4,];

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const boardDimension = {
    width: screenWidth * 0.75,
    height: screenHeight * 0.7,
};

const numberDimension = {
    width: boardDimension.width * 0.5,
    height: boardDimension.height * 0.9,
}


class TTracing extends Component {
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
        },

        // Dots Location
        this.line1 = [{
            x: screenWidth * 0.36,
            y: screenHeight * 0.3,
        }, {
            x: screenWidth * 0.428,
            y: screenHeight * 0.3,
        }, {
            x: screenWidth * 0.49,
            y: screenHeight * 0.3,
        }, {
            x: screenWidth * 0.428,
            y: screenHeight * 0.42,
        }, {
            x: screenWidth * 0.428,
            y: screenHeight * 0.7,
        }, {
            x: screenWidth * 0.6175,
            y: screenHeight * 0.31,
        }, {
            x: screenWidth * 0.6175,
            y: screenHeight * 0.5,
        }, {
            x: screenWidth * 0.6175,
            y: screenHeight * 0.65,
        }, {
            x: screenWidth * 0.58,
            y: screenHeight * 0.39,
        }, {
            x: screenWidth * 0.635,
            y: screenHeight * 0.39,
        }, ];
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
        
        }
    }
    
    ifTraced = () => {
        if(this.state.dot3) {
            if(this.state.dot5) {
                if(this.state.dot8) {
                    if(this.state.dot10) {
                        this.setState({
                            showShaded: 1, shaded: shadedLine[3], showTracing: 0,});
                    } else {
                        this.setState({dot10: false, dot9: false,
                            showShaded: 1, shaded: shadedLine[2], tracing: tracingLine[3]});
                    }
                } else {
                    this.setState({dot7: false, dot8: false, dot6: false,
                        
                        showShaded: 1, shaded: shadedLine[1], tracing: tracingLine[2]});
                }
            } else {
                this.setState({dot5: false, dot4: false, 
                    showShaded: 1, shaded: shadedLine[0], tracing: tracingLine[1]});
            }
        } else {
            this.clearBoard();
        }
    }

    clearBoard = () => {
        this.setState({dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false,
            dot7: false, dot8: false, dot9: false, dot10: false,
            showShaded: 0, shaded: shadedLine[0],
            tracing: tracingLine[0], showTracing: 1, tracing: tracingLine[0]});
    }

    render() {

        StatusBar.setHidden(true);
        return (
                <View style={{position: 'absolute', top: 0, width: '100%', height: '100%'}}>
                    <View style={{position: 'absolute', 
                            width: boardDimension.width, height: boardDimension.height, 
                            top: '20%', left: '12.5%', backgroundColor: 'rgba(255, 255, 255, 0.000000001)'}}>
                        <View style={{position: 'absolute', width: numberDimension.width, 
                            opacity: this.state.showTracing,
                            height: numberDimension.height, top: '5%', left: '25%'}}>
                            <Image source={this.state.tracing} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                        </View>
                        <View style={{position: 'absolute', width: numberDimension.width,
                            opacity: this.state.showShaded, 
                            height: numberDimension.height, top: '5%', left: '25%'}}>
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
                    {/*
                        <View style={[styles.dot, {top: screenHeight * 0.3,
                            left: screenWidth * 0.36}]}></View>
                        <View style={[styles.dot, {top: screenHeight * 0.3,
                            left: screenWidth * 0.428}]}></View>
                        <View style={[styles.dot, {top: screenHeight * 0.3,
                            left: screenWidth * 0.49}]}></View>

                        <View style={[styles.dot, {top: screenHeight * 0.42,
                            left: screenWidth * 0.428}]}></View>
                        <View style={[styles.dot, {top: screenHeight * 0.7,
                            left: screenWidth * 0.428}]}></View>


                        <View style={[styles.dot, {top: screenHeight * 0.31,
                            left: screenWidth * 0.6175}]}></View>
                        <View style={[styles.dot, {top: screenHeight * 0.5,
                            left: screenWidth * 0.6175}]}></View>
                        <View style={[styles.dot, {top: screenHeight * 0.65,
                            left: screenWidth * 0.6175}]}></View>

                        <View style={[styles.dot, {top: screenHeight * 0.39,
                            left: screenWidth * 0.58}]}></View>
                        <View style={[styles.dot, {top: screenHeight * 0.39,
                            left: screenWidth * 0.635}]}></View>
                    */}
                </View>

                

                
                // {/*
                //     this.line1 = [{
                //         x: screenWidth * 0.36,
                //         y: screenHeight * 0.3,
                //     }, {
                //         x: screenWidth * 0.428,
                //         y: screenHeight * 0.3,
                //     }, {
                //         x: screenWidth * 0.49,
                //         y: screenHeight * 0.3,
                //     }, {
                //         x: screenWidth * 0.428,
                //         y: screenHeight * 0.42,
                //     }, {
                //         x: screenWidth * 0.428,
                //         y: screenHeight * 0.7,
                //     }, {
                //         x: screenWidth * 0.6,
                //         y: screenHeight * 0.38,
                //     }, {
                //         x: screenWidth * 0.6,
                //         y: screenHeight * 0.55,
                //     }, {
                //         x: screenWidth * 0.6,
                //         y: screenHeight * 0.7,
                //     }, {
                //         x: screenWidth * 0.63,
                //         y: screenHeight * 0.775,
                //     }, {
                //         x: screenWidth * 0.58,
                //         y: screenHeight * 0.445,
                //     }, {
                //         x: screenWidth * 0.63,
                //         y: screenHeight * 0.445,
                //     }, ];
                // */}
                
                

                // {/*
                //     {
                //         x: screenWidth * 0.61,
                //         y: screenHeight * 0.28,
                //     }, {
                //         x: screenWidth * 0.59,
                //         y: screenHeight * 0.38,
                //     }, {
                //         x: screenWidth * 0.59,
                //         y: screenHeight * 0.55,
                //     }, {
                //         x: screenWidth * 0.59,
                //         y: screenHeight * 0.7,
                //     }, {
                //         x: screenWidth * 0.56,
                //         y: screenHeight * 0.445,
                //     }, {
                //         x: screenWidth * 0.62,
                //         y: screenHeight * 0.445,
                //     }, 
                // */}
        )
    }
}

export default withNavigation(TTracing);