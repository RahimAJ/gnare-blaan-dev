import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity , ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';

class MenuItem extends Component {
    static navigationOptions = {
        header: null,
    }
    render() {
        return (
            <View style={styles.menuItem}>
                <TouchableOpacity  onPress={this.props.goto}>
                    <Image
                        source={this.props.itemImage}
                        style={styles.image}
                    />
                </TouchableOpacity >
            </View>
        )
    }
}

const styles = StyleSheet.create({
    menuItem: {
        width: '15%',
        height: '40%',
        padding: 2,
    },
    image: {
        width: '85%',
        height: '85%',
        resizeMode: 'contain',
    }

});

export default withNavigation(MenuItem);