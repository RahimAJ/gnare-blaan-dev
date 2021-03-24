import React, { Component } from 'react';
import { View, Dimensions, Image, TouchableOpacity, StatusBar } from 'react-native';
import { withNavigation } from 'react-navigation';

import KLetter_1 from '../LettersAssets/tracingK_1.gif';
import KLetter_2 from '../LettersAssets/tracingK_2.gif';
import KLetter_3 from '../LettersAssets/tracingK_3.gif';
import KLetter_4 from '../LettersAssets/tracingK_4.gif';
import KLetter_5 from '../LettersAssets/tracingK_5.gif';
import KLetter_6 from '../LettersAssets/tracingK_6.gif';

import shaded_K_1 from '../LettersAssets/shaded_K_1.png';
import shaded_K_2 from '../LettersAssets/shaded_K_2.png';
import shaded_K_3 from '../LettersAssets/shaded_K_3.png';
import shaded_K_4 from '../LettersAssets/shaded_K_4.png';
import shaded_K_5 from '../LettersAssets/shaded_K_5.png';
import shaded_K_6 from '../LettersAssets/shaded_K_6.png';

import PencilIcon from '../../images/Pencil_icon.png';

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js'; 

import { scopeX, scopeY } from '../letterImport';
import {sound} from '../../HomePage';

import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';

const tracingLine = [KLetter_1, KLetter_2, KLetter_3, KLetter_4, KLetter_5, KLetter_6];
const shadedLine = [shaded_K_1, shaded_K_2, shaded_K_3, shaded_K_4, shaded_K_5, shaded_K_6,];

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const boardDimension = {
    width: screenWidth * 0.75,
    height: screenHeight * 0.7,
};

const numberDimension = {
    width: boardDimension.width * 0.7,
    height: boardDimension.height * 0.9,
}


