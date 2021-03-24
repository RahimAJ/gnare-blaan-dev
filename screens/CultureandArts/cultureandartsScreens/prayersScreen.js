import React, { Component } from "react";
import { ImageBackground, TouchableOpacity, View, Image } from "react-native";
import { withNavigation } from "react-navigation";
import { globalStyleSheet as styles } from "../../globalStyleSheet/globalStyleSheet.js";

import Back_icon from "../../images/Back_icon.png";
import Home_icon from "../../images/Home_icon.png";
import prayer1_icon from "../cultureandartsImages/prayers_1DasalSaPaggising.png";
import prayer2_icon from "../cultureandartsImages/prayers_2DasalBagoKumain.png";
import prayer3_icon from "../cultureandartsImages/prayers_3DasalBagoMatulog.png";
import cultureandarts_BG from "../../images/Flalok_BG.jpg";

import RNBackgroundDownloader from "react-native-background-downloader";
import RNFS from "react-native-fs";
import base64 from "react-native-base64";
import utf8 from "utf8";

class prayersScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      fileExist_prayers1: false,
      fileExist_prayers2: false,
      fileExist_prayers3: false,

      percentage_prayers1: 0,
      percentage_prayers2: 0,
      percentage_prayers3: 0,
    };
  }

  componentDidMount = async () => {
    console.log("-- APPLICATION STARTED --");
    if (
      await RNFS.exists(
        RNBackgroundDownloader.directories.documents + "/morningPrayer.mp4"
      )
    ) {
      this.setState({
        fileExist_prayers1: true,
        percentage_prayers1: "Download Completed",
      });
    }

    if (
      await RNFS.exists(
        RNBackgroundDownloader.directories.documents + "/beforeMealPrayer.mp4"
      )
    ) {
      this.setState({
        fileExist_prayers2: true,
        percentage_prayers2: "Download Completed",
      });
    }

    if (
      await RNFS.exists(
        RNBackgroundDownloader.directories.documents + "/eveningPrayer.mp4"
      )
    ) {
      this.setState({
        fileExist_prayers3: true,
        percentage_prayers3: "Download Completed",
      });
    }

    console.log("morningPrayer: " + this.state.fileExist_prayers1);
    console.log("beforeMealPrayer: " + this.state.fileExist_prayers2);
    console.log("eveningPrayer: " + this.state.fileExist_prayers3);
  };

  sourceDownload = (prayer) => {
    let CLIENT_ID = "m6d-UEtpXbFgB6%Ghm_y#^Lx<!m.bZkt";
    let CLIENT_SECRET = "U6aRgx*-7xzUGnhp$^DJ92WGJ=z8U%D!";
    let AUTH_TOKEN = base64.encode(
      utf8.encode(CLIENT_ID + ":" + CLIENT_SECRET)
    );

    switch (prayer) {
      case 1:
        let task_prayer1 = RNBackgroundDownloader.download({
          id: "prayer_1",
          url:
            "https://cdn.smartonecampus.com/blaan/cultureandartsVideos/Prayers/morningPrayer.mp4",
          destination: `${RNBackgroundDownloader.directories.documents}/morningPrayer.mp4`,
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
            console.log(`prayers_1 Downloaded: ${percent * 100}%`);
            this.setState({ percentage_prayers1: percent * 100 });
          })
          .done(() => {
            this.setState({
              fileExist_prayers1: true,
              percentage_prayers1: "Download Completed",
            });
            console.log("prayers_1 Download is done!");
          })
          .error((error) => {
            alert("PLEASE CONNECT TO THE INTERNET!");
            console.log("Download canceled due to error: ", error);
          });
        break;
      case 2:
        let task_prayer2 = RNBackgroundDownloader.download({
          id: "prayer_2",
          url:
            "https://cdn.smartonecampus.com/blaan/cultureandartsVideos/Prayers/beforeMealPrayer.mp4",
          destination: `${RNBackgroundDownloader.directories.documents}/beforeMealPrayer.mp4`,
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
            console.log(`prayers_2 Downloaded: ${percent * 100}%`);
            this.setState({ percentage_prayers2: percent * 100 });
          })
          .done(() => {
            this.setState({
              fileExist_prayers2: true,
              percentage_prayers2: "Download Completed",
            });
            console.log("prayers_2 Download is done!");
          })
          .error((error) => {
            alert("PLEASE CONNECT TO THE INTERNET!");
            console.log("Download canceled due to error: ", error);
          });
        break;
      case 3:
        let task_prayer3 = RNBackgroundDownloader.download({
          id: "prayer_3",
          url:
            "https://cdn.smartonecampus.com/blaan/cultureandartsVideos/Prayers/eveningPrayer.mp4",
          destination: `${RNBackgroundDownloader.directories.documents}/eveningPrayer.mp4`,
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
            console.log(`prayers_3 Downloaded: ${percent * 100}%`);
            this.setState({ percentage_prayers3: percent * 100 });
          })
          .done(() => {
            this.setState({
              fileExist_prayers3: true,
              percentage_prayers3: "Download Completed",
            });
            console.log("prayers_3 Download is done!");
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

  playPress = async (prayer) => {
    switch (prayer) {
      case 1:
        if (
          await RNFS.exists(
            RNBackgroundDownloader.directories.documents + "/morningPrayer.mp4"
          )
        ) {
          this.props.navigation.navigate("prayer1Screen");
        } else {
          this.sourceDownload(1);
        }
        break;
      case 2:
        if (
          await RNFS.exists(
            RNBackgroundDownloader.directories.documents +
              "/beforeMealPrayer.mp4"
          )
        ) {
          this.props.navigation.navigate("prayer2Screen");
        } else {
          this.sourceDownload(2);
        }
        break;
      case 3:
        if (
          await RNFS.exists(
            RNBackgroundDownloader.directories.documents +
              "/eveningPrayer.mp4"
          )
        ) {
          this.props.navigation.navigate("prayer3Screen");
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

  render() {
    return (
      <ImageBackground
        style={styles.image}
        source={cultureandarts_BG}
        blurRadius={1}
      >
        <View style={styles.CultureandArtsContainer}>
          <View style={styles.row}>
            <View style={[styles.itemSize, { height: "70%", width: "30%" }]}>
              <TouchableOpacity onPress={() => this.playPress(1)}>
                <Image
                  style={styles.imageSizeStoryMenu}
                  source={prayer1_icon}
                />
              </TouchableOpacity>
            </View>

            <View
              style={[
                styles.itemSize,
                {
                  height: "70%",
                  width: "30%",
                  marginRight: "5%",
                  marginLeft: "5%",
                },
              ]}
            >
              <TouchableOpacity onPress={() => this.playPress(2)}>
                <Image
                  style={styles.imageSizeStoryMenu}
                  source={prayer2_icon}
                />
              </TouchableOpacity>
            </View>

            <View style={[styles.itemSize, { height: "70%", width: "30%" }]}>
              <TouchableOpacity onPress={() => this.playPress(3)}>
                <Image
                  style={styles.imageSizeStoryMenu}
                  source={prayer3_icon}
                />
              </TouchableOpacity>
            </View>
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
      </ImageBackground>
    );
  }
}

export default withNavigation(prayersScreen);
