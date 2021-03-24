import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity , ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';


class menuItem extends Component {
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
        width: '26%',
        height: '39%',
        padding: 2,
        resizeMode: 'contain',
    },
    image: {
        width: '90%',
        height: '90%',
        resizeMode: 'contain',
    }

})

export default withNavigation(menuItem);