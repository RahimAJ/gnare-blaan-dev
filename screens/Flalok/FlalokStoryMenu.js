import React, { Component } from "react";
import {
  ImageBackground,
  TouchableOpacity,
  View,
  Image,
  Text,
} from "react-native";
import { withNavigation } from "react-navigation";
import { globalStyleSheet as styles } from "../globalStyleSheet/globalStyleSheet.js";

import GnareIcon from "../Games/gameImages/GnareMain.png";
import Home_icon from "../images/Home_icon.png";
import Back_icon from "../images/Back_icon.png";
import Story1 from "./flalokImages/Story1.png";
import Story2 from "./flalokImages/Story2.png";
import Story3 from "./flalokImages/Story3.png";
import Story4 from "./flalokImages/Story4.png";
import Story5 from "./flalokImages/Story5.png";
import Story6 from "./flalokImages/Story6.png";
import Flalok_BG from "./flalokImages/Flalok_BG.jpg";
import MenuItem from "../MenuItem";

import NextIcon from "../images/Next_Icon.png";
import PrevIcon from "../images/Prev_Icon.png";

import RNBackgroundDownloader from "react-native-background-downloader";
import RNFS from "react-native-fs";
import base64 from "react-native-base64";
import utf8 from "utf8";

class FlalokStoryMenu extends Component {
  static navigationOptions = {
    header: null,
    cardStyle: { backgroundColor: "transperent" },
  };

  constructor(props) {
    super(props);
    this.state = {
      top1: "20%",
      top2: "20%",
      top3: "1000%",
      top4: "1000%",
      top5: "1000%",
      top6: "1000%",
      nextTop: "45%",
      prevTop: "1000%",
      get: 0,

      fileExist_flalok1_EN: false,
      fileExist_flalok2_EN: false,
      fileExist_flalok3_EN: false,
      fileExist_flalok4_EN: false,
      fileExist_flalok5_EN: false,
      fileExist_flalok6_EN: false,

      fileExist_flalok1_FL: false,
      fileExist_flalok2_FL: false,
      fileExist_flalok3_FL: false,
      fileExist_flalok4_FL: false,
      fileExist_flalok5_FL: false,
      fileExist_flalok6_FL: false,

      percentage_flalok1_EN: 0,
      percentage_flalok2_EN: 0,
      percentage_flalok3_EN: 0,
      percentage_flalok4_EN: 0,
      percentage_flalok5_EN: 0,
      percentage_flalok6_EN: 0,

      percentage_flalok1_FL: 0,
      percentage_flalok2_FL: 0,
      percentage_flalok3_FL: 0,
      percentage_flalok4_FL: 0,
      percentage_flalok5_FL: 0,
      percentage_flalok6_FL: 0,
    };
  }

