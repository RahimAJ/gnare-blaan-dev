'use-restrict';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export const globalStyleSheet = {

    // Image Background
    image: {
        position: 'absolute',
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain',
    },

    trace: {
        position: 'absolute',
        backgroundColor: '#ffea00',
        width: screenWidth * 0.06,
        height: screenWidth * 0.06,
        borderRadius: screenWidth * 0.06,
    },

    dot: {
        position: 'absolute',
        backgroundColor: '#ffea00',
        width: 20,
        height: 20,
        borderRadius: 20,
    },

    image2: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain',
    },

    //test Container for Prayers - DasalBagoMatulog
    container: {
        flex: 1,
        justifyContent: "center",
    },

    // Pencil
    pencilContainer: {
        position: 'absolute',
        left: '10%',
        top: '18%',
        width: '9%',
        height: '24%',
    },
    pencil: {
        width: wp('8%'),
        height: hp('25%'),
        resizeMode: 'contain',
    },

    // Back Button Icon
    backContainer: {
        position: 'absolute',
        left: '2%',
        top: '3%',
        width: '14%',
        height: '28%',
    },
    back: {
        width: '75%',
        height: '75%',
        resizeMode: 'contain',
    },
    skip: {
        fontSize: 18,
        color:'white',
    },

    // Home Icon
    homeContainer: {
        position: 'absolute',
        left: '88%',
        top: '3%',
        width: '14%',
        height: '28%',
    },
    home: {
        width: '75%',
        height: '75%',
        resizeMode: 'contain',
    },

    // Sentence Icon
    sentenceIconContainer: {
        position: 'absolute',
        left: '80%',
        top: '73%',
        width: '14%',
        height: '28%',
    },
    sentenceIcon: {
        width: '75%',
        height: '75%',
        resizeMode: 'contain',
    },


    // Contain Image
    containImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },


    // Black Background
    black: {
        top: '24%',
        left: '15%',
        width: '35%',
        height: '61%',
        backgroundColor: 'black',
        opacity: 0.2,
    },
    main: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },

    // Speaker 1 Icon
    A_Speaker_Container: {
        position: 'absolute',
        left: '42%',
        top: '20%',
        width: '6%',
        height: '10%',
    },
    A_Speaker: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

    // Speaker 2 Icon
    A_Speaker_Container_2: {
        position: 'absolute',
        left: '80%',
        top: '20%',
        width: '6%',
        height: '10%',
    },
    A_Speaker_2: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

    // Next icon (Right Side)
    nextContainer: {
        position: 'absolute',
        left: '83%',
        top: '40%',
        width: '12%',
        height: '24%',
    },
    next: {
        width: '75%',
        height: '75%',
        resizeMode: 'contain',
    },

    // Prev Icon (Left side)
    prevContainer: {
        position: 'absolute',
        left: '5%',
        top: '40%',
        width: '12%',
        height: '24%',
    },
    prev: {
        width: '75%',
        height: '75%',
        resizeMode: 'contain',
    },

    //HomePage Items
    HomePageItems: {
        margin: 5,
        marginBottom: 0,
        width: '20%',
        height: '30%',
    },

    //HomePage Touch
    HomeTouch: {
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        height: '60%',
    },

    // Flalok, Rows
    row: {
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        height: '50%',
    },
    row1: {
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        height: '35%',
    },


    // Flalok Image, Container, Story Menu
    itemSize: {
        margin: 5,
        marginBottom: 0,
        width: '35%',
        height: '40%',
    },
    imageSizeStoryMenu: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    FlalokContainer: {
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '80%',
        height: '90%',
    },

    // Culture and Arts Container
    CultureandArtsContainer: {
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '80%',
        height: '70%',
    },

    // Vocabulary Menu and list
    VocabularyContainer: {
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '100%',
        height: '100%',
    },
    VocabularyItemSize: {
        margin: 10,
        marginBottom: 0,
        width: '100%',
        height: '100%',
    },
    VocabularyRow: {
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        height: '50%',
    },
    VocabularyRow1: {
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        height: '35%',
    },
    VocabBackContainer: {
        position: 'absolute',
         left: '79%',
         top: '72%',
    },
    VocabBack: {
        width: wp('14%'),
        height: hp('28%'),
        resizeMode: 'contain',
    },

    // Stories image, container, Thumbnails
    imageStoryScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    thumbnailContainer: {
        width: '35%',
        height: '100%',
    },
    thumbnail: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    storiesContainer: {
        //backgroundColor: 'rgba(0, 0, 0, 0.2)',
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    storyTitleContainer: {
        width: '25%',
        height: '5%',
        marginBottom: '10%',
    },
    storyTitle: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

    // Main Menu Container
    menuContainer: {
        position: 'relative',
        top:'9%',
        left:'22%',
        width: '98%',
        height: '80%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    VmenuContainer: {
        justifyContent:'center',
        position: 'relative',
        top: '9%',
        left: '5%',
        width: '98%',
        height: '80%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    // Letter Menu Container
    menuLetterContainer: {
        position: 'relative',
        top:'1%',
        left:'9%',
        width: '83%',
        height: '60%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    // Number Menu Container
    menuNumberContainer: {
        position: 'relative',
        bottom:'6%',
        left: '9%',
        width: '83%',
        height: '32%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    // Story Video
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%',
    },

    // Story Video Container
    storyVideoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(0, 0, 0)',
    },

    //Glow container
    VideoContainer:{
        position: 'absolute',
        left: '52%',
        top: '20%',
        width: '25%',
        height: '25%',
    },
    Glow:{
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

    //vocab container
    vocabContainer:{
        position: 'absolute',
        top: '15%',
        justifyContent: 'center',
    },

    //Games
    gnareIconStyle: {
        position: 'absolute',
        top: hp('5%'),
        left: wp('2%'),
        height: hp('12%'),
        width: wp('10%'),
    },
    coinbankBang: {
        position: 'absolute',
        bottom: hp('4%'),
        left: wp('5%'),
        height: hp('15%'),
        width: wp('12%'),
    },
    questionStyle: {
        position: 'absolute',
        top: '15%',
        width: wp('55%'),
        height: hp('45%')
    },
    gufadyan: {
        position: 'absolute',
        top: '85%',
        left:'73%',
        height: hp('9%'),
        width: wp('19%'),
    },
    fadlugStyle: {
        position: 'absolute',
        top: '19%',
        left:'18%',
        height: hp('31%'),
        width: wp('30%'),
    },
    gufadyanStyle: {
        position: 'absolute',
        top: '19%',
        left:'55%',
        height: hp('31%'),
        width: wp('30%'),
    },
    lamwaStyle: {
        position: 'absolute',
        top: '56%',
        left:'36%',
        height: hp('33%'),
        width: wp('32%'),
    },
    kwartoStyle: {
        position: 'absolute',
        top: '8%',
        left: '12%',
        height: hp('89%'),
        width: wp('80%'),
    },

    //Market Items
    item1Style: {
        position: 'absolute',
        top: '6.5%',
        left: '11.5%',
        height: hp('17%'),
        width: wp('16%'),
    },
    item1Image: {
        position: 'absolute',
        top: '10.5%',
        left: '14%',
        height: hp('9%'),
        width: wp('9%'),
        justifyContent: 'center',
    },
    item2Style: {
        position: 'absolute',
        top: '26%',
        left: '11.5%',
        height: hp('17%'),
        width: wp('16%'),
    },
    item2Image: {
        position: 'absolute',
        top: '27%',
        left: '10.5%',
        height: hp('15%'),
        width: wp('15%'),
        justifyContent: 'center',
    },
    item3Style: {
        position: 'absolute',
        top: '46%',
        left: '11.5%',
        height: hp('17%'),
        width: wp('16%'),
    },
    item3Image: {
        position: 'absolute',
        top: '47%',
        left: '10.5%',
        height: hp('15%'),
        width: wp('15%'),
        justifyContent: 'center',
    },
    item4Style: {
        position: 'absolute',
        top: '66%',
        left: '11.5%',
        height: hp('17%'),
        width: wp('16%'),
    },
    item4Image: {
        position: 'absolute',
        top: '69%',
        left: '12%',
        height: hp('13%'),
        width: wp('13%'),
        justifyContent: 'center',
    },
    item5Style: {
        position: 'absolute',
        top: '16%',
        left: '69.5%',
        height: hp('17%'),
        width: wp('16%'),
    },
    item5Image: {
        position: 'absolute',
        top: '18%',
        left: '69.5%',
        height: hp('13%'),
        width: wp('13%'),
        justifyContent: 'center',
    },
    item6Style: {
        position: 'absolute',
        top: '36%',
        left: '69.5%',
        height: hp('17%'),
        width: wp('16%'),
    },
    item6Image: {
        position: 'absolute',
        top: '39%',
        left: '69.5%',
        height: hp('13%'),
        width: wp('13%'),
        justifyContent: 'center',
    },
    item7Style: {
        position: 'absolute',
        top: '56%',
        left: '69.5%',
        height: hp('17%'),
        width: wp('16%'),
    },
    item7Image: {
        position: 'absolute',
        top: '59%',
        left: '69.5%',
        height: hp('13%'),
        width: wp('13%'),
        justifyContent: 'center',
    },
    coinbankStyle: {
        position: 'absolute',
        top: '-8%',
        left: '87%',
        height: hp('15%'),
        width: wp('12%'),
    },
    mayadStyle: {
        position: 'absolute',
        top: '85%',
        left: '29.5%',
        height: hp('14%'),
        width: wp('10.5%'),
    },
    fuleStyle: {
        position: 'absolute',
        top: '85%',
        left: '43.5%',
        height: hp('14%'),
        width: wp('10.5%'),
    },
    xbuttonStyle: {
        position: 'absolute',
        top: '85%',
        left: '57.5%',
        height: hp('14%'),
        width: wp('10.5%'),
    },
    barEmptyStyle: {
        position: 'absolute',
        top: '18%',
        left: '83%',
        height: hp('75%'),
        width: wp('8%'),
    },

    //Dad Batak - Bang 1 Styles for Choices
    db_b1_choice2Style : {
        position: 'absolute',
        top: '67%',
        left: '39%',
        width: wp('10%'),
        height: hp('12%')
    },
    db_b1_choice3Style : {
        position: 'absolute',
        top: '67%',
        left: '51%',
        width: wp('10%'),
        height: hp('12%')
    },
    db_b1_choice4Style : {
        position: 'absolute',
        top: '67%',
        left: '63%',
        width: wp('10%'),
        height: hp('12%')
    },
    db_b1_choice1Style : {
        position: 'absolute',
        top: '67%',
        left: '27%',
        width: wp('10%'),
        height: hp('12%')
    },

    //Dad Batak - Bang 2 Styles for Choices
    db_b2_choice1Style: {
        position: 'absolute',
        top: '67%',
        left: '22.5%',
        width: wp('17%'),
        height: hp('12%')
    },
    db_b2_choice2Style: {
        position: 'absolute',
        top: '67%',
        left:'41.5%',
        width: wp('17%'),
        height: hp('12%')
    },
    db_b2_choice3Style: {
        position: 'absolute',
        top: '67%',
        left:'60.5%',
        width: wp('17%'),
        height: hp('12%')
    },

    //Dad Batak - Bang 3 Styles for Choices
    db_b3_choice1Style: {
        position: 'absolute',
        top: '67%',
        left: '22.5%',
        width: wp('17%'),
        height: hp('12%')
    },
    db_b3_choice2Style: {
        position: 'absolute',
        top: '67%',
        left:'41.5%',
        width: wp('17%'),
        height: hp('12%')
    },
    db_b3_choice3Style: {
        position: 'absolute',
        top: '67%',
        left:'60.5%',
        width: wp('17%'),
        height: hp('12%')
    },

    //Dad Se - Bang 1 Styles for Choices
    bang1Board: {
        position: 'absolute',
        top: '11.5%',
        left:'23%',
        height: hp('50%'),
        width: wp('60%'),
    },
    ds_bang1_choice1Style: {
        position: 'absolute',
        top: '68%',
        left:'18%',
        height: hp('10%'),
        width: wp('14%'),
    },
    ds_bang1_choice2Style: {
        position: 'absolute',
        top: '68%',
        left:'35%',
        height: hp('10%'),
        width: wp('14%'),
    },
    ds_bang1_choice3Style: {
        position: 'absolute',
        top: '68%',
        left:'53%',
        height: hp('10%'),
        width: wp('14%'),
    },
    ds_bang1_choice4Style: {
        position: 'absolute',
        top: '68%',
        left:'70%',
        height: hp('10%'),
        width: wp('14%'),
    },

};
