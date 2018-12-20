import React from 'react';
import {FlatList, StatusBar, StyleSheet, View} from 'react-native';
import TodoListView from './TodoListView';
import * as firebase from "react-native-firebase";

export default class TodoLists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: "",
            todoLists: []
        };
    }

    componentDidMount(): void {
        firebase.database().ref('users/0').on('value', data => {
            this.setState({
                userID: data.val().userID,
                todoLists: data.val().todoLists
            })
        });
    }

    _renderItem = ({item}) => (
        <TodoListView
            id={item.id}
            title={item.title}
            fromDate={item.fromDate}
            tillDate={item.tillDate}
            thumbnail={item.thumbnail}
            checkMark={item.checkMark}
            todos={item.todos}
            navigation={this.props.navigation}
        />
    );

    _keyExtractor = (item, index) => item.id.toString();

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <FlatList
                    data={this.state.todoLists}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});