  componentDidMount = async () => {
    console.log("-- APPLICATION STARTED --");

    if (
      (await RNFS.exists(
        RNBackgroundDownloader.directories.documents + "/Story1_EN.mp4"
      )) &&
      (await RNFS.exists(
        RNBackgroundDownloader.directories.documents + "/Story1_FL.mp4"
      ))
    ) {
      this.setState({
        fileExist_flalok1_EN: true,
        fileExist_flalok1_FL: true,
        percentage_flalok1_EN: "Download Completed",
        percentage_flalok1_FL: "Download Completed",
      });
    }

    if (
      (await RNFS.exists(
        RNBackgroundDownloader.directories.documents + "/Story2_EN.mp4"
      )) &&
      (await RNFS.exists(
        RNBackgroundDownloader.directories.documents + "/Story2_FL.mp4"
      ))
    ) {
      this.setState({
        fileExist_flalok2_EN: true,
        fileExist_flalok2_FL: true,
        percentage_flalok2_EN: "Download Completed",
        percentage_flalok2_FL: "Download Completed",
      });
    }

    if (
      (await RNFS.exists(
        RNBackgroundDownloader.directories.documents + "/Story3_EN.mp4"
      )) &&
      (await RNFS.exists(
        RNBackgroundDownloader.directories.documents + "/Story3_FL.mp4"
      ))
    ) {
      this.setState({
        fileExist_flalok3_EN: true,
        fileExist_flalok3_FL: true,
        percentage_flalok3_EN: "Download Completed",
        percentage_flalok3_FL: "Download Completed",
      });
    }

    if (
      (await RNFS.exists(
        RNBackgroundDownloader.directories.documents + "/Story4_EN.mp4"
      )) &&
      (await RNFS.exists(
        RNBackgroundDownloader.directories.documents + "/Story4_FL.mp4"
      ))
    ) {
      this.setState({
        fileExist_flalok4_EN: true,
        fileExist_flalok4_FL: true,
        percentage_flalok4_EN: "Download Completed",
        percentage_flalok4_FL: "Download Completed",
      });
    }

    if (
      (await RNFS.exists(
        RNBackgroundDownloader.directories.documents + "/Story5_EN.mp4"
      )) &&
      (await RNFS.exists(
        RNBackgroundDownloader.directories.documents + "/Story5_FL.mp4"
      ))
    ) {
      this.setState({
        fileExist_flalok5_EN: true,
        fileExist_flalok5_FL: true,
        percentage_flalok5_EN: "Download Completed",
        percentage_flalok5_FL: "Download Completed",
      });
    }

    if (
      (await RNFS.exists(
        RNBackgroundDownloader.directories.documents + "/Story6_EN.mp4"
      )) &&
      (await RNFS.exists(
        RNBackgroundDownloader.directories.documents + "/Story6_FL.mp4"
      ))
    ) {
      this.setState({
        fileExist_flalok6_EN: true,
        fileExist_flalok6_FL: true,
        percentage_flalok6_EN: "Download Completed",
        percentage_flalok6_FL: "Download Completed",
      });
    }

    console.log("flalok_1_EN: " + this.state.fileExist_flalok1_EN);
    console.log("flalok_2_EN: " + this.state.fileExist_flalok2_EN);
    console.log("flalok_3_EN: " + this.state.fileExist_flalok3_EN);
    console.log("flalok_4_EN: " + this.state.fileExist_flalok4_EN);
    console.log("flalok_5_EN: " + this.state.fileExist_flalok5_EN);
    console.log("flalok_6_EN: " + this.state.fileExist_flalok6_EN);

    console.log("flalok_1_FL: " + this.state.fileExist_flalok1_FL);
    console.log("flalok_2_FL: " + this.state.fileExist_flalok2_FL);
    console.log("flalok_3_FL: " + this.state.fileExist_flalok3_FL);
    console.log("flalok_4_FL: " + this.state.fileExist_flalok4_FL);
    console.log("flalok_5_FL: " + this.state.fileExist_flalok5_FL);
    console.log("flalok_6_FL: " + this.state.fileExist_flalok6_FL);
  };

