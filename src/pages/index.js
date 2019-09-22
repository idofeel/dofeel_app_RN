import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.go.bind(this)}>
                <Text style={styles.welcome}>这是首页</Text>
            </TouchableOpacity>
        );
    }
    go() {
        this.props.navigation.navigate('Profiles');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 40,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
