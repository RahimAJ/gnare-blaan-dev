import React, { Component } from 'react';
import { View, Dimensions, Image, TouchableOpacity, StatusBar } from 'react-native';
import { withNavigation } from 'react-navigation';

import GLetter_1 from '../LettersAssets/tracingG_1.gif';
import GLetter_2 from '../LettersAssets/tracingG_2.gif';
import GLetter_3 from '../LettersAssets/tracingG_3.gif';
import GLetter_4 from '../LettersAssets/tracingG_4.gif';

import shaded_G_1 from '../LettersAssets/shaded_G_1.png';
import shaded_G_2 from '../LettersAssets/shaded_G_2.png';
import shaded_G_3 from '../LettersAssets/shaded_G_3.png';
import shaded_G_4 from '../LettersAssets/shaded_G_4.png';

import PencilIcon from '../../images/Pencil_icon.png';

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js'; 

import { scopeX, scopeY } from '../letterImport';

import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';
import {sound} from '../../HomePage';

const tracingLine = [GLetter_1, GLetter_2, GLetter_3, GLetter_4,];
const shadedLine = [shaded_G_1, shaded_G_2, shaded_G_3, shaded_G_4,];

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const boardDimension = {
    width: screenWidth * 0.75,
    height: screenHeight * 0.7,
};

const numberDimension = {
    width: boardDimension.width * 0.7,
    height: boardDimension.height,
}


class GTracing extends Component {
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
            x: screenWidth * 0.43,
            y: screenHeight * 0.27,
        }, {
            x: screenWidth * 0.3,
            y: screenHeight * 0.31,
        }, {
            x: screenWidth * 0.29,
            y: screenHeight * 0.6,
        }, {
            x: screenWidth * 0.41,
            y: screenHeight * 0.685,
        }, {
            x: screenWidth * 0.43,
            y: screenHeight * 0.495,
        }, {
            x: screenWidth * 0.48,
            y: screenHeight * 0.55,
        }, {
            x: screenWidth * 0.64,
            y: screenHeight * 0.38,
        }, {
            x: screenWidth * 0.577,
            y: screenHeight * 0.54,
        }, {
            x: screenWidth * 0.64,
            y: screenHeight * 0.675,
        }, {
            x: screenWidth * 0.728,
            y: screenHeight * 0.46,
        }, {
            x: screenWidth * 0.728,
            y: screenHeight * 0.59,
        }, {
            x: screenWidth * 0.72,
            y: screenHeight * 0.76,
        }, {
            x: screenWidth * 0.65,
            y: screenHeight * 0.83,
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
        if(this.state.dot4) {
            if(this.state.dot6) {
                if(this.state.dot9) {
                    if(this.state.dot13) {
                        this.setState({
                            shaded: shadedLine[3], showShaded: 1, showTracing: 0,});
                    } else {
                        this.setState({dot11: false, dot12: false,
                            shaded: shadedLine[2], showShaded: 1, dot13: false, dot10: false, tracing: tracingLine[3]});
                    }
                } else {
                    this.setState({dot9: false, dot8: false,
                        shaded: shadedLine[1], showShaded: 1, dot7: false, tracing: tracingLine[2]});
                }
            } else {
                this.setState({dot5: false, dot6: false,
                    shaded: shadedLine[0], showShaded: 1, dot7: false, tracing: tracingLine[1]});
            }
        } else {
            this.clearBoard();
        }
    }

    clearBoard = () => {
        this.setState({dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false,
            dot7: false, dot8: false, dot9: false, dot10: false, dot11: false,
            dot12: false, dot13: false, shaded: shadedLine[0], showShaded: 0,
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
                        height: numberDimension.height, top: '-1%', left: '15%'}}>
                        <Image source={this.state.tracing} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                    </View>
                    <View style={{position: 'absolute', width: numberDimension.width,
                        opacity: this.state.showShaded, 
                        height: numberDimension.height, top: '-1%', left: '15%'}}>
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
                // <View style={[styles.dot, {top: screenHeight * 0.27,
                //     left: screenWidth * 0.43}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.31,
                //     left: screenWidth * 0.3}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.6,
                //     left: screenWidth * 0.29}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.685,
                //     left: screenWidth * 0.41}]}></View>

                // <View style={[styles.dot, {top: screenHeight * 0.495,
                //     left: screenWidth * 0.43}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.55,
                //     left: screenWidth * 0.48}]}></View>

                // {/*
                //     this.line1 = [{
                //         x: screenWidth * 0.43,
                //         y: screenHeight * 0.27,
                //     }, {
                //         x: screenWidth * 0.3,
                //         y: screenHeight * 0.31,
                //     }, {
                //         x: screenWidth * 0.29,
                //         y: screenHeight * 0.6,
                //     }, {
                //         x: screenWidth * 0.41,
                //         y: screenHeight * 0.685,
                //     }, {
                //         x: screenWidth * 0.43,
                //         y: screenHeight * 0.495,
                //     }, {
                //         x: screenWidth * 0.48,
                //         y: screenHeight * 0.55,
                //     }, {
                //         x: screenWidth * 0.64,
                //         y: screenHeight * 0.38,
                //     }, {
                //         x: screenWidth * 0.577,
                //         y: screenHeight * 0.54,
                //     }, {
                //         x: screenWidth * 0.64,
                //         y: screenHeight * 0.675,
                //     }, {
                //         x: screenWidth * 0.728,
                //         y: screenHeight * 0.46,
                //     }, {
                //         x: screenWidth * 0.728,
                //         y: screenHeight * 0.59,
                //     }, {
                //         x: screenWidth * 0.72,
                //         y: screenHeight * 0.76,
                //     }, {
                //         x: screenWidth * 0.65,
                //         y: screenHeight * 0.83,
                //     }, ];
                // */}

                // <View style={[styles.dot, {top: screenHeight * 0.38,
                //     left: screenWidth * 0.64}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.54,
                //     left: screenWidth * 0.577}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.675,
                //     left: screenWidth * 0.64}]}></View>

                // <View style={[styles.dot, {top: screenHeight * 0.46,
                //     left: screenWidth * 0.728}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.59,
                //     left: screenWidth * 0.728}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.76,
                //     left: screenWidth * 0.72}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.83,
                //     left: screenWidth * 0.65}]}></View>

                // {/*
                //     this.line1 = [{
                //         x: screenWidth * 0.64,
                //         y: screenHeight * 0.38,
                //     }, {
                //         x: screenWidth * 0.577,
                //         y: screenHeight * 0.54,
                //     }, {
                //         x: screenWidth * 0.64,
                //         y: screenHeight * 0.675,
                //     }, {
                //         x: screenWidth * 0.728,
                //         y: screenHeight * 0.46,
                //     }, {
                //         x: screenWidth * 0.728,
                //         y: screenHeight * 0.59,
                //     }, {
                //         x: screenWidth * 0.72,
                //         y: screenHeight * 0.76,
                //     }, {
                //         x: screenWidth * 0.65,
                //         y: screenHeight * 0.83,
                //     }, ];
                // */}
        )
    }
}

export default withNavigation(GTracing);