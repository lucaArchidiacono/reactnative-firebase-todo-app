import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

export default class Settings extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>
                    Settings
                </Text>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});