import { createStackNavigator} from "react-navigation";
import { useScreens } from 'react-native-screens';
import HomeScreen from './screens/HomePage';
import MainMenu from './screens/MainMenu';
import LetterScreen from './screens/Letters/letterScreen';
import Numbers from './screens/Numbers/NumbersScreen';
import About from './screens/About';
import Settings from './screens/Settings';

import NumberIntroScreen from './screens/Numbers/NumberIntroScreen';
import LetterIntroScreen from './screens/Letters/LetterIntroScreen';
import GameIntroScreen from './screens/Games/GameIntroScreen';
import DSBangIntroScreen from './screens/Games/DSBangIntroScreen';

// Flalok Stories Import

import FlalokStoryMenu from './screens/Flalok/FlalokStoryMenu';
import Story1Screen from './screens/Flalok/flalokStoryScreens/Story1Screen';
import Story2Screen from './screens/Flalok/flalokStoryScreens/Story2Screen';
import Story3Screen from './screens/Flalok/flalokStoryScreens/Story3Screen';
import Story4Screen from './screens/Flalok/flalokStoryScreens/Story4Screen';
import Story5Screen from './screens/Flalok/flalokStoryScreens/Story5Screen';
import Story6Screen from './screens/Flalok/flalokStoryScreens/Story6Screen';

// Vocabularies
import VocabularyMenu from './screens/Vocabulary/vocabularyMenu';

//Vocabulary1
import Vocabulary1 from './screens/Vocabulary/vocabulary1/vocabulary1'

//Vocabulary2
import Vocabulary2 from './screens/Vocabulary/vocabulary2/vocabulary2';

//Vocabulary3
import Vocabulary3 from './screens/Vocabulary/vocabulary3/vocabulary3';

//Vocabulary4
import Vocabulary4 from './screens/Vocabulary/vocabulary4/vocabulary4';

//Vocabulary5
import Vocabulary5 from './screens/Vocabulary/vocabulary5/vocabulary5';

//Vocabulary6
import Vocabulary6 from './screens/Vocabulary/vocabulary6/vocabulary6'

//Vocabulary7
import Vocabulary7 from './screens/Vocabulary/vocabulary7/vocabulary7';

//Vocabulary8
import Vocabulary8 from './screens/Vocabulary/vocabulary8/vocabulary8';

//Vocabulary9
import Vocabulary9 from './screens/Vocabulary/vocabulary9/vocabulary9';

//Vocabulary10
import Vocabulary10 from './screens/Vocabulary/vocabulary10/vocabulary10';

// Culture and Arts Import

import cultureandartsMain from './screens/CultureandArts/cultureandartsMain';
import Chants_Screen from './screens/CultureandArts/cultureandartsScreens/chantsScreen';
import Kastifun_Screen from './screens/CultureandArts/cultureandartsScreens/kastifunScreen';
import Prayers_Screen from './screens/CultureandArts/cultureandartsScreens/prayersScreen';
import Prayer1_Screen from './screens/CultureandArts/cultureandartsScreens/prayers/prayers1Screen';
import Prayer2_Screen from './screens/CultureandArts/cultureandartsScreens/prayers/prayers2Screen';
import Prayer3_Screen from './screens/CultureandArts/cultureandartsScreens/prayers/prayers3Screen';
import Chant1_Screen from './screens/CultureandArts/cultureandartsScreens/chants/chants1Screen';
import Chant2_Screen from './screens/CultureandArts/cultureandartsScreens/chants/chants2Screen';
import Chant3_Screen from './screens/CultureandArts/cultureandartsScreens/chants/chants3Screen';
import Kastifun1_Screen from './screens/CultureandArts/cultureandartsScreens/kastifun/kastifun1Screen';
import Kastifun2_Screen from './screens/CultureandArts/cultureandartsScreens/kastifun/kastifun2Screen';
import Kastifun3_Screen from './screens/CultureandArts/cultureandartsScreens/kastifun/kastifun3Screen';
import Kastifun4_Screen from './screens/CultureandArts/cultureandartsScreens/kastifun/kastifun4Screen';
import Kastifun5_Screen from './screens/CultureandArts/cultureandartsScreens/kastifun/kastifun5Screen';

// Games
import GameMenu from './screens/Games/GameMenu';
import DadSeProceed from './screens/Games/DadSe/DadSeProceed';
import DadSeMarket from './screens/Games/DadSe/DadSeMarket';
import DadSeBank from './screens/Games/DadSe/DadSeBank';
import DadSeBankQuestion from './screens/Games/DadSe/DadSeBankQuestion';
import DadSeEnd from './screens/Games/DadSe/DadSeEnd';

