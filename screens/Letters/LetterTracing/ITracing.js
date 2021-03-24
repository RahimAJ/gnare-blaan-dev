import React, { Component } from 'react';
import { View, Dimensions, Image, TouchableOpacity, StatusBar, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

import ILetter_1 from '../LettersAssets/tracingI_1.gif';
import ILetter_2 from '../LettersAssets/tracingI_2.gif';
import ILetter_3 from '../LettersAssets/tracingI_3.gif';

import shaded_I_1 from '../LettersAssets/shaded_I_1.png';
import shaded_I_2 from '../LettersAssets/shaded_I_2.png';
import shaded_I_3 from '../LettersAssets/shaded_I_3.png';

import PencilIcon from '../../images/Pencil_icon.png';

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js'; 
import {sound} from '../../HomePage';

import { scopeX, scopeY } from '../letterImport';

import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';

const tracingLine = [ILetter_1, ILetter_2, ILetter_3,];
const shadedLine = [shaded_I_1, shaded_I_2, shaded_I_3,];

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


class ITracing extends Component {
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
            tittlePressed: false,

            dot1: false,
            dot2: false,
            dot3: false,
            dot4: false,
            dot5: false,
            dot6: false,
        },

        // Dots Location
        this.line1 = [{
            x: screenWidth * 0.43,
            y: screenHeight * 0.37,
        }, {
            x: screenWidth * 0.43,
            y: screenHeight * 0.55,
        }, {
            x: screenWidth * 0.43,
            y: screenHeight * 0.7,
        }, {
            x: screenWidth * 0.572,
            y: screenHeight * 0.52,
        }, {
            x: screenWidth * 0.572,
            y: screenHeight * 0.7,
        }, {
            x: screenWidth * 0.572,
            y: screenHeight * 0.31,
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
        
        } 
    }

    ifTraced = () => {
        if(!this.state.tittlePressed) {
            if(this.state.dot3) {
                if(this.state.dot5) {
                    this.setState({tracing: tracingLine[2],
                        showShaded: 1, shaded: shadedLine[1], });
                } else {
                    this.setState({dot5: false, dot4: false,
                        showShaded: 1, shaded: shadedLine[0], tracing: tracingLine[1]});
                }
            } else {
                this.clearBoard();
            }
        }
    }

    tittlePressed = () => {
        if(this.state.dot5) {
            this.setState({dot6: true, showShaded: 1, shaded: shadedLine[2], 
                tittlePressed: false, showTracing: 0,});
        }
        this.setState({tittlePressed: true});
    }

    clearBoard = () => {
        this.setState({arrayMove: [], dot1: false, dot2: false, dot3: false, 
            dot4: false, dot5: false, dot6: false, showShaded: 0, shaded: shadedLine[0], 
            tracing: tracingLine[0], showTracing: 1, tracing: tracingLine[0], tittlePressed: false});
    }

    render() {

        StatusBar.setHidden(true);
        return (
            <View style={{position: 'absolute', 
                    width: boardDimension.width, height: boardDimension.height, 
                    top: '20%', left: '12.5%', backgroundColor: 'rgba(255, 255, 255, 0.000000001)'}}>
                <View style={{position: 'absolute', width: numberDimension.width, 
                    opacity: this.state.showTracing,
                    height: numberDimension.height, top: '5%', left: '35%'}}>
                    <Image source={this.state.tracing} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                </View>
                <View style={{position: 'absolute', width: numberDimension.width,
                    opacity: this.state.showShaded, 
                    height: numberDimension.height, top: '5%', left: '35%'}}>
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

                <View style={{position: 'absolute', width: '7%', height: '15%',
                        top: '8%', left: '56%',}}>
                    <TouchableOpacity onPress={this.tittlePressed}>
                        <Text style={{ width: '100%', height: '100%', 
                            color: 'rgba(255, 255, 255, 0.00000000001)'}}>A</Text>
                    </TouchableOpacity>
                </View>
            </View>

                // <View style={[styles.dot, {top: screenHeight * 0.37,
                //     left: screenWidth * 0.43}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.55,
                //     left: screenWidth * 0.43}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.7,
                //     left: screenWidth * 0.43}]}></View>
                
                // {/*
                //     this.line1 = [{
                //         x: screenWidth * 0.43,
                //         y: screenHeight * 0.37,
                //     }, {
                //         x: screenWidth * 0.43,
                //         y: screenHeight * 0.55,
                //     }, {
                //         x: screenWidth * 0.43,
                //         y: screenHeight * 0.7,
                //     }, {
                //         x: screenWidth * 0.572,
                //         y: screenHeight * 0.52,
                //     }, {
                //         x: screenWidth * 0.572,
                //         y: screenHeight * 0.7,
                //     }, {
                //         x: screenWidth * 0.572,
                //         y: screenHeight * 0.31,
                //     }, ];
                // */}
        )
    }
}

export default withNavigation(ITracing);