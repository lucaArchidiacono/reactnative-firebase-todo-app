import React from 'react';
import {FlatList, StatusBar, StyleSheet, View} from 'react-native';
import TodoListDetailsView from "./TodoListDetailsView";
import Icon from "react-native-vector-icons/AntDesign"

export default class TodoListDetails extends React.Component {
    constructor(props) {
        super(props);
        const { navigation } = this.props;
        this.state = {
            todoListID: navigation.getParam('id', 'NO-ID'),
            todos: navigation.getParam('todos', [])
        };
    }

    _renderItem = ({item}) => (
        <TodoListDetailsView
            title={item.title}
            checkMark={item.checkMark}
            description={item.description}
            navigation={this.props.navigation}
        />
    );

    _keyExtractor = (item, index) => index.toString();

    render() {
        return (ViewContainer(this));
    }
}

const ViewContainer = (self) => (
    <>
    <View style={styles.container}>
        <StatusBar
            barStyle="light-content"
        />
        <FlatList
            data={self.state.todos}
            keyExtractor={self._keyExtractor}
            renderItem={self._renderItem}
        />
    </View>
        <AddTodoButton/>
    </>
);

const AddTodoButton = () =>(
    <View style={styles.createButton}>
        <Icon name="plus" size={30} color="white"/>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    createButton: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:68,
        position: 'absolute',
        bottom: 10,
        height:68,
        backgroundColor:'#4ea2fc',
        borderRadius:100,
    }
});