import DadBatak from './screens/Games/dadbatak/DadBatak';
import DadBatakProceed from './screens/Games/dadbatak/DadBatakProceed';
import DadBatakMarket from './screens/Games/dadbatak/DadBatakMarket';

import DadBatak_GameMenuIntro from './screens/Games/DadBatak_GameMenuIntro';

//Dad Se - Bang 1
import Bang from './screens/Games/DadSe/Bang1/Bang';
import EndingVideo from './screens/Games/DadSe/Bang1/Ending';
import Gameover from './screens/Games/DadSe/Bang1/Gameover';


//Dad Se - Bang 2
import Bang2 from './screens/Games/DadSe/Bang2/Bang2';

//Dad Se - Bang 3
import Bang3 from './screens/Games/DadSe/Bang3/Bang3';

//Dad Batak - Bang 4
import Bang4 from './screens/Games/dadbatak/Bang1/Bang4';
import EndingVideo4 from './screens/Games/dadbatak/Bang1/Ending4';
import Gameover4 from './screens/Games/dadbatak/Bang1/Gameover4';

//Dad Batak - Bang 5
import Bang5 from './screens/Games/dadbatak/Bang2/Bang5';

//Dad Batak - Bang 5
import Bang6 from './screens/Games/dadbatak/Bang3/Bang6';


//Letter Tracing
import ATracing from './screens/Letters/LetterTracing/ATracing';
import BTracing from './screens/Letters/LetterTracing/BTracing';
import DTracing from './screens/Letters/LetterTracing/DTracing';
import ETracing from './screens/Letters/LetterTracing/ETracing';
import FTracing from './screens/Letters/LetterTracing/FTracing';
import HTracing from './screens/Letters/LetterTracing/HTracing';
import GTracing from './screens/Letters/LetterTracing/GTracing';
import ITracing from './screens/Letters/LetterTracing/ITracing';
import KTracing from './screens/Letters/LetterTracing/KTracing';
import LTracing from './screens/Letters/LetterTracing/LTracing';
import MTracing from './screens/Letters/LetterTracing/MTracing';
import NTracing from './screens/Letters/LetterTracing/NTracing';
import OTracing from './screens/Letters/LetterTracing/OTracing';
import STracing from './screens/Letters/LetterTracing/STracing';
import TTracing from './screens/Letters/LetterTracing/TTracing';
import UTracing from './screens/Letters/LetterTracing/UTracing';
import WTracing from './screens/Letters/LetterTracing/WTracing';
import YTracing from './screens/Letters/LetterTracing/YTracing';


// Number Tracing
import OneTracing from './screens/Numbers/NumberTracing/1Tracing';
import TwoTracing from './screens/Numbers/NumberTracing/2Tracing';
import ThreeTracing from './screens/Numbers/NumberTracing/3Tracing';
import FourTracing from './screens/Numbers/NumberTracing/4Tracing';
import FiveTracing from './screens/Numbers/NumberTracing/5Tracing';
import SixTracing from './screens/Numbers/NumberTracing/6Tracing';
import SevenTracing from './screens/Numbers/NumberTracing/7Tracing';
import EightTracing from './screens/Numbers/NumberTracing/8Tracing';
import NineTracing from './screens/Numbers/NumberTracing/9Tracing';
import TenTracing from './screens/Numbers/NumberTracing/10Tracing';
import TwentyTracing from './screens/Numbers/NumberTracing/20Tracing';
import ThirtyTracing from './screens/Numbers/NumberTracing/30Tracing';
import FourtyTracing from './screens/Numbers/NumberTracing/40Tracing';
import FiftyTracing from './screens/Numbers/NumberTracing/50Tracing';
import SixtyTracing from './screens/Numbers/NumberTracing/60Tracing';
import SeventyTracing from './screens/Numbers/NumberTracing/70Tracing';
import EightyTracing from './screens/Numbers/NumberTracing/80Tracing';
import NinetyTracing from './screens/Numbers/NumberTracing/90Tracing';
import OneHundredTracing from './screens/Numbers/NumberTracing/100Tracing';
import TwoHundredTracing from './screens/Numbers/NumberTracing/200Tracing';
import ThreeHundredTracing from './screens/Numbers/NumberTracing/300Tracing';
import FourHundredTracing from './screens/Numbers/NumberTracing/400Tracing';
import FiveHundredTracing from './screens/Numbers/NumberTracing/500Tracing';
import ThousandTracing from './screens/Numbers/NumberTracing/1000Tracing';

useScreens();


