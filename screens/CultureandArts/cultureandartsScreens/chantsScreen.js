import React, { Component } from "react";
import { ImageBackground, TouchableOpacity, View, Image } from "react-native";

import { withNavigation } from "react-navigation";
import { globalStyleSheet as styles } from "../../globalStyleSheet/globalStyleSheet.js";

import Back_icon from "../../images/Back_icon.png";
import Home_icon from "../../images/Home_icon.png";
import Chant1_icon from "../cultureandartsImages/chant_1DasalBagoMatulog.png";
import Chant2_icon from "../cultureandartsImages/chant_2DasalNgPaglingap.png";
import Chant3_icon from "../cultureandartsImages/chant_3DasalNgPasasalamat.png";
import cultureandarts_BG from "../../images/Flalok_BG.jpg";

import RNBackgroundDownloader from "react-native-background-downloader";
import RNFS from "react-native-fs";
import base64 from "react-native-base64";
import utf8 from "utf8";

class chantsScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      nextTop: "45%",
      prevTop: "1000%",
      top3: "1000%",

      fileExist_chants1: false,
      fileExist_chants2: false,
      fileExist_chants3: false,

      percentage_chants1: 0,
      percentage_chants2: 0,
      percentage_chants3: 0,
    };
  }

  componentDidMount = async () => {
    console.log("-- APPLICATION STARTED --");
    if (
      await RNFS.exists(
        RNBackgroundDownloader.directories.documents + "/dasalBagoMatulog.mp4"
      )
    ) {
      this.setState({
        fileExist_chants1: true,
        percentage_chants1: "Download Completed",
      });
    }

    if (
      await RNFS.exists(
        RNBackgroundDownloader.directories.documents + "/dasalNgPaglingap.mp4"
      )
    ) {
      this.setState({
        fileExist_chants2: true,
        percentage_chants2: "Download Completed",
      });
    }

    if (
      await RNFS.exists(
        RNBackgroundDownloader.directories.documents + "/dasalNgPasasalamat.mp4"
      )
    ) {
      this.setState({
        fileExist_chants3: true,
        percentage_chants3: "Download Completed",
      });
    }

    console.log("dasalBagoMatulog: " + this.state.fileExist_chants1);
    console.log("dasalNgPaglingap: " + this.state.fileExist_chants2);
    console.log("dasalNgPasasalamat: " + this.state.fileExist_chants3);
  };

  sourceDownload = (chant) => {
    let CLIENT_ID = "m6d-UEtpXbFgB6%Ghm_y#^Lx<!m.bZkt";
    let CLIENT_SECRET = "U6aRgx*-7xzUGnhp$^DJ92WGJ=z8U%D!";
    let AUTH_TOKEN = base64.encode(
      utf8.encode(CLIENT_ID + ":" + CLIENT_SECRET)
    );

    switch (chant) {
      case 1:
        let task_chant1 = RNBackgroundDownloader.download({
          id: "chant_1",
          url:
            "https://cdn.smartonecampus.com/blaan/cultureandartsVideos/Chants/dasalBagoMatulog.mp4",
          destination: `${RNBackgroundDownloader.directories.documents}/dasalBagoMatulog.mp4`,
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
            console.log(`chants_1 Downloaded: ${percent * 100}%`);
            this.setState({ percentage_chants1: percent * 100 });
          })
          .done(() => {
            this.setState({
              fileExist_chants1: true,
              percentage_chants1: "Download Completed",
            });
            console.log("chants_1 Download is done!");
          })
          .error((error) => {
            alert("PLEASE CONNECT TO THE INTERNET!");
            console.log("Download canceled due to error: ", error);
          });
        break;
      case 2:
        let task_chant2 = RNBackgroundDownloader.download({
          id: "chant_2",
          url:
            "https://cdn.smartonecampus.com/blaan/cultureandartsVideos/Chants/dasalNgPaglingap.mp4",
          destination: `${RNBackgroundDownloader.directories.documents}/dasalNgPaglingap.mp4`,
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
            console.log(`chants_2 Downloaded: ${percent * 100}%`);
            this.setState({ percentage_chants2: percent * 100 });
          })
          .done(() => {
            this.setState({
              fileExist_chants2: true,
              percentage_chants2: "Download Completed",
            });
            console.log("chants_2 Download is done!");
          })
          .error((error) => {
            alert("PLEASE CONNECT TO THE INTERNET!");
            console.log("Download canceled due to error: ", error);
          });
        break;
      case 3:
        let task_chant3 = RNBackgroundDownloader.download({
          id: "chant_3",
          url:
            "https://cdn.smartonecampus.com/blaan/cultureandartsVideos/Chants/dasalNgPasasalamat.mp4",
          destination: `${RNBackgroundDownloader.directories.documents}/dasalNgPasasalamat.mp4`,
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
            console.log(`chants_3 Downloaded: ${percent * 100}%`);
            this.setState({ percentage_chants3: percent * 100 });
          })
          .done(() => {
            this.setState({
              fileExist_chants3: true,
              percentage_chants3: "Download Completed",
            });
            console.log("chants_3 Download is done!");
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

  playPress = async (chant) => {
    switch (chant) {
      case 1:
        if (
          await RNFS.exists(
            RNBackgroundDownloader.directories.documents +
              "/dasalBagoMatulog.mp4"
          )
        ) {
          this.props.navigation.navigate("chant1Screen");
        } else {
          this.sourceDownload(1);
        }
        break;
      case 2:
        if (
          await RNFS.exists(
            RNBackgroundDownloader.directories.documents +
              "/dasalNgPaglingap.mp4"
          )
        ) {
          this.props.navigation.navigate("chant2Screen");
        } else {
          this.sourceDownload(2);
        }
        break;
      case 3:
        if (
          await RNFS.exists(
            RNBackgroundDownloader.directories.documents +
              "/dasalNgPasasalamat.mp4"
          )
        ) {
          this.props.navigation.navigate("chant3Screen");
        } else {
          this.sourceDownload(3);
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
    this.props.navigation.navigate("cultureandarts");
  };

  gotoNextPage = () => {
    this.setState({
      nextTop: "1000%",
      prevTop: "45%",
      top1: "1000%",
      top2: "1000%",
      top3: "27%",
    });
  };

  gotoPrevPage = () => {
    this.setState({
      nextTop: "45%",
      prevTop: "1000%",
      top1: "27%",
      top2: "27%",
      top3: "1000%",
    });
  };

  render() {
    return (
      <ImageBackground
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          resizeMode: "contain",
          flexDirection: "row",
        }}
        source={cultureandarts_BG}
        blurRadius={1}
      >
        <View
          style={{
            position: "absolute",
            top: "15%",
            left: "15%",
            width: "33%",
            height: "40%",
          }}
        >
          <TouchableOpacity onPress={() => this.playPress(1)}>
            <Image style={styles.imageSizeStoryMenu} source={Chant1_icon} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            position: "absolute",
            top: "15%",
            left: "53%",
            width: "33%",
            height: "40%",
          }}
        >
          <TouchableOpacity onPress={() => this.playPress(2)}>
            <Image style={styles.imageSizeStoryMenu} source={Chant2_icon} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            position: "absolute",
            width: "35%",
            height: "40%",
            top: "55%",
          }}
        >
          <TouchableOpacity onPress={() => this.playPress(3)}>
            <Image style={styles.imageSizeStoryMenu} source={Chant3_icon} />
          </TouchableOpacity>
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
      </ImageBackground>
    );
  }
}

export default withNavigation(chantsScreen);
