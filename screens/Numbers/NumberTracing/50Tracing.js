import React, { Component } from 'react';
import { View, Dimensions, Image, TouchableOpacity, StatusBar } from 'react-native';
import { withNavigation } from 'react-navigation';

import PencilIcon from '../../images/Pencil_icon.png';

import trace1 from '../numberTracingGIF/5_1.gif';
import trace2 from '../numberTracingGIF/5_2.gif';
import trace3 from '../numberTracingGIF/5_3.gif';

import shaded_5_1 from '../numberTracingImage/shaded_5_1.png';
import shaded_5_2 from '../numberTracingImage/shaded_5_2.png';
import shaded_5_3 from '../numberTracingImage/shaded_5_3.png';

import traceNumber from '../numberTracingImage/5.png';
import traceZero from '../numberTracingImage/0.png';

import shaded_0 from '../numberTracingImage/shaded_0.png';

import trace4 from '../numberTracingGIF/0.gif';

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js'; 
import { scopeX, scopeY, trail } from '../numbersImport';
import {sound} from '../../HomePage';
import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const shadedLine = [shaded_5_1, shaded_5_2, shaded_5_3, shaded_0];
const tracingLine = [trace1, trace2, trace3, trace4];

const boardDimension = {
    width: screenWidth * 0.75,
    height: screenHeight * 0.7,
};

const numberDimension = {
    width: boardDimension.width * 0.35,
    height: boardDimension.height * 0.9,
}

const numberDimension2 = {
    width: boardDimension.width * 0.35,
    height: boardDimension.height * 0.9,
}

class FiftyTracing extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this. state = {
            
            //Tracing State
            shaded: shadedLine[0],
            tracing: tracingLine[0],
            tracing2: traceZero,
            shaded2: shadedLine[2],
            lineIndex: 0,
            showShaded: 0,
            showShaded2: 0,
            showTracing: 1,
            showTracing2: 1,
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
        },

        // Dots Locations
        this.line1= [{
            x: screenWidth * 0.41,
            y: screenHeight * 0.3,
        }, {
            x: screenWidth * 0.34,
            y: screenHeight * 0.3,
        }, {
            x: screenWidth * 0.3,
            y: screenHeight * 0.37,
        }, {
            x: screenWidth * 0.29,
            y: screenHeight * 0.45,
        }, {
            x: screenWidth * 0.425,
            y: screenHeight * 0.505,
        }, {
            x: screenWidth * 0.425,
            y: screenHeight * 0.75,
        }, {
            x: screenWidth * 0.34,
            y: screenHeight * 0.78,

        }, {
            x: screenWidth * 0.57,
            y: screenHeight * 0.35,
        }, {
            x: screenWidth * 0.57,
            y: screenHeight * 0.725,
        }, {
            x: screenWidth * 0.69,
            y: screenHeight * 0.74,
        }, {
            x: screenWidth * 0.7,
            y: screenHeight * 0.39,
        }, ];
    }

    numberTrace = (X, Y) => {
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
        if(this.state.dot2) {
            if(this.state.dot4) {
                if(this.state.dot7) {
                    if(this.state.dot11) {
                        this.setState({shaded2: shadedLine[3], showShaded2: 1,
                        showTracing2: 1,  tracing2: shaded_0})
                    } else {
                        this.setState({showShaded: 1, shaded: shadedLine[2], dot8: false, 
                            dot11: false, dot9: false, dot10: false, 
                            tracing2: tracingLine[3], showTracing2: 1, showTracing: 0,});
                    }
                } else {
                    this.setState({showShaded: 1,  dot5: false,  
                        dot6: false, dot7: false, shaded: shadedLine[1],
                        tracing: tracingLine[2]});
                }
            } else {
                this.setState({showShaded: 1, dot4: false, 
                    dot3: false, shaded: shadedLine[0], tracing: tracingLine[1]});
            }
        } else {
        //  alert('After Release!');
            this.clearBoard();
        }
    }

    clearBoard = () => {
        this.setState({dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false,
            dot7: false, dot8: false, dot9: false, dot10: false, dot11: false,
            showShaded: 0, shaded: shadedLine[0], tracing: tracingLine[0], showTracing: 1,
            showShaded2: 0, tracing2: traceZero, showTracing2: 1});
    }

    render() {

        StatusBar.setHidden(true);
        return (
                <View style={{position: 'absolute', 
                        width: boardDimension.width, height: boardDimension.height, 
                        top: '20%', left: '12.5%', backgroundColor: 'rgba(255, 255, 255, 0.000000001)'}}>

                    {/* Two Tracing */}
                    <View style={{position: 'absolute', width: numberDimension.width, 
                                height: numberDimension.height, 
                                top: '5%', left: '15%', opacity: this.state.showTracing,}}>
                        <Image source={this.state.tracing} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                    </View>
                    <View style={{position: 'absolute', width: numberDimension.width, 
                                height: numberDimension.height, 
                                top: '5%', left: '15%', opacity: this.state.showShaded}}>
                        <Image source={this.state.shaded} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                    </View>


                    {/* Zero Tracing */}
                    <View style={{position: 'absolute', width: numberDimension.width, 
                                height: numberDimension.height, 
                                top: '5%', left: '50%', opacity: this.state.showTracing2,}}>
                        <Image source={this.state.tracing2} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
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

                // <View style={[styles.dot, {top: screenHeight * 0.3,
                //     left: screenWidth * 0.41}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.3,
                //     left: screenWidth * 0.34}]}></View>
                
                // <View style={[styles.dot, {top: screenHeight * 0.37,
                //     left: screenWidth * 0.3}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.45,
                //     left: screenWidth * 0.29}]}></View>
                
                // <View style={[styles.dot, {top: screenHeight * 0.505,
                //     left: screenWidth * 0.425}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.75,
                //     left: screenWidth * 0.425}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.78,
                //     left: screenWidth * 0.34}]}></View>

                // {/*     
                //     this.line1= [{
                //         x: screenWidth * 0.41,
                //         y: screenHeight * 0.3,
                //     }, {
                //         x: screenWidth * 0.34,
                //         y: screenHeight * 0.3,
                //     }, {
                //         x: screenWidth * 0.3,
                //         y: screenHeight * 0.37,
                //     }, {
                //         x: screenWidth * 0.29,
                //         y: screenHeight * 0.45,
                //     }, {
                //         x: screenWidth * 0.425,
                //         y: screenHeight * 0.505,
                //     }, {
                //         x: screenWidth * 0.425,
                //         y: screenHeight * 0.75,
                //     }, {
                //         x: screenWidth * 0.34,
                //         y: screenHeight * 0.78,

                //     }, {
                //         x: screenWidth * 0.57,
                //         y: screenHeight * 0.35,
                //     }, {
                //         x: screenWidth * 0.57,
                //         y: screenHeight * 0.725,
                //     }, {
                //         x: screenWidth * 0.69,
                //         y: screenHeight * 0.74,
                //     }, {
                //         x: screenWidth * 0.7,
                //         y: screenHeight * 0.39,
                //     }, ];
                // */}

                // <View style={[styles.dot, {top: screenHeight * 0.35,
                //     left: screenWidth * 0.57}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.725,
                //     left: screenWidth * 0.57}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.74,
                //     left: screenWidth * 0.69}]}></View>
                // <View style={[styles.dot, {top: screenHeight * 0.39,
                //     left: screenWidth * 0.7}]}></View>
        )
    }
}

export default withNavigation(FiftyTracing);