export default AppNavigator = createStackNavigator(
  {
    home: HomeScreen,
    mainMenu: MainMenu,
    letters: LetterScreen,
    numbers: Numbers,
    about: About,
    settingBG: Settings,

    // Letters
    letterIntro: LetterIntroScreen,

    // Letter Tracing
    tracingA: ATracing,
    tracingB: BTracing,
    tracingD: DTracing,
    tracingE: ETracing,
    tracingF: FTracing,
    tracingG: GTracing,
    tracingH: HTracing,
    tracingI: ITracing,
    tracingK: KTracing,
    tracingL: LTracing,
    tracingM: MTracing,
    tracingN: NTracing,
    tracingO: OTracing,
    tracingS: STracing,
    tracingT: TTracing,
    tracingU: UTracing,
    tracingW: WTracing,
    tracingY: YTracing,

    // Number Tracing
    tracing1: OneTracing,
    tracing2: TwoTracing,
    tracing3: ThreeTracing,
    tracing4: FourTracing,
    tracing5: FiveTracing,
    tracing6: SixTracing,
    tracing7: SevenTracing,
    tracing8: EightTracing,
    tracing9: NineTracing,
    tracing10: TenTracing,
    tracing20: TwentyTracing,
    tracing30: ThirtyTracing,
    tracing40: FourtyTracing,
    tracing50: FiftyTracing,
    tracing60: SixtyTracing,
    tracing70: SeventyTracing,
    tracing80: EightyTracing,
    tracing90: NinetyTracing,
    tracing100: OneHundredTracing,
    tracing200: TwoHundredTracing,
    tracing300: ThreeHundredTracing,
    tracing400: FourHundredTracing,
    tracing500: FiveHundredTracing,
    tracing1000: ThousandTracing,

    numberIntro: NumberIntroScreen,

    flalok: FlalokStoryMenu,
    story1: Story1Screen,
    story2: Story2Screen,
    story3: Story3Screen,
    story4: Story4Screen,
    story5: Story5Screen,
    story6: Story6Screen,

    //Vocabularies
    vocabularyMenu: VocabularyMenu,

    //Vocabulary 1
    vocabulary1: Vocabulary1,

    //Vocabulary 2
    vocabulary2: Vocabulary2,

    //Vocabulary 3
    vocabulary3: Vocabulary3,

    //Vocabulary4
    vocabulary4: Vocabulary4,

    //Vocabulary5
    vocabulary5: Vocabulary5,

    //Vocabulary6
    vocabulary6: Vocabulary6,

    //Vocabulary7
    vocabulary7: Vocabulary7,

    //Vocabulary8
    vocabulary8: Vocabulary8,

    //Vocabulary9
    vocabulary9: Vocabulary9,

    //Vocabulary10
    vocabulary10: Vocabulary10,

    //Culture and Arts
    cultureandarts: cultureandartsMain,
    chantsScreen: Chants_Screen,
    kastifunScreen: Kastifun_Screen,
    prayersScreen: Prayers_Screen,
    prayer1Screen: Prayer1_Screen,
    prayer2Screen: Prayer2_Screen,
    prayer3Screen: Prayer3_Screen,
    chant1Screen: Chant1_Screen,
    chant2Screen: Chant2_Screen,
    chant3Screen: Chant3_Screen,
    kastifun1Screen: Kastifun1_Screen,
    kastifun2Screen: Kastifun2_Screen,
    kastifun3Screen: Kastifun3_Screen,
    kastifun4Screen: Kastifun4_Screen,
    kastifun5Screen: Kastifun5_Screen,

    //Games

    gameIntro: GameIntroScreen,
    dsbangIntro: DSBangIntroScreen,

    dadbatak_gameMenuIntro: DadBatak_GameMenuIntro,

    gameMenu: GameMenu,
    dadseProceed: DadSeProceed,
    dadseMarket: DadSeMarket,
    dadseBank: DadSeBank,
    dadseBankQuestion: DadSeBankQuestion,
    dadseEnd: DadSeEnd,

    dadbatak: DadBatak,
    dadbatakproceed: DadBatakProceed,
    dadbatakmarket: DadBatakMarket,

    //Dad Batak - Bang 1
    bang4: Bang4,
    ending4: EndingVideo4,
    gameover4: Gameover4,

    //Dad Batak - Bang 2
    bang5: Bang5,

    //Dad Batak - Bang 3
    bang6: Bang6,

    //Dad Se - Bang 1
    bang: Bang,
    ending: EndingVideo,
    gameover: Gameover,

    //Dad Se - Bang 2
    bang2: Bang2,

    //Dad Se - Bang 3s
    bang3: Bang3,
  },
  {
    initialRouteName: "home",
    mode: "card",
    cardStyle: {
      backgroundColor: "transperent",
    },
  }
);