  sourceDownload = (flalok) => {
    let CLIENT_ID = "m6d-UEtpXbFgB6%Ghm_y#^Lx<!m.bZkt";
    let CLIENT_SECRET = "U6aRgx*-7xzUGnhp$^DJ92WGJ=z8U%D!";
    let AUTH_TOKEN = base64.encode(
      utf8.encode(CLIENT_ID + ":" + CLIENT_SECRET)
    );

    switch (flalok) {
      case 1:
        let task_flalok1_EN = RNBackgroundDownloader.download({
          id: "flalok1_EN",
          url:
            "https://cdn.smartonecampus.com/blaan/flalokVideos/Story1_EN.mp4",
          destination: `${RNBackgroundDownloader.directories.documents}/Story1_EN.mp4`,
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
            console.log(`flalok1_EN Downloaded: ${percent * 100}%`);
            this.setState({ percentage_flalok1_EN: percent * 100 });
          })
          .done(() => {
            this.setState({
              fileExist_flalok1_EN: true,
              percentage_flalok1_EN: "Download Completed",
            });
            console.log("flalok1_EN Download is done!");
          })
          .error((error) => {
            // alert("PLEASE CONNECT TO THE INTERNET!");
            console.log("Download canceled due to error: ", error);
          });

        let task_flalok1_FL = RNBackgroundDownloader.download({
          id: "flalok1_FL",
          url:
            "https://cdn.smartonecampus.com/blaan/flalokVideos/Story1_FL.mp4",
          destination: `${RNBackgroundDownloader.directories.documents}/Story1_FL.mp4`,
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
            console.log(`flalok1_FL Downloaded: ${percent * 100}%`);
            this.setState({ percentage_flalok1_FL: percent * 100 });
          })
          .done(() => {
            this.setState({
              fileExist_flalok1_FL: true,
              percentage_flalok1_FL: "Download Completed",
            });
            console.log("flalok1_FL Download is done!");
          })
          .error((error) => {
            // alert("PLEASE CONNECT TO THE INTERNET!");
            console.log("Download canceled due to error: ", error);
          });
        break;

      case 2:
        let task_flalok2_EN = RNBackgroundDownloader.download({
          id: "flalok2_EN",
          url:
            "https://cdn.smartonecampus.com/blaan/flalokVideos/Story2_EN.mp4",
          destination: `${RNBackgroundDownloader.directories.documents}/Story2_EN.mp4`,
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
            console.log(`flalok2_EN Downloaded: ${percent * 100}%`);
            this.setState({ percentage_flalok2_EN: percent * 100 });
          })
          .done(() => {
            this.setState({
              fileExist_flalok2_EN: true,
              percentage_flalok2_EN: "Download Completed",
            });
            console.log("flalok2_EN Download is done!");
          })
          .error((error) => {
            // alert("PLEASE CONNECT TO THE INTERNET!");
            console.log("Download canceled due to error: ", error);
          });

        let task_flalok2_FL = RNBackgroundDownloader.download({
          id: "flalok2_FL",
          url:
            "https://cdn.smartonecampus.com/blaan/flalokVideos/Story2_FL.mp4",
          destination: `${RNBackgroundDownloader.directories.documents}/Story2_FL.mp4`,
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
            console.log(`flalok2_FL Downloaded: ${percent * 100}%`);
            this.setState({ percentage_flalok2_FL: percent * 100 });
          })
          .done(() => {
            this.setState({
              fileExist_flalok2_FL: true,
              percentage_flalok2_FL: "Download Completed",
            });
            console.log("flalok2_FL Download is done!");
          })
          .error((error) => {
            // alert("PLEASE CONNECT TO THE INTERNET!");
            console.log("Download canceled due to error: ", error);
          });
        break;

      case 3:
        let task_flalok3_EN = RNBackgroundDownloader.download({
          id: "flalok3_EN",
          url:
            "https://cdn.smartonecampus.com/blaan/flalokVideos/Story3_EN.mp4",
          destination: `${RNBackgroundDownloader.directories.documents}/Story3_EN.mp4`,
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
            console.log(`flalok3_EN Downloaded: ${percent * 100}%`);
            this.setState({ percentage_flalok3_EN: percent * 100 });
          })
          .done(() => {
            this.setState({
              fileExist_flalok3_EN: true,
              percentage_flalok3_EN: "Download Completed",
            });
            console.log("flalok3_EN Download is done!");
          })
          .error((error) => {
            // alert("PLEASE CONNECT TO THE INTERNET!");
            console.log("Download canceled due to error: ", error);
          });

        let task_flalok3_FL = RNBackgroundDownloader.download({
          id: "flalok3_FL",
          url:
            "https://cdn.smartonecampus.com/blaan/flalokVideos/Story3_FL.mp4",
          destination: `${RNBackgroundDownloader.directories.documents}/Story3_FL.mp4`,
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
            console.log(`flalok3_FL Downloaded: ${percent * 100}%`);
            this.setState({ percentage_flalok3_FL: percent * 100 });
          })
          .done(() => {
            this.setState({
              fileExist_flalok3_FL: true,
              percentage_flalok3_FL: "Download Completed",
            });
            console.log("flalok3_FL Download is done!");
          })
          .error((error) => {
            // alert("PLEASE CONNECT TO THE INTERNET!");
            console.log("Download canceled due to error: ", error);
          });
        break;

      case 4:
        let task_flalok4_EN = RNBackgroundDownloader.download({
          id: "flalok4_EN",
          url:
            "https://cdn.smartonecampus.com/blaan/flalokVideos/Story4_EN.mp4",
          destination: `${RNBackgroundDownloader.directories.documents}/Story4_EN.mp4`,
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
            console.log(`flalok4_EN Downloaded: ${percent * 100}%`);
            this.setState({ percentage_flalok4_EN: percent * 100 });
          })
          .done(() => {
            this.setState({
              fileExist_flalok4_EN: true,
              percentage_flalok4_EN: "Download Completed",
            });
            console.log("flalok4_EN Download is done!");
          })
          .error((error) => {
            // alert("PLEASE CONNECT TO THE INTERNET!");
            console.log("Download canceled due to error: ", error);
          });

        let task_flalok4_FL = RNBackgroundDownloader.download({
          id: "flalok4_FL",
          url:
            "https://cdn.smartonecampus.com/blaan/flalokVideos/Story4_FL.mp4",
          destination: `${RNBackgroundDownloader.directories.documents}/Story4_FL.mp4`,
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
            console.log(`flalok4_FL Downloaded: ${percent * 100}%`);
            this.setState({ percentage_flalok4_FL: percent * 100 });
          })
          .done(() => {
            this.setState({
              fileExist_flalok4_FL: true,
              percentage_flalok4_FL: "Download Completed",
            });
            console.log("flalok4_FL Download is done!");
          })
          .error((error) => {
            // alert("PLEASE CONNECT TO THE INTERNET!");
            console.log("Download canceled due to error: ", error);
          });
        break;

      case 5:
        let task_flalok5_EN = RNBackgroundDownloader.download({
          id: "flalok5_EN",
          url:
            "https://cdn.smartonecampus.com/blaan/flalokVideos/Story5_EN.mp4",
          destination: `${RNBackgroundDownloader.directories.documents}/Story5_EN.mp4`,
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
            console.log(`flalok5_EN Downloaded: ${percent * 100}%`);
            this.setState({ percentage_flalok5_EN: percent * 100 });
          })
          .done(() => {
            this.setState({
              fileExist_flalok5_EN: true,
              percentage_flalok5_EN: "Download Completed",
            });
            console.log("flalok5_EN Download is done!");
          })
          .error((error) => {
            // alert("PLEASE CONNECT TO THE INTERNET!");
            console.log("Download canceled due to error: ", error);
          });

        let task_flalok5_FL = RNBackgroundDownloader.download({
          id: "flalok5_FL",
          url:
            "https://cdn.smartonecampus.com/blaan/flalokVideos/Story5_FL.mp4",
          destination: `${RNBackgroundDownloader.directories.documents}/Story5_FL.mp4`,
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
            console.log(`flalok5_FL Downloaded: ${percent * 100}%`);
            this.setState({ percentage_flalok5_FL: percent * 100 });
          })
          .done(() => {
            this.setState({
              fileExist_flalok5_FL: true,
              percentage_flalok5_FL: "Download Completed",
            });
            console.log("flalok5_FL Download is done!");
          })
          .error((error) => {
            // alert("PLEASE CONNECT TO THE INTERNET!");
            console.log("Download canceled due to error: ", error);
          });
        break;

      case 6:
        let task_flalok6_EN = RNBackgroundDownloader.download({
          id: "flalok6_EN",
          url:
            "https://cdn.smartonecampus.com/blaan/flalokVideos/Story6_EN.mp4",
          destination: `${RNBackgroundDownloader.directories.documents}/Story6_EN.mp4`,
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
            console.log(`flalok6_EN Downloaded: ${percent * 100}%`);
            this.setState({ percentage_flalok6_EN: percent * 100 });
          })
          .done(() => {
            this.setState({
              fileExist_flalok6_EN: true,
              percentage_flalok6_EN: "Download Completed",
            });
            console.log("flalok6_EN Download is done!");
          })
          .error((error) => {
            // alert("PLEASE CONNECT TO THE INTERNET!");
            console.log("Download canceled due to error: ", error);
          });

        let task_flalok6_FL = RNBackgroundDownloader.download({
          id: "flalok6_FL",
          url:
            "https://cdn.smartonecampus.com/blaan/flalokVideos/Story6_FL.mp4",
          destination: `${RNBackgroundDownloader.directories.documents}/Story6_FL.mp4`,
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
            console.log(`flalok6_FL Downloaded: ${percent * 100}%`);
            this.setState({ percentage_flalok6_FL: percent * 100 });
          })
          .done(() => {
            this.setState({
              fileExist_flalok6_FL: true,
              percentage_flalok6_FL: "Download Completed",
            });
            console.log("flalok6_FL Download is done!");
          })
          .error((error) => {
            // alert("PLEASE CONNECT TO THE INTERNET!");
            console.log("Download canceled due to error: ", error);
          });
        break;

      default:
        console.log("Error");
        break;
    }
  };

