import React, { Component } from 'react';
import { View, Dimensions, Image, TouchableOpacity, StatusBar } from 'react-native';
import { withNavigation } from 'react-navigation';

import ULetter_1 from '../LettersAssets/tracingU_1.gif';
import ULetter_2 from '../LettersAssets/tracingU_2.gif';
import ULetter_3 from '../LettersAssets/tracingU_3.gif';

import shaded_U_1 from '../LettersAssets/shaded_U_1.png';
import shaded_U_2 from '../LettersAssets/shaded_U_2.png';
import shaded_U_3 from '../LettersAssets/shaded_U_3.png';

import PencilIcon from '../../images/Pencil_icon.png';
import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js'; 

import { scopeX, scopeY } from '../letterImport';
import {sound} from '../../HomePage';

const tracingLine = [ULetter_1, ULetter_2, ULetter_3, ];
const shadedLine = [shaded_U_1, shaded_U_2, shaded_U_3];

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


class UTracing extends Component {
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
        },

        // Dots Location
        this.line1 = [{
            x: screenWidth * 0.275,
            y: screenHeight * 0.35,
        }, {
            x: screenWidth * 0.275,
            y: screenHeight * 0.52,
        }, {
            x: screenWidth * 0.31,
            y: screenHeight * 0.76,
        }, {
            x: screenWidth * 0.445,
            y: screenHeight * 0.738,
        }, {
            x: screenWidth * 0.462,
            y: screenHeight * 0.54,
        }, {
            x: screenWidth * 0.462,
            y: screenHeight * 0.37,
        }, {
            x: screenWidth * 0.58,
            y: screenHeight * 0.5,
        }, {
            x: screenWidth * 0.59,
            y: screenHeight * 0.73,
        }, {
            x: screenWidth * 0.64,
            y: screenHeight * 0.787,
        }, {
            x: screenWidth * 0.725,
            y: screenHeight * 0.49,
        }, {
            x: screenWidth * 0.725,
            y: screenHeight * 0.73,
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
        
        } 
    }

    ifTraced = () => {
        if(this.state.dot6) {
            if(this.state.dot9) {
                if(this.state.dot11) {
                    this.setState({shaded: shadedLine[2], showShaded: 1, 
                        showTracing: 0,});
                } else {
                    this.setState({dot10: false,
                        shaded: shadedLine[1], showShaded: 1, dot11: false, tracing: tracingLine[2]});
                }
            } else {
                this.setState({dot7: false, dot8: false, dot9: false,
                    shaded: shadedLine[0], showShaded: 1, tracing: tracingLine[1]});
            }
        } else {
            this.clearBoard();
        }
    }

    clearBoard = () => {
        this.setState({dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false,
            dot7: false, dot8: false, dot9: false, dot10: false, dot11: false, shaded: shadedLine[0], showShaded: 0,
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

                // <View style={[styles.dot, {top: screenHeight * 0.35,
                //     left: screenWidth * 0.275}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.52,
                //     left: screenWidth * 0.275}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.76,
                //     left: screenWidth * 0.31}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.738,
                //     left: screenWidth * 0.445}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.54,
                //     left: screenWidth * 0.462}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.37,
                //     left: screenWidth * 0.462}]}></View>

                // {/*
                //     this.line1 = [{
                //         x: screenWidth * 0.275,
                //         y: screenHeight * 0.35,
                //     }, {
                //         x: screenWidth * 0.275,
                //         y: screenHeight * 0.52,
                //     }, {
                //         x: screenWidth * 0.31,
                //         y: screenHeight * 0.76,
                //     }, {
                //         x: screenWidth * 0.445,
                //         y: screenHeight * 0.738,
                //     }, {
                //         x: screenWidth * 0.462,
                //         y: screenHeight * 0.54,
                //     }, {
                //         x: screenWidth * 0.462,
                //         y: screenHeight * 0.37,
                //     }, {
                //         x: screenWidth * 0.58,
                //         y: screenHeight * 0.5,
                //     }, {
                //         x: screenWidth * 0.59,
                //         y: screenHeight * 0.73,
                //     }, {
                //         x: screenWidth * 0.64,
                //         y: screenHeight * 0.787,
                //     }, {
                //         x: screenWidth * 0.725,
                //         y: screenHeight * 0.49,
                //     }, {
                //         x: screenWidth * 0.725,
                //         y: screenHeight * 0.73,
                //     }, ];
                // */}

                // <View style={[styles.dot, {top: screenHeight * 0.5,
                //     left: screenWidth * 0.58}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.73,
                //     left: screenWidth * 0.59}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.787,
                //     left: screenWidth * 0.64}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.49,
                //     left: screenWidth * 0.725}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.73,
                //     left: screenWidth * 0.725}]}></View>
        )
    }
}

export default withNavigation(UTracing);