class KTracing extends Component {
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
        },

        // Dots Location
        this.line1 = [{
            x: screenWidth * 0.274,
            y: screenHeight * 0.37,
        }, {
            x: screenWidth * 0.274,
            y: screenHeight * 0.55,
        }, {
            x: screenWidth * 0.274,
            y: screenHeight * 0.7,
        }, {
            x: screenWidth * 0.427,
            y: screenHeight * 0.35,
        }, {
            x: screenWidth * 0.34,
            y: screenHeight * 0.52,
        }, {
            x: screenWidth * 0.402,
            y: screenHeight * 0.6,
        }, {
            x: screenWidth * 0.45,
            y: screenHeight * 0.73,
        }, {
            x: screenWidth * 0.588,
            y: screenHeight * 0.37,
        }, {
            x: screenWidth * 0.588,
            y: screenHeight * 0.55,
        }, {
            x: screenWidth * 0.588,
            y: screenHeight * 0.7,
        }, {
            x: screenWidth * 0.694,
            y: screenHeight * 0.48,
        }, {
            x: screenWidth * 0.642,
            y: screenHeight * 0.58,
        }, {
            x: screenWidth * 0.687,
            y: screenHeight * 0.67,
        }, {
            x: screenWidth * 0.72,
            y: screenHeight * 0.77,
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
        if(this.state.dot3) {
            if(this.state.dot5) {
                if(this.state.dot7) {
                    if(this.state.dot10) {
                        if(this.state.dot12) {
                            if(this.state.dot14) {
                                this.setState({arrayMove: [], shaded: shadedLine[5], showShaded: 1, showTracing: 0,});
                            } else {
                                this.setState({arrayMove: [], dot13: false,
                                    shaded: shadedLine[4], showShaded: 1, dot14: false, tracing: tracingLine[5]});
                            }
                        } else {
                            this.setState({arrayMove: [], dot12: false, dot11: false,
                                shaded: shadedLine[3], showShaded: 1, tracing: tracingLine[4]});
                        }
                    } else {
                        this.setState({arrayMove: [], dot10: false, dot8: false,
                            shaded: shadedLine[2], showShaded: 1, dot9: false, tracing: tracingLine[3]});
                    }
                } else {
                    this.setState({arrayMove: [], dot7: false, dot6: false,
                        shaded: shadedLine[1], showShaded: 1, tracing: tracingLine[2]});
                }
            } else {
                this.setState({arrayMove: [], dot5: false, dot4: false,
                    shaded: shadedLine[0], showShaded: 1, tracing: tracingLine[1]});
            }
        } else {
            this.clearBoard();
        }
    }

    clearBoard = () => {
        this.setState({arrayMove: [], dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false,
            dot7: false, dot8: false, dot9: false, dot10: false, dot11: false,
            dot12: false, dot13: false, dot14: false, shaded: shadedLine[0], showShaded: 0,
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
                // <View style={[styles.dot, {top: screenHeight * 0.37,
                //     left: screenWidth * 0.274}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.55,
                //     left: screenWidth * 0.274}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.7,
                //     left: screenWidth * 0.274}]}></View>
                
                // <View style={[styles.dot, {top: screenHeight * 0.35,
                //     left: screenWidth * 0.427}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.52,
                //     left: screenWidth * 0.34}]}></View>
                
                // <View style={[styles.dot, {top: screenHeight * 0.6,
                //     left: screenWidth * 0.402}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.73,
                //     left: screenWidth * 0.45}]}></View>

                // {/*
                //     this.line1 = [{
                //         x: screenWidth * 0.274,
                //         y: screenHeight * 0.37,
                //     }, {
                //         x: screenWidth * 0.274,
                //         y: screenHeight * 0.55,
                //     }, {
                //         x: screenWidth * 0.274,
                //         y: screenHeight * 0.7,
                //     }, {
                //         x: screenWidth * 0.427,
                //         y: screenHeight * 0.35,
                //     }, {
                //         x: screenWidth * 0.34,
                //         y: screenHeight * 0.52,
                //     }, {
                //         x: screenWidth * 0.402,
                //         y: screenHeight * 0.6,
                //     }, {
                //         x: screenWidth * 0.45,
                //         y: screenHeight * 0.73,
                //     }, {
                //         x: screenWidth * 0.588,
                //         y: screenHeight * 0.37,
                //     }, {
                //         x: screenWidth * 0.588,
                //         y: screenHeight * 0.55,
                //     }, {
                //         x: screenWidth * 0.588,
                //         y: screenHeight * 0.7,
                //     }, {
                //         x: screenWidth * 0.694,
                //         y: screenHeight * 0.48,
                //     }, {
                //         x: screenWidth * 0.642,
                //         y: screenHeight * 0.58,
                //     }, {
                //         x: screenWidth * 0.687,
                //         y: screenHeight * 0.67,
                //     }, {
                //         x: screenWidth * 0.72,
                //         y: screenHeight * 0.77,
                //     }, ];
                // */}
                
                
                // <View style={[styles.dot, {top: screenHeight * 0.37,
                //     left: screenWidth * 0.588}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.55,
                //     left: screenWidth * 0.588}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.7,
                //     left: screenWidth * 0.588}]}></View>

                // <View style={[styles.dot, {top: screenHeight * 0.48,
                //     left: screenWidth * 0.694}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.58,
                //     left: screenWidth * 0.642}]}></View>
                
                // <View style={[styles.dot, {top: screenHeight * 0.67,
                //     left: screenWidth * 0.687}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.77,
                //     left: screenWidth * 0.72}]}></View>

                // {/*
                //     this.line1 = [{
                //         x: screenWidth * 0.588,
                //         y: screenHeight * 0.37,
                //     }, {
                //         x: screenWidth * 0.588,
                //         y: screenHeight * 0.55,
                //     }, {
                //         x: screenWidth * 0.588,
                //         y: screenHeight * 0.7,
                //     }, {
                //         x: screenWidth * 0.694,
                //         y: screenHeight * 0.48,
                //     }, {
                //         x: screenWidth * 0.642,
                //         y: screenHeight * 0.58,
                //     }, {
                //         x: screenWidth * 0.687,
                //         y: screenHeight * 0.67,
                //     }, {
                //         x: screenWidth * 0.72,
                //         y: screenHeight * 0.77,
                //     }, ];
                // */}
        )
    }
}

export default withNavigation(KTracing);