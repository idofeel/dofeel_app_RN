import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SectionList,
} from 'react-native';
import API from '../../api/api';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chn: null,
            enu: null,
        };
    }
    render() {
        const { chn, enu } = this.state;
        return (
            <View>
                <TouchableOpacity onPress={this.go.bind(this)}>
                    <Text style={styles.welcome}>这是别的页</Text>
                </TouchableOpacity>
                <Text style={styles.welcome}>{chn}</Text>
                <Text style={styles.welcome}>{enu}</Text>
                <SectionList
                    renderItem={({ item, index, section }) => 
                        <Text key={index}>{item.a}</Text>
                    }
                    renderSectionHeader={({ section: { title } }) => 
                        <Text style={{ fontWeight: 'bold' }}>{title}</Text>
                    }
                    sections={[{ data: [{ a: 123 }] }]}
                    keyExtractor={(item, index) => item + index}
                />
            </View>
        );
    }
    componentDidMount() {
        let that = this;
        API({
            url: 'http://da.isayb.com/ishome/daily.php',
            success: function(d) {
                that.setState(d.data);
            },
        });
    }
    async go() {
        this.props.navigation.goBack();
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
