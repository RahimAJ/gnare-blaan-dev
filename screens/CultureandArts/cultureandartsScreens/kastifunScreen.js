import React,{Component} from 'react';
import { ImageBackground, TouchableOpacity, View, Image} from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js';

import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';
import Kastifun1_icon from '../cultureandartsImages/kastifun_1Faglung.png';
import Kastifun2_icon from '../cultureandartsImages/kastifun_2FaglungGong.png';
import Kastifun3_icon from '../cultureandartsImages/kastifun_3BlaanDance.png';
import Kastifun4_icon from '../cultureandartsImages/kastifun_4BlaanDance.png';
import Kastifun5_icon from '../cultureandartsImages/kastifun_5BlaanDance.png';
import cultureandarts_BG from '../../images/Flalok_BG.jpg';
import NextIcon from '../../images/Next_Icon.png';
import PrevIcon from '../../images/Prev_Icon.png';

import RNBackgroundDownloader from "react-native-background-downloader";
import RNFS from "react-native-fs";
import base64 from "react-native-base64";
import utf8 from "utf8";

class kastifunScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      top1: "20%",
      top2: "1000%",
      top3: "1000%", //-25%
      nextTop: "45%",
      prevTop: "1000%",
      get: 0,

      fileExist_kastifun1: false,
      fileExist_kastifun2: false,
      fileExist_kastifun3: false,
      fileExist_kastifun4: false,
      fileExist_kastifun5: false,

      percentage_kastifun1: 0,
      percentage_kastifun2: 0,
      percentage_kastifun3: 0,
      percentage_kastifun4: 0,
      percentage_kastifun5: 0,
    };
  }

  componentDidMount = async () => {
    console.log("-- APPLICATION STARTED --");
    if (
      await RNFS.exists(
        RNBackgroundDownloader.directories.documents + "/pagtugtogNgFaglung.mp4"
      )
    ) {
      this.setState({
        fileExist_kastifun1: true,
        percentage_kastifun1: "Download Completed",
      });
    }

    if (
      await RNFS.exists(
        RNBackgroundDownloader.directories.documents +
          "/pagtugtogNgAgongAtFaglung.mp4"
      )
    ) {
      this.setState({
        fileExist_kastifun2: true,
        percentage_kastifun2: "Download Completed",
      });
    }

    if (
      await RNFS.exists(
        RNBackgroundDownloader.directories.documents + "/blaanDance1.mp4"
      )
    ) {
      this.setState({
        fileExist_kastifun3: true,
        percentage_kastifun3: "Download Completed",
      });
    }

    if (
      await RNFS.exists(
        RNBackgroundDownloader.directories.documents + "/blaanDance2.mp4"
      )
    ) {
      this.setState({
        fileExist_kastifun4: true,
        percentage_kastifun4: "Download Completed",
      });
    }

    if (
      await RNFS.exists(
        RNBackgroundDownloader.directories.documents + "/blaanDance3.mp4"
      )
    ) {
      this.setState({
        fileExist_kastifun5: true,
        percentage_kastifun5: "Download Completed",
      });
    }

    console.log("kastifun_1Faglung: " + this.state.fileExist_kastifun1);
    console.log("kastifun_2FaglungGong: " + this.state.fileExist_kastifun2);
    console.log("kastifun_3BlaanDance: " + this.state.fileExist_kastifun3);
    console.log("kastifun_4BlaanDance: " + this.state.fileExist_kastifun4);
    console.log("kastifun_5BlaanDance: " + this.state.fileExist_kastifun5);
  };

  sourceDownload = (kastifun) => {
    let CLIENT_ID = "m6d-UEtpXbFgB6%Ghm_y#^Lx<!m.bZkt";
    let CLIENT_SECRET = "U6aRgx*-7xzUGnhp$^DJ92WGJ=z8U%D!";
    let AUTH_TOKEN = base64.encode(
      utf8.encode(CLIENT_ID + ":" + CLIENT_SECRET)
    );

    switch (kastifun) {
      case 1:
        let task_kastifun1 = RNBackgroundDownloader.download({
          id: "kastifun_1",
          url:
            "https://cdn.smartonecampus.com/blaan/cultureandartsVideos/Kastifun/pagtugtogNgFaglung.mp4",
          destination: `${RNBackgroundDownloader.directories.documents}/pagtugtogNgFaglung.mp4`,
          headers: {
            Authorization: "Basic " + AUTH_TOKEN,
            Accept: "*/*",
            Connection: "keep-alive",
          },
        })
          .begin((expectedBytes) => {
            console.log(`Going to download ${expectedBytes} bytes!`);
          })
          .progress((percent) => {
            console.log(`kastifun_1 Downloaded: ${percent * 100}%`);
            this.setState({ percentage_kastifun1: percent * 100 });
          })
          .done(() => {
            this.setState({
              fileExist_kastifun1: true,
              percentage_kastifun1: "Download Completed",
            });
            console.log("kastifun_1 Download is done!");
          })
          .error((error) => {
            alert("PLEASE CONNECT TO THE INTERNET!");
            console.log("Download canceled due to error: ", error);
          });
        break;
      case 2:
        let task_kastifun2 = RNBackgroundDownloader.download({
          id: "kastifun_2",
          url:
            "https://cdn.smartonecampus.com/blaan/cultureandartsVideos/Kastifun/pagtugtogNgAgongAtFaglung.mp4",
          destination: `${RNBackgroundDownloader.directories.documents}/pagtugtogNgAgongAtFaglung.mp4`,
          headers: {
            Authorization: "Basic " + AUTH_TOKEN,
            Accept: "*/*",
            Connection: "keep-alive",
          },
        })
          .begin((expectedBytes) => {
            console.log(`Going to download ${expectedBytes} bytes!`);
          })
          .progress((percent) => {
            console.log(`kastifun_2 Downloaded: ${percent * 100}%`);
            this.setState({ percentage_kastifun2: percent * 100 });
          })
          .done(() => {
            this.setState({
              fileExist_kastifun2: true,
              percentage_kastifun2: "Download Completed",
            });
            console.log("kastifun_2 Download is done!");
          })
          .error((error) => {
            alert("PLEASE CONNECT TO THE INTERNET!");
            console.log("Download canceled due to error: ", error);
          });
        break;
      case 3:
        let task_kastifun3 = RNBackgroundDownloader.download({
          id: "kastifun_3",
          url:
            "https://cdn.smartonecampus.com/blaan/cultureandartsVideos/Kastifun/blaanDance1.mp4",
          destination: `${RNBackgroundDownloader.directories.documents}/blaanDance1.mp4`,
          headers: {
            Authorization: "Basic " + AUTH_TOKEN,
            Accept: "*/*",
            Connection: "keep-alive",
          },
        })
          .begin((expectedBytes) => {
            console.log(`Going to download ${expectedBytes} bytes!`);
          })
          .progress((percent) => {
            console.log(`kastifun_3 Downloaded: ${percent * 100}%`);
            this.setState({ percentage_kastifun3: percent * 100 });
          })
          .done(() => {
            this.setState({
              fileExist_kastifun3: true,
              percentage_kastifun3: "Download Completed",
            });
            console.log("kastifun_3 Download is done!");
          })
          .error((error) => {
            alert("PLEASE CONNECT TO THE INTERNET!");
            console.log("Download canceled due to error: ", error);
          });
        break;
      case 4:
        let task_kastifun4 = RNBackgroundDownloader.download({
          id: "kastifun_4",
          url:
            "https://cdn.smartonecampus.com/blaan/cultureandartsVideos/Kastifun/blaanDance2.mp4",
          destination: `${RNBackgroundDownloader.directories.documents}/blaanDance2.mp4`,
          headers: {
            Authorization: "Basic " + AUTH_TOKEN,
            Accept: "*/*",
            Connection: "keep-alive",
          },
        })
          .begin((expectedBytes) => {
            console.log(`Going to download ${expectedBytes} bytes!`);
          })
          .progress((percent) => {
            console.log(`kastifun_3 Downloaded: ${percent * 100}%`);
            this.setState({ percentage_kastifun3: percent * 100 });
          })
          .done(() => {
            this.setState({
              fileExist_kastifun4: true,
              percentage_kastifun4: "Download Completed",
            });
            console.log("kastifun_4 Download is done!");
          })
          .error((error) => {
            alert("PLEASE CONNECT TO THE INTERNET!");
            console.log("Download canceled due to error: ", error);
          });
        break;
      case 5:
        let task_kastifun5 = RNBackgroundDownloader.download({
          id: "kastifun_5",
          url:
            "https://cdn.smartonecampus.com/blaan/cultureandartsVideos/Kastifun/blaanDance3.mp4",
          destination: `${RNBackgroundDownloader.directories.documents}/blaanDance3.mp4`,
          headers: {
            Authorization: "Basic " + AUTH_TOKEN,
            Accept: "*/*",
            Connection: "keep-alive",
          },
        })
          .begin((expectedBytes) => {
            console.log(`Going to download ${expectedBytes} bytes!`);
          })
          .progress((percent) => {
            console.log(`kastifun_5 Downloaded: ${percent * 100}%`);
            this.setState({ percentage_kastifun3: percent * 100 });
          })
          .done(() => {
            this.setState({
              fileExist_kastifun5: true,
              percentage_kastifun5: "Download Completed",
            });
            console.log("kastifun_5 Download is done!");
          })
          .error((error) => {
            alert("PLEASE CONNECT TO THE INTERNET!");
            console.log("Download canceled due to error: ", error);
          });
        break;

      default:
        console.log("Error");
        break;
    }
  };

  playPress = async (kastifun) => {
    switch (kastifun) {
      case 1:
        if (
          await RNFS.exists(
            RNBackgroundDownloader.directories.documents +
              "/pagtugtogNgFaglung.mp4"
          )
        ) {
          this.props.navigation.navigate("kastifun1Screen");
        } else {
          this.sourceDownload(1);
        }
        break;
      case 2:
        if (
          await RNFS.exists(
            RNBackgroundDownloader.directories.documents +
              "/pagtugtogNgAgongAtFaglung.mp4"
          )
        ) {
          this.props.navigation.navigate("kastifun2Screen");
        } else {
          this.sourceDownload(2);
        }
        break;
      case 3:
        if (
          await RNFS.exists(
            RNBackgroundDownloader.directories.documents + "/blaanDance1.mp4"
          )
        ) {
          this.props.navigation.navigate("kastifun3Screen");
        } else {
          this.sourceDownload(3);
        }
        break;
      case 4:
        if (
          await RNFS.exists(
            RNBackgroundDownloader.directories.documents + "/blaanDance2.mp4"
          )
        ) {
          this.props.navigation.navigate("kastifun4Screen");
        } else {
          this.sourceDownload(4);
        }
        break;
      case 5:
        if (
          await RNFS.exists(
            RNBackgroundDownloader.directories.documents + "/blaanDance3.mp4"
          )
        ) {
          this.props.navigation.navigate("kastifun5Screen");
        } else {
          this.sourceDownload(5);
        }
        break;

      default:
        console.log("Error");
        break;
    }
  };

  gotoMainMenu = () => {
    this.props.navigation.navigate("mainMenu");
  };

  goBack = () => {
    this.props.navigation.goBack();
  };

  gotoNextPage = (index) => {
    if (index == 1) {
      this.setState({
        nextTop: "45%",
        prevTop: "45%",
        top1: "1000%",
        top2: "20%",
      });
    }
    if (index == 2) {
      this.setState({
        nextTop: "1000%",
        prevTop: "45%",
        top2: "1000%",
        top3: "-25%",
      });
    }
  };

  gotoPrevPage = (index) => {
    if (index == 1) {
      this.setState({
        prevTop: "45%",
        nextTop: "45%",
        top1: "1000%",
        top2: "20%",
        top3: "1000%",
      });
    }
    if (index == 0) {
      this.setState({
        prevTop: "1000%",
        nextTop: "45%",
        top1: "20%",
        top2: "1000%",
        top3: "1000%",
      });
    }
  };

  render() {
    return (
      <ImageBackground
        style={styles.image}
        source={cultureandarts_BG}
        blurRadius={1}
      >
        <View style={styles.CultureandArtsContainer}>
          <View
            style={{
              position: "absolute",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              width: "100%",
              height: "50%",
              top: this.state.top1,
            }}
          >
            <View
              style={{
                width: "45%",
                height: "150%",
              }}
            >
              <TouchableOpacity onPress={() => this.playPress(1)}>
                <Image
                  style={styles.imageSizeStoryMenu}
                  source={Kastifun1_icon}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                width: "45%",
                height: "150%",
              }}
            >
              <TouchableOpacity onPress={() => this.playPress(2)}>
                <Image
                  style={styles.imageSizeStoryMenu}
                  source={Kastifun2_icon}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              position: "absolute",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              width: "100%",
              height: "50%",
              top: this.state.top2,
            }}
          >
            <View
              style={{
                width: "45%",
                height: "150%",
              }}
            >
              <TouchableOpacity onPress={() => this.playPress(3)}>
                <Image
                  style={styles.imageSizeStoryMenu}
                  source={Kastifun4_icon}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                width: "45%",
                height: "150%",
              }}
            >
              <TouchableOpacity onPress={() => this.playPress(4)}>
                <Image
                  style={styles.imageSizeStoryMenu}
                  source={Kastifun5_icon}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              position: "absolute",
              top: this.state.top3,
              left: "30%",
              width: "45%",
              height: "150%",
            }}
          >
            <TouchableOpacity onPress={() => this.playPress(5)}>
              <Image
                style={styles.imageSizeStoryMenu}
                source={Kastifun3_icon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.backContainer}>
          <TouchableOpacity onPress={this.goBack}>
            <Image source={Back_icon} style={styles.back}></Image>
          </TouchableOpacity>
        </View>

        <View style={styles.homeContainer}>
          <TouchableOpacity onPress={this.gotoMainMenu}>
            <Image source={Home_icon} style={styles.home}></Image>
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: "absolute",
            left: "90%",
            top: this.state.nextTop,
            width: "12%",
            height: "24%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.state.get = this.state.get + 1;
              this.gotoNextPage(this.state.get);
            }}
          >
            <Image source={NextIcon} style={styles.next}></Image>
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: "absolute",
            left: "1%",
            top: this.state.prevTop,
            width: "12%",
            height: "24%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.state.get = this.state.get - 1;
              this.gotoPrevPage(this.state.get);
            }}
          >
            <Image source={PrevIcon} style={styles.prev}></Image>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}



export default withNavigation(kastifunScreen);