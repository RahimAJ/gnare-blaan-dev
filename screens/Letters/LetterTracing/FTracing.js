import React, { Component } from 'react';
import { View, Dimensions, Image, TouchableOpacity, StatusBar } from 'react-native';
import { withNavigation } from 'react-navigation';

import FLetter_1 from '../LettersAssets/tracingF_1.gif';
import FLetter_2 from '../LettersAssets/tracingF_2.gif';
import FLetter_3 from '../LettersAssets/tracingF_3.gif';
import FLetter_4 from '../LettersAssets/tracingF_4.gif';
import FLetter_5 from '../LettersAssets/tracingF_5.gif';

import shaded_F_1 from '../LettersAssets/shaded_F_1.png';
import shaded_F_2 from '../LettersAssets/shaded_F_2.png';
import shaded_F_3 from '../LettersAssets/shaded_F_3.png';
import shaded_F_4 from '../LettersAssets/shaded_F_4.png';
import shaded_F_5 from '../LettersAssets/shaded_F_5.png';

import PencilIcon from '../../images/Pencil_icon.png';

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js'; 

import { scopeX, scopeY } from '../letterImport';

import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';

import {sound} from '../../HomePage';

const tracingLine = [FLetter_1, FLetter_2, FLetter_3, FLetter_4, FLetter_5,];
const shadedLine = [shaded_F_1, shaded_F_2, shaded_F_3, shaded_F_4, shaded_F_5,];

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const boardDimension = {
    width: screenWidth * 0.75,
    height: screenHeight * 0.7,
};

const numberDimension = {
    width: boardDimension.width * 0.5,
    height: boardDimension.height,
}


class FTracing extends Component {
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
            touchLength: 0,

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
            x: screenWidth * 0.35,
            y: screenHeight * 0.37,
        }, {
            x: screenWidth * 0.35,
            y: screenHeight * 0.55,
        }, {
            x: screenWidth * 0.35,
            y: screenHeight * 0.7,
        }, {
            x: screenWidth * 0.4,
            y: screenHeight * 0.29,
        }, {
            x: screenWidth * 0.45,
            y: screenHeight * 0.29,
        }, {
            x: screenWidth * 0.4,
            y: screenHeight * 0.53,
        }, {
            x: screenWidth * 0.45,
            y: screenHeight * 0.53,
        }, {
            x: screenWidth * 0.61,
            y: screenHeight * 0.28,
        }, {
            x: screenWidth * 0.59,
            y: screenHeight * 0.38,
        }, {
            x: screenWidth * 0.59,
            y: screenHeight * 0.55,
        }, {
            x: screenWidth * 0.59,
            y: screenHeight * 0.7,
        }, {
            x: screenWidth * 0.56,
            y: screenHeight * 0.445,
        }, {
            x: screenWidth * 0.62,
            y: screenHeight * 0.445,
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
        
        } 
    }

    ifTraced = () => {
        if(this.state.dot3) {
            if(this.state.dot5) {
                if(this.state.dot7) {
                    if(this.state.dot11) {
                        if(this.state.dot13) {
                            this.setState({
                                showShaded: 1, shaded: shadedLine[4], showTracing: 0,});
                        } else {
                            this.setState({dot12: false, dot13: false,
                                showShaded: 1, shaded: shadedLine[3], dot14: false, tracing: tracingLine[4]});
                        }
                    } else {
                        this.setState({dot10: false, dot11: false,
                            showShaded: 1, shaded: shadedLine[2], dot9: false, tracing: tracingLine[3]});
                    }
                } else {
                    this.setState({dot7: false, dot8: false,
                        showShaded: 1, shaded: shadedLine[1], tracing: tracingLine[2]});
                }
            } else {
                this.setState({dot5: false, dot4: false, dot6: false,
                    showShaded: 1, shaded: shadedLine[0], tracing: tracingLine[1]});
            }
        } else {
            this.clearBoard();
        }
    }

    clearBoard = () => {
        this.setState({dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false,
            dot7: false, dot8: false, dot9: false, dot10: false, dot11: false,
            dot12: false, dot13: false, showShaded: 0, shaded: shadedLine[0],
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
            
                // <View style={[styles.dot, {top: screenHeight * 0.37,
                //     left: screenWidth * 0.35}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.55,
                //     left: screenWidth * 0.35}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.7,
                //     left: screenWidth * 0.35}]}></View>

                // <View style={[styles.dot, {top: screenHeight * 0.29,
                //     left: screenWidth * 0.4}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.29,
                //     left: screenWidth * 0.45}]}></View>
                
                // {/*
                //     this.line1 = [{
                //         x: screenWidth * 0.35,
                //         y: screenHeight * 0.37,
                //     }, {
                //         x: screenWidth * 0.35,
                //         y: screenHeight * 0.55,
                //     }, {
                //         x: screenWidth * 0.35,
                //         y: screenHeight * 0.7,
                //     }, {
                //         x: screenWidth * 0.4,
                //         y: screenHeight * 0.29,
                //     }, {
                //         x: screenWidth * 0.45,
                //         y: screenHeight * 0.29,
                //     }, {
                //         x: screenWidth * 0.4,
                //         y: screenHeight * 0.53,
                //     }, {
                //         x: screenWidth * 0.45,
                //         y: screenHeight * 0.53,
                //     }, {
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
                //     }, ];
                // */}

                // <View style={[styles.dot, {top: screenHeight * 0.53,
                //     left: screenWidth * 0.4}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.53,
                //     left: screenWidth * 0.45}]}></View>

                
                // <View style={[styles.dot, {top: screenHeight * 0.28,
                //     left: screenWidth * 0.61}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.38,
                //     left: screenWidth * 0.59}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.55,
                //     left: screenWidth * 0.59}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.7,
                //     left: screenWidth * 0.59}]}></View>

                // <View style={[styles.dot, {top: screenHeight * 0.445,
                //     left: screenWidth * 0.56}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.445,
                //     left: screenWidth * 0.62}]}></View>

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

export default withNavigation(FTracing);