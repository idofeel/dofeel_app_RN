import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import API from '../api/api';
import { deviceWidth } from '../utils/ratio';

// API({
//     url:'http://da.isayb.com/ishome/daily.php',
//     success:function(d){
//         console.log(d);
//     }
// });
export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.bar}></View>
                <Text>12331231</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bar: {
        height: 30,
        backgroundColor: '#fff',
    },
    container: {
        width: deviceWidth,
        marginTop: 30,
        alignItems: 'center',
    },
});
