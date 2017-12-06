
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';


export default class App extends Component<{}> {
    render() {
        return (
            <View>
                <Text style={styles.title}>
                    MINI网易云
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
    }
});
