import { Dimensions } from 'react-native';

import sentenceSubtitleA from './lettersGlow/sentenceA.gif';
import sentenceSubtitleB from './lettersGlow/sentenceB.gif';
import sentenceSubtitleD from './lettersGlow/sentenceD.gif';
import sentenceSubtitleE from './lettersGlow/sentenceE.gif';
import sentenceSubtitleF from './lettersGlow/sentenceF.gif';
import sentenceSubtitleG from './lettersGlow/sentenceG.gif';
import sentenceSubtitleH from './lettersGlow/sentenceH.gif';
import sentenceSubtitleI from './lettersGlow/sentenceI.gif';
import sentenceSubtitleK from './lettersGlow/sentenceK.gif';
import sentenceSubtitleL from './lettersGlow/sentenceL.gif';
import sentenceSubtitleM from './lettersGlow/sentenceM.gif';
import sentenceSubtitleN from './lettersGlow/sentenceN.gif';
import sentenceSubtitleO from './lettersGlow/sentenceO.gif';
import sentenceSubtitleS from './lettersGlow/sentenceS.gif';
import sentenceSubtitleT from './lettersGlow/sentenceT.gif';
import sentenceSubtitleU from './lettersGlow/sentenceU.gif';
import sentenceSubtitleW from './lettersGlow/sentenceW.gif';
import sentenceSubtitleY from './lettersGlow/sentenceY.gif';

// Letter Background Imports
import LetterA from './lettersImage/LetterA.png';
import LetterB from './lettersImage/LetterB.png';
import LetterD from './lettersImage/LetterD.png';
import LetterE from './lettersImage/LetterE.png';
import LetterF from './lettersImage/LetterF.png';
import LetterG from './lettersImage/LetterG.png';
import LetterH from './lettersImage/LetterH.png';
import LetterI from './lettersImage/LetterI.png';
import LetterK from './lettersImage/LetterK.png';
import LetterL from './lettersImage/LetterL.png';
import LetterM from './lettersImage/LetterM.png';
import LetterN from './lettersImage/LetterN.png';
import LetterO from './lettersImage/LetterO.png';
import LetterS from './lettersImage/LetterS.png';
import LetterT from './lettersImage/LetterT.png';
import LetterU from './lettersImage/LetterU.png';
import LetterW from './lettersImage/LetterW.png';
import LetterY from './lettersImage/LetterY.png';


    // Sentence Background Imports
import sentenceA from './lettersImage/sentenceA.png';
import sentenceB from './lettersImage/sentenceB.png';
import sentenceD from './lettersImage/sentenceD.png';
import sentenceE from './lettersImage/sentenceE.png';
import sentenceF from './lettersImage/sentenceF.png';
import sentenceG from './lettersImage/sentenceG.png';
import sentenceH from './lettersImage/sentenceH.png';
import sentenceI from './lettersImage/sentenceI.png';
import sentenceK from './lettersImage/sentenceK.png';
import sentenceL from './lettersImage/sentenceL.png';
import sentenceM from './lettersImage/sentenceM.png';
import sentenceN from './lettersImage/sentenceN.png';
import sentenceO from './lettersImage/sentenceO.png';
import sentenceS from './lettersImage/sentenceS.png';
import sentenceT from './lettersImage/sentenceT.png';
import sentenceU from './lettersImage/sentenceU.png';
import sentenceW from './lettersImage/sentenceW.png';
import sentenceY from './lettersImage/sentenceY.png';

// Letter Glow
import A from './lettersGlow/A.gif';
import B from './lettersGlow/B.gif';
import D from './lettersGlow/D.gif';
import E from './lettersGlow/E.gif';
import F from './lettersGlow/F.gif';
import G from './lettersGlow/G.gif';
import H from './lettersGlow/H.gif';
import I from './lettersGlow/I.gif';
import K from './lettersGlow/K.gif';
import L from './lettersGlow/L.gif';
import M from './lettersGlow/M.gif';
import N from './lettersGlow/N.gif';
import O from './lettersGlow/O.gif';
import S from './lettersGlow/S.gif';
import T from './lettersGlow/T.gif';
import U from './lettersGlow/U.gif';
import W from './lettersGlow/W.gif';
import Y from './lettersGlow/Y.gif';

import imgA from './lettersGlow/Aimg.png';
import imgB from './lettersGlow/Bimg.png';
import imgD from './lettersGlow/Dimg.png';
import imgE from './lettersGlow/Eimg.png';
import imgF from './lettersGlow/Fimg.png';
import imgG from './lettersGlow/Gimg.png';
import imgH from './lettersGlow/Himg.png';
import imgI from './lettersGlow/Iimg.png';
import imgK from './lettersGlow/Kimg.png';
import imgL from './lettersGlow/Limg.png';
import imgM from './lettersGlow/Mimg.png';
import imgN from './lettersGlow/Nimg.png';
import imgO from './lettersGlow/Oimg.png';
import imgS from './lettersGlow/Simg.png';
import imgT from './lettersGlow/Timg.png';
import imgU from './lettersGlow/Uimg.png';
import imgW from './lettersGlow/Wimg.png';
import imgY from './lettersGlow/Yimg.png';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export const boardDimension = {
    width: screenWidth * 0.75,
    height: screenHeight * 0.7,
};

export const numberDimension = {
    width: boardDimension.width * 0.7,
    height: boardDimension.height * 0.9,
}

export const scopeX = screenWidth * 0.04;
export const scopeY = screenHeight * 0.05;
export const trail = screenWidth * 0.025;
export const velocityLimit = 1.2;
export const velocityLimit2 = -1.5;

export const imageGIFList = [imgA, imgB, imgD, imgE, imgF, imgG, imgH, 
    imgI, imgK, imgL, imgM, imgN, imgO, imgS, imgT, imgU, imgW, imgY];

// Letter Sound List
export const soundList = ['a', 'b', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n', 'o', 's', 't',
                    'u', 'w', 'y',];

    // Letter Background List
export const letterBGList = [LetterA, LetterB, LetterD, LetterE, LetterF, LetterG, LetterH, LetterI, LetterK, LetterL, LetterM, LetterN,
    LetterO, LetterS, LetterT, LetterU, LetterW, LetterY];

    // Sentence Background List
export const sentenceBGList = [sentenceA, sentenceB, sentenceD, sentenceE, sentenceF, sentenceG, sentenceH, sentenceI, sentenceK, sentenceL, sentenceM, sentenceN,
    sentenceO, sentenceS, sentenceT, sentenceU, sentenceW, sentenceY];

    // Word GLow List
export const glowGIFList = [A, B, D, E, F, G, H, I, K, L, M, N, O, S, T, U, W, Y];

export const sentenceSubtitleList = [sentenceSubtitleA, sentenceSubtitleB, sentenceSubtitleD, sentenceSubtitleE, sentenceSubtitleF, sentenceSubtitleG, sentenceSubtitleH, 
    sentenceSubtitleI, sentenceSubtitleK, sentenceSubtitleL, sentenceSubtitleM, sentenceSubtitleN,
    sentenceSubtitleO, sentenceSubtitleS, sentenceSubtitleT, sentenceSubtitleU, sentenceSubtitleW, sentenceSubtitleY];