  playPress = async (flalok) => {
    switch (flalok) {
      case 1:
        if (
          (await RNFS.exists(
            RNBackgroundDownloader.directories.documents + "/Story1_EN.mp4"
          )) &&
          (await RNFS.exists(
            RNBackgroundDownloader.directories.documents + "/Story1_FL.mp4"
          ))
        ) {
          this.props.navigation.navigate("story1");
        } else {
          this.sourceDownload(1);
        }
        break;

      case 2:
        if (
          (await RNFS.exists(
            RNBackgroundDownloader.directories.documents + "/Story2_EN.mp4"
          )) &&
          (await RNFS.exists(
            RNBackgroundDownloader.directories.documents + "/Story2_FL.mp4"
          ))
        ) {
          this.props.navigation.navigate("story2");
        } else {
          this.sourceDownload(2);
        }
        break;

      case 3:
        if (
          (await RNFS.exists(
            RNBackgroundDownloader.directories.documents + "/Story3_EN.mp4"
          )) &&
          (await RNFS.exists(
            RNBackgroundDownloader.directories.documents + "/Story3_FL.mp4"
          ))
        ) {
          this.props.navigation.navigate("story3");
        } else {
          this.sourceDownload(3);
        }
        break;

      case 4:
        if (
          (await RNFS.exists(
            RNBackgroundDownloader.directories.documents + "/Story4_EN.mp4"
          )) &&
          (await RNFS.exists(
            RNBackgroundDownloader.directories.documents + "/Story4_FL.mp4"
          ))
        ) {
          this.props.navigation.navigate("story4");
        } else {
          this.sourceDownload(4);
        }
        break;

      case 5:
        if (
          (await RNFS.exists(
            RNBackgroundDownloader.directories.documents + "/Story5_EN.mp4"
          )) &&
          (await RNFS.exists(
            RNBackgroundDownloader.directories.documents + "/Story5_FL.mp4"
          ))
        ) {
          this.props.navigation.navigate("story5");
        } else {
          this.sourceDownload(5);
        }
        break;

      case 6:
        if (
          (await RNFS.exists(
            RNBackgroundDownloader.directories.documents + "/Story6_EN.mp4"
          )) &&
          (await RNFS.exists(
            RNBackgroundDownloader.directories.documents + "/Story6_FL.mp4"
          ))
        ) {
          this.props.navigation.navigate("story6");
        } else {
          this.sourceDownload(6);
        }
        break;

      default:
        console.log("Error");
        break;
    }
  };

