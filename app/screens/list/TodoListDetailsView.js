import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default class TodoListDetailsView extends React.Component {
    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('id', 'NO-ID');

        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    EditBook #{JSON.stringify(itemId)}
                </Text>
                <Button
                    title="Back To books"
                    onPress={() => this.props.navigation.navigate('TodoLists')}
                />
            </View>
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
