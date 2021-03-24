import { Dimensions } from 'react-native';

import Number1 from './numberBackground/number1.png';
import Number2 from './numberBackground/number2.png';
import Number3 from './numberBackground/number3.png';
import Number4 from './numberBackground/number4.png';
import Number5 from './numberBackground/number5.png';
import Number6 from './numberBackground/number6.png';
import Number7 from './numberBackground/number7.png';
import Number8 from './numberBackground/number8.png';
import Number9 from './numberBackground/number9.png';
import Number10 from './numberBackground/number10.png';
import Number20 from './numberBackground/number20.png';
import Number30 from './numberBackground/number30.png';
import Number40 from './numberBackground/number40.png';
import Number50 from './numberBackground/number50.png';
import Number60 from './numberBackground/number60.png';
import Number70 from './numberBackground/number70.png';
import Number80 from './numberBackground/number80.png';
import Number90 from './numberBackground/number90.png';
import Number100 from './numberBackground/number100.png';
import Number200 from './numberBackground/number200.png';
import Number300 from './numberBackground/number300.png';
import Number400 from './numberBackground/number400.png';
import Number500 from './numberBackground/number500.png';
import Number1000 from './numberBackground/number1000.png';

import Glow1 from './NumbersGlow/1.gif';
import Glow2 from './NumbersGlow/2.gif';
import Glow3 from './NumbersGlow/3.gif';
import Glow4 from './NumbersGlow/4.gif';
import Glow5 from './NumbersGlow/5.gif';
import Glow6 from './NumbersGlow/6.gif';
import Glow7 from './NumbersGlow/7.gif';
import Glow8 from './NumbersGlow/8.gif';
import Glow9 from './NumbersGlow/9.gif';
import Glow10 from './NumbersGlow/10.gif';
import Glow20 from './NumbersGlow/20.gif';
import Glow30 from './NumbersGlow/30.gif';
import Glow40 from './NumbersGlow/40.gif';
import Glow50 from './NumbersGlow/50.gif';
import Glow60 from './NumbersGlow/60.gif';
import Glow70 from './NumbersGlow/70.gif';
import Glow80 from './NumbersGlow/80.gif';
import Glow90 from './NumbersGlow/90.gif';
import Glow100 from './NumbersGlow/100.gif';
import Glow200 from './NumbersGlow/200.gif';
import Glow300 from './NumbersGlow/300.gif';
import Glow400 from './NumbersGlow/400.gif';
import Glow500 from './NumbersGlow/500.gif';
import Glow1000 from './NumbersGlow/1000.gif';



import img1 from './NumbersGlow/1img.png';
import img2 from './NumbersGlow/2img.png';
import img3 from './NumbersGlow/3img.png';
import img4 from './NumbersGlow/4img.png';
import img5 from './NumbersGlow/5img.png';
import img6 from './NumbersGlow/6img.png';
import img7 from './NumbersGlow/7img.png';
import img8 from './NumbersGlow/8img.png';
import img9 from './NumbersGlow/9img.png';
import img10 from './NumbersGlow/10img.png';
import img20 from './NumbersGlow/20img.png';
import img30 from './NumbersGlow/30img.png';
import img40 from './NumbersGlow/40img.png';
import img50 from './NumbersGlow/50img.png';
import img60 from './NumbersGlow/60img.png';
import img70 from './NumbersGlow/70img.png';
import img80 from './NumbersGlow/80img.png';
import img90 from './NumbersGlow/90img.png';
import img100 from './NumbersGlow/100img.png';
import img200 from './NumbersGlow/200img.png';
import img300 from './NumbersGlow/300img.png';
import img400 from './NumbersGlow/400img.png';
import img500 from './NumbersGlow/500img.png';
import img1000 from './NumbersGlow/1000img.png';

import Sentence1 from './numberBackground/1.gif';
import Sentence2 from './numberBackground/2.gif';
import Sentence3 from './numberBackground/3.gif';
import Sentence4 from './numberBackground/4.gif';
import Sentence5 from './numberBackground/5.gif';
import Sentence6 from './numberBackground/6.gif';
import Sentence7 from './numberBackground/7.gif';
import Sentence8 from './numberBackground/8.gif';
import Sentence9 from './numberBackground/9.gif';
import Sentence10 from './numberBackground/10.gif';
import Sentence20 from './numberBackground/20.gif';
import Sentence30 from './numberBackground/30.gif';
import Sentence40 from './numberBackground/40.gif';
import Sentence50 from './numberBackground/50.gif';
import Sentence60 from './numberBackground/60.gif';
import Sentence70 from './numberBackground/70.gif';
import Sentence80 from './numberBackground/80.gif';
import Sentence90 from './numberBackground/90.gif';
import Sentence100 from './numberBackground/100.gif';
import Sentence200 from './numberBackground/200.gif';
import Sentence300 from './numberBackground/300.gif';
import Sentence400 from './numberBackground/400.gif';
import Sentence500 from './numberBackground/500.gif';
import Sentence1000 from './numberBackground/1000.gif';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export const boardDimension = {
    width: screenWidth * 0.75,
    height: screenHeight * 0.7,
};

export const numberDimension = {
    width: boardDimension.width * 0.35,
    height: boardDimension.height * 0.9,
}

export const scopeX = screenWidth * 0.04;
export const scopeY = screenHeight * 0.05;
export const trail = screenWidth * 0.025;
export const velocityLimit = 1.2;
export const velocityLimit2 = -1.5; 

export const soundList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '20', /*
    '30', '40', '50', '60',
'70', '80', '90',
*/ '100', '200', '300', '400', '500', '1000'];

export const numberBGList = [Number1, Number2, Number3, Number4, Number5, Number6, Number7, Number8, Number9, Number10,
    Number20, 
    /* Number30, Number40, Number50, Number60, Number70, Number80, Number90,  */
    Number100,
    Number200, Number300, Number400, Number500, Number1000];
    
export const numberGlowList = [Glow1, Glow2, Glow3, Glow4, Glow5, Glow6, Glow7, Glow8, Glow9, Glow10,
    Glow20, /*Glow30, Glow40, Glow50, Glow60, Glow70, Glow80, Glow90,*/ Glow100,
    Glow200, Glow300, Glow400, Glow500, Glow1000];


export const numberImageList = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img20, /*img30, img40, img50, img60, img70, img80, img90,*/ img100,
    img200, img300, img400, img500, img1000];

export const sentenceList = [Sentence1, Sentence2, Sentence3, Sentence4, Sentence5, Sentence6, Sentence7, Sentence8, Sentence9, Sentence10,
        Sentence20, /* Sentence30, Sentence40, Sentence50, Sentence60, Sentence70, Sentence80, Sentence90, */ Sentence100,
        Sentence200, Sentence300, Sentence400, Sentence500, Sentence1000];