  gotoHome = () => {
    this.props.navigation.navigate("home");
  };

  gotoMainMenu = () => {
    this.props.navigation.navigate("mainMenu");
  };

  goBack = () => {
    this.props.navigation.navigate("mainMenu");
  };

  gotoNextPage = (index) => {
    if (index == 1) {
      this.setState({
        nextTop: "45%",
        prevTop: "45%",
        top1: "1000%",
        top2: "1000%",
        top3: "20%",
        top4: "20%",
      });
    }
    if (index == 2) {
      this.setState({
        nextTop: "1000%",
        prevTop: "45%",
        top3: "1000%",
        top4: "1000%",
        top5: "20%",
        top6: "20%",
      });
    }
  };

  gotoPrevPage = (index) => {
    if (index == 1) {
      this.setState({
        prevTop: "45%",
        nextTop: "45%",
        top3: "20%",
        top4: "20%",
        top5: "1000%",
        top6: "1000%",
      });
    }
    if (index == 0) {
      this.setState({
        prevTop: "1000%",
        nextTop: "45%",
        top1: "20%",
        top2: "20%",
        top3: "1000%",
        top4: "1000%",
      });
    }
  };

  render() {
    return (
      <ImageBackground
        style={styles.image}
        source={require("../images/Flalok_BG.jpg")}
      >
        <View style={styles.backContainer}>
          <TouchableOpacity onPress={this.gotoMainMenu}>
            <Image source={Back_icon} style={styles.back}></Image>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.menuContainer}>
                        <MenuItem itemImage={Story1} goto={this.gotoStory1} />
                        <MenuItem itemImage={Story2} goto={this.gotoStory2} />
                        <MenuItem itemImage={Story3} goto={this.gotoStory3} />
                        <MenuItem itemImage={Story4} goto={this.gotoStory4} />
                        <MenuItem itemImage={Story5} goto={this.gotoStory5} />
                        <MenuItem itemImage={Story6} goto={this.gotoStory6} />
                    </View> */}
        <View
          style={{
            position: "absolute",
            width: "80%",
            height: "70%",
            top: "10%",
          }}
        >
          <View
            style={{
              position: "absolute",
              top: this.state.top1,
              left: "2%",
              width: "45%",
              height: "90%",
            }}
          >
            <TouchableOpacity onPress={() => this.playPress(1)}>
              <Image style={styles.imageSizeStoryMenu} source={Story1} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              position: "absolute",
              top: this.state.top2,
              left: "50%",
              width: "45%",
              height: "90%",
            }}
          >
            <TouchableOpacity onPress={() => this.playPress(2)}>
              <Image style={styles.imageSizeStoryMenu} source={Story2} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              position: "absolute",
              top: this.state.top3,
              left: "2%",
              width: "45%",
              height: "90%",
            }}
          >
            <TouchableOpacity onPress={() => this.playPress(3)}>
              <Image style={styles.imageSizeStoryMenu} source={Story3} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              position: "absolute",
              top: this.state.top4,
              left: "50%",
              width: "45%",
              height: "90%",
            }}
          >
            <TouchableOpacity onPress={() => this.playPress(4)}>
              <Image style={styles.imageSizeStoryMenu} source={Story4} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              position: "absolute",
              top: this.state.top5,
              left: "2%",
              width: "45%",
              height: "90%",
            }}
          >
            <TouchableOpacity onPress={() => this.playPress(5)}>
              <Image style={styles.imageSizeStoryMenu} source={Story5} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              position: "absolute",
              top: this.state.top6,
              left: "50%",
              width: "45%",
              height: "90%",
            }}
          >
            <TouchableOpacity onPress={() => this.playPress(6)}>
              <Image style={styles.imageSizeStoryMenu} source={Story6} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.homeContainer}>
          <TouchableOpacity onPress={this.gotoHome}>
            <Image source={GnareIcon} style={styles.home}></Image>
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

export default withNavigation(FlalokStoryMenu);
