import React, { Component } from 'react';
import { View, Dimensions,
    Image, TouchableOpacity, StatusBar } from 'react-native';
import { withNavigation } from 'react-navigation';

import Home_icon from '../../images/Home_icon.png';
import Back_icon from '../../images/Back_icon.png';
import imageBG from '../../images/BG.jpg';
import PencilIcon from '../../images/Pencil_icon.png';

import trace1 from '../numberTracingGIF/1_1.gif';
import trace2 from '../numberTracingGIF/1_2.gif';

import shaded_1_1 from '../numberTracingImage/shaded_1_1.png';
import shaded_1_2 from '../numberTracingImage/shaded_1_2.png';

import { scopeX, scopeY } from '../numbersImport';

import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js'; 
import {sound} from '../../HomePage';

const shadedLine = [shaded_1_1, shaded_1_2];
const tracingLine = [trace1, trace2];

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const boardDimension = {
    width: screenWidth * 0.75,
    height: screenHeight * 0.7,
};

const numberDimension = {
    width: boardDimension.width * 0.3,
    height: boardDimension.height * 0.9,
}

class OneTracing extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this. state = {
            //Tracing State
            shaded: shadedLine[0],
            tracing: tracingLine[0],
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
        },

        this.index = 0;

        // Dots Locations
        this.line1 = [{
            x: screenWidth * 0.52,
            y: screenHeight * 0.31
        }, {
            x: screenWidth * 0.48,
            y: screenHeight * 0.37
        }, {
            x: screenWidth * 0.42,
            y: screenHeight * 0.43
        }, ];

        this.line2 = [{
            x: screenWidth * 0.52,
            y: screenHeight * 0.45,
        }, {
            x: screenWidth * 0.52,
            y: screenHeight * 0.6,
        }, {
            x: screenWidth * 0.52,
            y: screenHeight * 0.73,
        }, ];
    }

    numberTrace =  (X, Y) => {
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

        if(!this.state.dot7 && !this.state.dot1) {
            this.setState({dot7: 
                ((X >= this.line1[2].x - scopeX && X <= this.line1[2].x + scopeX) && 
                (Y >= this.line1[2].y - scopeY && Y <= this.line1[2].y + scopeY)) ? true : false});
        
        } else if(this.state.dot7 && !this.state.dot2) {
            this.setState({dot2: 
                ((X >= this.line1[1].x - scopeX && X <= this.line1[1].x + scopeX) && 
                (Y >= this.line1[1].y - scopeY && Y <= this.line1[1].y + scopeY)) ? true : false});
        
        } else if(this.state.dot2 && !this.state.dot8) {
            this.setState({dot8: 
                ((X >= this.line1[0].x - scopeX && X <= this.line1[0].x + scopeX) && 
                (Y >= this.line1[0].y - scopeY && Y <= this.line1[0].y + scopeY)) ? true : false});
        
        } 
        
        
        else if((this.state.dot3 || this.state.dot8) && !this.state.dot4) {
            this.setState({dot4: 
                ((X >= this.line2[0].x - scopeX && X <= this.line2[0].x + scopeX) && 
                (Y >= this.line2[0].y - scopeY && Y <= this.line2[0].y + scopeY)) ? true : false});
        
        } else if(this.state.dot4 && !this.state.dot5) {
            this.setState({dot5: 
                ((X >= this.line2[1].x - scopeX && X <= this.line2[1].x + scopeX) && 
                (Y >= this.line2[1].y - scopeY && Y <= this.line2[1].y + scopeY)) ? true : false});
        
        } else if(this.state.dot5 && !this.state.dot6) {
            this.setState({dot6: 
                ((X >= this.line2[2].x - scopeX && X <= this.line2[2].x + scopeX) && 
                (Y >= this.line2[2].y - scopeY && Y <= this.line2[2].y + scopeY)) ? true : false});
        
        }
    }

    ifTraced = () => {
        if(this.state.dot3 || this.state.dot8) {
            if(this.state.dot6) {
                this.setState({arrayMove: [], showShaded: 1, shaded: shadedLine[1],
                    tracing: tracingLine[1], showTracing: 0});
            } else {
                this.setState({arrayMove: [], showShaded: 1, dot4: false, dot5: false, 
                    dot6: false, shaded: shadedLine[0],
                    tracing: tracingLine[1]});
            }
        } else {
            this.clearBoard();
        }
    }

    clearBoard = () => {
        this.setState({arrayMove: [], dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false,
            dot7: false, dot8: false,
            showShaded: 0, shaded: shadedLine[0], tracing: tracingLine[0], showTracing: 1});
    }

    render() {

        StatusBar.setHidden(true);
        return (
            
            <View style={{position: 'absolute', 
                    width: boardDimension.width, height: boardDimension.height, top: '20%', left: '12.5%', 
                    backgroundColor: 'rgba(255, 255, 255, 0.000000001)'}}
                    >
                <View style={{position: 'absolute', width: numberDimension.width, height: numberDimension.height, 
                            top: '5%', left: '30%', opacity: this.state.showTracing,}}>
                    <Image source={this.state.tracing} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                    
                {/* <View style={[styles.dot, {top: numberDimension.height * 0.15,
                    left: numberDimension.width * 0.7}]}></View>
                <View style={[styles.dot, {top: numberDimension.height * 0.25,
                    left: numberDimension.width * 0.5}]}></View>
                <View style={[styles.dot, {top: numberDimension.height * 0.31,
                    left: numberDimension.width * 0.3}]}></View> */}
                    
                    {/*
                        this.line1 = [{
                            x: numberDimension.width * 0.7,
                            y: numberDimension.height * 0.15,
                        }, {
                            x: numberDimension.width * 0.5,
                            y: numberDimension.height * 0.25,
                        }, {
                            x: numberDimension.width * 0.31,
                            y: numberDimension.height * 0.3,
                        }, ];
                    */}

                {/* <View style={[styles.dot, {top: numberDimension.height * 0.35,
                        left: numberDimension.width * 0.75}]}></View>
                <View style={[styles.dot, {top: numberDimension.height * 0.55,
                        left: numberDimension.width * 0.75}]}></View>
                <View style={[styles.dot, {top: numberDimension.height * 0.75,
                        left: numberDimension.width * 0.75}]}></View> */}
                
                {/*
                    this.line2 = [{
                        x: numberDimension.width * 0.75,
                            y: numberDimension.height * 0.35,
                        }, {
                            x: numberDimension.width * 0.75,
                            y: numberDimension.height * 0.55,
                        }, {
                            x: numberDimension.width * 0.75,
                            y: numberDimension.height * 0.75,
                    }, ];
                */}

                </View>
                <View style={{position: 'absolute', width: numberDimension.width, 
                            height: numberDimension.height, 
                            top: '5%', left: '30%', opacity: this.state.showShaded}}>
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

                // <View style={[styles.dot, {top: screenHeight * 0.31,
                //     left: screenWidth * 0.52}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.37,
                //     left: screenWidth * 0.48}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.43,
                //     left: screenWidth * 0.42}]}></View>

                // {/*
                //     this.line1 = [{
                //         x: screenWidth * 0.52,
                //         y: screenHeight * 0.31
                //     }, {
                //         x: screenWidth * 0.48,
                //         y: screenHeight * 0.37
                //     }, {
                //         x: screenWidth * 0.42,
                //         y: screenHeight * 0.43
                //     }, ];
                // */}

                // <View style={[styles.dot, {top: screenHeight * 0.45,
                //     left: screenWidth * 0.52}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.6,
                //     left: screenWidth * 0.52}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.73,
                //     left: screenWidth * 0.52}]}></View>
                
                // {/*
                //     this.line2 = [{
                //         x: screenWidth * 0.52,
                //         y: screenHeight * 0.45,
                //     }, {
                //         x: screenWidth * 0.52,
                //         y: screenHeight * 0.6,
                //     }, {
                //         x: screenWidth * 0.52,
                //         y: screenHeight * 0.73,
                //     }, ];
                // */}
        )
    }
}

export default withNavigation(OneTracing);